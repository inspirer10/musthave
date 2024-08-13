import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RiUser3Line } from 'react-icons/ri';
import {
    IoBagOutline,
    IoBookmarkOutline,
    IoSearchOutline,
} from 'react-icons/io5';

function Navbar({ color, children }) {
    const itemsInCart = useSelector((state) => state.cart.items);

    let [mobileView, setMobileView] = useState(true);
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollTop = 0;

    const openBag = () => {
        document.querySelector('.bag').classList.toggle('open');
        document.querySelector('.navbar').classList.toggle('disable__pointers');
        document.querySelector('body').classList.toggle('disable__scroll');
    };

    const handleRedirect = () => {
        if (children) {
            return;
        } else {
            document.location.href = '/items';
        }
    };

    /*    function setMobileNav() {
        if (window.innerWidth <= 985) {
            setMobileView(false);
        } else if (window.innerWidth > 985) {
            setMobileView(true);
        }
    }

    useEffect(() => {
        if (window.innerWidth <= 985) {
            setMobileView(false);
        } else if (window.innerWidth > 985) {
            setMobileView(true);
        }
    }, []);

    // window.addEventListener('resize', setMobileNav); */

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            setShowNavbar(false); // Scroll w dół - ukryj navbar
        } else {
            setShowNavbar(true); // Scroll w górę - pokaż navbar
        }
        lastScrollTop = scrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return mobileView ? (
        <nav
            className={`navbar ${showNavbar ? 'navbar--show' : 'navbar--hide'}`}
        >
            <div className='navbar-container'>
                <div className='navbar_links-container'>
                    <Link
                        className='logo'
                        style={{ color: `${color}` }}
                        href='/'
                    >
                        MUSTHAVE
                    </Link>
                    <div className='navbar_links-wrapper'>
                        <Link className='navbar-link' href='/clothing'>
                            CLOTHING
                        </Link>
                        <Link className='navbar-link' href='/accessories'>
                            ACCESSORIES
                        </Link>
                        <Link className='navbar-link' href='/shoes'>
                            SHOES
                        </Link>
                    </div>
                </div>

                <div className='navbar_icons-wrapper'>
                    <IoSearchOutline className='fav-icon' />
                    <RiUser3Line className='fav-icon' />
                    <Link href='/favourites'>
                        <IoBookmarkOutline className='fav-icon' />
                    </Link>
                    <p
                        className='fav-icon cart'
                        onClick={openBag}
                        cart-length={itemsInCart.length}
                    >
                        <IoBagOutline />
                    </p>
                </div>
            </div>
        </nav>
    ) : (
        <nav className='navbar'>{/* MOBILE  */}</nav>
    );
}

export default Navbar;
