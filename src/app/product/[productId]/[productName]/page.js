'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // lub 'useRouter' dla dynamicznych parametrow

import productsData from '../../../productsData';
import ProductPage from '@/app/Components/ProductPages/ProductPage';
import PageNotFound from '@/app/Components/PageNotFound';

import { useSelector } from 'react-redux';

const Product = (params) => {
    // Pobieranie dynamicznych parametrów
    const { productId, productName } = useParams();

    // Dekodowanie zakodowanych komponentów URL
    const decodedProductId = productId ? decodeURIComponent(productId) : '';
    const decodedProductName = productName
        ? decodeURIComponent(productName)
        : '';

    const clothingItems = useSelector(
        (state) => state.allProducts.allProducts[0]
    );
    const accessoriesItems = useSelector(
        (state) => state.allProducts.allProducts[1]
    );
    const shoesItems = useSelector((state) => state.allProducts.allProducts[2]);
    const allProductsSTARE_Z_PLIKU = [
        ...productsData.clothing,
        ...productsData.shoes,
        ...productsData.accessories,
    ];

    const allProducts = [...clothingItems, ...shoesItems, ...accessoriesItems];

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
                isFavorite={product.isFavorite}
                image1={product.image}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                image5={product.image5}
                imagesCount={product.imagesCount}
                productDescription={product.productDescription}
                size={product.productCategory}
                link={`/product/${product.productId}/${product.productName}`}
                renderSuggested={
                    product.productCategory === 'Accessories' ? false : true
                }
            />
        </>
    );
};

export default Product;
