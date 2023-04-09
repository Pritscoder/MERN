import './App.css';
import { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import About from './Component/About';
import Register from './Component/Register';
import Admin from './Component/Admin';

const App=()=> {  
 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
    </Routes>
    </BrowserRouter>
    </>
     );
}

export default App;
