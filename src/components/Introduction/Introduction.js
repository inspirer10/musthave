import React from 'react';
import { motion } from 'framer-motion';

import './introduction.scss';

function Introduction() {
    const slideUp = {
        initial: {
            y: '0',
        },
        exit: {
            y: '-100vh',
            transition: {
                duration: 0.45,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
            },
        },
    };

    return (
        <>
            <motion.div
                variants={slideUp}
                initial='initial'
                exit='exit'
                className='introduction-page'
            >
                <div className='typing-effect'>
                    <span className='text'>Because you deserve the best</span>
                </div>
                <h2>MUSTHAVE</h2>
                <h2>MUSTHAVE</h2>
                <h2>MUSTHAVE</h2>
            </motion.div>
        </>
    );
}

export default Introduction;
