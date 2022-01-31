import { createSlice } from "@reduxjs/toolkit";

const registerSlice=createSlice({

    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false,
    },
    reducers:{
 loginStatus:(state)=>{
     state.isFetching=true;

 },
 loginsuccess:(state,action)=>{
  state.isFetching=false;
 state.currentUser=action.payload

 },
 loginfail:(state,action)=>{
     state.isFetching=false;
     state.error=true;
 }
    }
})

export const {loginStatus,loginsuccess,loginfail} = registerSlice.actions;
export default registerSlice.reducer;