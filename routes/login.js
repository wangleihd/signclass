var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('login', {title: 'Login'});
});

router.post('/', (req, res, next) => {
  db.user.findOne({
    user_id: req.body.user_id
  }, function(err, data) {
    if(data){
      bcrypt.compare(req.body.password, data.password, function(err, hash) {
        if (hash) {
          req.session.name = data.name;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

module.exports = router;
