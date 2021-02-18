var express = require('express');
var router = express.Router();
const myAPI = require('./api');

/* GET home page. */
router.get('/nifty-prediction', function (req, res) {
    // Redirect if no slash at the end
    if (!req.url.endsWith('/'))
        res.redirect(301, req.url + '/')
    else
        myAPI.getNiftyPrediction(req, res)

    // Normal response goes here
});
// router.get('/nifty-prediction', function(req, res, next) {

// });
module.exports = router;
