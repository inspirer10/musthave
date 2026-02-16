//import { FiLink, FiLink2 } from 'react-icons/fi';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { Toaster, toast } from 'sonner';

import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { FaHeartBroken } from 'react-icons/fa';
import {
    FiMinus,
    FiPlus,
    FiScissors,
    FiShare,
} from 'react-icons/fi';
import { IoAddCircle } from 'react-icons/io5';

import Navbar from '../Navbar/Navbar';
import Bag from '../Bag/Bag';
import SuggestedItems from '../SuggestedItems/SuggestedItems';
import Footer from '../Footer/Footer';
import DetailsItem from './DetailsItem';

import { useStore } from '@/store/useStore';
import './product.scss';

function ProductPage({
    //isFavorite,
    image1,
    image2,
    image3,
    image4,
    image5,
    imagesCount,
    productName,
    productPrice,
    productCategory,
    productDescription,
    renderSuggested, //4 items that are suggested to buy for user
    size,
    link,
    productId,
    uniqueProductID,
}) {
    const addItemToCart = useStore((state) => state.addItemToCart);
    const favItemsList = useStore((state) => state.favItemsList);
    const addFavoriteItem = useStore((state) => state.addFavoriteItem);
    const removeFavoriteItem = useStore((state) => state.removeFavoriteItem);
    const toggleFavorite = useStore((state) => state.toggleFavorite);

    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemSize, setItemSize] = useState('');
    const [activeImg, setActiveImg] = useState(image1);

    // Get favorite status from Zustand
    const isFavorite = favItemsList.some(
        (item) => item.uniqueProductID === uniqueProductID,
    );

    const handleFavoriteItem = () => {
        if (!isFavorite) {
            addFavoriteItem({
                productName,
                productPrice,
                productId,
                image: image1,
                image2,
                link,
                uniqueProductID,
            });
            toggleFavorite(uniqueProductID);

            // Show add modal
            addFavNotification();
        } else {
            removeFavoriteItem(uniqueProductID);
            toggleFavorite(uniqueProductID);

            // Show remove modal
            removeFavNotification();
        }
    };

    function addProductToBag({ name, price, link, photo }) {
        if (itemQuantity > 0 && itemSize !== '') {
            addItemToCart({
                name,
                id: uuidv4(),
                size: itemSize,
                quantity: itemQuantity,
                price: itemQuantity * price,
                link,
                photo,
            });

            setItemQuantity(0);
            setItemSize('');

            //success toast notification
            addedNotification();
        } else if (itemQuantity > 0) {
            sizeNotification();
        } else {
            return;
        }
    }

    useEffect(() => {
        setActiveImg(image1);
    }, [image1]);

    let sizingTextContent;
    if (productCategory === 'Accessories') {
        sizingTextContent = 'Available in ONE size.';
    } else if (size === 'Shoes') {
        sizingTextContent = 'Available in sizes 36, 38, 40, 42, and 44.';
    } else if (size === 'Clothing') {
        sizingTextContent = 'Available in sizes XS, S, M, L, and XL.';
    }

    const detailsData = [
        {
            label: `Product details`,
            icon: '',
            textContent: productDescription,
        },
        {
            label: `Shipping & returns`,
            icon: '',
            textContent:
                'Enjoy free standard shipping on all orders over $50. Orders are processed within 1-2 business days, and you will receive a tracking number once your package is shipped. We offer a 30-day return policy for a full refund, provided the item is in its original condition.',
        },
        {
            label: 'Sizing',
            icon: '',
            textContent: `${sizingTextContent} Please refer to our size chart to find your perfect fit. If you're between sizes, we recommend ordering the next size up for a more comfortable fit.`,
        },
        {
            label: 'Delivery',
            icon: '',
            textContent:
                'Expect your order to arrive within 3-5 business days for standard shipping. Expedited shipping options are available at checkout. For international orders, delivery times may vary based on the destination country.',
        },
    ];

    const handleItemSizeSelect = (e) => {
        setItemSize(e.target.value);
    };

    let SELECT_SIZE = <p>Size</p>;

    if (size === 'Accessories') {
        SELECT_SIZE = (
            <select id='size' value={itemSize} onChange={handleItemSizeSelect}>
                <option value='' disabled hidden>
                    Select Size
                </option>
                <option value='ONE'>ONE</option>
            </select>
        );
    } else if (size === 'Shoes') {
        SELECT_SIZE = (
            <select id='size' value={itemSize} onChange={handleItemSizeSelect}>
                <option value='' disabled hidden>
                    Select Size
                </option>
                <option value='36'>36</option>
                <option value='38'>38</option>
                <option value='40'>40</option>
                <option value='42'>42</option>
                <option value='44'>44</option>
            </select>
        );
    } else if (size === 'Clothing') {
        SELECT_SIZE = (
            <select id='size' value={itemSize} onChange={handleItemSizeSelect}>
                <option value='' disabled hidden>
                    Select Size
                </option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>
        );
    }

    useEffect(() => {
        let titleId =
            productId.charAt(0).toUpperCase() +
            productId.slice(1).toLowerCase();

        let titleName =
            productName.charAt(0).toUpperCase() +
            productName.slice(1).toLowerCase();

        document.title = `${titleId} ${titleName.toUpperCase()} | MUSTHAVE`;
    }, [productId, productName]);

    const renderSuggestedItems = renderSuggested;

    const [isThrottled, setIsThrottled] = useState(false); //Blok zmiany obrazków onScroll zbyt szybko
    const containerRef = useRef(null);

    const handleScroll = useCallback((e) => {
        e.preventDefault(); //Zatrzymuje domyślne działanie przeglądarki
        e.stopPropagation(); //Zatrzymuje propagację zdarzenia

        if (isThrottled) return;
        setIsThrottled(true); //Ustaw blokadę
        setTimeout(() => setIsThrottled(false), 125);

        if (e.deltaY > 0) {
            //Scroll w dół (przechodzenie naprzód)
            if (imagesCount === 3) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image2);
                        break;
                    case image2:
                        setActiveImg(image3);
                        break;
                    case image3:
                        setActiveImg(image1);
                        break;

                    default:
                        break;
                }
            } else if (imagesCount === 4) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image2);
                        break;
                    case image2:
                        setActiveImg(image3);
                        break;
                    case image3:
                        setActiveImg(image4);
                        break;
                    case image4:
                        setActiveImg(image1);
                        break;
                    default:
                        break;
                }
            } else if (imagesCount === 5) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image2);
                        break;
                    case image2:
                        setActiveImg(image3);
                        break;
                    case image3:
                        setActiveImg(image4);
                        break;
                    case image4:
                        setActiveImg(image5);
                        break;
                    case image5:
                        setActiveImg(image1);
                        break;
                    default:
                        break;
                }
            }
        } else {
            //Scroll w górę (przechodzenie wstecz)
            if (imagesCount === 3) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image3);
                        break;
                    case image2:
                        setActiveImg(image1);
                        break;
                    case image3:
                        setActiveImg(image2);
                        break;
                    default:
                        break;
                }
            } else if (imagesCount === 4) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image4);
                        break;
                    case image2:
                        setActiveImg(image1);
                        break;
                    case image3:
                        setActiveImg(image2);
                        break;
                    case image4:
                        setActiveImg(image3);
                        break;
                    default:
                        break;
                }
            } else if (imagesCount === 5) {
                switch (activeImg) {
                    case image1:
                        setActiveImg(image5);
                        break;
                    case image2:
                        setActiveImg(image1);
                        break;
                    case image3:
                        setActiveImg(image2);
                        break;
                    case image4:
                        setActiveImg(image3);
                        break;
                    case image5:
                        setActiveImg(image4);
                        break;
                    default:
                        break;
                }
            }
        }
    }, [
        activeImg,
        image1,
        image2,
        image3,
        image4,
        image5,
        imagesCount,
        isThrottled,
    ]);

    useEffect(() => {
        const container = containerRef.current;
        //Dodanie zdarzenia `wheel` z `passive: false`
        const handleWheel = (e) => handleScroll(e);
        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            //Usunięcie zdarzenia przy odmontowywaniu komponentu
            container.removeEventListener('wheel', handleWheel);
        };
    }, [isThrottled, activeImg, handleScroll]);

    //TOASTS in bottom right corner
    const urlNotification = () =>
        toast.success(
            <>
                URL copied successfully&nbsp;
                <FiShare
                    size={18}
                    color='#fff'
                    style={{ verticalAlign: 'middle', marginLeft: '2px' }}
                />
            </>,
            {
                style: {
                    fontSize: '15px',
                    fontWeight: '300',
                    letterSpacing: '-0.2px',
                    color: '#fff',
                    //padding: '10px 16px',
                    background: 'rgb(5, 5, 5)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    borderRadius: '50px',
                    userSelect: 'none',
                },
                iconTheme: {
                    primary: 'rgb(75, 255, 0)',
                    secondary: '#FFF',
                },
            },
        );

    const sizeNotification = () =>
        toast.error('Please select your Size', {
            style: {
                fontSize: '15px',
                fontWeight: '300',
                letterSpacing: '-0.2px',
                color: '#fff',
                //padding: '10px 16px',
                background: 'rgb(5, 5, 5)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '50px',
                userSelect: 'none',
            },
        });

    const addedNotification = () =>
        toast.success('Product successfully added', {
            style: {
                fontSize: '15px',
                fontWeight: '300',
                letterSpacing: '-0.2px',
                color: '#fff',
                //padding: '10px 16px',
                background: 'rgb(5, 5, 5)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '50px',
                userSelect: 'none',
            },
        });

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
                <FaHeartBroken
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

            <article className='links-container additional-space'>
                <div className='links-wrapper'>
                    <p onClick={() => (document.location.href = '/')}>
                        MUSTHAVE
                    </p>
                    <span>/</span>
                    <p onClick={() => (document.location.href = `/items/`)}>
                        ITEMS
                    </p>
                    <span>/</span>
                    <p
                        onClick={() =>
                            (document.location.href = `/${productCategory.toLowerCase()}/`)
                        }
                    >
                        {productCategory}
                    </p>
                    <span>/</span>
                    <p className='active-link'>{productName}</p>
                </div>
            </article>

            <div className='product__container'>
                <div className='product'>
                    <div className='img-container-mobile'>
                        <Image
                            height={600}
                            width={450}
                            // priority
                            //quality={90}
                            id='imageBox'
                            src={activeImg}
                            alt='Product thumbnail'
                        />
                    </div>

                    <div className='images-container'>
                        <div className='product-thumbnails'>
                            {[image1, image2, image3, image4, image5].map(
                                (img, index) =>
                                    img && (
                                        <Image
                                            key={index}
                                            src={img}
                                            className={
                                                img === activeImg
                                                    ? 'thumbnail-image active_image'
                                                    : 'thumbnail-image'
                                            }
                                            height={125}
                                            width={100}
                                            onClick={() => setActiveImg(img)}
                                            alt={`product photo_${index + 1}`}
                                            loading={
                                                index > 1 ? 'lazy' : undefined
                                            }
                                            priority={
                                                index === 1 ? true : false
                                            }
                                        />
                                    ),
                            )}
                        </div>

                        <div
                            className='img-wrapper'
                            ref={containerRef} // Przypisanie referencji
                            onWheel={(e) => handleScroll(e)}
                        >
                            <Image
                                src={activeImg}
                                height={650}
                                width={500}
                                priority
                                quality={90}
                                id='imageBox'
                                alt='Product thumbnail'
                            />
                        </div>
                    </div>
                </div>

                <div className='product__info'>
                    <div className='product__description'>
                        <p className='brand'>MUSTHAVE</p>
                        <h2>
                            {productId} {productName}
                        </h2>
                        <p>${productPrice}</p>
                    </div>
                    <div className='additional-info-container'>
                        {detailsData.map(
                            ({ icon, label, textContent }, index) => (
                                <DetailsItem
                                    key={index}
                                    icon={icon}
                                    label={label}
                                    textContent={textContent}
                                />
                            ),
                        )}
                    </div>
                    <div className='selector-container'>
                        <div className='size-selector'>
                            <div className='size-selector-label'>
                                <label htmlFor='size'>SIZE:</label>
                                <p className='size-guide'>
                                    <FiScissors className='ruler-icon' />
                                    SIZE GUIDE{' '}
                                </p>
                            </div>
                            {SELECT_SIZE}
                        </div>

                        <div className='quantity__selector'>
                            <button
                                onClick={() => {
                                    if (itemQuantity <= 1) {
                                        return;
                                    } else setItemQuantity(itemQuantity - 1);
                                }}
                                className={
                                    itemQuantity === 1 ? 'disabled' : null
                                }
                            >
                                <FiMinus className='icon' />
                            </button>

                            <p>{itemQuantity}</p>
                            <button
                                onClick={() => {
                                    if (itemQuantity === 20) {
                                        return;
                                    } else setItemQuantity(itemQuantity + 1);
                                }}
                                className={
                                    itemQuantity === 20 ? 'disabled' : null
                                }
                            >
                                <FiPlus className='icon' />
                            </button>
                        </div>

                        <div className='buttons-wrapper'>
                            <div
                                className='add_bag-button'
                                key={link}
                                onClick={() => {
                                    addProductToBag({
                                        name: productName,
                                        price: productPrice,
                                        link: link,
                                        photo: image1,
                                    });
                                }}
                            >
                                <div className='background' />
                                <p className='text'>ADD TO BAG</p>
                                <div className='icon'>
                                    <IoAddCircle />
                                </div>
                            </div>

                            <div
                                className='favorite-button'
                                onClick={handleFavoriteItem}
                            >
                                {isFavorite ? (
                                    <BsBookmarkFill className='fav-icon' />
                                ) : (
                                    <BsBookmark className='fav-icon' />
                                )}
                            </div>

                            <div
                                className='copy_link-button'
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        window.location.href,
                                    );
                                    urlNotification();
                                }}
                            >
                                <FiShare className='copy-icon' />
                            </div>
                        </div>
                    </div>
                    {/* ADDITIONAL INFO OG POSITION */}
                </div>
            </div>

            <Toaster
                position='bottom-right'
                gap={6}
                toastOptions={{
                    classNames: {
                        toast: 'custom-toast',
                    },
                }}
            />

            {renderSuggestedItems && (
                <SuggestedItems
                    seedKey={uniqueProductID}
                    excludeProductId={`${productId}-${productName}`}
                />
            )}
            <Footer />
        </>
    );
}

export default ProductPage;
