import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slices/ProductSlice";

export const Store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});
