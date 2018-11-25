const mongoose = require('mongoose');
const util = require('../controllers/utils');
 Schema = mongoose.Schema;

  const questionSchema = new Schema({
    question  : {type: String,
                required: true},
    options   : {
        A: {type: String, required: true},
        B: {type: String, required: true},
        C: {type: String, required: true},
        D: {type: String, required: true},
    },
    answer: {
         type: String,
         required: true},
    date_added: {
         type: String,
         default: util(new Date)}
});


module.exports = mongoose.model('Question', questionSchema);
