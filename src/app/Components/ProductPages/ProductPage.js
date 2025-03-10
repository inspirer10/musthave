import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Bag from '../Bag/Bag';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { v4 as uuidv4 } from 'uuid';

import SuggestedItems from '../SuggestedItems';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '/src/app/GlobalStore/cartSlice.js';
import {
    addFavoriteItem,
    removeFavoriteItem,
} from '/src/app/GlobalStore/favoriteSlice.js';
import { toggleFavorite } from '/src/app/GlobalStore/allProductsSlice.js';

import DetailsItem from '../DetailsItem';

import {
    IoBookmarks,
    IoBookmarksOutline,
    IoShareSocialOutline,
} from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { SlClose } from 'react-icons/sl';
import { IoMdAddCircle } from 'react-icons/io';
import { GrFavorite } from 'react-icons/gr';
import { FaHeartBroken } from 'react-icons/fa';
//import { FiLink, FiLink2 } from 'react-icons/fi';
import { FiMinus, FiPlus, FiShare, FiScissors } from 'react-icons/fi';

import '../../styles/header.scss';
import '../../styles/product.scss';
import '../../styles/footer.scss';

function ProductPage({
    isFavorite,
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
}) {
    const dispatch = useDispatch();
    let itemInfoModal = useRef(null);
    let itemSizeModal = useRef(null);
    let itemCopyURLModal = useRef(null);
    let itemFavoriteModal = useRef(null);
    let itemFavoriteModalRemove = useRef(null);

    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemSize, setItemSize] = useState('');
    const [activeImg, setActiveImg] = useState(image1);

    const handleAddItem = (payload) => {
        console.log(payload);
        dispatch(addItemToCart(payload)); //produkt jako payload
    };

    const favoriteList = useSelector((state) => state.favorite.favItemsList);

    const handleFavoriteItem = (payload, id) => {
        // Sprawdzanie, czy produkt już istnieje w tablicy
        const isInFavoriteList = favoriteList.some((item) => item.photo === id);

        if (!isInFavoriteList) {
            dispatch(addFavoriteItem(payload)); //dodanie prod do FAV_List - produkt jako payload
            if (itemFavoriteModal.current) {
                itemFavoriteModal.current.classList.add('show_added-modal');
                itemFavoriteModalRemove.current?.classList.remove(
                    'show_added-modal'
                );
                setTimeout(() => {
                    itemFavoriteModal.current?.classList.remove(
                        'show_added-modal'
                    );
                }, 2000);
            }
        } else {
            dispatch(removeFavoriteItem(id));
            if (itemFavoriteModalRemove.current) {
                itemFavoriteModalRemove.current.classList.add(
                    'show_added-modal'
                );
                itemFavoriteModal.current?.classList.remove('show_added-modal');
                setTimeout(() => {
                    itemFavoriteModalRemove.current?.classList.remove(
                        'show_added-modal'
                    );
                }, 1250);
            }
        }
        dispatch(toggleFavorite(id)); //TOGGLE stanu isFavorite w LocalStorage //true||false
    };

    function addProductToBag({ name, price, link, photo }) {
        if (itemQuantity !== 0 && itemQuantity !== '' && itemSize !== '') {
            handleAddItem({
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

            if (itemInfoModal.current) {
                itemInfoModal.current.classList.add('show_added-modal');
                setTimeout(() => {
                    itemInfoModal.current?.classList.remove('show_added-modal');
                }, 3000);
            }
        } else if (itemQuantity !== 0 && itemQuantity !== '') {
            if (itemSizeModal.current) {
                itemSizeModal.current.classList.add('show_added-modal');
                setTimeout(() => {
                    itemSizeModal.current?.classList.remove('show_added-modal');
                }, 2000);
            }
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
            textContent: productDescription,
        },
        {
            label: `Shipping & returns`,
            textContent:
                'Enjoy free standard shipping on all orders over $50. Orders are processed within 1-2 business days, and you will receive a tracking number once your package is shipped. We offer a 30-day return policy for a full refund, provided the item is in its original condition.',
        },
        {
            label: 'Sizing',
            textContent: `${sizingTextContent} Please refer to our size chart to find your perfect fit. If you're between sizes, we recommend ordering the next size up for a more comfortable fit.`,
        },
        {
            label: 'Delivery',
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
    }, []);

    const renderSuggestedItems = renderSuggested;

    const [isThrottled, setIsThrottled] = useState(false); //Blok zmiany obrazków onScroll zbyt szybko
    const containerRef = useRef(null);
    const handleScroll = (e) => {
        e.preventDefault(); //Zatrzymuje domyślne działanie przeglądarki
        e.stopPropagation(); //Zatrzymuje propagację zdarzenia

        if (isThrottled) return;
        setIsThrottled(true); //Ustaw blokadę
        setTimeout(() => setIsThrottled(false), 250);

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
    };

    useEffect(() => {
        const container = containerRef.current;
        //Dodanie zdarzenia `wheel` z `passive: false`
        const handleWheel = (e) => handleScroll(e);
        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            //Usunięcie zdarzenia przy odmontowywaniu komponentu
            container.removeEventListener('wheel', handleWheel);
        };
    }, [isThrottled, activeImg]);

    return (
        <>
            <Navbar color={'dimgray'} />
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
                <div className='itemInfoModal' ref={itemInfoModal}>
                    <p>
                        <GoCheckCircle className='icon-success' />
                        Product successfully added
                    </p>
                </div>

                <div className='itemSizeModal' ref={itemSizeModal}>
                    <p>
                        <SlClose className='icon' />
                        Please select your Size
                    </p>
                </div>

                <div className='itemCopyURLModal' ref={itemCopyURLModal}>
                    <p>
                        <FiShare className='icon' />
                        URL copied successfully
                    </p>
                </div>

                <div className='itemFavoriteModal' ref={itemFavoriteModal}>
                    <p>
                        <GrFavorite className='icon-heart' />
                        Added to List
                    </p>
                </div>

                <div
                    className='itemFavoriteModalRemove'
                    ref={itemFavoriteModalRemove}
                >
                    <p>
                        <FaHeartBroken className='icon-heart' />
                        Removed from List
                    </p>
                </div>

                <div className='product'>
                    <div className='img-container-mobile'>
                        <img
                            id='imageBox'
                            src={activeImg}
                            alt='Product thumbnail'
                        />
                    </div>

                    <div className='images-container'>
                        <div className='product-thumbnails'>
                            <Image
                                src={image1}
                                className={`${
                                    activeImg === image1
                                        ? 'thumbnail-image active_image'
                                        : 'thumbnail-image'
                                }`}
                                height={325}
                                width={325}
                                onClick={() => setActiveImg(image1)}
                                alt='product photo_1'
                            />
                            <Image
                                src={image2}
                                className={`${
                                    activeImg === image2
                                        ? 'thumbnail-image active_image'
                                        : 'thumbnail-image'
                                }`}
                                height={325}
                                width={325}
                                onClick={() => setActiveImg(image2)}
                                alt='product photo_2'
                                loading='lazy'
                            />
                            {image3 && (
                                <Image
                                    src={image3}
                                    className={`${
                                        activeImg === image3
                                            ? 'thumbnail-image active_image'
                                            : 'thumbnail-image'
                                    }`}
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image3)}
                                    alt='product photo_3'
                                    loading='lazy'
                                />
                            )}
                            {image4 && (
                                <Image
                                    src={image4}
                                    className={`${
                                        activeImg === image4
                                            ? 'thumbnail-image active_image'
                                            : 'thumbnail-image'
                                    }`}
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image4)}
                                    alt='product photo_4'
                                    loading='lazy'
                                />
                            )}
                            {image5 && (
                                <Image
                                    src={image5}
                                    className={`${
                                        activeImg === image5
                                            ? 'thumbnail-image active_image'
                                            : 'thumbnail-image'
                                    }`}
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image5)}
                                    alt='product photo_5'
                                    loading='lazy'
                                />
                            )}
                        </div>

                        <div
                            className='img-wrapper'
                            ref={containerRef} // Przypisanie referencji
                            onWheel={(e) => handleScroll(e)}
                        >
                            <Image
                                src={activeImg}
                                id='imageBox'
                                height={650}
                                width={650}
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
                        {detailsData.map((item, index) => (
                            <DetailsItem
                                key={index}
                                label={item.label}
                                textContent={item.textContent}
                            />
                        ))}
                    </div>
                    <div className='selector-container'>
                        <div className='size-selector'>
                            <div className='size-selector-label'>
                                <label for='size'>SIZE:</label>
                                <p class='size-guide'>
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
                                className={itemQuantity === 1 && 'disabled'}
                            >
                                <FiMinus className='icon' />
                            </button>

                            <p>{itemQuantity}</p>
                            <button
                                onClick={() => {
                                    if (itemQuantity >= 20) {
                                        return;
                                    } else setItemQuantity(itemQuantity + 1);
                                }}
                                className={itemQuantity === 20 && 'disabled'}
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
                                    <IoMdAddCircle />
                                </div>
                            </div>

                            <div
                                className='favorite-button'
                                onClick={() => {
                                    handleFavoriteItem(
                                        {
                                            name: productName,
                                            id: uuidv4(),
                                            price: productPrice,
                                            link: link,
                                            photo: image1,
                                        },
                                        image1
                                    );
                                }}
                            >
                                {isFavorite ? (
                                    <IoBookmarks className='fav-icon' />
                                ) : (
                                    <IoBookmarksOutline className='fav-icon' />
                                )}
                            </div>

                            <div
                                className='copy_link-button'
                                onClick={() => {
                                    navigator.clipboard.writeText(
                                        window.location.href
                                    );

                                    if (itemCopyURLModal.current) {
                                        itemCopyURLModal.current.classList.add(
                                            'show_added-modal'
                                        );
                                        setTimeout(() => {
                                            itemCopyURLModal.current?.classList.remove(
                                                'show_added-modal'
                                            );
                                        }, 3000);
                                    }
                                }}
                            >
                                <IoShareSocialOutline className='copy-icon' />
                            </div>
                        </div>
                    </div>
                    {/* ADDITIONAL INFO OG POSITION */}
                </div>
            </div>

            {renderSuggestedItems && <SuggestedItems />}
            <Footer />
        </>
    );
}

export default ProductPage;
