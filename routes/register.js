var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../collections');
var assert = require('assert');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('register', {title: 'register'});
});

router.post('/', (req, res, next) => {
  var num = 0;
  var str = "201709"
  db.user.find({}, function(err, doc){
    num += Number(doc.length + 1);
    if(num < 10){
      num = "00" + num.toString();
      str += num;
    }else if(num >= 10 && num <= 99){
      num = "0" + num.toString();
      str += num;
    }else{
      str += num.toString();
    }
    console.log("num",num);
    console.log("str", str);
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      assert.equal(err, null);
      var user = new db.user({
        user_id: req.body.user_id,
        name: req.body.username,
        password: hash,
        stuNum: str
      });
      user.save((err, data) => {
        console.log("save num", num);
        res.redirect('/');
      });
    });
  });


});
module.exports = router;
