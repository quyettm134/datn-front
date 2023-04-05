import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchOneProduct } from "./productActions";

const initialState = {
    products: null,
    product: null,
    status: 'idle',
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchOneProduct.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchOneProduct.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.product = action.payload;
            })
            .addCase(fetchOneProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { actions } = productSlice;
export default productSlice.reducer;