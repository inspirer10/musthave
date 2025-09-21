'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//import { useSelector } from 'react-redux';

import { Icon } from '@iconify/react';

import './navbar.scss';
import { useStore } from '@/store/useStore';

function Navbar({ color, activeCategory, children }) {
    let lastScrollTop = 0;
    const cartItems = useStore((state) => state.cartItems);
    const favItemsList = useStore((state) => state.favItemsList);

    let [mobileView, setMobileView] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const openBag = () => {
        document.querySelector('.bag').classList.toggle('open');
        document.querySelector('.navbar').classList.toggle('disable__pointers');
        document.querySelector('body').classList.toggle('disable__scroll');
        document.querySelector('.bag').addEventListener('wheel', (e) => {
            e.stopPropagation(); // Zatrzymuje event scrolla
        });
    };

    const handleScroll = () => {
        if (window.innerWidth > 1050) {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setShowNavbar(false); // Scroll w dół - ukryj navbar
            } else {
                setShowNavbar(true); // Scroll w górę - pokaż navbar
            }
            lastScrollTop = scrollTop;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOpenMobileMenu = () => {
        setMobileView(true);
    };

    const handleCloseMobileMenu = () => {
        setMobileView(false);
    };

    return (
        <>
            <div className='top_info-bar'>
                <p>+(48) 567 123 456</p>
                <p>musthaveStudio@gmail.com</p>
            </div>

            <nav
                className={`navbar ${
                    showNavbar ? 'navbar--show' : 'navbar--hide'
                }`}
            >
                <main
                    className={
                        mobileView ? 'mobile_menu active' : 'mobile_menu'
                    }
                >
                    <Icon
                        icon='material-symbols:close'
                        className='close-icon'
                        onClick={handleCloseMobileMenu}
                    />
                    <div className='mobile-links-wrapper'>
                        <Link className='mobile-link' href='/items'>
                            ITEMS
                        </Link>
                        <Link className='mobile-link' href='/clothing'>
                            CLOTHING
                        </Link>
                        <Link className='mobile-link' href='/accessories'>
                            ACCESSORIES
                        </Link>
                        <Link className='mobile-link' href='/shoes'>
                            SHOES
                        </Link>
                        <Link className='mobile-link' href='/favorites'>
                            FAVOURITES
                        </Link>
                    </div>
                    <p className='mobile-brand'>MUSTHAVE</p>
                </main>

                <div className='navbar-container'>
                    <div className='navbar_menu-wrapper'>
                        <Icon
                            icon='gg:menu-left-alt'
                            className='navbar_menu'
                            onClick={handleOpenMobileMenu}
                        />
                    </div>

                    <div className='navbar_links-container'>
                        <Link
                            className='logo'
                            style={{ color: `${color}` }}
                            href='/'
                        >
                            MUSTHAVE
                        </Link>
                        <div className='navbar_links-wrapper'>
                            <Link
                                href='/clothing'
                                className={`${
                                    activeCategory === 'clothing'
                                        ? 'navbar-link active'
                                        : 'navbar-link'
                                }`}
                            >
                                CLOTHING
                            </Link>
                            <Link
                                href='/accessories'
                                className={`${
                                    activeCategory === 'accessories'
                                        ? 'navbar-link active'
                                        : 'navbar-link'
                                }`}
                            >
                                ACCESSORIES
                            </Link>
                            <Link
                                href='/shoes'
                                className={`${
                                    activeCategory === 'shoes'
                                        ? 'navbar-link active'
                                        : 'navbar-link'
                                }`}
                            >
                                SHOES
                            </Link>
                            {/*
                        <Link
                            className='navbar-link'
                            href='/shoes'
                            style={{ color: 'red' }}
                        >
                            SALES
                        </Link> */}
                        </div>
                    </div>

                    <div className='navbar_icons-wrapper'>
                        <Icon
                            icon='octicon:search-16'
                            className='fav-icon'
                            id='searchIcon'
                        />

                        <Link href='/profile' id='navbar-fav'>
                            <Icon icon='mi:user' className='fav-icon' />
                        </Link>
                        {/*  <Link href='/favorites' id='navbar-fav'>
                                <IoBookmarkOutline className='fav-icon' />
                        </Link>  */}

                        <Link
                            className='fav-icon cart'
                            href='/favorites'
                            cart-length={favItemsList.length}
                        >
                            <Icon icon='iconoir:bookmark' />
                        </Link>
                        <p
                            className='fav-icon cart'
                            onClick={openBag}
                            cart-length={cartItems.length}
                        >
                            <Icon icon='ion:bag-outline' />
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
