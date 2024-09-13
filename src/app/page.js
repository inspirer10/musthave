'use client';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Introduction from './Components/Introduction';
import Header from './Components/Header';
import Bag from './Components/Bag/Bag';
import SummerCollection from './Components/SummerCollection';
import Categories from './Components/Categories';
import AboutCompany from './Components/AboutCompany';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';

import './styles/header.scss';
import './styles/summer.scss';
import './styles/categories.scss';
import './styles/about.scss';
import './styles/instagramSection.scss';
import './styles/newsletter.scss';
import './styles/footer.scss';

import { AnimatePresence } from 'framer-motion';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 2000);
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <Introduction />}
            </AnimatePresence>
            <Header />
            <Bag />
            <SummerCollection />

            <h2 className='fixed-brand'>MUSTHAVE</h2>

            <Categories />
            <AboutCompany />
            <Instagram />
            <Footer />
        </>
    );
}
