var messages = require('../model/db');

//render comments on page
exports.save_message =  function (req, res) {
console.log(req.body)
  // var message = req.body;
  //
  // message.save(function (err, result) {
  //   if (err) res.status(500).json({ err: "couldnt save" });
  //   console.log('saved to db');
  //   res.render('index',{success: true})
  // });


  var message = new messages({

    name:  "rob",
    email: "fsdfsa@gmail.com",
    message: "hello"
  })

  message.save(function(err,user){
    if(err) throw err;
    console.log('saved to db')
  });


};
