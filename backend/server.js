// import the required modules
const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/student.route');
const dbConfig = require('./config/db.conf');
const bodyParser = require('body-parser');

// create an express application
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// connection to db
mongoose.connect(dbConfig.url, dbConfig.options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Set up the middleware to parse incoming requests as JSON

// define the port number for the server
const port = 3000;

// add routes
require('./routes/student.route')(app);

// app.use('/api/student',studentRoute);

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



  