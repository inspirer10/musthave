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
}) {
    const favItemsList = useStore((state) => state.favItemsList);
    const addFavoriteItem = useStore((state) => state.addFavoriteItem);
    const removeFavoriteItem = useStore((state) => state.removeFavoriteItem);
    const toggleFavorite = useStore((state) => state.toggleFavorite);

    const isFavorite = favItemsList.some(
        (item) => item.uniqueProductID === uniqueProductID
    );

    const productUrl = `/product/${productId.toLowerCase()}/${productName.toUpperCase()}`;
    const formattedPrice = `$${Number(productPrice).toLocaleString('en-US')}`;
    const shouldPrioritize =
        typeof productPopularity === 'number' && productPopularity <= 6;

    const handleFavoriteItem = () => {
        if (!isFavorite) {
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
                    background: 'rgb(10, 0, 193)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
            }
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
                    background: 'rgb(10, 0, 193)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
            }
        );

    return (
        <div className='clothing__single__item'>
            <Link className='image__container' href={productUrl}>
                <Image
                    height={400}
                    width={400}
                    title={productName}
                    src={image}
                    priority={shouldPrioritize}
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
                <span className='image-action'>View product</span>
            </Link>

            <div className='clothing__info'>
                <p className='brand'>MUSTHAVE</p>

                <Link className='name' href={productUrl}>
                    {productId + ' ' + productName}
                </Link>

                <div className='product-meta-row'>
                    <p className='price'>{formattedPrice}</p>
                </div>

                <button
                    type='button'
                    className='favorite-button'
                    onClick={handleFavoriteItem}
                    aria-label={
                        isFavorite
                            ? 'Remove from favorites'
                            : 'Add to favorites'
                    }
                >
                    {isFavorite ? (
                        <BsFillBookmarksFill
                            className='fav-icon'
                            style={{ color: 'rgb(1, 42, 254)' }}
                        />
                    ) : (
                        <BsBookmarks className='fav-icon' />
                    )}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
