var express = require('express');
var router = express.Router();
var a=Math.random();
var b=Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hypot applied to'+a+','+b+' is '+Math.hypot(a, b));
});

module.exports = router;
