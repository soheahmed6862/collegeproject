import React, { useState } from 'react';


const Login = () => {

    const [usernmae,setusernames] =useState(" ")
    const [password,setpassword] =useState(" ")
    const handlechnage=(e)=>{
        e.preventDefault();

        console.log("sdfsaf")

    }


    return (
        <div>
            <input type="text" placeholder="username" name="username" onChange={(e)=>setusernames(e.target.value)} />
            <input type="password" placeholder="password" name="username" />
            <button onClick={handlechnage}>login in user</button>
        </div>
    );
};

export default Login;