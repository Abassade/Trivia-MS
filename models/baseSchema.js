var mongoose = require('mongoose')
 Schema = mongoose.Schema;

var questionSchema = new Schema({
    question  : {type: String, required: true},
    options   : {
        A: {type: String, default: "null"},
        B: {type: String, default: "null"},
        C: {type: String, default: "null"},
        D: {type: String, default: "null"},
    },
    answer: {type: String, required: true},
    date_added: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Question', questionSchema);