import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login=()=>{
    const navigate=useNavigate();
    const [uData,setuData]=useState({
        email:"",
        password:""
    });
    const getData=(ev)=>{
    let name=ev.target.name;
    let value=ev.target.value;
    setuData({...uData,[name]:value})
    }
    const submit=()=>{
        axios.post("http://localhost:3001/login",uData).then((res)=>{
            if(res.data.mode==="Student"){
              sessionStorage.setItem("user",JSON.stringify(res.data));
              navigate("/");
            }else if(res.data.mode==="Faculty"){
              sessionStorage.setItem("user",JSON.stringify(res.data));
              navigate("");
            }else if(res.data.mode==="Admin"){
              sessionStorage.setItem("user",JSON.stringify(res.data));
              navigate("/admin");
            }
        }).catch((error)=>{console.log(error)})
    }
    return(
    <>
    <Navbar></Navbar>
    <div className="logins">
    <div className="login">
        <input type="text" className="form-control mt-5" placeholder="Enter Email" onChange={getData} name="email"/>
        <input type="password" className="form-control mt-5" placeholder="Password" onChange={getData} name="password" />
        <div><a href="/register">New User?</a></div>
        <button className="form-control mt-5 btn btn-primary" onClick={submit}>LOGIN</button>
    </div>
    </div>
    </>
    );
}

export default Login;