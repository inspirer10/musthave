'use client';

import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        //INTRODUCTION screen timeout
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 3000); //3 seconds delay

        return () => {
            clearTimeout(timer);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isLoading && <Introduction />}
            </AnimatePresence>
            <Navbar />
            <Header />
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
