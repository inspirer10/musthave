import React from 'react';
import './bag.scss';
import { useSelector, useDispatch } from 'react-redux';

import { MdOutlineClose } from 'react-icons/md';

function Bag() {
    // const dispatch = useDispatch();
    //const cart = useSelector((state) => state.cart);
    // const itemsPrice = useSelector((state) => state.totalPrice);
    let itemsPrice = [];
    let cart = [{}];

    function removeItem(payload) {
        console.log(payload);
        dispatch({ type: 'REMOVE_ITEM', payload: payload });
    }

    function clearCart() {
        dispatch({ type: 'CLEAR_ITEMS' });
    }

    function closeBag() {
        document.querySelector('.bag').classList.remove('open');
        document.querySelector('.navbar').classList.remove('disable__pointers');
        document.querySelector('body').classList.remove('disable__scroll');
    }

    document.querySelector('body').addEventListener('click', function (e) {
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
    });

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
                {cart.map((product) => {
                    return (
                        <ul className='bag__products'>
                            <li className='product-name-wrapper'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/' +
                                        product.photo
                                    }
                                    alt={product.name}
                                />

                                <div className='product-name'>
                                    <p
                                        className='product_link'
                                        onClick={() => {
                                            document.location.href = `#/${product.link}`;
                                            closeBag();
                                        }}
                                    >
                                        {product.name}
                                    </p>
                                    <p
                                        className='remove_product-icon'
                                        onClick={() =>
                                            removeItem({
                                                name: product.name,
                                                price: product.price,
                                                id: product.id,
                                            })
                                        }
                                    >
                                        remove
                                    </p>
                                </div>
                            </li>
                            <li>{product.size}</li>
                            <li>{product.quantity}</li>
                            <li>{product.price}$</li>
                        </ul>
                    );
                })}
            </div>

            <div className='bag__checkout'>
                <p>
                    Subtotal: <span>{itemsPrice}$</span>
                </p>
                <button onClick={() => clearCart()}>CHECKOUT</button>
            </div>
        </section>
    );
}

export default Bag;
