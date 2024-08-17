'use client';

import ShoesSubpage from '../Components/ShoesSubpage';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/footer.scss';
import { useEffect } from 'react';

export default function Shoes() {
    useEffect(() => {
        document.title = `MUSTHAVE | Shoes`;
    }, []);

    return (
        <>
            <ShoesSubpage />
        </>
    );
}
