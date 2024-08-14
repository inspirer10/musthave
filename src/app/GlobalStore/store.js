'use client';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // domyślne local storage
import cartReducer from './cartSlice.js';

// Konfiguracja persystencji
const persistConfig = {
    key: 'root', // klucz, pod którym stan będzie przechowywany w local storage
    storage, // local storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        cart: persistedReducer,
    },
});

export const persistor = persistStore(store);

export default store;
