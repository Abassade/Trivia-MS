
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
  const query = Question.find({})
  .select({"answer": 0, "__v":0});

  query.sort('-date_added')
  .exec((err, quest)=> {
    if (err) {
      res.send({
        error:true,
        statusCode:404,
        message:'Database is empty'
      })
    }
    else{

      res.send({
        error:false,
        statusCode:200,
        data:quest
      });
          }
      });
  };  
  
  exports.list_all_for_admin = function(req, res) {
    const query = Question.find({});
  
    query.sort('-date_added')
    .exec((err, quest)=> {
      if (err){ return next(err); }
      if(quest == null || undefined){

        res.send({
          error:true,
          statusCode:404
        });
      }
      res.send({
        error:false,
        statusCode:200,
        data:quest
      });
    });  
  }

  exports.create_a_question = (req, res)=> {
    let new_question = new Question({
        question: req.body.question,
        option_a: req.body.A,
        option_b: req.body.B,
        option_c: req.body.C,
        option_d: req.body.D,
        answer: req.body.answer
    });


    if(req.body.question == null || undefined 
      || req.body.answer == null | undefined){
      //  console.log('question and answer are required');
        res.send({
          error:404,
          message: 'questions and answer are required',
          advice: 'Kindly provide question and answer in json form'
        });

    }
    else{

      new_question.save( (err, quest)=> {

        if(err){
  
          console.log('An error occured', err);
  
          res.send({
            statusCode:404,
            message: 'An error occured, please ensure you pass in required fields',
            databaseinfo: 'Ensure mongodb is up and running'
          });
        }
        else{
  
          const post_res = {
            error: false,
            statusCode: 202,
            message: `post with id ${quest._id} was succesfull`
          }
      
            res.json(post_res);
        }
    
      });
    }

    
  };

  
  
  exports.read_a_question = function(req, res) {

    Question.findOne( {_id: req.params.id}, (err, data)=>{
     // console.log('data id', data);

      if (data == null ||undefined) {
        res.send({
          statusCode: 400,
          message: `The passed id: ${req.params.id} was not found`
        });
        
      } 
      
      else {
        
        const query = Question.findById(req.params.id)
   .select({"__v":0, "answer":0});

    query.exec((err, quest)=>{
    
      if(err){
  
       res.send({
               error:true,
               statusCode:404,
               message: 'An error occured'
              });
      }
      else{
        res.send({
               error:false,
               statusCode:200,
               message: 'The response is ok',
                 data:quest
                });
              }
        });
      }

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
      function(err) {
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
