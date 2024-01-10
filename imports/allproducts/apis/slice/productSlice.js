import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    singleProduct: null,
  },
  reducers: {
    getProduct(state, action) {
      state.products = action.payload;
    },
    getSingleProduct(state, action) {
      state.singleProduct = action.payload;
    },
  },
});

export const { getProduct, getSingleProduct } = productSlice.actions;

export default productSlice.reducer;
