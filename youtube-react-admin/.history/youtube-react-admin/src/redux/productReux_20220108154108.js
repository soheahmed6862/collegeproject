import { createSlice, } from '@reduxjs/toolkit'

const productLice=createSlice({
    name:"user",
    initialState:{
        currentuser:null,
        isfathing:false, 
        error:false,
    },
    reducers:{
        loginState:(state)=>{
            state.isfathing=true;
            console.log(state)
        },
        loginsuccess:(state,action)=>{

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