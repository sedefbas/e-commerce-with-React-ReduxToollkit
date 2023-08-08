import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productsDetails: [],
  productsDetailsStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

export const getCategoryProduct = createAsyncThunk("getCategoryProduct", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
});

export const getProductDetail = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      .addCase(getProductDetail.pending, (state, action) => {
        state.productsDetailsStatus = STATUS.LOADING;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productsDetailsStatus = STATUS.SUCCESS;
        state.productsDetails = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.productsDetailsStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProduct.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProduct.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getCategoryProduct.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
  },
});

export default productSlice.reducer;
