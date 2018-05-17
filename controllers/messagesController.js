var messages = require('../model/db');

//render comments on page
exports.save_message =  function (req, res) {

  var success = {};
  var message = new messages(req.body)

  message.save(function(err,user){
    if(err) throw err;
    console.log('saved to db')
    success.message = "He recibido tu mensaje con éxito, muchas gracias!!"
    res.render('index',{success: success})
      success = null;
  });


};
