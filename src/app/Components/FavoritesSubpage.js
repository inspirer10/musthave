import React from 'react';

import Navbar from './Navbar';
import Bag from './Bag/Bag';
import Footer from './Footer';

import { useSelector } from 'react-redux';
import Image from 'next/image';

function FavoritesSubpage() {
    const favItems = useSelector((state) => state.favorite.favItemsList);
    console.log(favItems);

    return (
        <>
            <Navbar color={'rgb(120, 120, 120)'}></Navbar>
            <Bag />

            <section className='favorites_items'>
                {favItems.map((item) => (
                    <div className='card' key={item.name}>
                        <h2>{item.name}</h2>
                        <Image src={item.photo} height={300} width={300} />
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
}

export default FavoritesSubpage;
