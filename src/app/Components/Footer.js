import React from 'react';

function Footer() {
    return (
        <footer id='main__footer'>
            <div className='footer_content-container'>
                <div className='footer_content-wrapper'>
                    <div className='footer__links'>
                        <div className='TEST'>
                            <p>Service</p>
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Blog</li>
                        </div>
                        <div className='TEST'>
                            <p>Corporate</p>
                            <li>Returns</li>
                            <li>Delivery</li>
                            <li>Size Guide</li>
                        </div>
                        <div className='TEST'>
                            <p>Contact</p>
                            <li>Contact</li>
                            <li>Terms Of Use</li>
                            <li>Privacy Policy</li>
                        </div>
                        <div className='TEST'>
                            <p>Stay connected</p>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Pinterest</li>
                        </div>
                    </div>
                    <p className='brand' onClick={() => window.scrollTo(0, 0)}>
                        MUSTHAVE
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
