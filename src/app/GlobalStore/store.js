'use client';

import { configureStore } from '@reduxjs/toolkit';
//import { createWrapper } from 'next-redux-wrapper';
import cartReducer from './cartSlice.js';

/*
const makeStore = () =>
    configureStore({
        reducer: {
            productsCart: cartReducer,
        },
    });

export const wrapper = createWrapper(makeStore);


export function makeStore() {
    return configureStore({
        reducer: {
            productsCart: cartReducer,
        },
    });
}

export const store = makeStore();
*/

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
