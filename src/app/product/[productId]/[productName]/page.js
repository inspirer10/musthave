'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation'; // lub 'useRouter' dla dynamicznych parametrow

//import productsData from '../../../productsData';

import ProductPage from '@/components/ProductPage/ProductPage';
import PageNotFound from '@/components/PageNotFound';

const Product = (params) => {
    // Pobieranie dynamicznych parametrów
    const { productId, productName } = useParams();

    // Dekodowanie zakodowanych komponentów URL
    const decodedProductId = productId ? decodeURIComponent(productId) : '';
    const decodedProductName = productName
        ? decodeURIComponent(productName)
        : '';

    const clothingItems = useSelector((state) => state.allProducts.products[0]);
    const accessoriesItems = useSelector(
        (state) => state.allProducts.products[1]
    );
    const shoesItems = useSelector((state) => state.allProducts.products[2]);
    /* const allProductsSTARE_Z_PLIKU = [
        ...productsData.clothing,
        ...productsData.shoes,
        ...productsData.accessories,
    ]; */

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
                uniqueProductID={product.uniqueProductID}
                productCategory={product.productCategory}
                size={product.productCategory}
                renderSuggested={
                    product.productCategory === 'Accessories' ? false : true
                }
                isFavorite={product.isFavorite}
                image1={product.image}
                image2={product.image2}
                image3={product.image3}
                image4={product.image4}
                image5={product.image5}
                imagesCount={product.imagesCount}
                productDescription={product.productDescription}
                link={`/product/${product.productId}/${product.productName}`}
            />
        </>
    );
};

export default Product;
