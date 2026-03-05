import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import './introduction.scss';

const TAGLINE_TEXT = 'You deserve the best';
const TYPING_STEP_MS = 55;
const INITIAL_VISIBLE_CHARS = 1;
const TAGLINE_HOLD_MS = 420;
const TAGLINE_FADE_MS = 220;
const BRAND_STAGGER_MS = 200;
const BRAND_ANIM_MS = 520;
const EXIT_BUFFER_MS = 220;
const BRAND_REVEAL_TOTAL_MS =
    BRAND_ANIM_MS + BRAND_STAGGER_MS * 2 + EXIT_BUFFER_MS;

const BRAND_LAYERS = [
    // Keep original visual order: 3rd layer appears first, then 2nd, then 1st.
    { className: 'brand-layer brand-layer--tertiary' },
    { className: 'brand-layer brand-layer--secondary' },
    { className: 'brand-layer brand-layer--primary' },
];

function Introduction({ onComplete }) {
    const hasCompletedRef = useRef(false);
    const [charIndex, setCharIndex] = useState(
        Math.min(INITIAL_VISIBLE_CHARS, TAGLINE_TEXT.length),
    );
    const [stage, setStage] = useState('typing');

    useEffect(() => {
        if (stage !== 'typing') {
            return;
        }

        if (charIndex >= TAGLINE_TEXT.length) {
            const transitionTimeout = setTimeout(() => {
                setStage('hold');
            }, 0);

            return () => {
                clearTimeout(transitionTimeout);
            };
        }

        const typingTimeout = setTimeout(() => {
            setCharIndex((currentIndex) =>
                Math.min(currentIndex + 1, TAGLINE_TEXT.length),
            );
        }, TYPING_STEP_MS);

        return () => {
            clearTimeout(typingTimeout);
        };
    }, [charIndex, stage]);

    useEffect(() => {
        if (stage !== 'hold') {
            return;
        }

        const holdTimeout = setTimeout(() => {
            setStage('fade');
        }, TAGLINE_HOLD_MS);

        return () => {
            clearTimeout(holdTimeout);
        };
    }, [stage]);

    useEffect(() => {
        if (stage !== 'fade') {
            return;
        }

        const revealTimeout = setTimeout(() => {
            setStage('brand');
        }, TAGLINE_FADE_MS);

        return () => {
            clearTimeout(revealTimeout);
        };
    }, [stage]);

    useEffect(() => {
        if (typeof onComplete !== 'function') {
            return;
        }

        if (stage !== 'brand') {
            return;
        }

        const timeout = setTimeout(() => {
            if (hasCompletedRef.current) {
                return;
            }

            hasCompletedRef.current = true;
            onComplete();
        }, BRAND_REVEAL_TOTAL_MS);

        return () => {
            clearTimeout(timeout);
        };
    }, [onComplete, stage]);

    const slideUp = {
        initial: {
            y: '0%',
        },
        exit: {
            y: '-100%',
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const tagline = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: -10,
            transition: {
                duration: TAGLINE_FADE_MS / 1000,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const typedText = TAGLINE_TEXT.slice(0, charIndex);
    const isTaglineVisible = stage !== 'brand';
    const isBrandVisible = stage === 'brand';

    const brandLayer = {
        hidden: {
            opacity: 0,
            y: 24,
            filter: 'blur(4px)',
        },
        visible: (order = 0) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: BRAND_ANIM_MS / 1000,
                delay: (order * BRAND_STAGGER_MS) / 1000,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.32,
                ease: [0.33, 1, 0.68, 1],
            },
        },
    };

    return (
        <motion.div
            variants={slideUp}
            initial='initial'
            exit='exit'
            className='introduction-page'
            role='status'
            aria-label='Loading MUSTHAVE'
        >
            <motion.div
                className='typing-effect'
                variants={tagline}
                initial='visible'
                animate={isTaglineVisible ? 'visible' : 'hidden'}
            >
                <span className='text'>{typedText}</span>
            </motion.div>

            <div className='brand-stack' aria-hidden='true'>
                {BRAND_LAYERS.map((layer, index) => (
                    <motion.p
                        key={layer.className}
                        className={layer.className}
                        variants={brandLayer}
                        initial='hidden'
                        animate={isBrandVisible ? 'visible' : 'hidden'}
                        exit='exit'
                        custom={index}
                    >
                        MUSTHAVE
                    </motion.p>
                ))}
            </div>

            <span className='visually-hidden'>MUSTHAVE</span>
        </motion.div>
    );
}

export default Introduction;
