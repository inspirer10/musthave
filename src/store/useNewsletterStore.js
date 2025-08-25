import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNewsletterStore = create(
    persist(
        (set) => ({
            isModalOpen: false,
            wasModalShown: false,
            openModal: () => set({ isModalOpen: true, wasModalShown: true }),
            closeModal: () => set({ isModalOpen: false }),
        }),
        {
            name: 'musthave-newsletter',
            getStorage: () => sessionStorage,
        }
    )
);
