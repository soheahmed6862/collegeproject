import axios from "axios"
import { userReuest } from "../requestMethods"
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
export const register=async(dispatch,user)=>{

    console.log(user)
    dispatch(regisStatus())
    try {
        const res=await userReuest.post("/login",user)
        console.log({user})

        dispatch(regissuccess(res.data))
        console.log(res.data)
        
    } catch (error) {
        
        dispatch((error))
    }
}