import React from 'react';
import Image from 'next/image';
import { useStore } from '@/store/useStore';

import Navbar from '../Navbar/Navbar';
import Bag from '../Bag/Bag';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';

import { IoBookmarks, IoBookmarksOutline } from 'react-icons/io5';
import { FaArrowRightLong } from 'react-icons/fa6';

import '../productCategory.scss';
import './favoritesSubpage.scss';

function FavoritesSubpage() {
    const favItemsList = useStore((state) => state.favItemsList);
    //console.log(favItems);

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'}></Navbar>
            <Bag />

            <section className='favorite_items-section'>
                {favItemsList.length !== 0 && <h2>Your Favorite Items</h2>}
                {favItemsList.length === 0 && (
                    <div className='empty-state'>
                        <aside>
                            <div className='aboutCompany__description'>
                                <h5>
                                    You haven’t added any <span>favorites</span>{' '}
                                    yet
                                </h5>
                                <p>
                                    Browse our products and tap the
                                    <IoBookmarksOutline className='icon' />
                                    on products you like.
                                </p>

                                <div className='view_more'>
                                    <a href='/items'>CHECK PRODUCTS</a>
                                    <FaArrowRightLong className='icon' />
                                </div>
                            </div>
                        </aside>
                        <div className='aboutCompany__item__image'>
                            <div className='image-container'>
                                <Image
                                    className='image'
                                    //src={'/aboutCompany2.jpg'}
                                    src={'/stars.png'}
                                    height={700}
                                    width={600}
                                    alt='infinite sign in space'
                                />
                            </div>

                            <h3>
                                Discover your new <span>obsessions</span>
                            </h3>
                            <p>
                                MUSTHAVE is here to help you find what truly
                                fits your style
                            </p>
                        </div>
                    </div>
                )}

                <div className='favorites_items'>
                    {favItemsList.map(
                        ({
                            productName,
                            productPrice,
                            productId,
                            image,
                            image2,
                            isFavorite,
                            link,
                            uniqueProductID,
                        }) => (
                            <ProductCard
                                key={`${productId}-${image}`} // Unique composite key
                                productName={productName}
                                productPrice={productPrice}
                                productId={productId}
                                image={image}
                                image2={image2}
                                link={link}
                                uniqueProductID={uniqueProductID}
                                isFavorite={isFavorite}
                            />
                        )
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default FavoritesSubpage;
