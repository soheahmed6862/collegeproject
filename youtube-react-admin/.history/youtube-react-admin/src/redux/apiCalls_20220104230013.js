import { userRequest } from "./requestmethod"
import { loginerror, loginState, loginsuccess } from "./userSlice"


export const login=async(dispatch,user)=>{
    console.log(dispatch())

    dispatch(loginState())
try {
const res= await userRequest.post("/login",user)
dispatch(loginsuccess(res.data))
console.log(res.data)

     
} catch (error) {
    
    dispatch(loginerror(error))
}


}