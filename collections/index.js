const mongoose = require('mongoose');
const url = 'mongodb://sixi:sixi@ds129344.mlab.com:29344/sixi';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})
let Schema = mongoose.Schema;

let userShema = Schema({
  user_id: { type: String },//用户注册账号
  name: { type: String },//用户名
  stuNum: {type: Number, default: 201709000},//学号
  password: { type: String }//密码
});

module.exports.user = mongoose.model('user', userShema);
