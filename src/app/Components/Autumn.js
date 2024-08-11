import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % dressImages.length
            );
        }, 2700);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [dressImages.length]);

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
                                (document.location.href = `/product/${product.productId}`)
                            }
                        ></div>
                        <div className='glass__box'>
                            <p className='company-name'>MUSTHAVE</p>
                            <h5
                                onClick={() =>
                                    (document.location.href = `/product/${product.productId}`)
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

            <section className='fixed__image'></section>
        </>
    );
}

export default Autumn;
