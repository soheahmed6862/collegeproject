import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({

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
console.log(state.currentUser)
 },
 loginfail:(state,action)=>{
     state.isFetching=false;
     state.error=true;
 }
    }
})

export const {loginStatus,loginsuccess,loginfail} = userSlice.actions;
export default userSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//      name:"user",
//     initialState:{
//         currentUser:null,
//         isFetching:false,
//         error:false,
//     },
//   reducers: {
//      loginStatus:(state)=>{
//          state.isFetching=true;
    
//      },
//      loginsuccess:(state,action)=>{
//     state.isFetching=false;
//     state.currentUser=action.payload
    
//      },
//      loginfail:(state,action)=>{
//          state.isFetching=false;
//          state.error=true;
//      }
//         }
    
// });

// export const { addProduct } = userSlice.actions;
// export default userSlice.reducer;
