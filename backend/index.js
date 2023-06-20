const { MongoClient } = require('mongodb');
const express = require('express')
// const mongoose = require('mongoose')
const http = require('http');
// const cors = require('cors');
// const bodyParser = require('body-parser');
const routes= require('./routes/routes.js');

const app=express()

const url = 'mongodb://localhost:27017';
const dbName = 'simplon';



app.use('/api',routes)


// Fonction pour effectuer des opérations sur la base de données
async function connectAndInteract() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connexion à MongoDB
    await client.connect();
    console.log('Connexion à MongoDB établie avec succès !');

    const db = client.db(dbName);

  } catch (err) {
    console.error('Erreur lors de la connexion à MongoDB :', err);
  } finally {
    // Fermeture de la connexion à MongoDB
    await client.close();
  }
}

connectAndInteract();

// app.use(cors(),function(req, res, next) {
//   res.header("Access-Control-Allow-Origin,Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,content-type,content",
//   "http://localhost:4200"
// );
// });


const server = http.createServer(app);
server.listen(3000, ()=>{console.log('Serveur lancé sur localhost:3000')})
 



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
