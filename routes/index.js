var express = require('express');
var router = express.Router();
const myAPI = require('./api');

/* GET home page. */
router.get('/nifty-prediction', function(req, res, next) {
  // res.render('index', data);
  // res.render('index', data);
  myAPI.getNiftyPrediction(req,res)
});

module.exports = router;
