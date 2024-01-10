import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleFilterApi } from "../api/api";

export const fetchSubcategories = createAsyncThunk(
  "subcategory/fetchSubcategories",
  async (param, { rejectWithValue }) => {
    const { subcategory, id, dispatch, getSubcategory } = param;
    try {
      if (subcategory[0]?.categoryId !== id) {
        const response = await handleFilterApi(id);
        const subcategories = response?.category?.subcategories;
        dispatch(getSubcategory(subcategories));
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    allCategory: [],
    selectedCategoryId: null,
    subcategory: [],
    selectedSubcategory: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    getAllCategory(state, action) {
      state.allCategory = action.payload;
    },
    getSelectedCategoryId(state, action) {
      state.selectedCategoryId = action.payload;
    },
    getSubcategory(state, action) {
      state.subcategory = action.payload;
    },
    getSelectedSubcategory(state, action) {
      state.selectedSubcategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubcategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSubcategories.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchSubcategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  getAllCategory,
  getSelectedCategoryId,
  getSubcategory,
  getSelectedSubcategory,
} = categorySlice.actions;

export default categorySlice.reducer;
