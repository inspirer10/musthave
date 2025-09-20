import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

import './categories.scss';
import Link from 'next/link';

const cardsData = [
    {
        image: '/image.jpg',
        category: 'Clothing',
        linkHref: '/clothing',
        linkText: 'View the Collection!',
    },
    {
        image: '/image3.jpg',
        category: 'Accessories',
        linkHref: '/accessories',
        linkText: 'Accent Your Look!',
    },
    {
        image: '/image2.jpg',
        category: 'Shoes',
        linkHref: '/shoes',
        linkText: 'Step Inside!',
    },
];

function Categories() {
    return (
        <section className='section__categories'>
            <motion.h2
                initial={{ opacity: 0, transform: 'translateY(40px)' }}
                whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: 'easeIn' }}
                className='categories__heading'
            >
                Categories
            </motion.h2>
            <div className='categories__container'>
                {cardsData.map(
                    ({ image, category, linkHref, linkText }, index) => (
                        <div key={index} className='category_card'>
                            <Image
                                className='category_image'
                                src={image}
                                fill
                                loading='lazy'
                                alt={`${category} category thumbnail`}
                            />

                            <div className='item__payload'>
                                <p>{category}</p>
                                <Link className='button' href={`${linkHref}`}>
                                    {linkText}
                                </Link>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

export default Categories;
