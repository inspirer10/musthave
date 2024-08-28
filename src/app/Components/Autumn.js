import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function Autumn() {
    const dressImages = [
        'images/dressBlack1.jpg',
        'images/dressBlack4.jpg',
        'images/dressBlack2.jpg',
        'images/dressBlack3.jpg',
    ];

    const shirtImages = [
        'images/tshirt3.png',
        'images/tshirt5.png',
        'images/tshirt2.png',
        'images/tshirt5.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //! change to next image after 2.5 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % dressImages.length
            );
        }, 2700);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [dressImages.length]);

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [125, -125]);
    const scrollParalaxSlow = useTransform(scrollYProgress, [0, 1], [75, -75]);
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
                    <h2>
                        THE <br /> SUMMER <br /> COLLECTION
                    </h2>
                    <p>Limited release available now</p>
                    <button onClick={() => (document.location.href = '/items')}>
                        Visit the shop
                    </button>
                </article>

                <article className='autumn__right__section' ref={container}>
                    <motion.div
                        className='product__tile'
                        style={{ y: scrollParalax }}
                    >
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
                    </motion.div>

                    <motion.div
                        className='product__tile'
                        style={{ y: scrollParalaxSlow }}
                    >
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
                    </motion.div>
                </article>
            </section>

            <section className='fixed__image'>
                <Image className='image' src={'/testimg2.jpg'} fill />
            </section>
        </>
    );
}

export default Autumn;
