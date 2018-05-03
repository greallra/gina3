var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('page-blog/nottingham')
});

module.exports = router;
