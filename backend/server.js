// import the required modules
const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/student.route');
const achievementRoute=require('./routes/achievement.route')
const dbConfig = require('./config/db.conf');
const bodyParser = require('body-parser');
const cors= require('cors')

// create an express application
const app = express();
const corsOptions = {
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));
// Set up the middleware to parse incoming requests as JSON
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

// define the port number for the server
const port = 3000;

// add routes
// require('./routes/student.route')(app);
app.use('/api/student',studentRoute);
app.use('/api/achievement',achievementRoute)

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



  