import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Bag from './Bag/Bag.js';
import Footer from './Footer.js';
import { AiOutlineMinus } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.js';

function ShoesSubpage() {
    const shoesItems = useSelector((state) => state.allProducts.allProducts[2]);
    const [searchItem, setSearchItem] = useState(''); // przechwytuje nazwę szukanego produktu
    const [data, setData] = useState(shoesItems); // sortowanie kolejności produktów
    const [sortedOption, setSortedOption] = useState(''); // SORT rerender podstrony
    const [sortExpanded, setSortExpanded] = useState(true); //opcje sort - rozwinięte czy nie
    const [sortCategoriesExpanded, setSortCategoriesExpanded] = useState(true); //opcje sort - rozwinięte czy nie

    //odkliknięcie wyboru kategorii (zmiana na ALL kiedy kliknięto 2raz)
    const handleCategorySelection = (category) => {
        if (searchItem === category) {
            setSearchItem('');
        } else {
            setSearchItem(category);
        }
    };

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'}>
                <label htmlFor='searchItems' className='search__items'>
                    <input
                        type='text'
                        placeholder='SEARCH'
                        id='searchItems'
                        className='search__items__input'
                        onChange={(e) => setSearchItem(e.target.value)}
                        value={searchItem}
                    />
                </label>
            </Navbar>
            <Bag />

            <article className='links-container'>
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
            </article>

            <section className='items_category_container'>
                <div className='sorting-wrapper'>
                    <div className='sorting-heading'>
                        <h6>Sort By</h6>
                        {sortExpanded ? (
                            <AiOutlineMinus
                                className='icon'
                                onClick={() => setSortExpanded(false)}
                            />
                        ) : (
                            <IoIosArrowDown
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
                        <label>
                            <input
                                type='radio'
                                name='sort'
                                value='popularity'
                                onClick={() => {
                                    setData(
                                        data.sort((a, b) =>
                                            a.productPopularity >
                                            b.productPopularity
                                                ? 1
                                                : -1
                                        )
                                    );
                                    setSortedOption('default');
                                }}
                            />
                            <span>Popularity</span>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='sort'
                                value='price-low-to-high'
                                onClick={() => {
                                    setData(
                                        data.sort((a, b) =>
                                            a.productPrice > b.productPrice
                                                ? 1
                                                : -1
                                        )
                                    );
                                    setSortedOption('low_to_high');
                                }}
                            />
                            <span>Price (Low to High)</span>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='sort'
                                value='price-high-to-low'
                                onClick={() => {
                                    setData(
                                        data.sort((a, b) =>
                                            a.productPrice < b.productPrice
                                                ? 1
                                                : -1
                                        )
                                    );
                                    setSortedOption('high_to_low');
                                }}
                            />
                            <span>Price (High to Low)</span>
                        </label>
                    </div>

                    <div className='sorting-heading'>
                        <h6>Categories</h6>
                        {sortCategoriesExpanded ? (
                            <AiOutlineMinus
                                className='icon'
                                onClick={() => setSortCategoriesExpanded(false)}
                            />
                        ) : (
                            <IoIosArrowDown
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
                        <label>
                            <input
                                type='radio'
                                name='category'
                                value='all'
                                //onClick={() => {setSearchItem('');}}
                                checked={searchItem === ''}
                                onClick={() => handleCategorySelection('')}
                                readOnly
                            />
                            <span>All</span>
                        </label>
                    </div>
                </div>

                <div
                    className='clothing__items'
                    data-attr={data.length}
                    id={sortedOption ? sortedOption : ''}
                >
                    {data
                        .filter((post) => {
                            if (searchItem === '') {
                                return post;
                            } else if (
                                post.productName
                                    .toLowerCase()
                                    .includes(searchItem.toLowerCase())
                            ) {
                                return post;
                            }
                        })
                        .map(
                            ({
                                productName,
                                productPrice,
                                productId,
                                image,
                                image2,
                                isFavorite,
                                link,
                            }) => (
                                <ProductCard
                                    productName={productName}
                                    productPrice={productPrice}
                                    productId={productId}
                                    image={image}
                                    image2={image2}
                                    link={link}
                                    isFavorite={isFavorite}
                                    key={productId + productName}
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
