import { createSlice } from "@reduxjs/toolkit";

const registerSlice=createSlice({

    name:"user",
    initialState:{
        currentUser:[],
        isFetching:false,
        error:false,
    },
    reducers:{
 regisStatus:(state)=>{
     state.isFetching=true;

 },
 regissuccess:(state,action)=>{
  state.isFetching=false;
 state.currentUser=action.payload
 console.log(state.currentUser)

 },
 regisfail:(state,action)=>{
     state.isFetching=false;
     state.error=true;
 }
    }
})

export const {regisStatus,regissuccess,regisfail} = registerSlice.actions;
export default registerSlice.reducer;