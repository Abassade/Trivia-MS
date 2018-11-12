var mongoose = require('mongoose')
 Schema = mongoose.Schema;

var questionSchema = new Schema({
    question_id  : {type: String, required: true,unique: true},
    question  : {type: String, required: true},
    options   : {
        A: {type: String, required: true, default: ""},
        B: {type: String, required: true, default: ""},
        C: {type: String, required: true, default: ""},
        D: {type: String, required: true, default: ""},
    },
    answer: {type: String, required: true},
    date_added: {type: Date, default: Date.now}
});

 
module.exports = mongoose.model('Questions', questionSchema);