'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    // totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
            //state.totalPrice += action.payload.price;
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            //state.totalPrice -= action.payload.price;
        },
        clearCart: (state) => {
            state.items = [];
            //state.totalPrice = 0;
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
