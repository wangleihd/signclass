
var express = require('express');
var router = express.Router();
const db = require('../collections');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('foot_qz', { title: 'TodoList'});

});

module.exports = router;
