import axios from "axios"
import { instance, userReuest } from "../requestMethods"
import { regisStatus, regissuccess } from "./registerSlice"
import { loginfail, loginStatus, loginsuccess } from "./userSlice"

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
        
        dispatch((error))
    }
}