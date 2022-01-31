import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import  axios  from 'axios';
import { instance } from "../requestMethods";
import { useDispatch, useSelector } from 'react-redux';
import { getregister, register } from "../redux/apiCalls";
import { Navigate, useNavigate } from "react-router-dom";
import validation from "./registervalidation";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`

  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  
const dispath=useDispatch()
const [input,setInput] =useState({
username:"",
email:"",
password:"",


})

// const [email,setEmail] =useState(" ")
// const [password,setPassword] =useState(" ")
const   navigation=useNavigate()
const seletor = useSelector(state=>(state.register.currentUser))
console.log(seletor)
const [error,setError] = useState({})

const [iscurrect,setCurrect] = useState(false)
console.log(iscurrect)




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

export default Register;
