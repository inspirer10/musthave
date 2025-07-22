import Image from 'next/image';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    addFavoriteItem,
    removeFavoriteItem,
} from '/src/app/GlobalStore/favoriteSlice.js';
import { toggleFavorite } from '/src/app/GlobalStore/allProductsSlice.js';

//import { v4 as uuidv4 } from 'uuid';
import { IoBookmarks, IoBookmarksOutline } from 'react-icons/io5';

function ProductCard({
    productName,
    productId,
    productPrice,
    image,
    image2,
    link,
    uniqueProductID,
    //isFavorite, // This comes from Redux (allProductsSlice)
}) {
    const dispatch = useDispatch();

    // Get favorite status directly from Redux
    const isFavorite = useSelector((state) =>
        state.favorite.favItemsList.some(
            (item) => item.uniqueProductID === uniqueProductID
        )
    );

    const handleFavoriteItem = () => {
        if (!isFavorite) {
            //dodanie prod do FAV_List - produkt jako payload
            dispatch(
                addFavoriteItem({
                    productName,
                    productPrice,
                    productId,
                    image,
                    image2,
                    link,
                    uniqueProductID,
                    //isFavorite: true,
                })
            );
        } else {
            dispatch(removeFavoriteItem(uniqueProductID));
        }
        //Toggle in allProductsSlice
        //TOGGLE stanu isFavorite w LocalStorage //true||false
        dispatch(toggleFavorite(uniqueProductID));
    };

    return (
        <div key={productName + productId} className='clothing__single__item'>
            <div
                className='image__container'
                onClick={() =>
                    (document.location.href = `/product/${productId.toLowerCase()}/${productName.toUpperCase()}`)
                }
            >
                <Image
                    height={400}
                    width={400}
                    title={productName}
                    src={image}
                    className='main_image'
                    alt={`${productName} thumbnail`}
                />
                <Image
                    height={400}
                    width={400}
                    title={productName}
                    src={image2}
                    className='secondary_image'
                    alt={`${productName} alternate view`}
                    loading='lazy'
                />
            </div>

            <div className='clothing__info'>
                <h5>{uniqueProductID}</h5>
                <p className='brand'>MUSTHAVE</p>
                <p
                    className='name'
                    onClick={() =>
                        (document.location.href = `/product/${productId.toLowerCase()}/${productName.toUpperCase()}`)
                    }
                >
                    {productId + ' ' + productName}
                </p>
                <p className='price'>{productPrice}$</p>

                <div className='favorite-button' onClick={handleFavoriteItem}>
                    {isFavorite ? (
                        <IoBookmarks className='fav-icon' />
                    ) : (
                        <IoBookmarksOutline className='fav-icon' />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
