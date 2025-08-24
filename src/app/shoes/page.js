'use client';

import { useEffect } from 'react';
//import ShoesSubpage from '../Components/ShoesSubpage';
import ShoesSubpage from '@/components/ShoesSubpage';

//import '../styles/header.scss';
//import '../styles/productCategory.scss';
//import '../styles/footer.scss';

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
