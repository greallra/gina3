var express = require('express');
var adminController = require('../controllers/adminController');
var router = express.Router();
var messages = require('../model/db');

/* GET admin page. */
router.get('/', adminController.get_admin_page);

/* auth. */
router.post('/', adminController.serve_admin_access);


module.exports = router;
