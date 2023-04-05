import { createSlice } from '@reduxjs/toolkit';
import { fetchOrderList, fetchOneOrder, createOrder } from './orderActions';

const initialState = {
    orderList: null,
    order: null,
    status: 'idle',
    error: null
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderList.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchOrderList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orderList = action.payload;
            })
            .addCase(fetchOrderList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchOneOrder.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchOneOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.order = action.payload;
            })
            .addCase(fetchOneOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createOrder.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = action.payload;
                state.error = action.error.message;
            })
    }
});

export const { actions } = orderSlice;
export default orderSlice.reducer;