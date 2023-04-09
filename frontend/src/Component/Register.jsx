import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Register=()=>{
    const [newUser,setnewUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const getData=(event)=>{
     let name=event.target.name;
     let value=event.target.value;
     setnewUser({...newUser,[name]:value});
    }
    const submit=()=>{
     axios.post("http://localhost:3001/register",newUser).then((res)=>{        
     alert(res.data);
    setnewUser({name:"",email:"",password:""});
     }).catch((err)=>{console.log(err)});
    }
    return(
        <>
        <Navbar></Navbar>
        <div className="logins">
    <div className="login">
        <input type="text" className="form-control mt-5" placeholder="Enter Name" onChange={getData} name="name" value={newUser.name}/>
        <input type="text" className="form-control mt-5" placeholder="Enter Email" onChange={getData} name="email" value={newUser.email}/>    
        <input type="password" className="form-control mt-5" placeholder="Password" onChange={getData} name="password" value={newUser.password} />
        <div><a href="/login">Login</a></div>
        <button className="form-control mt-5 btn btn-primary" onClick={submit}>REGISTER</button>
    </div>
    </div>
        </>
    );
}
export default Register;