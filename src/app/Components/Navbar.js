import React, { useState, useEffect } from 'react';
//!import { useSelector } from 'react-redux';
import { IoBagOutline } from 'react-icons/io5';

function Navbar({ color, children }) {
    //! const cart = useSelector((state) => state.cart);
    let cart = [];
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
            document.location.href = '/webstore/#/items';
        }
    };

    function setMobileNav() {
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

    window.addEventListener('resize', setMobileNav);

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
                <li
                    className='animated-border-bottom'
                    onClick={() =>
                        (document.location.href = '/webstore/#/clothing')
                    }
                >
                    CLOTHING
                </li>
                <li
                    className='animated-border-bottom'
                    onClick={() =>
                        (document.location.href = '/webstore/#/accessories')
                    }
                >
                    ACCESSORIES
                </li>
                <li
                    className='animated-border-bottom'
                    onClick={() =>
                        (document.location.href = '/webstore/#/shoes')
                    }
                >
                    SHOES
                </li>
            </ul>
            <div>
                <p
                    className='logo'
                    style={{ color: `${color}` }}
                    onClick={() => (document.location.href = '/webstore')}
                >
                    MUSTHAVE
                </p>
            </div>
            <ul>
                <li onClick={handleRedirect}>
                    {children ? (
                        children
                    ) : (
                        <li className='header__products'>ITEMS</li>
                    )}
                </li>
                <li className='bag__reference' onClick={openBag}>
                    MY BAG<sup>[{cart.length}]</sup>
                </li>
            </ul>
        </nav>
    ) : (
        <nav className='navbar'>
            <div>
                <p
                    className='logo'
                    style={{ color: `${color}` }}
                    onClick={() => (document.location.href = '/webstore')}
                >
                    MUSTHAVE
                </p>
            </div>
            <ul>
                <li
                    className='mobile__ul'
                    onClick={() =>
                        (document.location.href = '/webstore/#/clothing')
                    }
                >
                    CLOTHING
                </li>
                <li
                    className='mobile__ul'
                    onClick={() =>
                        (document.location.href = '/webstore/#/accessories')
                    }
                >
                    ACCESSORIES
                </li>
                <li
                    className='mobile__ul'
                    onClick={() =>
                        (document.location.href = '/webstore/#/shoes')
                    }
                >
                    SHOES
                </li>
                <li className='bag__reference' onClick={openBag}>
                    MY BAG
                </li>
                <li onClick={handleRedirect}>{children ? children : null}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
