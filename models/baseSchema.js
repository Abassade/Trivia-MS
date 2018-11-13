var mongoose = require('mongoose');
const util = require('../controllers/utils');
 Schema = mongoose.Schema;
 const my_date = util.day+", "+util.date+"-"+util.num_month+"-"+util.year;

var questionSchema = new Schema({
    question  : {type: String, required: true},
    options   : {
        A: {type: String, default: "null"},
        B: {type: String, default: "null"},
        C: {type: String, default: "null"},
        D: {type: String, default: "null"},
    },
    answer: {type: String, required: true},
    date_added: {type: String, default: my_date}
});

module.exports = mongoose.model('Question', questionSchema);