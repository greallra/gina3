var express = require('express');
var UserMessages = require('../controllers/userMessages');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var newMessage = new UserMessages(req.body);
  newMessage.save(function(err,data){
    if(err) throw err;
    console.log('saved to db')
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
