import React from "react";


const Dashboard=({user})=>{  

   const studentCount= user.filter((data)=>{       
       return data.mode==="Student";    
        });
    const facultyCount=user.filter((data)=>{
      return data.mode==="Faculty";
    })
    
return(
    <>
    <div className="dash d-flex justify-content-around mt-5 ml-4">
        <div className="dashes text-center pt-4" style={{backgroundColor:"rgba(255,0,0,0.2)"}}>
            <h4>Total Users</h4>
             <h4>{user.length}</h4>
        </div>
        <div className="dashes text-center pt-4" style={{backgroundColor:"rgba(0,255,0,0.2)"}}>
            <h4>Total Students</h4>
            <h4>{studentCount.length}</h4>
        </div>
        <div className="dashes text-center pt-4" style={{backgroundColor:"rgba(0,0,255,0.2)"}}>
            <h4>Total Faculty</h4>
            <h4>{facultyCount.length}</h4>
        </div>
        <div className="dashes" style={{backgroundColor:"rgba(150,0,150,0.2)"}}>4</div>
    </div>
    </>
);
}
export default Dashboard;