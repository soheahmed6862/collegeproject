import axios from "axios"
import { instance, userReuest } from "../requestMethods"
import { regisfail, regisStatus, regissuccess } from "./registerSlice"
import { loginfail, loginStatus, loginsuccess } from "./userSlice"
import { useNavigate } from 'react-router-dom';
import { removeproduct } from "./cartRedux";

export const login=async(dispatch,user)=>{
   
    console.log(user)
    dispatch(loginStatus())
    try {
        const res=await userReuest.post("/login",user)
        console.log({user})
     
        dispatch(loginsuccess(res.data))
        console.log(res.data)
        
    } catch (error) {
        
        dispatch(loginfail(error))
   const {respose}=error
        console.log(respose)
        
    }
}
export const getregister=async(dispatch,register)=>{

    console.log(register)
    dispatch(regisStatus())
    try {
        const res=await instance.post("/register",register)
        console.log(res)

        dispatch(regissuccess(res.data))
        console.log(res.data)
        
    } catch (error) {
        
        dispatch(regisfail(error))
        console.log(error)
    }
}

export const removeproducts=(dispatch,id)=>{
    console.log(id)
dispatch(removeproduct(id))
}