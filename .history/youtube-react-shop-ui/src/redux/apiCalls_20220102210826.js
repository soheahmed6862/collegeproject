import axios from "axios"
import { loginfail, loginStatus, loginsuccess } from "./userSlice"

export const login=async(dispatch,user)=>{

    dispatch(loginStatus())
    try {
        const res=await axios.post("http://localhost:5000/api/login",user)

        dispatch(loginsuccess(res.data))
        console.log(res.data)
        
    } catch (error) {
        
        dispatch(loginfail(error))
    }
}