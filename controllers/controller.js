
Question = require('../models/baseSchema')

exports.baseUrl = function(req, res){

  const response = {
    error: false,
    statusCode: 200,
    message: {api:'This is base url',
     advice: 'You can get all, by using localhost:3000/question'}
  }
  res.send(response);
}

exports.list_all_questions = function(req, res) {
    Question.find({}, function(err, quest) {
      if (err)
        res.send(err);

        const get_res = {
          error:false,
          statusCode:200,
          data:quest
        }

      res.json(quest);
    });
  };
  
  exports.create_a_question = function(req, res) {
    let new_question = new Question({
        question: req.body.question,
        option_a: req.body.A,
        option_b: req.body.B,
        option_c: req.body.C,
        option_d: req.body.D,
        answer: req.body.answer
    });

    new_question.save(function(err, quest) {
      if (err){
        res.send(err);
        console,log('error ', err);
    }
    const post_res = {
      error: false,
      statusCode: 202,
      message: `post with id ${quest._id} was succesfull`
    }

      res.json(post_res);
    });
  };
  
  
  exports.read_a_question = function(req, res) {
    Question.findById(req.params.id, function(err, quest) {
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
    Question.deleteOne({ _id: req.params.id},
       function(err, quest) {
      if (err)

        res.send(err);

        const response = {
          error:false,
          statusCode: 202,
          message: `Question with
           ${req.params.id} successfully deleted`
        }

      res.json(response);
    });
  
  };
  
  exports.delete_all = function(req, res) {
  Question.deleteMany({},
      function(err, quest) {
     if (err)
       res.send(err);
       const response = {
        error:false,
        statusCode: 202,
        message: 'Questions successfully deleted'
      }
     res.json(response);
   });
  
  };
