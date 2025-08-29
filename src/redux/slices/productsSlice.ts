import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { ProductInterface } from "../../types/Product.Interface";
import { createFetchThunk } from "./createFetchThunk";

const initialState = {
    products: [] as ProductInterface[],
    isLoading: false,
    error: null as string | null
}

export const fetchAllProducts = createFetchThunk<ProductInterface>('products/fetchAllProducts');

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                if (action.payload && typeof action.payload === 'object' && 'message' in action.payload) {
                    state.error = (action.payload as { message: string }).message;
                } else if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.error = 'An unknown error occurred';
                }
            });
    }
})

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsLoading = (state: RootState) => state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;

export default productsSlice.reducer;