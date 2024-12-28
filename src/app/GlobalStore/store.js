'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // domyślne local storage
import sessionStorage from 'redux-persist/lib/storage/session'; // dla sessionStorage

import allProductsReducer from './allProductsSlice';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';
import newsletterReducer from './newsletterSlice';

// Konfig dla LocalStor (WSZYSTKIE PRODUKTY - do obsługi zmiany stanu isFavorite: false || true)
const allProductsListPersistConfig = {
    key: 'allProductsList', // klucz, pod którym stan będzie przechowywany w local storage
    storage: storage, // localStorage
};

// Konfiguracja dla LocalStorage (koszyk produktów do zakupu)
const cartPersistConfig = {
    key: 'cart', // klucz, pod którym stan będzie przechowywany w local storage
    storage: storage, // localStorage
};

// Konfiguracja dla LocalStorage (LISTA ULUBIONYCH PRODUKTÓW)
const favoritePersistConfig = {
    key: 'favorite', // klucz, pod którym stan będzie przechowywany w local storage
    storage: storage, // localStorage
};

// Konfiguracja dla sessionStorage (modal newslettera - zarządzanie pokazywaniem)
const newsletterPersistConfig = {
    key: 'newsletter', // klucz, pod którym stan będzie przechowywany w session storage
    storage: sessionStorage, // sessionStorage
};

const rootReducer = combineReducers({
    allProducts: persistReducer(
        allProductsListPersistConfig,
        allProductsReducer
    ),
    cart: persistReducer(cartPersistConfig, cartReducer),
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    newsletter: persistReducer(newsletterPersistConfig, newsletterReducer),
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);

export default store;
