var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/loft', function(req, res, next) {
  res.render('rests/loft')
});

module.exports = router;
