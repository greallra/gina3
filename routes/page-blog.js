var express = require('express');
var router = express.Router();

/* GET London */
router.get('/london', function(req, res, next) {
   res.render('page-blog/london')

});

/* GET switzerland */
router.get('/switzerland', function(req, res, next) {
   res.render('page-blog/switzerland')

});

/* GET Nottingham */
router.get('/nottingham', function(req, res, next) {
   res.render('page-blog/nottingham')

});

/* GET Belgium */
router.get('/belgium', function(req, res, next) {
   res.render('page-blog/belgium')

});

module.exports = router;
