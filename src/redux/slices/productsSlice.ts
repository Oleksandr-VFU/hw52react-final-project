import type { RootState } from "../store";
import type { ProductInterface } from "../../types/Product.Interface";
import createFetchSlice from "./createFetchSlice";


const productsSlice = createFetchSlice<ProductInterface>('products');
export const fetchAllProducts = productsSlice.fetchThunk;
export const selectProducts = (state: RootState) => state.products.data;
export const selectProductsLoading = (state: RootState) => state.products.isLoading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectProductsTotalCount = (state: RootState) => state.products.totalCount;

export default productsSlice.reducer;