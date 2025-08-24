'use client';

import { useEffect } from 'react';
import ClothingSubpage from '@/components/ClothingSubpage';

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
