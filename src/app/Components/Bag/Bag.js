import React from 'react';
import './bag.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeItemFromCart,
    clearCart,
} from '/src/app/GlobalStore/cartSlice.js';
import { MdOutlineClose } from 'react-icons/md';

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
                {itemsInCart.map((product) => {
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
                                            handleRemoveItem({
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
                <button onClick={() => handleClearCart()}>CHECKOUT</button>
            </div>
        </section>
    );
}

export default Bag;
