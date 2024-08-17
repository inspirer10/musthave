'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    wasModalShown: false,
};

const newsletterSlice = createSlice({
    name: 'newsletter',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
            state.wasModalShown = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const { openModal, closeModal } = newsletterSlice.actions;

export default newsletterSlice.reducer;
