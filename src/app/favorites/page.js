'use client';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/favoritesSubpage.scss';
import '../styles/footer.scss';

import { useEffect } from 'react';
import FavoritesSubpage from '../Components/FavoritesSubpage';

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
