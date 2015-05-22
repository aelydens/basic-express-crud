var express = require('express');
var router = express.Router();

/* GET home page. Registering event handler  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// going to treat each resource as its own router
