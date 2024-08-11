'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // lub 'useRouter' dla dynamicznych parametrow

import productsData from '../../../productsData';
import ProductPage from '@/app/Components/ProductPages/ProductPage';
//import PageNotFound from '@/app/Components/PageNotFound';

const Product = (params) => {
    const { productId, productName } = useParams();
    const allProducts = [
        ...productsData.clothing,
        ...productsData.shoes,
        ...productsData.accessories,
    ];
    console.log([allProducts]);

    // const prodxuct = [allProducts].find((item) => item.productId === productId);
    const product = allProducts.find(
        (item) =>
            item.productId === productId && item.productName === productName
    );

    if (!product) {
        return (
            <h1>
                {productId}/{productName}
            </h1>
        );
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
                renderSuggested={true}
                size={product.productCategory}
                link={`/product/${product.productId}/${product.productName}`}
            />
        </>
    );
};

export default Product;
