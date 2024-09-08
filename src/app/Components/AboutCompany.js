import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

function AboutCompany() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [175, -175]);
    return (
        <>
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
                        <source src={'/video3.mp4'} type='video/mp4' />
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

                    {/* <motion.div
                        className='aboutCompany__item__image'
                        style={{ y: scrollParalax }}
                    ></motion.div>
                    */}

                    <motion.div
                        className='aboutCompany__item__image'
                        style={{ y: scrollParalax }}
                    >
                        <div className='image-container'>
                            <Image
                                src={'/aboutCompany2.jpg'}
                                height={550}
                                width={550}
                            />
                        </div>

                        <h3>Redefine Your Look</h3>
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
