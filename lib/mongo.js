import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
    dns: {
      servers: ['8.8.8.8'], // Servidor DNS a utilizar
      search: ['mydomain.com'], // Dominio de búsqueda
      options: 'ndots:2' // Otras opciones de configuración de DNS
    }
  };
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  await client.connect(uri, options);
  console.log('Connected to MongoDB');
}

async function disconnect() {
  await client.close();
  console.log('Disconnected from MongoDB');
}

export { connect, disconnect, client };
