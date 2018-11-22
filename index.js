const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connecting to mongodb 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Questiondb',{ useNewUrlParser: true }); 

// using middleware bodyparser to accept request body in json and url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// using route in the  entry file
const route = require('./routes/route');
route(app);

// set app to listen for a specified port
app.listen(port, ()=>{
    console.log('The app is runnning on '+port);
});

// use the function to feedback the error status
app.use((req, res)=> {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  module.exports = app;
