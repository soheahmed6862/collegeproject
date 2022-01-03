import axios from "axios"
import { userReuest } from "../requestMethods"
import { loginfail, loginStatus, loginsuccess } from "./userSlice"

export const login=async(dispatch,user)=>{

    console.log(dispatch)
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