import { MongoClient } from "mongodb";
import { toast, Toaster } from "react-hot-toast";


export default async function handler(req, res) {
  const { method, body, query } = req;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const deudas = db.collection("deudas");
  

  switch (method) {
    //caso para crear una deuda
    case "POST":
      deudas.insertMany(body);
      res.status(201).json({ message: "Deuda created successfully" });
      break;
    //caso para obtener las deudas de un usuario
    case "GET":
      console.log("query desde api deuda: ", query.to);
      const deu = await deudas.find({ to: query.to }).toArray();
      res.status(200).json(deu);
      break;
      //caso para cambiar si se hace el pago o no
      case "PUT":
        const { ObjectId } = require('mongodb');
                const ides = Object.keys(body)[0]; // Obtener la cadena del id
    console.log("id desde api deuda: ", ides);
    const ideal = ObjectId.createFromHexString(ides);
    console.log("ideal desde api deuda: ", ideal);
        const result = await deudas.updateOne(
            { _id: ideal, }, { $set: { paid: true } });
        console.log("result desde api deuda: ", result);
        res.status(200).json(result);
        break;
  }
}
