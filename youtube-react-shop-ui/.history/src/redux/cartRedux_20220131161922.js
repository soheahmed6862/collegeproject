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
      console.log(action)
      state.quantity += 1;
      state.products.push(action.payload);
      console.log(state.products)
      state.total += action.payload.price * action.payload.quantity;
      console.log(state.total )
    },

    removeproduct:(state, action)=>{

console.log(action.payload)
console.log(state.products)

    }
 
  },
});

export const { addProduct, removeproduct } = cartSlice.actions;
export default cartSlice.reducer;
