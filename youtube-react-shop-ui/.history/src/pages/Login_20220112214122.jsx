import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from 'react';
import { login } from "../redux/apiCalls";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userReuest } from "../requestMethods";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled{
    color:green;
    cursor:not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const dispath=useDispatch()
  const user=useSelector(state=>state.user.currentUser)
 console.log(user)
 const   navigation=useNavigate()

  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");

  // const{isdisable,error}=useSelector(state=>state.user)
  

const [issucces,setIssuccess]=useState(false)
 
  
  const handlelogin=(e)=>{
    e.preventDefault();
  // login(dispath,{username,password});
  dispatch(loginStatus())
  try {
      const res=await userReuest.post("/login",user)
      console.log({user})
   
      dispatch(loginsuccess(res.data))
      console.log(res.data)
      navigation("/")
  } catch (error) {
      
      dispatch(loginfail(error))
 const {respose}=error
      console.log(respose)
      
  }


   
  

  }


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" type="text" onChange={(e)=> setUsername(e.target.value)} />
          <Input placeholder="password" type="password" onChange={(e)=> setPassword(e.target.value)} />
          <Button onClick={handlelogin} >LOGIN</Button>
{/* 
      {
        error &&  <p>something is wrong</p>
      } */}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
