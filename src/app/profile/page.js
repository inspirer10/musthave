'use client';

import { useEffect } from 'react';
import ProfileSubpage from '@/components/ProfileSubpage/ProfileSubpage';

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
