import React, { useEffect } from 'react';
import Image from 'next/image';
import './header.scss';

import { Icon } from '@iconify/react';

import { motion } from 'motion/react';

import Navbar from '../Navbar/Navbar';
import { useNewsletterStore } from '@/store/useNewsletterStore';

function Header() {
    const isModalOpen = useNewsletterStore((state) => state.isModalOpen);
    const wasModalShown = useNewsletterStore((state) => state.wasModalShown);
    const openModal = useNewsletterStore((state) => state.openModal);
    const closeModal = useNewsletterStore((state) => state.closeModal);

    const handleNewsletterModalClose = () => closeModal();

    //* OPEN modal after 8sec
    useEffect(() => {
        if (!wasModalShown) {
            const modalTimeout = setTimeout(() => {
                openModal();
            }, 8000);

            return () => clearTimeout(modalTimeout);
        }
    }, [wasModalShown, openModal]);

    const handleSubmitModal = (e) => {
        e.preventDefault();
        if (document.querySelector('#modalInput').value) {
            handleNewsletterModalClose();
        }
    };

    const fadeIn = {
        initial: { opacity: 0 },
        animate: (index) => ({
            opacity: 1,
            transition: {
                duration: 0.225,
                type: 'inertia',
                type: 'easeIn',
                velocity: 100,
                delay: 3.5 + index * 0.5, //opóźnienie (3.75s) + indywidualne opóźnienie (index * 0.5)
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
            <Navbar />

            <div className='header-video-container'>
                <video
                    //preload
                    suppressHydrationWarning
                    preload='auto'
                    poster='/aboutCompany2.jpg'
                    playsInline
                    autoPlay
                    loop
                    muted
                    disablePictureInPicture
                    controlsList='nodownload nofullscreen noremoteplayback'
                    aria-label='Video player'
                >
                    <source src={'/intro.mp4'} type='video/mp4' />
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
                        )
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
                </div>

                <div
                    className='scroll_down'
                    onClick={() => (document.location.href = '/items')}
                >
                    <p>
                        EXPLORE THE SHOP
                        <Icon
                            icon='material-symbols:chevron-right-rounded'
                            className='icon'
                        />
                    </p>
                </div>

                <div className='logo'>
                    <p>MUSTHAVE</p>
                </div>
            </div>

            {isModalOpen && (
                <div id='mailing__modal'>
                    <p className='close' onClick={handleNewsletterModalClose}>
                        <Icon icon='material-symbols:close' />
                    </p>

                    <div className='modal_image-wrapper'>
                        <Image
                            src='/images/blackHoodie2.jpg'
                            height={350}
                            width={350}
                            alt='product thumbnail'
                        />
                        <Image
                            src='/instaGallery6.jpg'
                            height={350}
                            width={350}
                            alt='product thumbnail'
                        />
                    </div>

                    <div className='modal_info-wrapper'>
                        <h2 className='modal_heading'>Join our mailing list</h2>
                        <p className='modal_description'>
                            Sign up for exclusive updates, new arrivals &
                            insider-only discounts and get <span>15%</span> off
                            your first order!
                        </p>
                        <form onSubmit={handleSubmitModal}>
                            <label>
                                <input
                                    id='modalInput'
                                    type='email'
                                    placeholder='Enter your email address'
                                />
                                <input
                                    className='modalButton'
                                    type='submit'
                                    value='SUBMIT'
                                />
                                <p className='modal_rules'>
                                    *By submitting this form, you consent to
                                    receive our Newsletter and agree to our
                                    <span> Privacy Policy.</span>
                                </p>
                            </label>
                        </form>
                        <div className='modal__icons'>
                            <Icon icon='lucide:instagram' className='icon' />
                            <Icon icon='si:twitter-fill' className='icon' />
                            <Icon
                                icon='tdesign:logo-youtube-filled'
                                className='icon'
                            />
                            <Icon
                                icon='akar-icons:tiktok-fill'
                                className='icon'
                            />
                        </div>
                    </div>
                </div>
            )}

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
