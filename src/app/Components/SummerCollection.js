import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

function SummerCollection() {
    const dressImages = [
        'images/dressBlack1.jpg',
        'images/dressBlack4.jpg',
        'images/dressBlack2.jpg',
        'images/dressBlack3.jpg',
    ];

    const shirtImages = [
        'images/tshirt3.png',
        'images/tshirt2.png',
        'images/tshirt5.png',
        'images/tshirt2.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //! change to next image after 2.7 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % dressImages.length
            );
        }, 2700);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [dressImages.length]);

    const fadeInAnimation = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                type: 'spring',
                damping: 40,
                stiffness: 100,
            },
        },
    };

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);

    return (
        <>
            <div className='marquee'>
                <div className='marquee__content'>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                </div>

                <div aria-hidden='true' className='marquee__content'>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                    <p className='marquee__item'>MUSTHAVE</p>
                </div>
            </div>

            <section className='summer__section'>
                <article className='summer__left__section'>
                    <motion.h2
                        variants={fadeInAnimation}
                        initial='initial'
                        whileInView='animate'
                    >
                        THE <br /> SUMMER <br /> COLLECTION
                    </motion.h2>
                    <motion.p
                        variants={fadeInAnimation}
                        initial='initial'
                        whileInView='animate'
                    >
                        Limited release available now
                    </motion.p>
                    <motion.button
                        onClick={() => (document.location.href = '/items')}
                        variants={fadeInAnimation}
                        initial='initial'
                        whileInView='animate'
                    >
                        Visit the shop
                    </motion.button>
                </article>

                <article className='summer__right__section'>
                    <div className='product__tile'>
                        <div
                            className='image-container'
                            style={{
                                backgroundImage: `url(/${dressImages[currentImageIndex]})`,
                            }}
                            onClick={() =>
                                (document.location.href =
                                    '/product/black/DRESS')
                            }
                        ></div>
                        <div className='glass__box'>
                            <p className='company-name'>MUSTHAVE</p>
                            <h5
                                onClick={() =>
                                    (document.location.href =
                                        'product/black/DRESS')
                                }
                            >
                                DRESS
                            </h5>
                            <p className='slogan'>Be revolutionary with us</p>
                        </div>
                    </div>

                    <div className='product__tile'>
                        <div
                            className='image-container'
                            style={{
                                backgroundImage: `url(/${shirtImages[currentImageIndex]})`,
                            }}
                            onClick={() =>
                                (document.location.href = `/product/black/GOT%20T-SHIRT`)
                            }
                        ></div>
                        <div className='glass__box'>
                            <p className='company-name'>MUSTHAVE</p>
                            <h5
                                onClick={() =>
                                    (document.location.href = `/product/black/GOT%20T-SHIRT`)
                                }
                            >
                                T-SHIRT
                            </h5>
                            <p className='slogan'>
                                Unleash a new way of looking
                            </p>
                        </div>
                    </div>
                </article>
            </section>

            {/* <section className='fixed__image'>
                <Image
                    className='image'
                    src={'/testimg2.jpg'}
                    fill
                    loading='lazy'
                />
            </section>*/}

            <section
                ref={container}
                className='parallax-section'
                style={{
                    clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
                }}
            >
                <div className='parallax-section_text'>
                    <p>
                        BEAUTY AND QUALITY NEED THE RIGHT TIME TO BE CONCEIVED
                        AND REALISED EVEN IN A WORLD THAT IS IN TOO MUCH OF A
                        HURRY.
                    </p>
                    <h3>MUSTHAVE</h3>
                </div>
                <div className='img-container'>
                    <motion.div style={{ y }} className='img-wrapper'>
                        <Image
                            src={'/instaGallery1.jpg'}
                            //fill
                            height={1500}
                            width={1500}
                            alt='parallax photo'
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default SummerCollection;
