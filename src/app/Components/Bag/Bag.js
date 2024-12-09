import React from 'react';
import './bag.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
    removeItemFromCart,
    clearCart,
} from '/src/app/GlobalStore/cartSlice.js';
import { MdOutlineClose } from 'react-icons/md';
import { FaArrowRightLong as ArrowIcon } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

function Bag() {
    const itemsInCart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (payload) => {
        console.log(payload);
        dispatch(removeItemFromCart(payload)); // Wysyłamy produkt jako payload
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    /*  document.querySelector('body').addEventListener('click', function (e) {
        if (
            e.target.matches('#close__icon') ||
            e.target.matches('header') ||
            e.target.classList.contains('header__image') ||
            e.target.classList.contains('autumn__section') ||
            e.target.classList.contains('product__container') ||
            e.target.classList.contains('product__image')
        ) {
            closeBag();
        }
    }); */

    function closeBag() {
        document.querySelector('.bag').classList.remove('open');
        document.querySelector('body').classList.remove('disable__scroll');
        document.querySelector('.navbar').classList.remove('disable__pointers');
    }

    const itemsPrice = itemsInCart.reduce((sum, item) => sum + item.price, 0);

    const handleRedirect = (link) => {
        window.location.href = `${link}`; // Przekierowanie na stronę docelową
    };

    return (
        <section className='bag'>
            <div className='bag__top__bar'>
                <h2>MY BAG</h2>
                <MdOutlineClose
                    id='close__icon'
                    onClick={() => {
                        closeBag();
                    }}
                />
            </div>

            <ul className='bag__products categories-top-bar'>
                <li>Product</li>
                <li>Size</li>
                <li>QTY</li>
                <li>Price</li>
            </ul>

            <div className='products-container'>
                {itemsInCart.map(
                    ({ photo, name, id, price, size, quantity, link }) => {
                        return (
                            <ul className='bag__products'>
                                <li className='product-name-wrapper'>
                                    <Image
                                        className='thumbnail-image'
                                        src={photo}
                                        alt={id + name}
                                        height={300}
                                        width={300}
                                        onClick={() => handleRedirect(link)}
                                    />

                                    <div className='product-name'>
                                        <Link
                                            className='product_link'
                                            href={`${link}`}
                                            onClick={() => {
                                                closeBag();
                                            }}
                                        >
                                            {name}
                                        </Link>
                                        <p
                                            className='remove_product-icon'
                                            onClick={() =>
                                                handleRemoveItem({
                                                    name: name,
                                                    price: price,
                                                    id: id,
                                                })
                                            }
                                        >
                                            remove
                                        </p>
                                    </div>
                                </li>
                                <li>{size}</li>
                                <li>{quantity}</li>
                                <li>{price}$</li>
                            </ul>
                        );
                    }
                )}
            </div>

            <div className='bag__checkout'>
                {/*  <p>
                    Subtotal: <span>{itemsPrice}$</span>
                </p>
                */}

                <button onClick={() => handleClearCart()}>
                    <p className='price'>${itemsPrice}</p>
                    <span>Checkout</span>
                    <ArrowIcon className='icon' />
                    <div className='icon_wrapper'></div>
                </button>
            </div>
        </section>
    );
}

export default Bag;
