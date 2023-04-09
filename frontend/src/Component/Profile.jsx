import React from 'react';

const Profile= ({users})=>{
    console.log(users);
    return(
        <>
        <div className='text-center mt-5 profile'>
            <img src="images/profile.png" alt="prifile image" />
        </div>
        <div className='col-md-10 text-center mt-2 pt-2'>
        <table className="table table-striped mt-5 ml-5">
  
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td>{users.name}</td>
      <td><i className='fa fa-edit'></i></td>      
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td>{users.email}</td> 
      <td><i className='fa fa-edit'></i></td>  
    </tr>
    <tr>
      <th scope="row">Password</th>
      <td>{users.password}</td>  
      <td><i className='fa fa-edit'></i></td>      
    </tr>
  </tbody>
</table>
        </div>
        </>
    );
}
export default Profile;