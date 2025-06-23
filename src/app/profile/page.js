'use client';

import '../styles/header.scss';
import '../styles/productCategory.scss';
import '../styles/profileSubpage.scss';
import '../styles/footer.scss';

import { useEffect } from 'react';
import ProfileSubpage from './ProfileSubpage';

export default function Profile() {
    useEffect(() => {
        document.title = `Your Profile | MUSTHAVE`;
    }, []);

    return (
        <>
            <ProfileSubpage />
        </>
    );
}
