'use client';

import '../productCategory.scss';
import './favoritesSubpage.scss';
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { toast } from 'sonner';

import Navbar from '../Navbar/Navbar';
import Bag from '../Bag/Bag';
import ProductCard from '../ProductCard/ProductCard';
import Footer from '../Footer/Footer';

import { BsBookmarks } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
}

function FavoritesSubpage() {
    const favItemsList = useStore((state) => state.favItemsList);
    const clearFavList = useStore((state) => state.clearFavList);
    const [sortOption, setSortOption] = useState('latest');
    const hasFavorites = favItemsList.length > 0;

    const visibleFavorites = useMemo(() => {
        const list = [...favItemsList];

        switch (sortOption) {
            case 'price-low':
                return list.sort((a, b) => a.productPrice - b.productPrice);
            case 'price-high':
                return list.sort((a, b) => b.productPrice - a.productPrice);
            case 'name-asc':
                return list.sort((a, b) =>
                    a.productName.localeCompare(b.productName),
                );
            case 'latest':
            default:
                return list.reverse();
        }
    }, [favItemsList, sortOption]);

    const favoritesStats = useMemo(() => {
        if (!hasFavorites) return null;

        const totalValue = favItemsList.reduce(
            (sum, item) => sum + (Number(item.productPrice) || 0),
            0,
        );

        const averagePrice = Math.round(totalValue / favItemsList.length);
        const topPick = [...favItemsList].sort(
            (a, b) => b.productPrice - a.productPrice,
        )[0];

        return {
            totalValue,
            averagePrice,
            topPickName: topPick?.productName || '-',
        };
    }, [favItemsList, hasFavorites]);

    const handleClearFavorites = () => {
        if (!hasFavorites) return;

        const shouldClear = window.confirm(
            'Clear your favorites list? This action cannot be undone.',
        );
        if (!shouldClear) return;

        clearFavList();
        toast.success('Favorites list cleared');
    };

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'}></Navbar>
            <Bag />

            <section className='favorite_items-section'>
                {hasFavorites && (
                    <>
                        <header className='favorites-filled-header'>
                            <div className='heading-copy'>
                                <p className='eyebrow'>PERSONAL SHORTLIST</p>
                                <h2>Your Favorite Items </h2>
                                <p className='subtitle'>
                                    Curate now, checkout later. Your saved picks
                                    are ready whenever you are.
                                </p>
                            </div>

                            <div className='header-actions'>
                                <Link href='/items' className='browse-button'>
                                    Explore more
                                </Link>
                                <button
                                    type='button'
                                    className='clear-button'
                                    onClick={handleClearFavorites}
                                >
                                    Clear list
                                </button>
                            </div>
                        </header>

                        <section className='favorites-stats'>
                            <article className='stat-card'>
                                <p className='label'>Saved pieces</p>
                                <p className='value'>{favItemsList.length}</p>
                                <p className='hint'>Selected by you</p>
                            </article>

                            <article className='stat-card'>
                                <p className='label'>Total value</p>
                                <p className='value'>
                                    {formatCurrency(favoritesStats.totalValue)}
                                </p>
                                <p className='hint'>
                                    Your full wishlist budget
                                </p>
                            </article>

                            <article className='stat-card'>
                                <p className='label'>Average price</p>
                                <p className='value'>
                                    {formatCurrency(
                                        favoritesStats.averagePrice,
                                    )}
                                </p>
                                <p className='hint'>
                                    Top pick: {favoritesStats.topPickName}
                                </p>
                            </article>
                        </section>

                        <div className='favorites-toolbar'>
                            <p className='items-count'>
                                {visibleFavorites.length} item
                                {visibleFavorites.length === 1 ? '' : 's'} in
                                your list
                            </p>

                            <label className='sort-control'>
                                <span>Sort by</span>
                                <select
                                    value={sortOption}
                                    onChange={(e) =>
                                        setSortOption(e.target.value)
                                    }
                                >
                                    <option value='latest'>
                                        Recently added
                                    </option>
                                    <option value='price-low'>
                                        Price: low to high
                                    </option>
                                    <option value='price-high'>
                                        Price: high to low
                                    </option>
                                    <option value='name-asc'>Name: A-Z</option>
                                </select>
                            </label>
                        </div>
                    </>
                )}

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
                                    <BsBookmarks className='icon' />
                                    on products you like.
                                </p>

                                <div className='view_more'>
                                    <Link href='/items'>CHECK PRODUCTS</Link>

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
                                    height={600}
                                    width={500}
                                    quality={90}
                                    priority
                                    alt='infinite sign set in space'
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

                {hasFavorites && (
                    <div className='favorites_items'>
                        {visibleFavorites.map(
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
                                    key={uniqueProductID || `${productId}-${image}`}
                                    productName={productName}
                                    productPrice={productPrice}
                                    productId={productId}
                                    image={image}
                                    image2={image2}
                                    link={link}
                                    uniqueProductID={uniqueProductID}
                                    isFavorite={isFavorite}
                                />
                            ),
                        )}
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}

export default FavoritesSubpage;
