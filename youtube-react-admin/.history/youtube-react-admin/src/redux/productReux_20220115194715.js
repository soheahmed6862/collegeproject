import { createSlice, } from '@reduxjs/toolkit'

const productLice=createSlice({
    name:"produc",
    initialState:{
        currentuser:[],
        isfathing:false, 
        error:false,
    },
    reducers:{
        getState:(state)=>{
            state.isfathing=true;
            console.log(state)
        },
        productsuccess:(state,action)=>{
            console.log(state,action)

       state.isfathing=false;
       state.currentuser=action.payload
       console.log(state.currentuser)

        },
        geterror:(state)=>{
            state.error=true;

        }
    },
  

    // deleteProductStart: (state) => {
    //     state.isFetching = true;
    //     state.error = false;
    //   },
    //   deleteProductSuccess: (state, action) => {
    //     state.isFetching = false;
    //     state.currentuser.splice(
    //       state.currentuser.findIndex((item) => item._id === action.payload),
    //       1
    //     );
    //   },
    //   deleteProductFailure: (state) => {
    //     state.isFetching = false;
    //     state.error = true;
    //   },

    
})

export const { getState,productsuccess,geterror,deleteProductSuccess,deleteProductFailure,deleteProductStart} = productLice.actions

export default  productLice.reducer