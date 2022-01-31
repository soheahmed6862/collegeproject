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
    }
})

export const { getState,productsuccess,geterror } = productLice.actions

export default  productLice.reducer