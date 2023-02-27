import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method, body,query } = req;
  
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const groups = db.collection("groups");
  
  switch (method) {
    case "POST":
      const existingGroup = await groups.findOne({ name: body.name.toString() });

      if (existingGroup) {
        // Si el grupo ya existe, devolver un error 409 (conflicto)
        return res.status(409).json({ message: "Group already exists" });
      }
      
      // Si el grupo no existe, insertar un nuevo documento
      const a = await groups.insertOne(body);
      
      // Devolver una respuesta adecuada
      res.status(201).json({ message: "Group created successfully" });
      break;
    case "GET": 
      // const allGroups = await groups.find().toArray();

      const groups = await db.collection('groups').find({ dueño:query.dueño }).toArray();
  
      res.status(200).json(groups);
      break;
      case "PATCH":
  const groupName = query.name;
  const group = await groups.findOne({ name: groupName });
  if (!group) {
    return res.status(404).json({ message: "Group not found" });
  }

  const newMembers = body.members;
  const existingMembers = group.members;

  const updatedMembers = [...existingMembers, ...newMembers];
  const result = await groups.updateOne(
    { name: groupName },
    { $set: { members: updatedMembers } }
  );

  res.status(200).json({ message: "Members updated successfully" });
  break;

    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  client.close();
}
