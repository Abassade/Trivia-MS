const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Questiondb',{ useNewUrlParser: true }); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const route = require('./routes/route');
route(app);

app.listen(port, ()=>{
    console.log('The app is runnning on '+port);
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
