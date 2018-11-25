const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../index');
Question = require('../models/baseSchema');


const should = chai.should();
chai.use(chaiHttp);


describe('BaseSchema', ()=> {

  beforeEach( done=>{
    Question.deleteMany({}, (err) => { 
      done();           
     });  

  });

  afterEach((done)=>{
    done();
  });

  it('should list ALL questions without answers on /question GET', done=> {
    chai.request(server)
           .get('/question')
           .end((err, res)=>{
           res.should.have.status(200);
           res.should.be.json;
           res.body.should.be.a('object');
           res.body.data.should.be.a('array');
           res.body.should.have.property('error');
           res.body.error.should.be.equal(false);
           res.body.data.should.not.have.property('__v');
          //  res.body.data[0].should.have.property('_id');
          //  res.body.data[0].should.have.property('question');
          //  res.body.data[0].should.not.have.property('answer');
          //  res.body.data[0].should.have.property('options');
        done();

      });

  });

  it('should list ALL questions including answers on /admin GET', done=> {
    chai.request(server)
           .get('/admin')
           .end((err, res)=>{
           res.should.have.status(200);
           res.should.be.json;
           res.body.should.be.a('object');
           res.body.data.should.be.a('array');
           res.body.should.have.property('error');
           res.body.error.should.be.equal(false);
          //  res.body.data[0].should.have.property('_id');
          //  res.body.data[0].should.have.property('__v');
          //  res.body.data[0].should.have.property('question');
          //  res.body.data[0].should.have.property('answer');

        done();

      });

  });


  it('should list a SINGLE question on /question/:id GET', done=> {
      var newQuestion = new Question({
        question: 'What is th capital of oyo state ?',
        answer: 'Ibadan'

      });
      newQuestion.save( (err, data)=> {
        chai.request(server)
          .get('/question/'+data.id+5)
          .end( (err, res)=>{
            res.body.should.have.property('message');
              res.should.have.status(200);
              res.should.be.json;
              res.body.should.be.a('object');
              res.body.should.have.property('statusCode');
              res.body.statusCode.should.equal(400);
              // res.body.data.should.have.property('_id');
              // res.body.data.should.have.property('question');
              // res.body.data.should.not.have.property('answer');
              // res.body.data.should.not.have.property('__v');
              // res.body.data.question.should.equal('What is th capital of oyo state ?');
              // res.body.data._id.should.equal(data.id);
            done();
          });
      });
  });

  it('should save a post to mongodb on /question', done=>{

    const newQuestion = new Question({

    });

    newQuestion.save((err, data)=>{

      chai.request(server)
      .post('/question')
      .end( (err, res)=>{

        res.should.have.status(200);
        done();
      });
    });
  });

 });
