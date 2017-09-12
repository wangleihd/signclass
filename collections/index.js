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
  user_id: { type: String },
  stuNum: {type: Number, default: 201709000},
  name: { type: String },
  password: { type: String }
});

module.exports.user = mongoose.model('user', userShema);
