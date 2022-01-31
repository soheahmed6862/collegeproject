import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';


const Login = () => {

    const dispatch =useDispatch()
    const [username,setusernames] =useState(" ")
    const [password,setpassword] =useState(" ")
    const handlechnage=(e)=>{
        e.preventDefault();

        console.log("sdfsaf")
  login(dispatch,{username,password})


    }


    return (
        <div  style={{display: 'flex',justifyContent: 'center',alignItems: 'center', height:"100vh"}}>
            <input type="text" placeholder="username" name="username" onChange={(e)=>setusernames(e.target.value)} />
            <input type="password" placeholder="password" name="username" onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handlechnage}>login in user</button>
        </div>
    );
};

export default Login;