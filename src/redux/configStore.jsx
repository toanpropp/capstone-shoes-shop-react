import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";
import userReducer from "./productReducer/userReducer";
export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
  },
});
