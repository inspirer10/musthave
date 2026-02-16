import React from 'react';
import { Icon } from '@iconify/react';

import './footer.scss';

function Footer() {
    return (
        <footer id='main__footer'>
            <div className='footer_content-container'>
                <div className='footer_content-wrapper'>
                    <div className='footer__links'>
                        <ul className='wrapper'>
                            <p>Company</p>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </ul>
                        <ul className='wrapper'>
                            <p>Services</p>
                            <li>Size Guide</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                        </ul>
                        <ul className='wrapper'>
                            <p>Help</p>
                            <li>Support</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <div className='wrapper'>
                            <p>Stay connected</p>
                            <div className='social_icons'>
                                <Icon
                                    icon='lucide:instagram'
                                    className='icon'
                                />
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
