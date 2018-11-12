const express = require('express');
const app = express();
const port = process.env.PORT || 3200;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');





app.listen(port, ()=>{
    console.log('The app is runnning on '+port);
});