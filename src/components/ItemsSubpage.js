'use client';

import React, { useMemo, useState } from 'react';
import { useStore } from '@/store/useStore';

import Navbar from './Navbar/Navbar';
import Bag from './Bag/Bag';
import ProductCard from './ProductCard/ProductCard';
import Footer from './Footer/Footer';

import './productCategory.scss';
import { Icon } from '@iconify/react';

const sortOptions = [
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
];

const typeOptions = [
    {
        icon: 'hugeicons:grid-view',
        label: 'All',
        value: '',
        tags: [],
    },
    {
        icon: 'hugeicons:shirt-01',
        label: 'Tops',
        value: 'tops',
        tags: ['shirt', 'hoodie', 'sweatshirt'],
    },
    {
        icon: 'hugeicons:jogger-pants',
        label: 'Trousers',
        value: 'trousers',
        tags: ['trousers'],
    },
    {
        icon: 'hugeicons:dress-02',
        label: 'Dresses',
        value: 'dress',
        tags: ['dress'],
    },
    {
        icon: 'hugeicons:running-shoes',
        label: 'Shoes',
        value: 'shoes',
        tags: ['sneakers', 'boots', 'heels', 'slides', 'formal', 'shoes'],
    },
    {
        icon: 'hugeicons:shopping-bag-02',
        label: 'Bags',
        value: 'bags',
        tags: ['bags'],
    },
    {
        icon: 'hugeicons:glasses',
        label: 'Accessories',
        value: 'accessories',
        tags: ['glasses', 'headwear', 'soft-accessories', 'jewelry', 'socks'],
    },
];

const parseTags = (raw = '') =>
    raw
        .toLowerCase()
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

function ItemsSubpage() {
    const clothingItems = useStore((state) => state.products[0]);
    const accessoriesItems = useStore((state) => state.products[1]);
    const shoesItems = useStore((state) => state.products[2]);

    const [selectedType, setSelectedType] = useState('');
    const [sortedOption, setSortedOption] = useState(''); // 'popularity', 'low_to_high', 'high_to_low'
    const [sortExpanded, setSortExpanded] = useState(true); //price/popularity sort - rozwiniete czy nie
    const [typeExpanded, setTypeExpanded] = useState(true);

    const handleTypeSelection = (tag) => {
        if (selectedType === tag) {
            setSelectedType('');
        } else {
            setSelectedType(tag);
        }
    };

    const activeSortLabel = sortOptions.find(
        (option) => option.value === sortedOption
    )?.label;

    const activeTypeLabel = selectedType
        ? typeOptions.find((option) => option.value === selectedType)?.label
        : '';

    const hasActiveFilters = Boolean(sortedOption || selectedType);

    const visibleItems = useMemo(() => {
        const sourceItems = [
            ...(clothingItems || []),
            ...(shoesItems || []),
            ...(accessoriesItems || []),
        ];

        const selectedTypeOption = typeOptions.find(
            (option) => option.value === selectedType
        );
        const selectedTags = selectedTypeOption?.tags || [];

        const filtered = !selectedType
            ? sourceItems
            : sourceItems.filter((item) =>
                  selectedTags.some((tag) =>
                      parseTags(item.productsTags).includes(tag)
                  )
              );

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
    }, [
        clothingItems,
        shoesItems,
        accessoriesItems,
        selectedType,
        sortedOption,
    ]);

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'}>
                {/* <label htmlFor='searchItems' className='search__items'>
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
                    <p className='active-link'>ITEMS</p>
                </div>
                <h2 className='clothing__header'>All products</h2>
            </div>

            <section className='items_category_container'>
                <aside className='sorting-wrapper'>
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
                        {sortOptions.map(({ icon, label, value }) => (
                            <div
                                className={`${
                                    sortedOption === value
                                        ? 'active_category'
                                        : ''
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
                        <h6>Product Type</h6>
                        {typeExpanded ? (
                            <Icon
                                icon='cuida:minus-outline'
                                className='icon'
                                onClick={() => setTypeExpanded(false)}
                            />
                        ) : (
                            <Icon
                                icon='tabler:chevron-down'
                                className='icon'
                                onClick={() => setTypeExpanded(true)}
                            />
                        )}
                    </div>

                    <div
                        className={
                            typeExpanded
                                ? 'sorting__categories__list'
                                : 'sorting__categories__list hidden-list'
                        }
                    >
                        {typeOptions.map(({ icon, label, value }) => (
                            <div
                                className={`${
                                    selectedType === value
                                        ? 'active_category'
                                        : ''
                                } category_wrapper`}
                                onClick={() => handleTypeSelection(value)}
                                key={value}
                            >
                                <Icon icon={icon} className='icon' />
                                <p>{label}</p>
                            </div>
                        ))}
                    </div>
                </aside>

                <div className='products-panel'>
                    {hasActiveFilters && (
                        <>
                            <div className='items-toolbar'>
                                <div className='toolbar-meta'>
                                    <p className='results-count'>
                                        {visibleItems.length}{' '}
                                        {visibleItems.length === 1
                                            ? 'item'
                                            : 'items'}
                                    </p>
                                    {activeSortLabel && (
                                        <p className='active-sort'>
                                            Sorted by{' '}
                                            <span>{activeSortLabel}</span>
                                        </p>
                                    )}
                                </div>

                                <button
                                    type='button'
                                    className='clear-filters-button'
                                    onClick={() => {
                                        setSortedOption('');
                                        setSelectedType('');
                                    }}
                                >
                                    Clear all filters
                                </button>
                            </div>

                            <div className='active-filters'>
                                {activeSortLabel && (
                                    <button
                                        type='button'
                                        className='filter-chip'
                                        onClick={() => setSortedOption('')}
                                    >
                                        Sort: {activeSortLabel}
                                        <Icon
                                            icon='ic:round-close'
                                            className='icon'
                                        />
                                    </button>
                                )}

                                {activeTypeLabel && (
                                    <button
                                        type='button'
                                        className='filter-chip'
                                        onClick={() => setSelectedType('')}
                                    >
                                        Type: {activeTypeLabel}
                                        <Icon
                                            icon='ic:round-close'
                                            className='icon'
                                        />
                                    </button>
                                )}
                            </div>
                        </>
                    )}

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
                                productPopularity,
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
                                    productPopularity={productPopularity}
                                />
                            )
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ItemsSubpage;
