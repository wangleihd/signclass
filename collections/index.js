const mongoose = require('mongoose');
const url = 'mongodb://sixi:sixi@ds129344.mlab.com:29344/sixi';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})
let Schema = mongoose.Schema;

//用户基本信息表
let userShema = Schema({
  user_id: { type: String},//用户注册账号(唯一)*
  name: { type: String },//用户名*
  stuNum_id: {type: Number},//学号(唯一)*
  password: { type: String }//密码*
});

module.exports.user = mongoose.model('user',  userShema);
//创建一个用户信息user集合模块

//课程详情表
let details = Schema({
  education : {type : String},//学历*
  grade : {type : String},//年级*
  curriculum : {type : String},//课程*
  lessons : {type : Number},//课次,就是有几节课*
  content : {type : String, default : ''},//课程内容
  teacher_name : {type : String},//授课老师名*
  people_num : {type : Number, default : 0},//报名人数
  money : {type : Number, default : 0},//报名费用
  open_time : {type : Date},//开课日期*
  colse_time :{type : Date}//节课日期*
});

module.exports.details = mongoose.model('details',  details);
//创建一个用户信息details集合模块

//报名信息表
let user_enroll = Schema({
  stuNum_id: {type: Number},//学号(唯一)*
  user_name : {type : String},//学员姓名*
  user_telephone : {type : Number},//电话号码*
  user_address : {type : String},//地址*
  user_education : {type : String},//学历*
  user_grade : {type : String},//年级*
  user_curriculum : {type : String},//课程*
  user_money : {type : Number, default : 0},//报名费用*
  user_time : {type : Date}//报名时间*
});

module.exports.user_enroll = mongoose.model('user_enroll',  user_enroll);
//创建一个用户信息user_enroll集合模块
