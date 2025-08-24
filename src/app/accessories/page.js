'use client';

import AccessoriesSubpage from '@/components/AccessoriesSubpage';
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
