import { userRequest } from "./requestmethod"
import { loginerror, loginState, loginsuccess } from "./userSlice"


export const login=async(dispatch,user)=>{

    dispatch(loginState())
try {
const res= await userRequest.post("",user)
dispatch(loginsuccess(res.data))

     
} catch (error) {
    
    dispatch(loginerror(error))
}


}