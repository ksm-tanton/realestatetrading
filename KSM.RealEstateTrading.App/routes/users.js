var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  let styles = [];
  let scripts = ['/javascripts/myscript.js'];
  res.render('users/cool', { title: "Cool", styles: styles, scripts: scripts })
});

module.exports = router;
