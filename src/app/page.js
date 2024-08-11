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

import './styles/header.scss';
import './styles/autumn.scss';
import './styles/categories.scss';
import './styles/about.scss';
import './styles/instagramSection.scss';
import './styles/newsletter.scss';
import './styles/footer.scss';

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
        <>
            <Header />
            <Bag />
            <Autumn />
            <Categories />
            <AboutCompany />
            <Instagram />
            <Footer />
        </>
    );
}
