import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalPrice: 0,
};

// Sprawdzanie lokalnego przechowywania i ustawianie stanu początkowego
const cartFromLocalStorage =
    localStorage.getItem('cartItems') !== null
        ? JSON.parse(localStorage.getItem('cartItems'))
        : initialState;

export const productsCard = createSlice({
    name: 'cart',
    initialState: cartFromLocalStorage,
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
            state.totalPrice += action.payload.price;
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.cart = state.cart.filter(
                (product) => product.id !== itemToRemove.id
            );
            state.totalPrice -= itemToRemove.price;
            localStorage.setItem('cartItems', JSON.stringify(state));
        },
        clearItems: (state) => {
            state.cart = [];
            state.totalPrice = 0;
            localStorage.removeItem('cartItems');
        },
    },
});

export const { addItem, removeItem, clearItems } = productsCard.actions;

export default productsCard.reducer;
//???
store.subscribe(() => {
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
});
