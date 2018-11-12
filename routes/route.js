module.exports = function(app) {
    var controller = require('../controllers/controller');
  
    
    app.route('/question')
      .get(controller.list_all_questions)
      .post(controller.create_a_question)
      .delete(controller.delete_all);
  
    app.route('/question/:id')
      .get(controller.read_a_question)
      .put(controller.update_a_question)
      .delete(controller.delete_a_question);
  };