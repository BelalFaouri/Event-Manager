var mongoose=require('mongoose');
var eventSchema=require('./Event')

var UserSchema = mongoose.Schema({
  username: { type : String, required : true ,unique: true},
  password: { type : String, required : true },
  email: { type : String, required : true },
});

var User = mongoose.model('User', UserSchema);


module.exports=User;
