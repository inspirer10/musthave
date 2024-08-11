'use client';

{
    /*
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalPrice: 0,
};

// Sprawdzanie lokalnego przechowywania i ustawianie stanu początkowego

export const productsCard = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            state.products.push(action.payload);
            state.totalPrice += action.payload.price;
            //localStorage.setItem('cartItems', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.products = state.products.filter(
                (product) => product.id !== itemToRemove.id
            );
            state.totalPrice -= itemToRemove.price;
            //localStorage.setItem('cartItems', JSON.stringify(state));
        },
        clearItems: (state) => {
            state.products = [];
            state.totalPrice = 0;
            //localStorage.removeItem('cartItems');
        },
    },
});

export const { addItem, removeItem, clearItems } = productsCard.actions;

export default productsCard.reducer;
}

store.subscribe(() => {
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
});*/
}

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { name: 'Test 1', price: 109, id: '123XD' },
        { name: 'Test 2', price: 327, id: '321XD' },
    ],
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
