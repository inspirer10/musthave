'use client';

import './navbar.scss';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
//import { useSelector } from 'react-redux';

import { BsBookmarks } from 'react-icons/bs';
import { FiSearch, FiShoppingBag, FiBookmark } from 'react-icons/fi';
import { HiBars3 } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';

import { useStore } from '@/store/useStore';

function Navbar({ color, activeCategory }) {
    const lastScrollTopRef = useRef(0);
    const cartItems = useStore((state) => state.cartItems);
    const favItemsList = useStore((state) => state.favItemsList);
    const isBagOpen = useStore((state) => state.isBagOpen);
    const toggleBag = useStore((state) => state.toggleBag);

    const [mobileView, setMobileView] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    const handleScroll = useCallback(() => {
        if (window.innerWidth > 1050) {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTopRef.current) {
                setShowNavbar(false); // Scroll down - hide navbar
            } else {
                setShowNavbar(true); // Scroll up - show navbar
            }
            lastScrollTopRef.current = scrollTop;
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        document.body.classList.toggle('disable__scroll', isBagOpen);

        return () => {
            document.body.classList.remove('disable__scroll');
        };
    }, [isBagOpen]);

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
                className={`navbar ${isBagOpen ? 'disable__pointers' : ''} ${
                    showNavbar ? 'navbar--show' : 'navbar--hide'
                }`}
            >
                <main
                    className={
                        mobileView ? 'mobile_menu active' : 'mobile_menu'
                    }
                >
                    <IoClose
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
                        <HiBars3
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
                        <FiSearch className='fav-icon' id='searchIcon' />

                        <Link href='/profile' id='navbar-fav'>
                            <LuUserRound className='fav-icon' />
                        </Link>
                        {/*  <Link href='/favorites' id='navbar-fav'>
                                <IoBookmarkOutline className='fav-icon' />
                        </Link>  */}

                        <Link
                            className='fav-icon cart'
                            href='/favorites'
                            cart-length={favItemsList.length}
                        >
                            <BsBookmarks />
                        </Link>
                        <p
                            className='fav-icon cart'
                            onClick={toggleBag}
                            cart-length={cartItems.length}
                        >
                            <FiShoppingBag />
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
