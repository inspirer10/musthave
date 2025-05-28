import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa';

function Footer() {
    return (
        <footer id='main__footer'>
            <div className='footer_content-container'>
                <div className='footer_content-wrapper'>
                    <div className='footer__links'>
                        <div className='wrapper'>
                            <p>Company</p>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </div>
                        <div className='wrapper'>
                            <p>Services</p>
                            <li>Size Guide</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                        </div>
                        <div className='wrapper'>
                            <p>Help</p>
                            <li>Support</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </div>
                        <div className='wrapper'>
                            <p>Stay connected</p>
                            <div className='social_icons'>
                                <FaInstagram className='icon' />
                                <FaTwitter className='icon' />
                                <FaYoutube className='icon' />
                                <FaTiktok className='icon' />
                            </div>
                        </div>
                    </div>
                    <p
                        className='brand'
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    >
                        MUSTHAVE
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
