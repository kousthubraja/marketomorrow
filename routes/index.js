var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marketomorrow',  color: '#00b44c' });
});

module.exports = router;
