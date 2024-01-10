import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categorySlice";
import productReducer from "../slice/productSlice";
import cartReducer from "../slice/cartSlice";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
