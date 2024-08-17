'use client';

import ClothingSubpage from '../Components/ClothingSubpage';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/footer.scss';
import { useEffect } from 'react';

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
