const { MongoClient } = require('mongodb');
const express = require('express')
const mongoose = require('mongoose')
const http = require('http');
// const cors = require('cors');
const bodyParser = require('body-parser');
const routes= require('./routes/routes.js');

const app=express()
app.use(bodyParser.json());


const url = 'mongodb://localhost:27017/simplon';
const dbName = 'simplon';

var db =require('./config/db.js')

app.use('/api',routes)


// Fonction pour effectuer des opérations sur la base de données
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









// app.use(cors(),function(req, res, next) {
//   res.header("Access-Control-Allow-Origin,Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,content-type,content",
//   "http://localhost:4200"
// );
// });


const server = http.createServer(app);
server.listen(3000, ()=>{console.log('Serveur lancé sur localhost:3000')})
 




