module.exports = app=> {
    const controller = require('../controllers/controller');
  
    // base url
    app.route('/')
    .get(controller.baseUrl);

  // endpoint for non params body  
    app.route('/question')
      .get(controller.list_all_questions)
      .post(controller.create_a_question)
      .delete(controller.delete_all);
  
      // endpoint for params body  
    app.route('/question/:id')
      .get(controller.read_a_question)
      .put(controller.update_a_question)
      .delete(controller.delete_a_question);
  };