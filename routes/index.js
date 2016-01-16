var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
	var js= ['Paul', 'Jim', 'Jane'];
	var css =['wena', 'wena2', 'wena3'];
  res.render('index', { title: 'Express',js:js ,css:css });

});

module.exports = router;
