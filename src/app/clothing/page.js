'use client';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/footer.scss';

import { useEffect } from 'react';
import ClothingSubpage from '../Components/ClothingSubpage';

export default function Clothing() {
    useEffect(() => {
        document.title = `MUSTHAVE | Clothing`;
    }, []);

    return (
        <>
            <ClothingSubpage />
        </>
    );
}
