var express = require('express');
var comments = require('../controllers/commentsController');
var messages = require('../controllers/messagesController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { success: null });
});
/* POST home page. */
router.post('/', messages.save_message);
/*BLOG ROUTES*/
/*BLOG ROUTES*/
/* GET London page. */
router.get('/page-blog/london', function(req, res, next) {
  res.render('page-blog/london')
});
/* POST London page. */
router.post('/page-blog/london', function(req, res, next) {
    res.send('POST BLOG?')
});
/* GET Nottingham page. */
router.get('/page-blog/nottingham', function(req, res, next) {
  res.render('page-blog/nottingham')
});
/* GET Switzerland page. */
router.get('/page-blog/switzerland', function(req, res, next) {
  res.render('page-blog/switzerland')
});
/* GET Belgium page*/
router.get('/page-blog/belgium', function(req, res, next) {
   res.render('page-blog/belgium')
});

/*REST ROUTES*/
/*REST ROUTES*/
/* GET gastromaquia listing. */
router.get('/rests/gastromaquia', comments.render_comment)

/* POST gastromaquia COMMENTS. */
router.post('/rests/gastromaquia',comments.add_render_comment);



/* info page. */
router.get('/info', function(req, res, next) {
  res.render('info')
});


// router.post('/', function(req, res, next) {
//   var newMessage = new UserMessages(req.body);
//   newMessage.save(function(err,data){
//     if(err) throw err;
//     console.log('saved to db')
//   });
//
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
