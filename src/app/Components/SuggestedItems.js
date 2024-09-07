import React from 'react';
import productsData from '../productsData';
import { IoBookmarksOutline } from 'react-icons/io5';

function SuggestedItems() {
    let firstItem = 0, // od 0 do 3
        secondItem = 0, // od 4 do 7
        thirdItem = 0, // od 8 do 11
        fourthItem = 0; // od 12 do 15

    function selectItems() {
        firstItem = Math.floor(Math.random() * 4); // od 0 do 3
        secondItem = Math.floor(Math.random() * 4) + 4; // od 4 do 7
        thirdItem = Math.floor(Math.random() * 4) + 8; // od 8 do 11
        fourthItem = Math.floor(Math.random() * 4) + 12; // od 12 do 15
    }
    selectItems();

    let suggestedProducts = [
        productsData.accessories[firstItem],
        productsData.accessories[secondItem],
        productsData.accessories[thirdItem],
        productsData.accessories[fourthItem],
    ];

    // Funkcja do losowego tasowania tablicy
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(suggestedProducts);

    return (
        <>
            <h2 className='suggested__heading'>YOU MAY ALSO LIKE</h2>
            <p className='suggested__sub_heading'>
                Check out these great products
            </p>
            <div className='suggested__items_container'>
                {suggestedProducts.map(
                    ({ productName, productPrice, productId, image }) => (
                        <div
                            key={productName + productId}
                            className='suggested__single__item'
                            onClick={() =>
                                (document.location.href = `/product/${productId.toLowerCase()}/${productName.toUpperCase()}`)
                            }
                        >
                            <div className='element'>
                                <img
                                    title={productName}
                                    src={image}
                                    alt='product'
                                    className='element__image'
                                />
                                <div className='element__description'>
                                    {productName}
                                </div>
                            </div>

                            <div className='clothing__info'>
                                <p className='name'>{productName}</p>
                                <p className='price'>{productPrice}$</p>

                                <div className='favorite-button'>
                                    <IoBookmarksOutline className='fav-icon' />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default SuggestedItems;
