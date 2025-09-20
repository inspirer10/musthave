'use client';

import React, { useMemo, useState } from 'react';
import { useStore } from '@/store/useStore';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

import Navbar from './Navbar/Navbar';
import Bag from './Bag/Bag';
import ProductCard from './ProductCard/ProductCard';
import Footer from './Footer/Footer';

import './productCategory.scss';
import { Icon } from '@iconify/react';

function ShoesSubpage() {
    const shoesItems = useStore((state) => state.products[2]);

    const [searchItem, setSearchItem] = useState(''); //tag szukanego produktu
    const [sortedOption, setSortedOption] = useState(''); // 'popularity', 'low_to_high', 'high_to_low'
    const [sortExpanded, setSortExpanded] = useState(true); //price/popularity sort - rozwinięte czy nie
    const [sortCategoriesExpanded, setSortCategoriesExpanded] = useState(true); //categories sort - rozwinięte czy nie

    //odkliknięcie wyboru kategorii (zmiana na ALL kiedy kliknięto 2raz)
    const handleCategorySelection = (tag) => {
        if (searchItem === tag) {
            setSearchItem('');
        } else {
            setSearchItem(tag);
        }
    };

    const visibleItems = useMemo(() => {
        // 1) Filtrowanie
        const filtered = !searchItem
            ? shoesItems
            : shoesItems.filter((item) => {
                  const raw = item.productsTags || '';
                  const tags = raw
                      .toLowerCase()
                      .split(',')
                      .map((tag) => tag.trim());
                  return tags.includes(searchItem);
              });

        // 2) Sortowanie
        if (sortedOption === 'popularity') {
            return [...filtered].sort(
                (a, b) => b.productPopularity - a.productPopularity
            );
        }
        if (sortedOption === 'low_to_high') {
            return [...filtered].sort(
                (a, b) => a.productPrice - b.productPrice
            );
        }
        if (sortedOption === 'high_to_low') {
            return [...filtered].sort(
                (a, b) => b.productPrice - a.productPrice
            );
        }

        return filtered;
    }, [shoesItems, searchItem, sortedOption]);

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'} activeCategory='shoes'>
                {/*<label htmlFor='searchItems' className='search__items'>
                    <input
                        type='text'
                        placeholder='SEARCH'
                        id='searchItems'
                        className='search__items__input'
                        onChange={(e) => setSearchItem(e.target.value)}
                        value={searchItem}
                    />
                </label> */}
            </Navbar>
            <Bag />

            <div className='links-container'>
                <div className='links-wrapper'>
                    <p onClick={() => (document.location.href = '/')}>
                        MUSTHAVE
                    </p>
                    <span>/</span>
                    <p onClick={() => (document.location.href = `/items/`)}>
                        ITEMS
                    </p>
                    <span>/</span>
                    <p className='active-link'>Shoes</p>
                </div>
                <h2 className='clothing__header'>Shoes</h2>
            </div>

            <section className='items_category_container'>
                <div className='sorting-wrapper'>
                    <div className='sorting-heading'>
                        <h6>Sort By</h6>
                        {sortExpanded ? (
                            <Icon
                                icon='cuida:minus-outline'
                                className='icon'
                                onClick={() => setSortExpanded(false)}
                            />
                        ) : (
                            <Icon
                                icon='tabler:chevron-down'
                                className='icon'
                                onClick={() => setSortExpanded(true)}
                            />
                        )}
                    </div>

                    <div
                        className={
                            sortExpanded
                                ? 'sorting__list'
                                : 'sorting__list hidden-list'
                        }
                    >
                        {[
                            {
                                icon: 'tabler:chart-bar-popular',
                                label: 'Popularity',
                                value: 'popularity',
                            },
                            {
                                icon: 'mingcute:sort-descending-line',
                                label: 'Price (Low to High)',
                                value: 'low_to_high',
                            },
                            {
                                icon: 'mingcute:sort-ascending-line',
                                label: 'Price (High to Low)',
                                value: 'high_to_low',
                            },
                        ].map(({ icon, label, value }) => (
                            <div
                                className={`${
                                    sortedOption === value
                                        ? 'active_category'
                                        : null
                                } category_wrapper`}
                                onClick={() => setSortedOption(value)}
                                key={value}
                            >
                                <Icon icon={icon} className='icon' />
                                <p>{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className='sorting-heading'>
                        <h6>Categories</h6>
                        {sortCategoriesExpanded ? (
                            <Icon
                                icon='cuida:minus-outline'
                                className='icon'
                                onClick={() => setSortCategoriesExpanded(false)}
                            />
                        ) : (
                            <Icon
                                icon='tabler:chevron-down'
                                className='icon'
                                onClick={() => setSortCategoriesExpanded(true)}
                            />
                        )}
                    </div>

                    <div
                        className={
                            sortCategoriesExpanded
                                ? 'sorting__categories__list'
                                : 'sorting__categories__list hidden-list'
                        }
                    >
                        {[
                            {
                                icon: 'hugeicons:grid-view',
                                label: 'All',
                                value: '',
                            },
                            {
                                icon: 'hugeicons:running-shoes',
                                label: 'Shoes',
                                value: 'shoes',
                            },
                        ].map(({ icon, label, value }) => (
                            <div
                                className={`${
                                    searchItem === value
                                        ? 'active_category'
                                        : null
                                } category_wrapper`}
                                onClick={() => handleCategorySelection(value)}
                                key={value}
                            >
                                <Icon icon={icon} className='icon' />
                                <p>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className='clothing__items'
                    data-attr={visibleItems.length}
                    sorted-option={sortedOption ? sortedOption : ''}
                >
                    {visibleItems.map(
                        ({
                            productName,
                            productPrice,
                            productId,
                            image,
                            image2,
                            isFavorite,
                            link,
                            uniqueProductID,
                            productsTags,
                        }) => (
                            <ProductCard
                                productName={productName}
                                productPrice={productPrice}
                                productId={productId}
                                image={image}
                                image2={image2}
                                link={link}
                                uniqueProductID={uniqueProductID}
                                isFavorite={isFavorite}
                                key={productId + productName}
                                productsTags={productsTags}
                            />
                        )
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ShoesSubpage;
