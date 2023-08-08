import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import userSlice from "./userSlice";
import filterSlice from "./filterSlice";
import favoriteSlice from "./favoriteSlice";


export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    logins:loginSlice,
    users:userSlice,
    filters:filterSlice,
    favorites:favoriteSlice
  },
});
