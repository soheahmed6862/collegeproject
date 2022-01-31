import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(state.products.push(action.payload))

      // state.quantity += 1;
      // state.products.push(action.payload);
      // state.total += action.payload.price * action.payload.quantity;
      // console.log(state)
    },
 
    removeProduct: (state, action) => {
    
    }

  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;