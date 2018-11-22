var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../index');
Question = require('../models/baseSchema');


var should = chai.should();
chai.use(chaiHttp);


describe('BaseSchema', ()=> {

  beforeEach( done=>{

    var newQuestion = new Question({
        question  : "What is your name",
        answer: "Abass",
    });
    newQuestion.save((err)=> {

      done();
    });
  });

  afterEach((done)=>{
    done();
  });

  it('should list ALL questions on /question GET', done=> {
    chai.request(server)
           .get('/question')
           .end((err, res)=>{
           res.should.have.status(200);
           res.should.be.json;
           res.body.should.be.a('array');
           res.body[0].should.have.property('_id');
           res.body[0].should.have.property('question');
           res.body[0].should.have.property('answer');

        done();

      });

  });

  it('should list a SINGLE question on /question/:id GET', done=> {
      var newQuestion = new Question({
        question: 'How old are you',
        answer: '14'
      });
      newQuestion.save( (err, data)=> {
        chai.request(server)
          .get('/question/'+data.id)
          .end( (err, res)=>{
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object');
            res.body.should.have.property('_id');
            res.body.should.have.property('question');
            res.body.should.have.property('answer');
            res.body.question.should.equal('How old are you');
            res.body.answer.should.equal('14');
            res.body._id.should.equal(data.id);
            done();
          });
      });
  });

 });
