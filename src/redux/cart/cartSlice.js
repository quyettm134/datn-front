import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeItem(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        },
        updateQuantity(state, action) {
            const { itemId, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
            if (quantity === 0) {
                state.items = state.items.filter(item => item.id !== itemId);
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

