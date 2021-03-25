var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var a=Math.random();
var b=Math.random();
  res.send('hypot applied to'+a+','+b+' is '+Math.hypot(a, b));
});

module.exports = router;
