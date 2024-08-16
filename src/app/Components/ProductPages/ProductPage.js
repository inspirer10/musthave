import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Bag from '../Bag/Bag';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { v4 as uuidv4 } from 'uuid';

import SuggestedItems from '../SuggestedItems';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '/src/app/GlobalStore/cartSlice.js';
import DetailsItem from '../DetailsItem';

import { IoBookmarks } from 'react-icons/io5';
import { MdOutlineCheck } from 'react-icons/md';
import { SlClose } from 'react-icons/sl';

import { CiRuler } from 'react-icons/ci';

import '../../styles/header.scss';
import '../../styles/product.scss';
import '../../styles/footer.scss';

function ProductPage({
    image1,
    image2,
    image3,
    image4,
    image5,
    productName,
    productPrice,
    productCategory,
    productDescription,
    renderSuggested, //4 items that are suggested to buy for user
    size,
    link,
    productId,
}) {
    let itemInfoModal = useRef(null);
    let itemSizeModal = useRef(null);
    let itemQuantityModal = useRef(null);
    const dispatch = useDispatch();
    //const itemsInCart = useSelector((state) => state.cart.items);

    const handleAddItem = (payload) => {
        console.log(payload);
        dispatch(addItemToCart(payload)); // Wysyłamy produkt jako payload
    };

    const renderSuggestedItems = renderSuggested;
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemSize, setItemSize] = useState('');
    const [activeImg, setActiveImg] = useState(image1);

    function handleQuantityChange(e) {
        setItemQuantity(e.target.value);
    }

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
                }, 3250);
            }
        } else if (itemQuantity !== 0 && itemQuantity !== '') {
            if (itemSizeModal.current) {
                itemSizeModal.current.classList.add('show_added-modal');
                setTimeout(() => {
                    itemSizeModal.current?.classList.remove('show_added-modal');
                }, 2100);
            }
        } else if (itemSize !== '') {
            if (itemQuantityModal.current) {
                itemQuantityModal.current.classList.add('show_added-modal');
                setTimeout(() => {
                    itemQuantityModal.current?.classList.remove(
                        'show_added-modal'
                    );
                }, 2100);
            }
        } else {
            return;
        }
    }

    //const navigate = useNavigate();
    useEffect(() => {
        setActiveImg(image1);
    }, [/*navigate,*/ image1]);

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
                <div
                    className='itemInfoModal'
                    style={{ transitionDuration: '300ms' }}
                    ref={itemInfoModal}
                >
                    <p>
                        Product successfully added
                        <MdOutlineCheck className='icon-success' />
                    </p>
                </div>

                <div className='itemSizeModal' ref={itemSizeModal}>
                    <p>
                        Please select your Size
                        <SlClose className='icon' />
                    </p>
                </div>

                <div className='itemQuantityModal' ref={itemQuantityModal}>
                    <p>
                        Please select Quantity
                        <SlClose className='icon' />
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
                                className='thumbnail-image'
                                height={325}
                                width={325}
                                onClick={() => setActiveImg(image1)}
                                alt='product photo_1'
                            />
                            <Image
                                src={image2}
                                className='thumbnail-image'
                                height={325}
                                width={325}
                                onClick={() => setActiveImg(image2)}
                                alt='product photo_2'
                            />
                            {image3 && (
                                <Image
                                    src={image3}
                                    className='thumbnail-image'
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image3)}
                                    alt='product photo_3'
                                />
                            )}
                            {image4 && (
                                <Image
                                    src={image4}
                                    className='thumbnail-image'
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image4)}
                                    alt='product photo_4'
                                />
                            )}
                            {image5 && (
                                <Image
                                    src={image5}
                                    className='thumbnail-image'
                                    height={325}
                                    width={325}
                                    onClick={() => setActiveImg(image5)}
                                    alt='product photo_5'
                                />
                            )}
                        </div>

                        <div className='img-wrapper'>
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
                    <div className='additional-info'>
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
                                    SIZE GUIDE{' '}
                                    <CiRuler className='ruler-icon' />
                                </p>
                            </div>
                            {SELECT_SIZE}
                        </div>

                        <div className='quantity__selector'>
                            <p>Quantity</p>
                            <input
                                onChange={handleQuantityChange}
                                type='number'
                                placeholder='1'
                                min={1}
                                max={20}
                                value={itemQuantity}
                            />
                        </div>

                        <div className='buttons-wrapper'>
                            <button
                                className='add-to-bag'
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
                                ADD TO BAG
                            </button>
                            <div className='favorite-button'>
                                <IoBookmarks className='fav-icon' />
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
