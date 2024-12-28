'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favItemsList: [],
    // totalPrice: 0,
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavoriteItem: (state, action) => {
            state.favItemsList.push(action.payload);
            //state.totalPrice += action.payload.price;
        },
        removeFavoriteItem: (state, action) => {
            state.favItemsList = state.favItemsList.filter(
                (item) => item.photo !== action.payload
            );
            //state.totalPrice -= action.payload.price;
        },
        clearFavList: (state) => {
            state.favItemsList = [];
            //state.totalPrice = 0;
        },
    },
});

export const { addFavoriteItem, removeFavoriteItem, clearFavList } =
    favoriteSlice.actions;
export default favoriteSlice.reducer;
