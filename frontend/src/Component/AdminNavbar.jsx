import React from "react";

const AdminNavbar = (props) => {
  return (
    <>
      <div className="ANavbar form-control">
        <div className="logo">
        <img src="images/profile.png" alt="prfile image" />
        </div>
        <div className="Ncontents">
          <ul>
            
          <li onClick={()=>{props.setcontent("dashboard")}}><i className="fa fa-bar-chart"></i>&nbsp;Dashboard</li>
          <li onClick={()=>{props.setcontent("profile")}}><i className="fa fa-user"></i>&nbsp;Profile</li>            
          <li onClick={()=>{props.setcontent("faculty")}}><i className="fa fa-book"></i>&nbsp;Faculty</li>
          <li onClick={()=>{props.setcontent("student")}}><i className="fa fa-trophy"></i>&nbsp;Student</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default AdminNavbar;
