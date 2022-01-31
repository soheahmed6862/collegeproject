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
// const   navigation=useNavigate()
const seletor = useSelector(state=>(state.register.currentUser))
const [error,setError] = useState({})

console.log(error)
const controlinput=(e)=>{

  const value=e.target.value;
  const name=e.target.name
  setInput({...input,[name]:value})


}

console.log(input)
const handleonchane=(e)=>{
  e.preventDefault();
getregister(dispath,{input})


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
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form >
          <Input placeholder="name" type="text"  name="username" value={input.username} onChange={(e)=>controlinput(e)} required/>
                
            
         
          <Input placeholder="email" type="email" name="email" value={input.email} onChange={(e)=>controlinput(e)} required/>
          <Input placeholder="pasword" type="password" name="password" value={input.password} onChange={(e)=>controlinput(e)} required/>
         
  
           
          {/* <Input placeholder="name" type="text" name="username" value={input.username} onChange={(e)=>controlinput(e)} required/> */}
     
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleonchane}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
