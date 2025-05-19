import Image from 'next/image';
import React from 'react';

function Categories() {
    return (
        <section className='section__categories'>
            <h2 className='categories__heading'>Categories</h2>
            <div className='categories__container'>
                <div className='categories__item__one'>
                    <Image
                        className='category_image'
                        src='/image.jpg'
                        fill
                        loading='lazy'
                        alt='category_thumbnail'
                    />
                    <div className='item__payload'>
                        <p>Clothing</p>
                        <button
                            onClick={() =>
                                (document.location.href = '/clothing')
                            }
                        >
                            Check it out!
                        </button>
                    </div>
                </div>

                <div className='categories__item__three'>
                    <Image
                        className='category_image'
                        src='/image3.jpg'
                        fill
                        loading='lazy'
                        alt='category_thumbnail'
                    />

                    <div className='item__payload'>
                        <p>Accessories</p>
                        <button
                            onClick={() =>
                                (document.location.href = '/accessories')
                            }
                        >
                            Check it out!
                        </button>
                    </div>
                </div>

                <div className='categories__item__two'>
                    <Image
                        className='category_image'
                        src='/image2.jpg'
                        fill
                        loading='lazy'
                        alt='category_thumbnail'
                    />
                    <div className='item__payload'>
                        <p>Shoes</p>
                        <button
                            onClick={() => (document.location.href = '/shoes')}
                        >
                            Check it out!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
