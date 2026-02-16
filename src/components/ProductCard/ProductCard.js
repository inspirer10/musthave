//import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { GrFavorite } from 'react-icons/gr';
import { ImHeartBroken } from 'react-icons/im';

import { useStore } from '@/store/useStore';
import { Icon } from '@iconify/react';

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
                Added to Favorites&nbsp;
            </>,
            {
                style: {
                    fontSize: '16px',
                    fontWeight: '400',
                    letterSpacing: '0px',
                    color: '#fff',
                    //padding: '10px 16px',
                    background: 'rgb(1, 42, 254)',
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
                Removed from Favorites&nbsp;
            </>,
            {
                style: {
                    fontSize: '16px',
                    fontWeight: '400',
                    letterSpacing: '0px',
                    color: '#fff',
                    //padding: '10px 16px',
                    background: 'rgb(1, 42, 254)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
            },
        );

    return (
        <>
            <Toaster
                position='bottom-right'
                reverseOrder={true}
                gutter={6}
                /* gap={6}
                toastOptions={{
                    classNames: {
                        toast: 'custom-toast',
                    },
                }}*/
            />

            <div
                key={productName + productId}
                className='clothing__single__item'
            >
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
                        priority
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
                        onClick={handleFavoriteItem}
                    >
                        {isFavorite ? (
                            <Icon
                                icon='famicons:bookmarks'
                                className='fav-icon'
                                style={{ color: 'rgb(1, 42, 254)' }}
                            />
                        ) : (
                            <Icon
                                icon='famicons:bookmarks-outline'
                                className='fav-icon'
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
