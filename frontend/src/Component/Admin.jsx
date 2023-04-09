import React,{useState,useEffect} from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";
import Dashboard from "./Dashboard";
import Faculty from "./Faculty";
import Profile from "./Profile";
import Student from "./Student";

const Admin=()=>{
    const [content,setcontent]=useState("dashboard");
    const [user,setuser]=useState([]);
    const [users,setusers]=useState({});
    
    useEffect(()=>{
    const us=JSON.parse(sessionStorage.getItem("user"));
    setusers(us);
    axios.get("http://localhost:3001/getUser").then((res)=>{setuser(res.data)}).catch((err)=>{console.log(err)})
    });

return(
<>

<div>
   <div className="row">
<div className="col-md-2">
<AdminNavbar setcontent={setcontent}></AdminNavbar>
</div>
<div className="col-md-10">
{content==="dashboard" && <Dashboard user={user}></Dashboard>}
{content==="profile" && <Profile users={users}></Profile>}
 
{content==="faculty" && <Faculty></Faculty>}
{content==="student" && <Student></Student>}
</div>
   </div>
</div>
</>
);
}
export default Admin;