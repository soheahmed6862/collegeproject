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

       state.isfathing=false;
       state.currentuser=action.payload
       console.log(state.currentuser)

        },
        loginerror:(state)=>{
            state.error=true;

        }
    }
})

export const { loginerror,loginsuccess,loginState } = productLice.actions

export default  productLice.reducer