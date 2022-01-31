import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';


const Login = () => {

    const dispatch =useDispatch()
    const [usernmae,setusernames] =useState(" ")
    const [password,setpassword] =useState(" ")
    const handlechnage=(e)=>{
        e.preventDefault();

        console.log("sdfsaf")
        dispatch(login(usernmae, password))


    }


    return (
        <div>
            <input type="text" placeholder="username" name="username" onChange={(e)=>setusernames(e.target.value)} />
            <input type="password" placeholder="password" name="username" onChange={(e)=>setpassword(e.target.value)} />
            <button onClick={handlechnage}>login in user</button>
        </div>
    );
};

export default Login;