var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
	var js= ['bootstrap.min'];
	var css =['bootstrap.min', 'landing-page','style'];
  res.render('menu_index', {js:js ,css:css });

});

module.exports = router;
