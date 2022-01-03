import {createSlicer} from '@reduxjs/toolkit'

const userSlice=createSlicer({

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

export const {loginStatus,loginsuccess,loginfail} = userSlice.actions;
export default userSlice.reducer;