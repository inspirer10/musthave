import { configureStore } from '@reduxjs/toolkit';
import productsCard from './productsCardSlice';

export const store = configureStore({
    reducer: {
        productsCard: productsCard,
    },
});
