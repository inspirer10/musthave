import React from 'react';

function Footer() {
    return (
        <footer id='main__footer'>
            <div className='footer__links'>
                <ul>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Returns</li>
                    <li>Delivery</li>
                    <li>Size Guide</li>
                </ul>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Pinterest {/*TikTok*/}</li>
                </ul>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <p onClick={() => window.scrollTo(0, 0)}>MUSTHAVE</p>
        </footer>
    );
}

export default Footer;
