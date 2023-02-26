
import { MongoClient } from "mongodb";


export async function getUsers() {
    const db = client.db();
  const users = await db.collection("users").distinct("email");
  return users;
}

export default async function handler(req, res) {
  const { method, body } = req;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
    console.log("Connected to MongoDB");
    console.log(body)
  switch (method) {
    case "POST":
        
      const result = await db.collection("users").insertOne(body);
      res.status(201).json({ message: "User created successfully" });
      break;
    case "GET":
        const users = await db
    .collection("users")
    .aggregate([
      {
        $group: {
          _id: "$email",
          username: { $first: "$username" },
          address: { $first: "$address" }
        }
      },
      { $project: { _id: 0, email: "$_id", username: 1, address: 1 } }
    ])
    .toArray();
  res.status(200).json(users);
  break;


    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  client.close();
}