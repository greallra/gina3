var express = require('express');
var UserMessages = require('../controllers/userMessages');
var router = express.Router();


/* GET admin page. */
router.get('/page', function(req,res,next) {
  UserMessages.find({},function(err,data){
    if(err) throw err;
      res.render('admin', {data : data, admin: null})
      console.log(data)
  })


});

/* auth. */
router.post('/', function(req,res,next) {
  if(req.body.userName === 'gina' && req.body.userName ==='kingronan'){
    res.redirect('/page')
  }else{
    res.send('no autorizado')
  }

});

module.exports = router;
