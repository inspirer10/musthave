'use client';

/*
export default function StoreProvider({ children }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        //storeRef.current.dispatch(initializeCount(count));
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
} */

// src/GlobalStore/StoreProvider.js

import { Provider } from 'react-redux';
import { store } from './store.js';

const StoreProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
