import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IoBagOutline } from 'react-icons/io5';
import Link from 'next/link';

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
            <ul>
                <Link className='li animated-border-bottom' href='/clothing'>
                    CLOTHING
                </Link>
                <Link className='li animated-border-bottom' href='/accessories'>
                    ACCESSORIES
                </Link>
                <Link className='li animated-border-bottom' href='/shoes'>
                    SHOES
                </Link>
            </ul>
            <div>
                <Link className='logo' style={{ color: `${color}` }} href='/'>
                    MUSTHAVE
                </Link>
            </div>
            <ul>
                <li onClick={handleRedirect}>
                    {children ? (
                        children
                    ) : (
                        <p className='header__products'>ITEMS</p>
                    )}
                </li>
                <li className='bag__reference' onClick={openBag}>
                    MY BAG<sup>[{itemsInCart.length}]</sup>
                </li>
            </ul>
        </nav>
    ) : (
        <nav className='navbar'>
            <div>
                <Link className='logo' style={{ color: `${color}` }} href={'/'}>
                    MUSTHAVE
                </Link>
            </div>
            <ul>
                <Link className='mobile__li' href='/clothing'>
                    CLOTHING
                </Link>
                <Link className='mobile__li' href='/accessories'>
                    ACCESSORIES
                </Link>
                <Link className='mobile__li' href='/shoes'>
                    SHOES
                </Link>
                <li className='bag__reference' onClick={openBag}>
                    MY BAG
                </li>
                <li onClick={handleRedirect}>{children ? children : null}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
