import React, { useEffect, useState } from 'react';
import Image from 'next/image.js';
import { v4 as uuidv4 } from 'uuid';
import { IoBookmarks, IoBookmarksOutline } from 'react-icons/io5';

import { useSelector, useDispatch } from 'react-redux';

import {
    addFavoriteItem,
    removeFavoriteItem,
} from '/src/app/GlobalStore/favoriteSlice.js';
import { toggleFavorite } from '/src/app/GlobalStore/allProductsSlice.js';

function ProductCard({
    productName,
    productId,
    productPrice,
    image,
    image2,
    link,
    isFavorite,
}) {
    const dispatch = useDispatch();
    // Pobieranie obecnej listy ulubionych
    const favoriteList = useSelector((state) => state.favorite.favItemsList);
    //console.log(favoriteList);
    //const [data, setData] = useState(favoriteList);
    //console.log(data);
    useEffect(() => {
        // setData(favoriteList);
        console.log('wywołanie use effect');
    }, []);

    const handleFavoriteItem = (payload, id) => {
        // Sprawdzanie, czy produkt już istnieje w tablicy
        const isInFavoriteList = favoriteList.some((item) => item.photo === id); //data z 27 linii

        if (!isInFavoriteList) {
            dispatch(addFavoriteItem(payload)); //dodanie prod do FAV_List - produkt jako payload
        } else {
            dispatch(removeFavoriteItem(id));
        }
        dispatch(toggleFavorite(id)); //TOGGLE stanu isFavorite w LocalStorage //true||false
    };

    //obsługa zmiany ikonki po dodaniu do ULUBIONYCH - favorite
    const [localFavorite, setLocalFavorite] = useState(isFavorite);
    useEffect(() => {
        setLocalFavorite(isFavorite);
    }, [isFavorite]);

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

                <div
                    className='favorite-button'
                    onClick={() => {
                        handleFavoriteItem(
                            {
                                productName: productName,
                                productPrice: productPrice,
                                productId: productId,
                                uniquId: uuidv4(),
                                image: image,
                                image2: image2,
                                link: link,
                                isFavorite: isFavorite,
                            },
                            image
                        );
                        setLocalFavorite(!localFavorite);
                    }}
                >
                    {localFavorite ? (
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
