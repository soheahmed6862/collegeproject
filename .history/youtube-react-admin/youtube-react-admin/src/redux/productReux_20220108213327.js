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
    //deleteState////////////////////////////////

    deleteState:(state)=>{
        state.isfathing=true;
        console.log(state)
    },
    deletesuccess:(state,action)=>{
        console.log(state,action)

   state.isfathing=false;
   state.currentuser.splice(
       state.currentuser.findIndex((item)=>item.id ===action.payload._id),1
   )
   console.log(state.currentuser)

    },
    deleteterror:(state)=>{
        state.error=true;

    }

    
})

export const { getState,productsuccess,geterror,deleteState,deletesuccess,deleteterror} = productLice.actions

export default  productLice.reducer