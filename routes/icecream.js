var express = require('express');
var router = express.Router();


const icecream_controlers= require('../controllers/icecream');

router.get('/', icecream_controlers.icecream_list );

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('icecream', { title: 'Search Results for Class Icecream' });
// });

module.exports = router;