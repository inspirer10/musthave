'use client';

import { useEffect } from 'react';
import FavoritesSubpage from '../Components/FavoritesSubpage';

import '../styles/header.scss';
import '../styles/footer.scss';

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
