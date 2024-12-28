import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

            <section className='autumn__section'>
                <article className='autumn__left__section'>
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
                        viewport={{
                            once: true,
                        }}
                    >
                        Limited release available now
                    </motion.p>
                    <button onClick={() => (document.location.href = '/items')}>
                        Visit the shop
                    </button>
                </article>

                <article className='autumn__right__section'>
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

            <section className='fixed__image'>
                <Image
                    className='image'
                    src={'/testimg2.jpg'}
                    //! DO ZMIANY
                    fill
                    loading='lazy'
                />
            </section>
        </>
    );
}

export default SummerCollection;
