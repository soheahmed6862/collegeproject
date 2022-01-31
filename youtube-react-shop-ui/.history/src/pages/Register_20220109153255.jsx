import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import  axios  from 'axios';
import { instance } from "../requestMethods";
import { useDispatch } from 'react-redux';
import { register } from "../redux/apiCalls";

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
  flex: 1;
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
const [username,setUsername] =useState("")
const [email,setEmail] =useState("")
const [password,setPassword] =useState("")

const handleonchane=(e)=>{
  e.preventDefault();
console.log("sadsadf")
const register=async(e)=>{

  try {
  await axios.post("http://localhost:5000/pi/register",JSON.stringify({username,password,email}),
    {headers: {'Content-Type': 'application/json'}})
    .than(res=>console.log(res))
  } catch (error) {
    
  }
}


register()
 
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onClick={handleonchane}>
          <Input placeholder="name" type="text" onChange={(e)=>setUsername(e.target.value)}/>
         
          <Input type="mail" placeholder="email"onChange={(e)=>setEmail(e.target.value)}/>
          <Input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
     
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;