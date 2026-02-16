import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useNewsletterStore } from '@/store/useNewsletterStore';

function NewsletterModal() {
    const closeModal = useNewsletterStore((state) => state.closeModal);
    const isModalOpen = useNewsletterStore((state) => state.isModalOpen);
    const scrollPositionRef = React.useRef(0);
    const [email, setEmail] = useState('');
    const preventScroll = React.useCallback(
        (e) => {
            if (isModalOpen) {
                e.preventDefault();
            }
        },
        [isModalOpen]
    );

    useEffect(() => {
        if (typeof window === 'undefined') return;

        if (isModalOpen) {
            scrollPositionRef.current = window.scrollY;

            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100%';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
            document.body.style.paddingRight = '8px';
            document.addEventListener('wheel', preventScroll, {
                passive: false,
            });
            document.addEventListener('touchmove', preventScroll, {
                passive: false,
            });
        } else {
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.paddingRight = '';
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);

            window.scrollTo({
                top: scrollPositionRef.current,
                behavior: 'smooth',
            });
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.paddingRight = '';
            document.removeEventListener('wheel', preventScroll);
            document.removeEventListener('touchmove', preventScroll);
        };
    }, [isModalOpen, preventScroll]);

    if (!isModalOpen) return null;

    const handleNewsletterModalClose = () => {
        closeModal();
        setEmail('');
    };

    const handleSubmitModal = (e) => {
        e.preventDefault();
        if (email.trim()) {
            handleNewsletterModalClose();
            setEmail('');
        }
    };

    return (
        <>
            {/* Backdrop - dla blokowania scrolla */}
            <div
                className='modal-backdrop'
                onClick={handleNewsletterModalClose}
            />

            <section id='mailing__modal'>
                <p className='close' onClick={handleNewsletterModalClose}>
                    <Icon icon='material-symbols:close' />
                </p>

                <div className='modal_image-wrapper'>
                    <Image
                        src='/images/blackHoodie2.jpg'
                        height={300}
                        width={250}
                        quality={90}
                        alt='featured black hoodie from the latest collection'
                    />
                    <Image
                        src='/instaGallery6.jpg'
                        height={300}
                        width={250}
                        quality={90}
                        alt='MUSTHAVE lifestyle editorial photo'
                    />
                </div>

                <div className='modal_info-wrapper'>
                    <h2 className='modal_heading'>Join our mailing list</h2>
                    <p className='modal_description'>
                        Sign up for exclusive updates, new arrivals &
                        insider-only discounts and get <span>15%</span> off your
                        first order!
                    </p>
                    <form onSubmit={handleSubmitModal}>
                        <label>
                            <input
                                id='modalInput'
                                type='email'
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='modalButton'
                                type='submit'
                                value='SUBMIT'
                            />
                            <p className='modal_rules'>
                                *By submitting this form, you consent to receive
                                our Newsletter and agree to our
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
                        <Icon icon='akar-icons:tiktok-fill' className='icon' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewsletterModal;
