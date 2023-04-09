require("./model/connection.js");
const cors=require("cors");
const bodyparser=require("body-parser");
const express= require("express");
const userModel= require("./model/user.js");

const app=new express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.post("/login",(req,res)=>{
    
userModel.findOne({email:req.body.email,password:req.body.password}).then((data)=>{
    console.log(data);
    if(data===null){
        res.send("No user found");
    }else{
        res.send(data);
    }
})
})

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
const user=new userModel({name,email,password});
user.save();
res.send("successfully registered");
})
app.get("/getUser",(req,res)=>{
    userModel.find({}).then((data)=>{if(data===""){res.send(0)}else{res.send(data)}})
})
app.listen("3001",()=>{console.log("port connected")});

