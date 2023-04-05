import { createSlice } from '@reduxjs/toolkit';
import { loginUser, fetchUser } from './userActions';

const initialState = {
    user: null,
    status: 'idle',
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = action.payload;
                state.error = action.error.message;
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })         
    }
});

export const { actions } = userSlice;
export default userSlice.reducer;