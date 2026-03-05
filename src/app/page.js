'use client';

import { useCallback, useEffect, useState } from 'react';
import Lenis from 'lenis';

import { AnimatePresence } from 'framer-motion';

import Introduction from '@/components/Introduction/Introduction';
import Header from '@/components/Header/Header';
import Bag from '@/components/Bag/Bag';
import SummerCollection from '@/components/SummerCollection/SummerCollection';
import Categories from '@/components/Categories/Categories';
import AboutCompany from '@/components/AboutCompany/AboutCompany';
import Instagram from '@/components/Instagram/Instagram';
import Footer from '@/components/Footer/Footer';
import ExploreBrand from '@/components/ExploreBrand/ExploreBrand';
import OurVision from '@/components/OurVision/OurVision';
import OurTeam from '@/components/OurTeam/OurTeam';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const handleIntroComplete = useCallback(() => {
        setIsLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    useEffect(() => {
        const lenis = new Lenis();
        let rafId = 0;

        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <Introduction onComplete={handleIntroComplete} />}
            </AnimatePresence>

            <Navbar />
            <Header isIntroLoading={isLoading} />
            <Bag />
            <ExploreBrand />
            <OurVision />

            <SummerCollection />

            <h2 className='fixed-brand'>MUSTHAVE</h2>

            <Categories />

            <AboutCompany />
            <OurTeam />
            <Instagram />
            <Footer />
        </>
    );
}
