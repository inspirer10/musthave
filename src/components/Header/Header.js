import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';

import './header.scss';
import { useNewsletterStore } from '@/store/useNewsletterStore';
import NewsletterModal from '../NewsletterModal/NewsletterModal';

function Header({ isIntroLoading = false }) {
    const isModalOpen = useNewsletterStore((state) => state.isModalOpen);
    const wasModalShown = useNewsletterStore((state) => state.wasModalShown);
    const openModal = useNewsletterStore((state) => state.openModal);
    const [shouldRevealHeadline, setShouldRevealHeadline] = useState(false);

    //* OPEN modal after 8.5 sec
    useEffect(() => {
        if (!wasModalShown) {
            const modalTimeout = setTimeout(() => {
                openModal();
            }, 8500);

            return () => clearTimeout(modalTimeout);
        }
    }, [wasModalShown, openModal]);

    useEffect(() => {
        if (isIntroLoading || shouldRevealHeadline) {
            return;
        }

        // Keep headline reveal aligned with Introduction exit animation.
        const revealTimeout = setTimeout(() => {
            setShouldRevealHeadline(true);
        }, 700);

        return () => {
            clearTimeout(revealTimeout);
        };
    }, [isIntroLoading, shouldRevealHeadline]);

    const revealFromBottom = {
        initial: { y: '105%', opacity: 0 },
        animate: (index) => ({
            y: '0%',
            opacity: 1,
            transition: {
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.04 + index * 0.12,
            },
        }),
    };

    const fadeInDescription = {
        initial: { opacity: 0 },
        animate: () => ({
            opacity: 1,
            transition: {
                duration: 0.2,
                //ease: 'easeIn',
                ease: [0.25, 1, 0.5, 1],
                delay: 4.8,
            },
        }),
    };

    return (
        <header>
            <div className='header-video-container'>
                <video
                    suppressHydrationWarning
                    preload='auto'
                    //poster='/aboutCompany2.jpg'
                    poster='/perfectShirt/1.png'
                    playsInline
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    controlsList='nodownload nofullscreen noremoteplayback'
                    aria-label='Video player'
                >
                    <source src={'/musthave2.mp4'} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

                <div className='header__video__text'>
                    {['Where', 'minimalism', 'meets', 'comfort'].map(
                        (text, index) => (
                            <motion.h3 key={index} className='headline-line'>
                                <motion.span
                                    className='headline-line-inner'
                                    variants={revealFromBottom}
                                    initial='initial'
                                    animate={
                                        shouldRevealHeadline
                                            ? 'animate'
                                            : 'initial'
                                    }
                                    custom={index}
                                >
                                    {text}
                                </motion.span>
                            </motion.h3>
                        ),
                    )}

                    <motion.p
                        variants={fadeInDescription}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        className='intro'
                    >
                        MUSTHAVE offers products designed to make you stand out
                        and express your unique style. We stand for innovative
                        fashion that merges the newest trends with top-tier
                        quality.{' '}
                        <span>
                            Our vision includes expanding our brand worldwide
                        </span>{' '}
                        - delivering high-quality clothing to customers across
                        the globe
                    </motion.p>

                    <motion.button
                        variants={fadeInDescription}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        whileHover={{
                            color: 'rgba(255, 255, 255, 0.97)',
                            backgroundColor: 'rgba(250, 253, 255, 0.16)',
                            borderColor: 'rgba(221, 233, 255, 0.64)',
                            backdropFilter: 'blur(12px) saturate(145%)',
                            boxShadow:
                                '0 16px 34px rgba(0, 0, 0, 0.32), 0 0 0 1px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.68), inset 0 -1px 0 rgba(255, 255, 255, 0.12)',
                            y: -2,
                            transition: {
                                duration: 0.275,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }}
                        animate={{
                            backgroundColor: 'rgba(244, 248, 255, 0.08)',
                            color: 'rgba(250, 250, 250, 0.8)',
                            borderColor: 'rgba(214, 226, 255, 0.4)',
                            backdropFilter: 'blur(7px) saturate(130%)',
                            boxShadow:
                                '0 12px 30px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.55), inset 0 -1px 0 rgba(255, 255, 255, 0.1)',
                            y: 0,
                            transition: {
                                duration: 0.275,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }}
                        className='button'
                    >
                        Future of your wardrobe
                    </motion.button>
                </div>

                <Link className='scroll_down' href='/items'>
                    <p>
                        <span
                            className='scroll-label'
                            data-text='EXPLORE THE SHOP'
                        >
                            EXPLORE THE SHOP
                        </span>
                        <Icon
                            icon='material-symbols:chevron-right-rounded'
                            className='icon'
                        />
                    </p>
                </Link>

                <div className='logo'>
                    <p>MUSTHAVE</p>
                </div>
            </div>

            {isModalOpen && <NewsletterModal />}

            {/*    <div className='bottom_bar'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eligendi minus tempore, rerum itaque ex ipsam cum
                    accusamus eos odit sapiente impedit, maiores repudiandae
                    quos asperiores nihil.
                </p>
                <MdOutlineClose className='icon' />
            </div>*/}
        </header>
    );
}

export default Header;
