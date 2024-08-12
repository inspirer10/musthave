import React, { useState } from 'react';

import { FaFacebookF, FaTiktok, FaPinterest, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { MdOutlineClose } from 'react-icons/md';
import Navbar from './Navbar';

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [timesModalHasShown, setTimesModalHasShown] = useState(0);

    const modalTimeout = setTimeout(() => {
        setTimesModalHasShown(1);
        setShowModal(true);
    }, 5000);

    if (timesModalHasShown > 0) {
        clearTimeout(modalTimeout);
    }

    const handleSubmitModal = (e) => {
        if (document.querySelector('#modalInput').value) {
            e.preventDefault();
            setShowModal(false);
        } else {
            e.preventDefault();
        }
    };

    return (
        <header>
            <Navbar />

            <div className='header-video-container'>
                <video
                    className='NAZWA-KLASY'
                    playsinline='true'
                    autoPlay='true'
                    loop='true'
                    muted='true'
                    disablepictureinpicture='true'
                    //preload
                    controlslist='nodownload nofullscreen noremoteplayback'
                >
                    <source src={'/oceanVideo.mp4'} type='video/mp4' />
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

            {showModal && (
                <div id='mailing__modal'>
                    <p className='close' onClick={() => setShowModal(false)}>
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
