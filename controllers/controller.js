var mongoose = require('mongoose'),
Question = require('../models/baseSchema')

exports.list_all_questions = function(req, res) {
    Question.find({}, function(err, quest) {
      if (err)
        res.send(err);
      res.json(quest);
    });
  };
  
  
  exports.create_a_question = function(req, res) {
    var new_question = new Question({
        question: req.body.question,
        answer: req.body.answer
    });
    new_question.save(function(err, quest) {
      if (err)
        res.send(err);
      res.json(quest);
    });
  };
  
  
  exports.read_a_question = function(req, res) {
    Question.findById(req.params.taskId, function(err, quest) {
      if (err)
        res.send(err);
      res.json(quest);
    });
  };
  
  
  exports.update_a_question = function(req, res) {
    Question.findOneAndUpdate({_id: req.params.id}, 
        req.body, {new: true}, function(err, quest) {
      if (err)
  res.send(err);
      res.json(quest);
    });
  };
  
  
  exports.delete_a_question = function(req, res) {
    Task.deleteOne({
      _id: req.params.id},
       function(err, quest) {
      if (err)
        res.send(err);
      res.json({ message: `Question with ${req.params.id}successfully deleted` });
    });
  
  };
  
  exports.delete_all = function(req, res) {
  Task.deleteMany({},
      function(err, quest) {
     if (err)
       res.send(err);
     res.json({ message: 'Questions successfully deleted' });
   });
  
  };
