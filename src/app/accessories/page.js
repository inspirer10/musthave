'use client';

import AccessoriesSubpage from '../Components/AccessoriesSubpage';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/footer.scss';
import { useEffect } from 'react';

export default function Accessories() {
    useEffect(() => {
        document.title = `MUSTHAVE | Accessories`;
    }, []);

    return (
        <>
            <AccessoriesSubpage />
        </>
    );
}
