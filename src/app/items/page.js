'use client';

import ItemsSubpage from '../Components/ItemsSubpage';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/footer.scss';
import { useEffect } from 'react';

export default function Items() {
    useEffect(() => {
        document.title = `MUSTHAVE | Items`;
    }, []);

    return (
        <>
            <ItemsSubpage />
        </>
    );
}
