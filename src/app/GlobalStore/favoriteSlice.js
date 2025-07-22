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
            const exists = state.favItemsList.some(
                (item) =>
                    item.uniqueProductID === action.payload.uniqueProductID
            );

            if (!exists) {
                state.favItemsList.push(action.payload);
            }
        },
        removeFavoriteItem: (state, action) => {
            // Remove by uniqueProductID
            state.favItemsList = state.favItemsList.filter(
                (item) => item.uniqueProductID !== action.payload
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
