import React, { memo, useMemo } from 'react';
import productsData from '@/data/productsData';
import Image from 'next/image';
import Link from 'next/link';

function buildProductPath(productId, productName) {
    return `/product/${String(productId).toLowerCase()}/${encodeURIComponent(
        String(productName).toUpperCase(),
    )}`;
}

function hashString(value = '') {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function SuggestedItems({ seedKey = '', excludeProductId = '' }) {
    const suggestedProducts = useMemo(() => {
        const accessories = (productsData.accessories || []).filter(Boolean);

        const filtered = accessories.filter((item) => {
            const itemKey = `${item.productId}-${item.productName}`;
            return itemKey !== excludeProductId;
        });

        return filtered
            .map((item) => {
                const itemKey =
                    item.uniqueProductID || `${item.productId}-${item.productName}`;
                const score = hashString(`${seedKey}-${itemKey}`);

                return {
                    ...item,
                    score,
                };
            })
            .sort((a, b) => a.score - b.score)
            .slice(0, 4);
    }, [excludeProductId, seedKey]);

    return (
        <>
            <h2 className='suggested__heading'>YOU MAY ALSO LIKE</h2>
            <p className='suggested__sub_heading'>Complete your look with</p>
            <div className='suggested__items_container'>
                {suggestedProducts.map(
                    ({ productName, productPrice, productId, image }) => (
                        <Link
                            key={productName + productId}
                            className='suggested__single__item'
                            href={buildProductPath(productId, productName)}
                            prefetch={false}
                        >
                            <div className='element'>
                                <Image
                                    title={productName}
                                    src={image}
                                    height={525}
                                    width={450}
                                    className='element__image'
                                    alt={`${productName} suggested product`}
                                />
                                <div className='element__description'>
                                    {productName}
                                </div>
                            </div>

                            <div className='clothing__info'>
                                <p className='name'>{productName}</p>
                                <p className='price'>{productPrice}$</p>
                            </div>
                        </Link>
                    ),
                )}
            </div>
        </>
    );
}

export default memo(SuggestedItems);
