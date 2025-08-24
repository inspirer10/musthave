'use client';

import { useEffect } from 'react';
import FavoritesSubpage from '@/components/FavoriteSubpage/FavoritesSubpage';

export default function Favorites() {
    useEffect(() => {
        document.title = `MUSTHAVE | Favorite products`;
    }, []);

    return (
        <>
            <FavoritesSubpage />
        </>
    );
}
