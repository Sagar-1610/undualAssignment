import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchProductData = createAsyncThunk(
  "product/fetchProductData",
  async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=0`);
      return response.json();
    } catch (e) {
      throw e;
    }
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    filteredItem: [],
    total: 0,
    currentPage: 1,
    itemsPerPage: 10,
    loading: false,
    error: null,
  },
  reducers: {
    filterProduct: (state, action) => {
      state.filteredItem = state.items.filter(
        (product) => product.category === action.payload
      );
    },
    resetFilterProduct: (state) => {
      state.filteredItem = [];
    },
    prev: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    Next: (state) => {
      if (state.currentPage < state.total) {
        state.currentPage += 1;
      }
    },
    setCurrent: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(FetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { filterProduct, resetFilterProduct, prev, Next, setCurrent } =
  ProductSlice.actions;
export default ProductSlice.reducer;
