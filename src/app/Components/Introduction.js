import React from 'react';

import { motion } from 'framer-motion';

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
        <motion.div
            variants={slideUp}
            initial='initial'
            exit='exit'
            className='introduction-page'
        >
            <h1>MUSTHAVE</h1>
            <h1 className='second-heading'>MUSTHAVE</h1>
        </motion.div>
    );
}

export default Introduction;
