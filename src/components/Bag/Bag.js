'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import './bag.scss';

import { useStore } from '@/store/useStore';

import {
    FiArrowRight,
    FiChevronLeft,
    FiChevronRight,
    FiShoppingBag,
} from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CHECKOUT_ANIMATION_MS = 1200;
const EMPTY_STATE_CAROUSEL_LIMIT = 10;

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value);
}

function buildProductPath(productId, productName) {
    return `/product/${String(productId).toLowerCase()}/${encodeURIComponent(
        String(productName).toUpperCase(),
    )}`;
}

function Bag() {
    const router = useRouter();
    const products = useStore((state) => state.products);
    const cartItems = useStore((state) => state.cartItems);
    const favItemsList = useStore((state) => state.favItemsList);
    const removeItemFromCart = useStore((state) => state.removeItemFromCart);
    const clearCart = useStore((state) => state.clearCart);
    const isBagOpen = useStore((state) => state.isBagOpen);
    const closeBag = useStore((state) => state.closeBag);

    const [checkoutStep, setCheckoutStep] = useState('bag'); // bag | processing | summary
    const [orderSummary, setOrderSummary] = useState(null);
    const checkoutTimerRef = useRef(null);
    const recommendationsTrackRef = useRef(null);

    const itemsPrice = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.price, 0),
        [cartItems],
    );

    const totalItems = useMemo(
        () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
        [cartItems],
    );

    const allProducts = useMemo(() => {
        if (!Array.isArray(products)) return [];
        return products.flat().filter(Boolean);
    }, [products]);

    const recommendedData = useMemo(() => {
        const normalizeItem = (item, fallbackItem) => {
            const productName = item?.productName ?? fallbackItem?.productName;
            const productId = item?.productId ?? fallbackItem?.productId;
            const productPrice =
                item?.productPrice ?? fallbackItem?.productPrice;
            const image = item?.image ?? fallbackItem?.image;
            const uniqueProductID =
                item?.uniqueProductID ??
                fallbackItem?.uniqueProductID ??
                `${productId}-${productName}`;

            if (
                !productName ||
                !productId ||
                !image ||
                typeof productPrice !== 'number'
            ) {
                return null;
            }

            return {
                uniqueProductID,
                productName,
                productId,
                productPrice,
                image,
            };
        };

        const dedupe = (items) => {
            const seen = new Set();
            return items.filter((item) => {
                const key =
                    item.uniqueProductID ||
                    `${item.productId}-${item.productName}`;

                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });
        };

        if (favItemsList.length) {
            const favoriteBasedItems = dedupe(
                favItemsList
                    .map((favoriteItem) => {
                        const matchingProduct = allProducts.find(
                            (product) =>
                                product.uniqueProductID ===
                                favoriteItem.uniqueProductID,
                        );

                        return normalizeItem(favoriteItem, matchingProduct);
                    })
                    .filter(Boolean),
            ).slice(0, EMPTY_STATE_CAROUSEL_LIMIT);

            if (favoriteBasedItems.length) {
                return {
                    source: 'favorites',
                    items: favoriteBasedItems,
                };
            }
        }

        const popularItems = dedupe(
            [...allProducts]
                .sort(
                    (a, b) =>
                        (b.productPopularity ?? 0) - (a.productPopularity ?? 0),
                )
                .map((product) => normalizeItem(product, product))
                .filter(Boolean),
        );

        return {
            source: 'popular',
            items: popularItems.slice(0, EMPTY_STATE_CAROUSEL_LIMIT),
        };
    }, [allProducts, favItemsList]);

    const recommendationsHeading =
        recommendedData.source === 'favorites'
            ? 'From your favorites'
            : 'Popular right now';
    const recommendedItems = recommendedData.items;

    const clearCheckoutTimer = () => {
        if (checkoutTimerRef.current) {
            clearTimeout(checkoutTimerRef.current);
            checkoutTimerRef.current = null;
        }
    };

    const closeAndResetBag = () => {
        closeBag();
        clearCheckoutTimer();
        setCheckoutStep('bag');
        setOrderSummary(null);
    };

    useEffect(() => {
        return () => {
            clearCheckoutTimer();
        };
    }, []);

    const handleRemoveItem = (id) => {
        removeItemFromCart(id);
    };

    const handleRedirect = (link) => {
        closeBag();
        router.push(link);
    };

    const handleStartCheckout = () => {
        if (!cartItems.length || checkoutStep !== 'bag') return;

        const etaDate = new Date();
        etaDate.setDate(etaDate.getDate() + 4);

        const summarySnapshot = {
            orderId: `MH-${Date.now().toString().slice(-8)}`,
            total: itemsPrice,
            itemCount: totalItems,
            eta: etaDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            }),
        };

        setCheckoutStep('processing');

        checkoutTimerRef.current = setTimeout(() => {
            setOrderSummary(summarySnapshot);
            setCheckoutStep('summary');
            clearCart();
        }, CHECKOUT_ANIMATION_MS);
    };

    const handleContinueShopping = () => {
        closeAndResetBag();
        router.push('/items');
    };

    const handleGoToFavorites = () => {
        closeAndResetBag();
        router.push('/favorites');
    };

    const handleOpenRecommendation = ({ productId, productName }) => {
        closeAndResetBag();
        router.push(buildProductPath(productId, productName));
    };

    const scrollRecommendations = (direction) => {
        const recommendationsTrack = recommendationsTrackRef.current;
        if (!recommendationsTrack) return;

        const scrollAmount = Math.max(
            recommendationsTrack.clientWidth * 0.8,
            220,
        );
        recommendationsTrack.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth',
        });
    };

    const isProcessing = checkoutStep === 'processing';

    return (
        <section
            className={`bag ${isBagOpen ? 'open' : ''}`}
            onWheel={(e) => e.stopPropagation()}
        >
            <div className='bag__top__bar'>
                <h2>MY BAG</h2>

                <IoClose id='close__icon' onClick={closeAndResetBag} />
            </div>

            {checkoutStep === 'summary' && orderSummary ? (
                <section className='bag__order-summary'>
                    <p className='badge'>ORDER CONFIRMED</p>
                    <h3>Thank you for shopping with MUSTHAVE</h3>
                    <p className='description'>
                        Your order is in progress. We sent confirmation details
                        to your email.
                    </p>

                    <div className='summary-grid'>
                        <div className='summary-item'>
                            <span>Order ID</span>
                            <strong>{orderSummary.orderId}</strong>
                        </div>
                        <div className='summary-item'>
                            <span>Items</span>
                            <strong>{orderSummary.itemCount}</strong>
                        </div>
                        <div className='summary-item'>
                            <span>Total</span>
                            <strong>
                                {formatCurrency(orderSummary.total)}
                            </strong>
                        </div>
                        <div className='summary-item'>
                            <span>Estimated delivery</span>
                            <strong>{orderSummary.eta}</strong>
                        </div>
                    </div>

                    <div className='summary-actions'>
                        <button
                            className='primary'
                            onClick={handleContinueShopping}
                        >
                            Continue shopping
                        </button>
                        <button
                            className='secondary'
                            onClick={handleGoToFavorites}
                        >
                            Open favorites
                        </button>
                    </div>
                </section>
            ) : isProcessing ? (
                <article className='bag__processing'>
                    <div className='spinner' />
                    <h3>Preparing your order</h3>
                    <p>Finalizing details and securing your checkout...</p>
                </article>
            ) : cartItems.length === 0 ? (
                <section className='bag__empty-state'>
                    <div className='empty-icon'>
                        <FiShoppingBag />
                    </div>
                    <h3>Your bag is empty</h3>
                    <p>
                        Build your look with carefully curated essentials from
                        the latest collection.
                    </p>
                    <div className='empty-actions'>
                        <button onClick={handleContinueShopping}>
                            Shop now
                        </button>
                        <button className='ghost' onClick={handleGoToFavorites}>
                            Open favorites
                        </button>
                    </div>

                    {recommendedItems.length > 0 && (
                        <div className='empty-recommendations'>
                            <div className='recommendations-header'>
                                <p>{recommendationsHeading}</p>
                                <div className='recommendations-nav'>
                                    <button
                                        type='button'
                                        aria-label='Scroll recommendations left'
                                        onClick={() =>
                                            scrollRecommendations(-1)
                                        }
                                    >
                                        <FiChevronLeft />
                                    </button>
                                    <button
                                        type='button'
                                        aria-label='Scroll recommendations right'
                                        onClick={() => scrollRecommendations(1)}
                                    >
                                        <FiChevronRight />
                                    </button>
                                </div>
                            </div>

                            <div
                                className='recommendations-track'
                                ref={recommendationsTrackRef}
                            >
                                {recommendedItems.map(
                                    ({
                                        uniqueProductID,
                                        productId,
                                        productName,
                                        productPrice,
                                        image,
                                    }) => (
                                        <article
                                            className='recommendation-card'
                                            key={`${uniqueProductID}-${productId}`}
                                        >
                                            <button
                                                type='button'
                                                className='recommendation-image-button'
                                                onClick={() =>
                                                    handleOpenRecommendation({
                                                        productId,
                                                        productName,
                                                    })
                                                }
                                            >
                                                <Image
                                                    className='recommendation-image'
                                                    src={image}
                                                    alt={`${productName} recommended item`}
                                                    width={280}
                                                    height={340}
                                                    loading='lazy'
                                                />
                                            </button>

                                            <div className='recommendation-meta'>
                                                <p className='recommendation-name'>
                                                    {productName}
                                                </p>
                                                <p className='recommendation-price'>
                                                    {formatCurrency(
                                                        productPrice,
                                                    )}
                                                </p>
                                            </div>

                                            <button
                                                type='button'
                                                className='recommendation-link'
                                                onClick={() =>
                                                    handleOpenRecommendation({
                                                        productId,
                                                        productName,
                                                    })
                                                }
                                            >
                                                View product
                                            </button>
                                        </article>
                                    ),
                                )}
                            </div>
                        </div>
                    )}
                </section>
            ) : (
                <>
                    <ul className='bag__products categories-top-bar'>
                        <li>Product</li>
                        <li>Size</li>
                        <li>QTY</li>
                        <li>Price</li>
                    </ul>

                    <div className='products-container'>
                        {cartItems.map(
                            ({
                                photo,
                                name,
                                id,
                                price,
                                size,
                                quantity,
                                link,
                            }) => {
                                return (
                                    <ul
                                        className='bag__products'
                                        key={name + id}
                                    >
                                        <li className='product-name-wrapper'>
                                            <Image
                                                className='thumbnail-image'
                                                src={photo}
                                                alt={`${name} item in shopping bag`}
                                                height={170}
                                                width={130}
                                                onClick={() =>
                                                    handleRedirect(link)
                                                }
                                            />

                                            <div className='product-name'>
                                                <Link
                                                    className='product_link'
                                                    href={`${link}`}
                                                    onClick={closeBag}
                                                >
                                                    {name}
                                                </Link>
                                                <p
                                                    className='remove_product-icon'
                                                    onClick={() =>
                                                        handleRemoveItem(id)
                                                    }
                                                >
                                                    remove
                                                </p>
                                            </div>
                                        </li>
                                        <li>{size}</li>
                                        <li>{quantity}</li>
                                        <li>{formatCurrency(price)}</li>
                                    </ul>
                                );
                            },
                        )}
                    </div>

                    <div className='bag__checkout'>
                        <button
                            onClick={handleStartCheckout}
                            disabled={isProcessing}
                        >
                            <p className='price'>
                                {formatCurrency(itemsPrice)}
                            </p>
                            <span>Checkout</span>

                            <FiArrowRight className='icon' />
                            <div className='icon_wrapper'></div>
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

export default Bag;
