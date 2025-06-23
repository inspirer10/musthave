import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import Image from 'next/image';

const useImageTransition = (images, interval = 2500) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 250); // Half of the transition duration
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return { currentIndex, isTransitioning };
};

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

    //const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { currentIndex: dressIndex, isTransitioning: dressTransitioning } =
        useImageTransition(dressImages);
    const { currentIndex: shirtIndex, isTransitioning: shirtTransitioning } =
        useImageTransition(shirtImages);

    /*
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % dressImages.length
        );
    */

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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeIn' }}
                        viewport={{ once: true }}
                    >
                        THE <br /> SUMMER <br /> COLLECTION
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeIn' }}
                        viewport={{ once: true }}
                    >
                        Limited release available now
                    </motion.p>
                    <motion.button
                        onClick={() => (document.location.href = '/items')}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeIn' }}
                        viewport={{ once: true }}
                        whileHover={{
                            color: '#000',
                            backgroundColor: 'rgb(225, 225, 225)',
                            transition: {
                                duration: 0.225,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }}
                        animate={{
                            backgroundColor: '#000',
                            color: '#FFF',
                            transition: {
                                duration: 0.225,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }}
                    >
                        Visit the shop
                    </motion.button>
                </article>

                <article className='summer__right__section'>
                    <div className='product__tile'>
                        <motion.div
                            className='image-container'
                            style={{
                                backgroundImage: `url(/${dressImages[dressIndex]})`,
                            }}
                            onClick={() =>
                                (document.location.href =
                                    '/product/black/DRESS')
                            }
                            animate={{
                                opacity: dressTransitioning ? 0 : 1,
                                scale: dressTransitioning ? 1.05 : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                        ></motion.div>

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
                        <motion.div
                            className='image-container'
                            style={{
                                backgroundImage: `url(/${shirtImages[shirtIndex]})`,
                            }}
                            onClick={() =>
                                (document.location.href = `/product/black/GOT%20T-SHIRT`)
                            }
                            animate={{
                                opacity: shirtTransitioning ? 0 : 1,
                                scale: shirtTransitioning ? 1.05 : 1,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                        ></motion.div>

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
                            height={1200}
                            width={1200}
                            alt='parallax photo'
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default SummerCollection;
