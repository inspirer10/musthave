import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate(-1);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [navigate]);

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
