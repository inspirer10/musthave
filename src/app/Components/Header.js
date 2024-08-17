import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../GlobalStore/newsletterSlice';
import { FaFacebookF, FaTiktok, FaPinterest, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineClose } from 'react-icons/md';
import Navbar from './Navbar';

function Header() {
    const modalOpenStateFromSessionStorage = useSelector(
        (state) => state.newsletter.isOpen
    );
    const hasModalBeenShown = useSelector(
        (state) => state.newsletter.wasModalShown
    );
    const dispatch = useDispatch();

    // const [showModal, setShowModal] = useState(false);
    // const [timesModalHasShown, setTimesModalHasShown] = useState(0);
    //const handleNewsletterModalOpen = () => dispatch(openModal());

    const handleNewsletterModalClose = () => dispatch(closeModal());

    //* OPEN modal after 8sec
    useEffect(() => {
        if (!hasModalBeenShown) {
            // Jeśli nie był, ustaw timer do otwarcia modala
            const modalTimeout = setTimeout(() => {
                dispatch(openModal());
                // Zapisz w sessionStorage, że modal został otwarty
                // sessionStorage.setItem('modalShown', 'true');
            }, 8000);

            return () => clearTimeout(modalTimeout);
        }
    }, [dispatch]);

    const handleSubmitModal = (e) => {
        e.preventDefault();
        if (document.querySelector('#modalInput').value) {
            handleNewsletterModalClose();
        }
    };

    return (
        <header>
            <Navbar />

            <div className='header-video-container'>
                <video
                    playsinline='true'
                    autoPlay='true'
                    loop='true'
                    muted='true'
                    disablepictureinpicture='true'
                    //preload
                    controlslist='nodownload nofullscreen noremoteplayback'
                >
                    <source src={'/video5.mp4'} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

                <div className='header__video__text'>
                    <h2>
                        HELLO SUMMER<i>'</i> 24
                    </h2>
                    <p>Minimal & Comfort</p>
                    <button onClick={() => (document.location.href = '/items')}>
                        EXPLORE THE SHOP
                    </button>
                </div>
            </div>

            {modalOpenStateFromSessionStorage && (
                <div id='mailing__modal'>
                    <p className='close' onClick={handleNewsletterModalClose}>
                        <MdOutlineClose />
                    </p>

                    <div>
                        <h2 className='modal_heading'>Join our mailing list</h2>
                        <p className='modal_description'>
                            Sign up for exclusive updates, new arrivals &
                            insider-only discounts and get <span>15%</span> off
                            your first order!
                        </p>
                    </div>

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
                        </label>
                    </form>

                    <div className='modal__icons'>
                        <i>
                            <GrInstagram size={22.5} />
                        </i>
                        <i>
                            <FaTwitter size={22.5} />
                        </i>
                        <i>
                            <FaFacebookF size={22.5} />
                        </i>
                        <i>
                            <FaPinterest size={22.5} />
                        </i>
                        <i>
                            <FaTiktok size={22.5} />
                        </i>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
