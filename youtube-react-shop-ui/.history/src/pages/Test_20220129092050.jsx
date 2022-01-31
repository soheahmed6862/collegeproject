import { Button } from '@material-ui/core';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getregister } from '../redux/apiCalls';
import "./text.css"
import { useNavigate } from 'react-router-dom';
const Test = () => {
const    navigate=useNavigate()
const dispath=useDispatch()
const [input,setInput] =useState({
username:"",
email:"",
password:"",


})

// const [email,setEmail] =useState(" ")
// const [password,setPassword] =useState(" ")
// const   navigation=useNavigate()
const seletor = useSelector(state=>(state.register.currentUser))

const [error,setError] = useState({})

useEffect(() => {

  if(Object.keys(error).length ===0){
    navigate("/login")
  }
  

})

console.log(error)
const controlinput=(e)=>{

  const value=e.target.value;
  const name=e.target.name
  setInput({...input,[name]:value})


}

console.log(input)
const handleonchane=(e)=>{
  e.preventDefault();
  const {username,email,password} = input
getregister(dispath,{username,email,password})


setError(validation(input))
}
 
useEffect(() => {

})

const validation=(input)=>{

  const error ={}

if(!input.username){
  error.username="name is required"
}
else if(input.username.length<3){

    error.username="name is so small"
}

if(!input.email){
  error.email="email is required"
}
else if(!/\S+@\S+\.\S+/.test(input.email)){
  error.email="email is not valid"
}
if(!input.password){

  error.password="password is required"
}
else if(input.password.length<5){
 error.password="password must be 5 character"
}
return error  

}

    return (
        <div className="conatiner">

        <div className="card">

            <div className="inner_box">
                
                <div className="card_font">
               <p>create a account</p>
        <form >
          {/* <input placeholder="name" className="input_box" type="text"  name="username" />
          <p style={{color:"red",textTransform:"lowercase"}}> Lorem ipsum dolor </p>
            
         
          <input placeholder="email"  className="input_box"  type="email" name="email" />
          <input placeholder="pasword"  className="input_box"  type="password" name="password" />
          */}
     <input placeholder="name" type="text" className="input_box"  name="username" value={input.username} onChange={(e)=>controlinput(e)} required/>
    
{error.username && <p>{error.username}</p>}
            
         
    <input placeholder="email" type="email" name="email" className="input_box" value={input.email} onChange={(e)=>controlinput(e)} required/>
    {error.email && <p>{error.email}</p>}
    <input placeholder="pasword" type="password" name="password" className="input_box" value={input.password} onChange={(e)=>controlinput(e)} required/>
   {error.password && <p>{error.password}</p>}
  
     
          <button onClick={ handleonchane} >CREATE</button>
        </form>

                </div>
                <div className="card_back">

                </div>

            </div>
        </div>

     
    </div>
    );
};

export default Test;