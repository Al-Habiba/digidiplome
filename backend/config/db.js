const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/simplon';
const dbName = 'simplon';
const db = {};

mongoose.connect('mongodb://localhost:27017/simplon', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });



// async function insertData() {
//   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log('Connexion à MongoDB établie avec succès !');

//     const db = client.db(dbName);

//     // Sélection de la collection
//     const collection = db.collection('nom_de_la_collection');

//     // Document à insérer
//     const document = { name: 'John Doe', age: 30 };
//     // Insertion d'un seul document
//     const result = await collection.insertOne(document);
//     console.log('Document inséré avec succès:', result.insertedId);
//   } catch (err) {
//     console.error('Erreur lors de la connexion à MongoDB :', err);
//   } finally {
//     await client.close();
//   }
// }

// insertData();





// async function connectAndInteract() {
//   const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     // Connexion à MongoDB
//     await client.connect();
//     console.log('Connexion à MongoDB établie avec succès !');

//     const db = client.db(dbName);

//   } catch (err) {
//     console.error('Erreur lors de la connexion à MongoDB :', err);
//   } finally {
//     // Fermeture de la connexion à MongoDB
//     await client.close();
//   }
// }

// connectAndInteract();


  module.exports =db;