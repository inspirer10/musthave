import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'motion/react';
import './header.scss';
import { useNewsletterStore } from '@/store/useNewsletterStore';
import NewsletterModal from '../NewsletterModal/NewsletterModal';
import Link from 'next/link';

function Header() {
    const isModalOpen = useNewsletterStore((state) => state.isModalOpen);
    const wasModalShown = useNewsletterStore((state) => state.wasModalShown);
    const openModal = useNewsletterStore((state) => state.openModal);

    //* OPEN modal after 8.5 sec
    useEffect(() => {
        if (!wasModalShown) {
            const modalTimeout = setTimeout(() => {
                openModal();
            }, 8500);

            return () => clearTimeout(modalTimeout);
        }
    }, [wasModalShown, openModal]);

    const fadeIn = {
        initial: { opacity: 0 },
        animate: (index) => ({
            opacity: 1,
            transition: {
                duration: 0.225,
                type: 'inertia',
                type: 'easeIn',
                velocity: 100,
                delay: 3.5 + index * 0.5, //opóźnienie (3.5s) + indywidualne opóźnienie (index * 0.5)
            },
        }),
    };

    const fadeInDescription = {
        initial: { opacity: 0 },
        animate: () => ({
            opacity: 1,
            transition: {
                duration: 0.2,
                type: 'inertia',
                type: 'easeIn',
                velocity: 100,
                delay: 5.5,
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
                            <motion.h3
                                key={index}
                                variants={fadeIn}
                                initial='initial'
                                whileInView='animate'
                                viewport={{ once: true }}
                                custom={index} // Przekazanie indeksu dla opóźnienia
                            >
                                {text}
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
                        — delivering high-quality clothing to customers across
                        the globe
                    </motion.p>

                    <motion.button
                        variants={fadeInDescription}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        whileHover={{
                            color: '#f6f6f6',
                            backgroundColor: 'rgba(250, 250, 250, 0.15)',
                            borderColor: 'rgba(250, 250, 250, 0.4)',
                            backdropFilter: 'blur(10px)',
                            transition: {
                                duration: 0.275,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }} // hover ze SCSS przepisany do whileHover
                        animate={{
                            backgroundColor: 'rgba(250, 250, 250, 0.05)',
                            color: 'rgba(250, 250, 250, 0.75)',
                            backdropFilter: 'blur(5px)',
                            transition: {
                                duration: 0.275,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }} // domyślny/po wejściu w viewport stan
                        className='button'
                    >
                        Future of your wardrobe
                    </motion.button>
                </div>

                <Link className='scroll_down' href='/items'>
                    <p>
                        EXPLORE THE SHOP
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
