var express = require('express');
var router = express.Router();
var index=require('../controllers/landing');

/* GET home page. */
router.get('/',landing.get_landing);

module.exports = router;
