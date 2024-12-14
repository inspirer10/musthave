import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
//import AboutIntroParallax from './AboutIntroParallax';

function AboutCompany() {
    const [active, setActive] = useState(1);
    const [imageShowUp, setImageShowUp] = useState(false);
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [175, -175]);

    const handleClick = (num) => {
        setActive(num);

        if (num !== active) {
            setImageShowUp(false);
            setTimeout(() => {
                setImageShowUp(true);
            }, 5);
        }
    };

    return (
        <>
            {/*  <AboutIntroParallax /> */}

            <section className='aboutCompany'>
                <div className='video-container'>
                    <video
                        playsinline='true'
                        autoPlay='true'
                        loop='true'
                        muted='true'
                        disablepictureinpicture='true'
                        controlslist='nodownload nofullscreen noremoteplayback'
                    >
                        <source src={'/musthave2.mp4'} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>

                    <div className='video-text'>MUSTHAVE</div>
                </div>

                <aside className='aboutCompany__container' ref={container}>
                    <article>
                        <div className='aboutCompany__description'>
                            <h2>ABOUT US</h2>
                            <p>
                                <span>MUSTHAVE</span> is a brand with unique
                                clothing that combines the latest trends with
                                high quality. We offer a wide range of products
                                that will make you stand out and highlight your
                                unique style. Our mission is to provide
                                fashion-forward pieces that are both stylish and
                                comfortable.
                            </p>

                            <div className='view_more'>
                                <a href='/aboutCompany'>VIEW MORE</a>
                                <FaArrowRightLong className='icon' />
                            </div>
                        </div>
                    </article>

                    <motion.div
                        className='aboutCompany__item__image'
                        style={{ y: -scrollParalax }}
                    >
                        <div className='image-container'>
                            <Image
                                src={'/aboutCompany2.jpg'}
                                height={550}
                                width={550}
                            />
                        </div>

                        <h3>
                            <span>Redefine</span> Your Look
                        </h3>
                        <p>
                            MUSTHAVE goal is to improve what surrounds people.
                        </p>
                        <Link href='/clothing'>
                            <button>
                                See more
                                <FiArrowUpRight className='arrow-icon' />
                            </button>
                        </Link>
                    </motion.div>
                </aside>

                <article className='goals_section'>
                    <article className='goals_content'>
                        <h2>Company Goals</h2>

                        <div className='goals_accordion'>
                            <div
                                className={
                                    active === 1
                                        ? 'active accordion-item'
                                        : 'accordion-item'
                                }
                                onClick={() => handleClick(1)}
                            >
                                <div className='heading_bar'>
                                    <h3>Worldwide</h3>
                                    <p>MUSTHAVE</p>
                                </div>
                                <div className='content-reveal'>
                                    <div>
                                        <p className='description'>
                                            We aim to expand our brand globally,
                                            making our clothing accessible to
                                            customers worldwide. By growing our
                                            presence internationally, we’re
                                            committed to delivering high-quality
                                            products and building connections
                                            across diverse markets.
                                        </p>
                                        <Link href='/about'>
                                            Learn more
                                            <GoArrowRight className='arrow-icon' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={
                                    active === 2
                                        ? 'active accordion-item'
                                        : 'accordion-item'
                                }
                                onClick={() => handleClick(2)}
                            >
                                <div className='heading_bar'>
                                    <h3>Innovation</h3>
                                    <p>MUSTHAVE</p>
                                </div>
                                <div className='content-reveal'>
                                    <div>
                                        <p className='description'>
                                            We constantly innovate to bring
                                            fresh designs and advanced
                                            technologies to our products. Our
                                            focus is on creating high-quality
                                            clothing that blends modern
                                            aesthetics with functionality,
                                            offering customers unique and
                                            cutting-edge styles.
                                        </p>

                                        <Link href='/about' className='lime'>
                                            Learn more
                                            <GoArrowRight className='arrow-icon' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={
                                    active === 3
                                        ? 'active accordion-item'
                                        : 'accordion-item'
                                }
                                onClick={() => handleClick(3)}
                            >
                                <div className='heading_bar'>
                                    <h3>Craftsmanship</h3>
                                    <p>MUSTHAVE</p>
                                </div>

                                <div className='content-reveal'>
                                    <div>
                                        <p className='description'>
                                            We take pride in the craftsmanship
                                            behind every piece we create. Our
                                            garments are made with attention to
                                            detail, combining traditional
                                            techniques with modern design to
                                            deliver high-quality products. This
                                            dedication to quality ensures that
                                            every item reflects our commitment
                                            to excellence and long-lasting wear.
                                        </p>
                                        <Link href='/about' className='craft'>
                                            Learn more
                                            <GoArrowRight className='arrow-icon' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className='images_wrapper'>
                        <Image
                            loading='lazy'
                            height={700}
                            width={700}
                            src={
                                active === 1
                                    ? '/brand.jpg'
                                    : active === 2
                                    ? '/about1.jpg'
                                    : active === 3
                                    ? '/testimg4.jpg'
                                    : '/testimg4.jpg'
                            }
                            className={` ${imageShowUp ? 'showUp' : ''}`}
                            alt='thumbnail'
                        />
                    </aside>
                </article>
            </section>

            <article className='quoteSection'>
                <p className='quote'>
                    <i>" </i>Dressing well doesn't depend on a lot of clothes.
                    It's a matter of harmony and common sense.
                    <i>"</i>
                </p>
                <p className='author'>Oscar de la Renta</p>
            </article>
        </>
    );
}

export default AboutCompany;
