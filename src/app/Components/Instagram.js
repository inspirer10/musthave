import React, { useRef } from 'react';
import { delay, motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

function Instagram() {
    const image1 = useRef(null);
    const image2 = useRef(null);
    const image3 = useRef(null);
    const image4 = useRef(null);
    const image5 = useRef(null);
    const image6 = useRef(null);
    const instagramLink = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('#newsletterInput').value = '';
    };

    const handleMouseEnter = () => {
        image1.current.classList.add('brightness');
        image2.current.classList.add('brightness');
        image3.current.classList.add('brightness');
        image4.current.classList.add('brightness');
        image5.current.classList.add('brightness');
        image6.current.classList.add('brightness');
        instagramLink.current.classList.add('visible');
    };

    const handleMouseLeave = () => {
        image1.current.classList.remove('brightness');
        image2.current.classList.remove('brightness');
        image3.current.classList.remove('brightness');
        image4.current.classList.remove('brightness');
        image5.current.classList.remove('brightness');
        image6.current.classList.remove('brightness');
        instagramLink.current.classList.remove('visible');
    };

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [225, -100]);

    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,

            transition: {
                type: 'spring',
                damping: 40,
                stiffness: 100,
            },
        },
    };

    const opacityAnimation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.1,
                type: 'spring',
                damping: 40,
                stiffness: 100,
            },
        },
    };

    return (
        <>
            <section className='highlightedProduct__container' ref={container}>
                <motion.div
                    className='highlightedProduct__image'
                    style={{ y: scrollParalax }}
                >
                    <div className='image-container'>
                        <Image
                            src={'/images/blackHoodie2.jpg'}
                            height={650}
                            width={650}
                        />
                    </div>

                    <h3>Experience ultimate comfort</h3>
                    <p>Stay cozy and fashionable</p>
                    <Link href='/product/black/HOODIE'>
                        <button>
                            Check
                            <FiArrowUpRight className='arrow-icon' />
                        </button>
                    </Link>
                </motion.div>

                <aside className='highlightedProduct__text'>
                    <h2>HOODIE</h2>
                    <p>
                        Experience ultimate comfort and style with our premium
                        hoodie. Crafted from soft,{' '}
                        <span>high-quality cotton, </span> this piece is perfect
                        for any casual occasion. It's simple, versatile design
                        pairs effortlessly with jeans, shorts, or layered under
                        a jacket. Stay cozy and fashionable. Elevate your
                        wardrobe with this{' '}
                        <span>essential, durable hoodie.</span>
                    </p>

                    <div className='view_product'>
                        <a href='/product/black/HOODIE'>VIEW PRODUCT</a>
                        <FiArrowUpRight className='icon' />
                    </div>
                </aside>
            </section>

            <section className='instagramSection'>
                <div className='top__gallery'>
                    <div className='top_gallery_item1' ref={image1} />
                    <div className='instagramSection__followUs'>
                        <motion.h2
                            variants={opacityAnimation}
                            initial='initial'
                            whileInView='animate'
                        >
                            WE'RE ON INSTAGRAM
                        </motion.h2>
                        <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            variants={fadeInAnimation}
                            initial='initial'
                            whileInView='animate'
                        >
                            follow us
                        </button>
                        <p className='instagram-link' ref={instagramLink}>
                            @musthave
                        </p>
                    </div>
                    <div className='top_gallery_item2' ref={image2} />
                </div>

                <div className='bottom__gallery'>
                    <div className='bottom__gallery_item1' ref={image3} />
                    <div className='bottom__gallery_item2' ref={image4} />
                    <div className='bottom__gallery_item3' ref={image5} />
                    <div className='bottom__gallery_item4' ref={image6} />
                </div>
            </section>

            <section className='newsletter'>
                <motion.p
                    variants={fadeInAnimation}
                    initial='initial'
                    whileInView='animate'
                >
                    Sign up for our newsletter to receive
                    <br /> special offers, news & events.
                </motion.p>
                <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeInAnimation}
                    initial='initial'
                    whileInView='animate'
                >
                    <label>
                        <input
                            id='newsletterInput'
                            type='email'
                            placeholder='Enter your email address'
                        />
                        <input id='submitButton' type='submit' value='OK' />
                    </label>
                </motion.form>
            </section>
        </>
    );
}

export default Instagram;
