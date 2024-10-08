import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function PageNotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timer = setTimeout(() => {
            router.back(); // Przekierowanie do poprzedniej strony
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [router]);

    return (
        <div className='not-found-container'>
            <h2>404 - Page Not Found</h2>
            <h6>
                You will be redirected back in {countdown} second
                {countdown !== 1 ? 's' : ''}...
            </h6>
            <p className='not-found-brand'>MUSTHAVE</p>
        </div>
    );
}

export default PageNotFound;
