const mongo= require("mongoose");
const user=mongo.Schema({
name:{
  type:String,
  required:true  
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
mode:{
type:String,
default:"Student"
}
});
const userModel=mongo.model("users",user);
module.exports=userModel;