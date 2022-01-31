import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({

    name:"product",
    initialState:{
        products:[],
        isfathing:false,
        error:false,
    },    

    reducers:{
        getProductState:(state) =>{

            state.isfathing=true;
            state.error=false;
        },
        getProductSuccessState:(action,state) =>{
         state.isfathing=false;

        },
        getfailerState:(state) =>{

            state.error=true;
        }
    }

})