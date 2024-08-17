'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // domyślne local storage
import sessionStorage from 'redux-persist/lib/storage/session'; // dla sessionStorage
import cartReducer from './cartSlice';
import newsletterReducer from './newsletterSlice';

// Konfiguracja dla localStorage (koszyk)
const cartPersistConfig = {
    key: 'cart', // klucz, pod którym stan będzie przechowywany w local storage
    storage: storage, // localStorage
};

// Konfiguracja dla sessionStorage (modal newslettera)
const newsletterPersistConfig = {
    key: 'newsletter',
    storage: sessionStorage, // sessionStorage
};

const rootReducer = combineReducers({
    cart: persistReducer(cartPersistConfig, cartReducer),
    newsletter: persistReducer(newsletterPersistConfig, newsletterReducer),
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);

export default store;
