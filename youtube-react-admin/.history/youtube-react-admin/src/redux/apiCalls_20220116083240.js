import {  addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, geterror,  getState, productsuccess } from "./productReux"
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

export const getproduct=async(dispatch)=>{
    dispatch(getState());

    try {
        
        const product=await publicRequest.get("/product/allproduct")
    dispatch(productsuccess(product.data))
  
        console.log(product.data)
    } catch (error) {
        
      dispatch( geterror(error))
    }



}
export const addProduct = async (user, dispatch) => {
    dispatch(addProductStart());
    try {
      // const res = await userRequest.delete(`/products/${id}`);
      dispatch(addProductSuccess(user));
      console.log(user)
    } catch (err) {
      dispatch(addProductFailure());
    }
  };