import React, { useState, useEffect } from 'react';
import Bag from '../Bag/Bag';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { v4 as uuidv4 } from 'uuid';
import './product.scss';
import SuggestedItems from '../SuggestedItems';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DetailsItem from '../DetailsItem';

import { IoBookmarkSharp } from 'react-icons/io5';
import { MdOutlineCheck } from 'react-icons/md';
import { AiOutlineSelect } from 'react-icons/ai';

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
    const dispatch = useDispatch();
    const addItem = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    const renderSuggestedItems = renderSuggested;
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemSize, setItemSize] = useState('');
    const [activeImg, setActiveImg] = useState(image1);

    function handleQuantityChange(e) {
        setItemQuantity(e.target.value);
    }

    const itemInfoModal = document.querySelector('.itemInfoModal');
    const itemSizeModal = document.querySelector('.itemSizeModal');
    const itemQuantityModal = document.querySelector('.itemQuantityModal');

    function addProductToBag({ name, price, link, photo }) {
        if (itemQuantity !== 0 && itemQuantity !== '' && itemSize !== '') {
            //addItem - dodawanie przez reducer do store'a
            addItem({
                name: name,
                id: uuidv4(),
                size: itemSize,
                quantity: itemQuantity,
                price: itemQuantity * price,
                link: link,
                photo: photo,
            });

            //resetowanie inputów
            setItemQuantity(0);
            setItemSize('');

            itemInfoModal.classList.add('show_added-modal');
            setTimeout(() => {
                itemInfoModal.classList.remove('show_added-modal');
            }, 3250);
        } else if (itemQuantity !== 0 && itemQuantity !== '') {
            itemSizeModal.classList.add('show_added-modal');
            setTimeout(() => {
                itemSizeModal.classList.remove('show_added-modal');
            }, 2100);
        } else if (itemSize !== '') {
            itemQuantityModal.classList.add('show_added-modal');
            setTimeout(() => {
                itemQuantityModal.classList.remove('show_added-modal');
            }, 2100);
        } else {
            return;
        }
    }

    const navigate = useNavigate();
    useEffect(() => {
        setActiveImg(image1);
    }, [navigate, image1]);

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
            label: 'Product details',
            textContent: productDescription,
        },
        {
            label: 'Shipping & returns',
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

    if (size === 'One') {
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
            <Navbar />
            <Bag />

            <article className='links-container additional-space'>
                <div className='links-wrapper'>
                    <p onClick={() => (document.location.href = '/webstore')}>
                        MUSTHAVE
                    </p>
                    <span>/</span>
                    <p
                        onClick={() =>
                            (document.location.href = `/webstore/#/items/`)
                        }
                    >
                        ITEMS
                    </p>
                    <span>/</span>
                    <p
                        onClick={() =>
                            (document.location.href = `/webstore/#/${productCategory}/`)
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
                >
                    <p>
                        Product successfully added
                        <MdOutlineCheck className='icon-success' />
                    </p>
                </div>

                <div className='itemSizeModal'>
                    <p>
                        Please select your Size
                        <AiOutlineSelect className='icon' />
                    </p>
                </div>

                <div className='itemQuantityModal'>
                    <p>
                        Please select Quantity
                        <AiOutlineSelect className='icon' />
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
                            <img
                                src={image1}
                                alt='product photo_1'
                                onClick={() => setActiveImg(image1)}
                            />
                            <img
                                src={image2}
                                alt='product photo_2'
                                onClick={() => setActiveImg(image2)}
                            />
                            {image3 && (
                                <img
                                    src={image3}
                                    alt='product photo_3'
                                    onClick={() => setActiveImg(image3)}
                                />
                            )}
                            {image4 && (
                                <img
                                    src={image4}
                                    alt='product photo_4'
                                    onClick={() => setActiveImg(image4)}
                                />
                            )}
                            {image5 && (
                                <img
                                    src={image5}
                                    alt='product photo_5'
                                    onClick={() => setActiveImg(image5)}
                                />
                            )}
                        </div>

                        <div className='img-wrapper'>
                            <img
                                id='imageBox'
                                src={activeImg}
                                alt='Product thumbnail'
                            />
                        </div>
                    </div>
                </div>

                <div className='product__info'>
                    <div className='product__description'>
                        <h2>
                            {productId} {productName}
                        </h2>
                        <p>${productPrice}</p>
                    </div>

                    <div className='selector-container'>
                        <div className='size-selector'>
                            <div className='size-selector-label'>
                                <label for='size'>SIZE</label>
                                <p href='#' class='size-help'>
                                    SIZE HELP
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
                                <IoBookmarkSharp className='fav-icon' />
                            </div>
                        </div>
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
                </div>
            </div>

            {renderSuggestedItems && <SuggestedItems />}
            <Footer />
        </>
    );
}

export default ProductPage;
