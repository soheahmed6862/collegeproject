import { createSlice, } from '@reduxjs/toolkit'

export const productSlice = createSlice({

    name:"product",
    initialState:{
        products:[],
        isfathing:false,
        error:false,
    },    

    reducers:{
        getProductState:(state) =>{
             console.log(state)
            state.isfathing=true;
            state.error=false;
        },
        getProductSuccessState:(action,state) =>{
            state.isfathing=false;
         state.products=action.payload 
           console.log(action.payload )
        },
        getfailerState:(state) =>{
           state.isfathing=false;
            state.error=true;
        }
    }

})

export const {getProductState, getProductSuccessState,getfailerState} =productSlice.actions
export default productSlice.reducer