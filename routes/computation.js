var express = require('express');
var router = express.Router();
var rand = Math.floor(Math.random()*123)
var val1="Math.abs() applied to "+ rand + " is "+ Math.abs(rand)
var val2="Math.acos()  applied to "+ rand + " is "+ Math.acos(rand)
var val3= "Math.sin() applied to "+ rand + " is "+ Math.sin(rand);
var val4= "Math.sinh() applied to "+ rand + " is "+ Math.sinh(rand);
console.log(val1)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Tattari Meghanath Bonus',value1: val1, value2:val2, value3:val3, value4:val4 });
});



module.exports = router;
