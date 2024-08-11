'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './Components/Header';
import Bag from './Components/Bag/Bag';
import Autumn from './Components/Autumn';
import Categories from './Components/Categories';
import AboutCompany from './Components/AboutCompany';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';

import './header.scss';
import './autumn.scss';
import './categories.scss';
import './about.scss';
import './instagramSection.scss';
import './newsletter.scss';
import './footer.scss';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <main>
            <Header />
            <Bag />
            <Autumn />
            <Categories />
            <AboutCompany />
            <Instagram />
            <Footer />
        </main>
    );
}
