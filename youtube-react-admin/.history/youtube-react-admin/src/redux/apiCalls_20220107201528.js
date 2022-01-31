import { getfailerState, getProductState, getProductSuccessState } from "./productReux"
import { publicRequest, userRequest } from "./requestmethod"
import { loginerror, loginState, loginsuccess } from "./userSlice"


export const login=async(dispatch,user)=>{


    dispatch(loginState())
try {
const res= await userRequest.post("/login",user)
dispatch(loginsuccess(res.data))
console.log(res.data)

     
} catch (error) {
    
    dispatch(loginerror(error))
}


}

export const product=async(dispatch)=>{
    dispatch(getProductState());

    try {
        
        const product=await publicRequest.get("/product/allproduct")
        getProductSuccessState(product.data)
        console.log(product.data)
    } catch (error) {
        
        getfailerState(error)
    }



}