import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RiUser3Line } from 'react-icons/ri';
import {
    IoBagOutline,
    IoBookmarkOutline,
    IoSearchOutline,
} from 'react-icons/io5';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

function Navbar({ color, activeCategory, children }) {
    let lastScrollTop = 0;
    const itemsInCart = useSelector((state) => state.cart.items);
    const favoriteItems = useSelector((state) => state.favorite.favItemsList);

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

    const handleRedirect = () => {
        if (children) {
            return;
        } else {
            document.location.href = '/items';
        }
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
                <p>123 123 123 123 </p>
                <p>avangardeStudio@gmail.com</p>
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
                    <IoMdClose
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
                        <CgMenuLeftAlt
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
                        <IoSearchOutline className='fav-icon' id='searchIcon' />
                        <Link href='/profile' id='navbar-fav'>
                            <RiUser3Line className='fav-icon' />
                        </Link>
                        {/* <Link href='/favorites' id='navbar-fav'>
                        <IoBookmarkOutline className='fav-icon' />
                    </Link>
                    */}

                        <Link
                            className='fav-icon cart'
                            href='/favorites'
                            cart-length={favoriteItems.length}
                        >
                            <IoBookmarkOutline />
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
        </>
    );
}

export default Navbar;
