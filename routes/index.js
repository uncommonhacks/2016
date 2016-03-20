var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//unique routing for typeform
router.get('/apply', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views', 'typeform.html'));
});

module.exports = router;
