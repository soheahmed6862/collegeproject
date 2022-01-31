import { createSlice, } from '@reduxjs/toolkit'

const userLice=createSlice({
    name:"user",
    initialState:{
        currentuser:null,
        isfathing:false, 
        error:false,
    },
    reducers:{
        loginState:(state)=>{
            state.isfathing=true;
        },
        loginsuccess:(state,action)=>{

       state.isfathing=false;
       state.currentuser=action.payload

        },
        loginerror:(state)=>{
            state.error=true;

        }
    }
})

export const { loginerror,loginsuccess,loginState } =  userLice.actions

export default  userLice.reducer