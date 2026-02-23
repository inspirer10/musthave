//import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { toast } from 'sonner';

import { BsBookmarks, BsFillBookmarksFill } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { ImHeartBroken } from 'react-icons/im';

import { useStore } from '@/store/useStore';

function ProductCard({
    productName,
    productId,
    productPrice,
    productPopularity,
    image,
    image2,
    link,
    uniqueProductID,
    //isFavorite, // This comes from Redux (allProductsSlice)
}) {
    const favItemsList = useStore((state) => state.favItemsList);
    const addFavoriteItem = useStore((state) => state.addFavoriteItem);
    const removeFavoriteItem = useStore((state) => state.removeFavoriteItem);
    const toggleFavorite = useStore((state) => state.toggleFavorite);

    // Get favorite status directly from Redux
    /*const isFavorite = useSelector((state) =>
        state.favorite.favItemsList.some(
            (item) => item.uniqueProductID === uniqueProductID
        )
    );*/

    // Get favorite status directly from Zustand
    const isFavorite = favItemsList.some(
        (item) => item.uniqueProductID === uniqueProductID,
    );

    const handleFavoriteItem = () => {
        if (!isFavorite) {
            //dodanie prod do FAV_List - produkt jako payload
            addFavoriteItem({
                productName,
                productPrice,
                productId,
                image,
                image2,
                link,
                uniqueProductID,
            });

            addFavNotification();
        } else {
            removeFavoriteItem(uniqueProductID);
            removeFavNotification();
        }
        //Toggle in allProductsSlice
        //TOGGLE stanu isFavorite w LocalStorage //true||false
        toggleFavorite(uniqueProductID);
    };

    const addFavNotification = () =>
        toast(
            <>
                <GrFavorite
                    size={18}
                    color='#fff'
                    style={{ verticalAlign: 'middle', marginRight: '7px' }}
                />
                Added to List&nbsp;
            </>,
            {
                style: {
                    fontSize: '16px',
                    fontWeight: '400',
                    letterSpacing: '0px',
                    color: '#fff',
                    //padding: '10px 16px',
                    background: 'rgb(10, 0, 193)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
            },
        );

    const removeFavNotification = () =>
        toast(
            <>
                <ImHeartBroken
                    size={18}
                    color='#fff'
                    style={{ verticalAlign: 'middle', marginRight: '7px' }}
                />
                Removed from List&nbsp;
            </>,
            {
                style: {
                    fontSize: '16px',
                    fontWeight: '400',
                    letterSpacing: '0px',
                    color: '#fff',
                    //padding: '10px 16px',
                    background: 'rgb(10, 0, 193)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
            },
        );

    return (
        <>
            <div
                key={productName + productId}
                className='clothing__single__item'
            >
                <Link
                    className='image__container'
                    href={`/product/${productId.toLowerCase()}/${productName.toUpperCase()}`}
                >
                    <Image
                        height={400}
                        width={400}
                        title={productName}
                        src={image}
                        //Prioritize loading for top 6 popular items
                        priority={productPopularity <= 6 ? true : false}
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
                </Link>

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
                        onClick={handleFavoriteItem}
                    >
                        {isFavorite ? (
                            <BsFillBookmarksFill
                                className='fav-icon'
                                style={{ color: 'rgb(1, 42, 254)' }}
                            />
                        ) : (
                            <BsBookmarks className='fav-icon' />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
