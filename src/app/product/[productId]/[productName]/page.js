'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // lub 'useRouter' dla dynamicznych parametrow

import productsData from '../../../productsData';
import ProductPage from '@/app/Components/ProductPages/ProductPage';
import PageNotFound from '@/app/Components/PageNotFound';
//import PageNotFound from '@/app/Components/PageNotFound';

const Product = (params) => {
    // Pobieranie dynamicznych parametrów
    const { productId, productName } = useParams();

    // Dekodowanie zakodowanych komponentów URL
    const decodedProductId = productId ? decodeURIComponent(productId) : '';
    const decodedProductName = productName
        ? decodeURIComponent(productName)
        : '';

    const allProducts = [
        ...productsData.clothing,
        ...productsData.shoes,
        ...productsData.accessories,
    ];

    const product = allProducts.find(
        (item) =>
            item.productId === decodedProductId &&
            item.productName === decodedProductName
    );

    if (!product) {
        return <PageNotFound />;
    }

    return (
        <>
            <ProductPage
                productName={product.productName}
                productPrice={product.productPrice}
                productId={product.productId}
                productCategory={product.productCategory}
                image1={product.image}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                image5={product.image5}
                productDescription={product.productDescription}
                renderSuggested={
                    product.productCategory === 'Accessories' ? false : true
                }
                size={product.productCategory}
                link={`/product/${product.productId}/${product.productName}`}
            />
        </>
    );
};

export default Product;
