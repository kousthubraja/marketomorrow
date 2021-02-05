var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nifty-prediction', function(req, res, next) {
  // res.render('index', { color: '#00b44c' });
  res.render('index', { color: '#b41200' });
});

module.exports = router;
