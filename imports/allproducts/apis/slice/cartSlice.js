import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  handleAddToCartApi,
  handleDeleteFromCartApi,
  handleRemoveFromCartApi,
} from "../api/api";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (param, { rejectWithValue }) => {
    const { id, token, setShowCart } = param;
    try {
      if (token) {
        const response = await handleAddToCartApi(id, token);
        setShowCart(true);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartIncrement = createAsyncThunk(
  "cart/cartIncrement",
  async (param, { rejectWithValue }) => {
    const { id, token, updateCartItemQuantity } = param;
    try {
      const response = await handleAddToCartApi(id, token);
      const quantity = response?.cartItem?.quantity;
      updateCartItemQuantity(id, quantity);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartDecrement = createAsyncThunk(
  "cart/cartDecrement",
  async (param, { rejectWithValue }) => {
    const { id, token, updateCartItemQuantity } = param;
    try {
      const response = await handleRemoveFromCartApi(id, token);
      const productId = response?.cartItem?.productId;
      const quantity = response?.cartItem?.quantity;
      updateCartItemQuantity(productId, quantity);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cartDelete = createAsyncThunk(
  "cart/cartDelete",
  async (param, { rejectWithValue }) => {
    const { id, token, updateCartItem } = param;
    try {
      const response = await handleDeleteFromCartApi(id, token);
      updateCartItem(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    allCart: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getAllCart(state, action) {
      state.allCart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addToCart.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(cartIncrement.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cartIncrement.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(cartIncrement.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(cartDecrement.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cartDecrement.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(cartDecrement.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(cartDelete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(cartDelete.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(cartDelete.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { getAllCart } = cartSlice.actions;

export default cartSlice.reducer;
