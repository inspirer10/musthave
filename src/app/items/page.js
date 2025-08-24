'use client';

import { useEffect } from 'react';
import ItemsSubpage from '@/components/ItemsSubpage';

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
