'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    //tablica ubrań, akcesoriów i butów
    products: [
        [
            {
                productName: 'GOT T-SHIRT',
                //productPrice: '129.00',
                productPrice: 129,
                productPopularity: 0,
                productId: 'black',
                productCategory: 'Clothing',
                image: '/images/tshirt3.png',
                image2: '/images/tshirt2.png',
                image3: '/images/tshirt1.png',
                image4: '/images/tshirt4.png',
                image5: '/images/tshirt5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This classic black t-shirt is made from 100% high-quality cotton, offering superior comfort and durability. The minimalist design features a crew neckline and a regular fit, making it a versatile addition to any wardrobe.',
            },
            {
                productName: 'HOODIE',
                productPrice: 149,
                productPopularity: 0.5,
                productId: 'beige',
                productCategory: 'Clothing',
                image: '/images/hoodie1.jpg',
                image2: '/images/hoodie6.jpg',
                image3: '/images/hoodie5.jpg',
                image4: '/images/hoodie4.jpg',
                image5: '/images/hoodie2.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Stay cozy and stylish with our beige hoodie, made from a soft cotton blend. This hoodie features a relaxed fit, kangaroo pocket, and adjustable drawstrings for maximum comfort. Perfect for casual wear or layering on cooler days.',
            },
            {
                productName: 'DRESS',
                productPrice: 149,
                productPopularity: 15,
                productId: 'yellow',
                productCategory: 'Clothing',
                image: '/images/dressYellow1.jpg',
                image2: '/images/dressYellow3.jpg',
                image3: '/images/dressYellow4.jpg',
                image4: '/images/dressYellow2.jpg',
                image5: '/images/dressYellow5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Make a statement with our vibrant yellow dress. Crafted from a lightweight, breathable fabric, this dress is designed for both comfort and style. It features a flattering A-line silhouette, short sleeves, and a knee-length hem, making it suitable for various occasions',
            },
            {
                productName: 'JUMPSUIT',
                productPrice: 219,
                productPopularity: 19,
                productId: 'green',
                productCategory: 'Clothing',
                image: '/images/jumpsuit1.jpg',
                image2: '/images/jumpsuit2.jpg',
                image3: '/images/jumpsuit3.jpg',
                image4: '/images/jumpsuit4.jpg',
                image5: '/images/jumpsuit5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our green jumpsuit is the epitome of chic and comfort. Made from a soft, stretchy material, it offers a flattering fit with a cinched waist and wide-leg pants. The sleeveless design and v-neckline add a touch of elegance, perfect for both casual and formal events.',
            },
            {
                productName: 'GOT T-SHIRT',
                productPrice: 119,
                productPopularity: 1,
                productId: 'white',
                productCategory: 'Clothing',
                image: '/images/tshirtWhite3.png',
                image2: '/images/tshirtWhite2.png',
                image3: '/images/tshirtWhite1.png',
                image4: '/images/tshirtWhite4.png',
                image5: '/images/tshirtWhite5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This classic white t-shirt is made from 100% high-quality cotton, offering superior comfort and durability. The minimalist design features a crew neckline and a regular fit, making it a versatile addition to any wardrobe.',
            },
            {
                productName: 'HOODIE',
                productPrice: 119,
                productPopularity: 1.5,
                productId: 'pink',
                productCategory: 'Clothing',
                image: '/images/pinkHoodie2.jpg',
                image2: '/images/pinkHoodie1.jpg',
                image3: '/images/pinkHoodie3.jpg',
                image4: '/images/pinkHoodie4.jpg',
                image5: '/images/pinkHoodie6.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Add a pop of color to your wardrobe with our pink hoodie. Made from a plush, fleece-lined fabric, this kangaroo hoodie provides warmth and comfort. It features a front pocket and adjustable drawstrings, making it ideal for everyday wear.',
            },
            {
                productName: 'DRESS',
                productPrice: 190,
                productPopularity: 3,
                productId: 'blue',
                productCategory: 'Clothing',
                image: '/images/dressBlue1.jpg',
                image2: '/images/dressBlue5.jpg',
                image3: '/images/dressBlue4.jpg',
                image4: '/images/dressBlue3.jpg',
                image5: '/images/dressBlue2.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our blue dress combines elegance with simplicity. Made from a soft, flowy fabric, it features a fitted bodice and a flared skirt that falls just above the knee. The dress has long sleeves and a round neckline, perfect for both day and night outings.',
            },
            {
                productName: 'SWEATSHIRT',
                productPrice: 159,
                productPopularity: 5,
                productId: 'gray',
                productCategory: 'Clothing',
                image: '/images/sweatshirtGray1.png',
                image2: '/images/sweatshirtGray2.png',
                image3: '/images/sweatshirtGray3.png',
                image4: '/images/sweatshirtGray4.png',
                image5: '/images/sweatshirtGray5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This classic gray sweatshirt is perfect for any casual occasion. Made from a soft and durable cotton blend, it provides both comfort and warmth. It features a crew neckline, ribbed cuffs, and a relaxed fit, making it an essential piece for your wardrobe.',
            },
            {
                productName: 'TROUSERS',
                productPrice: 149,
                productPopularity: 6,
                productId: 'black',
                productCategory: 'Clothing',
                image: '/images/trousers1.jpg',
                image2: '/images/trousers2.jpg',
                image3: '/images/trousers3.jpg',
                image4: '/images/trousers4.jpg',
                image5: '/images/trousers5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Elevate your everyday look with these stylish black trousers. Crafted from high-quality fabric, they offer a slim fit that flatters all body types. Featuring a button and zip closure, belt loops, and functional pockets, these trousers are both practical and fashionable.',
            },
            {
                productName: 'SWEATSHIRT',
                productPrice: 199,
                productPopularity: 8,
                productId: 'black',
                productCategory: 'Clothing',
                image: '/images/sweatshirtBlack1.png',
                image2: '/images/sweatshirtBlack4.png',
                image3: '/images/sweatshirtBlack3.png',
                image4: '/images/sweatshirtBlack2.png',
                image5: '/images/sweatshirtBlack5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our black sweatshirt combines comfort with a sleek design. Made from premium cotton, it offers a soft feel and a relaxed fit. The sweatshirt features a crew neckline and ribbed cuffs, making it ideal for layering or wearing on its own.',
            },
            {
                productName: 'DRESS',
                productPrice: 249,
                productPopularity: 12,
                productId: 'puffy',
                productCategory: 'Clothing',
                image: '/images/dressWhite1.png',
                image2: '/images/dressWhite2.png',
                image3: '/images/dressWhite3.png',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Stand out in our elegant white puffy dress. Made from lightweight, breathable fabric, this dress features a fitted bodice and a voluminous skirt that falls just above the knee. The short sleeves and round neckline add a touch of sophistication, perfect for special occasions.',
            },
            {
                productName: 'JEANS',
                productPrice: 149,
                productPopularity: 55,
                productId: 'dark',
                productCategory: 'Clothing',
                image: '/images/jeans4.jpg',
                image2: '/images/jeans1.jpg',
                image3: '/images/jeans5.jpg',
                image4: '/images/jeans3.jpg',
                image5: '/images/jeans2.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our dark jeans are a versatile addition to any wardrobe. Made from high-quality denim, they offer a comfortable fit with just the right amount of stretch. These jeans feature a classic five-pocket design, a button and zip fly, and a tapered leg for a modern look.',
            },
            {
                productName: 'DRESS',
                productPrice: 229,
                productPopularity: 13,
                productId: 'fancy',
                productCategory: 'Clothing',
                image: '/images/dressFancy1.jpg',
                image2: '/images/dressFancy3.jpg',
                image3: '/images/dressFancy4.jpg',
                image4: '/images/dressFancy2.jpg',
                image5: '/images/dressFancy5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Make a statement with our fancy dress. Designed with intricate detailing, this dress features a fitted bodice and a flowing skirt that falls to mid-calf. The dress is made from luxurious fabric, with a v-neckline and short sleeves, perfect for elegant events.',
            },
            {
                productName: 'T-SHIRT',
                productPrice: 149,
                productPopularity: 15,
                productId: 'white',
                productCategory: 'Clothing',
                image: '/images/tShirtWhite3.jpg',
                image2: '/images/tShirtWhite2.jpg',
                image3: '/images/tShirtWhite5.jpg',
                image4: '/images/tShirtWhite1.jpg',
                image5: '/images/tShirtWhite4.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This classic white t-shirt is an essential for any wardrobe. Made from 100% soft, breathable cotton, it offers a comfortable fit and versatile style. It features a crew neckline and short sleeves, perfect for layering or wearing on its own.',
            },
            {
                productName: 'JEANS',
                productPrice: 149,
                productPopularity: 55,
                productId: 'light',
                productCategory: 'Clothing',
                image: '/images/jeansLight1.jpg',
                image2: '/images/jeansLight3.jpg',
                image3: '/images/jeansLight2.jpg',
                image4: '/images/jeansLight4.jpg',
                image5: '/images/jeansLight5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our light jeans offer a casual and comfortable look. Made from high-quality denim, they feature a classic five-pocket design, a button and zip fly, and a slim fit that flatters all body types. Perfect for everyday wear.',
            },
            {
                productName: 'DRESS',
                productPrice: 229,
                productPopularity: 14,
                productId: 'colorful',
                productCategory: 'Clothing',
                image: '/images/dressColorful1.jpg',
                image2: '/images/dressColorful3.jpg',
                image3: '/images/dressColorful4.jpg',
                image4: '/images/dressColorful2.jpg',
                image5: '/images/dressColorful5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Stand out in our colorful dress. Crafted from lightweight, breathable fabric, this dress features a vibrant print, short sleeves, and a hemline that falls just above the knee. Perfect for adding a splash of color to your wardrobe.',
            },
            {
                productName: 'SHIRT',
                productPrice: 119,
                productPopularity: 16,
                productId: 'striped',
                productCategory: 'Clothing',
                image: '/images/shirt1.png',
                image2: '/images/shirt4.png',
                image3: '/images/shirt2.png',
                image4: '/images/shirt3.png',
                image5: '/images/shirt5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Add a touch of sophistication with our striped shirt. Made from a soft cotton blend, it features a classic button-down design, long sleeves, and a regular fit. The vertical stripes add a stylish twist to a timeless piece.',
            },
            {
                productName: 'HOODIE',
                productPrice: 249,
                productPopularity: 18,
                productId: 'black',
                productCategory: 'Clothing',
                image: '/images/blackHoodie1.jpg',
                image2: '/images/blackHoodie2.jpg',
                image3: '/images/blackHoodie3.jpg',
                image4: '/images/blackHoodie4.jpg',
                image5: '/images/blackHoodie5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Our black hoodie is a must-have for any casual wardrobe. Made from a soft, fleece-lined fabric, it offers warmth and comfort. It features a kangaroo pocket, adjustable drawstrings, and a relaxed fit, perfect for everyday wear.',
            },
            {
                productName: 'SWEATSHIRT',
                productPrice: 249,
                productPopularity: 20,
                productId: 'light',
                productCategory: 'Clothing',
                image: '/images/sweatshirtLight.png',
                image2: '/images/sweatshirtLight4.png',
                image3: '/images/sweatshirtLight3.png',
                image4: '/images/sweatshirtLight2.png',
                image5: '/images/sweatshirtLight5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Stay cozy with our light sweatshirt. Made from a soft cotton blend, it features a crew neckline, ribbed cuffs, and a relaxed fit. The neutral color makes it easy to pair with any outfit, providing both style and comfort.',
            },
            {
                productName: 'SHIRT',
                productPrice: 119,
                productPopularity: 17,
                productId: 'dotted',
                productCategory: 'Clothing',
                image: '/images/shirtDotted1.png',
                image2: '/images/shirtDotted5.png',
                image3: '/images/shirtDotted2.png',
                image4: '/images/shirtDotted4.png',
                image5: '/images/shirtDotted6.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Make a statement with our dotted shirt. Crafted from a lightweight, breathable fabric, it features a playful polka dot pattern, a classic button-down design, and long sleeves. Perfect for adding a fun element to your wardrobe.',
            },
            {
                productName: 'DRESS',
                productPrice: 229,
                productPopularity: 9,
                productId: 'azure',
                productCategory: 'Clothing',
                image: '/images/dressAzure1.jpg',
                image2: '/images/dressAzure2.jpg',
                image3: '/images/dressAzure3.jpg',
                image4: '/images/dressAzure4.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Our azure dress combines elegance with simplicity. Made from a soft, flowy fabric, it features a fitted bodice and a flared skirt that falls just above the knee. The dress has short sleeves and a round neckline, ideal for both day and night outings.',
            },
            {
                productName: 'T-SHIRT',
                productPrice: 119,
                productPopularity: 11,
                productId: 'blue',
                productCategory: 'Clothing',
                image: '/images/tshirtBlue1.png',
                image2: '/images/tshirtBlue2.png',
                image3: '/images/tshirtBlue3.png',
                image4: '/images/tshirtBlue4.png',
                image5: '/images/tshirtBlue5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This stylish blue t-shirt is a versatile addition to any wardrobe. Made from 100% soft, breathable cotton, it provides all-day comfort. It features a classic crew neckline and short sleeves, perfect for both casual and active wear.',
            },
            {
                productName: 'T-SHIRT',
                productPrice: 139,
                productPopularity: 12,
                productId: 'gradient',
                productCategory: 'Clothing',
                image: '/images/tshirtGradient1.png',
                image2: '/images/tshirtGradient2.png',
                image3: '/images/tshirtGradient3.png',
                image4: '/images/tshirtGradient4.png',
                image5: '/images/tshirtGradient5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Stand out with our gradient t-shirt. Made from a lightweight, breathable fabric, this t-shirt features a unique gradient design that transitions smoothly from one color to another. It has a crew neckline and short sleeves, adding a modern twist to a classic style.',
            },
            {
                productName: 'DRESS',
                productPrice: 239,
                productPopularity: 19,
                productId: 'black',
                productCategory: 'Clothing',
                image: '/images/dressBlack1.jpg',
                image2: '/images/dressBlack3.jpg',
                image3: '/images/dressBlack4.jpg',
                image4: '/images/dressBlack2.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Our elegant black dress is perfect for any special occasion. Made from a luxurious, flowy fabric, it features a fitted bodice and a flared skirt that falls just above the knee. The dress has short sleeves and a round neckline, offering a timeless and sophisticated look.',
            },
        ],
        [
            {
                productName: 'SOCKS',
                productPrice: 29,
                productPopularity: 1,
                productId: 'white',
                productCategory: 'Accessories',
                image: '/images/socks3.jpg',
                image2: '/images/socks1.jpg',
                image3: '/images/socks4.jpg',
                image4: '/images/socks2.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'These white socks are a wardrobe essential, providing both comfort and style. Made from a soft, breathable cotton blend, they ensure all-day comfort and durability. Perfect for everyday wear or athletic activities.',
            },
            {
                productName: 'RUCKSACK',
                productPrice: 129,
                productPopularity: 2,
                productId: 'brown',
                productCategory: 'Accessories',
                image: '/images/rucksack1.jpg',
                image2: '/images/rucksack3.jpg',
                image3: '/images/rucksack2.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'This stylish brown rucksack combines functionality with a classic design. Crafted from durable materials, it features multiple compartments for organized storage and adjustable straps for comfort. Ideal for daily use or weekend adventures.',
            },
            {
                productName: 'BAG',
                productPrice: 49,
                productPopularity: 3,
                productId: 'brown',
                productCategory: 'Accessories',
                image: '/images/bag1.jpg',
                image2: '/images/bag2.jpg',
                image3: '/images/bag3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'A versatile brown bag perfect for everyday use. Made from high-quality materials, it offers ample space and a sleek design. Whether for work or casual outings, this bag adds a touch of elegance to any outfit.',
            },

            {
                productName: 'GLASSES',
                productPrice: 149,
                productPopularity: 4,
                productId: 'black',
                productCategory: 'Accessories',
                image: '/images/glassesBlack1.jpg',
                image2: '/images/glassesBlack2.jpg',
                image3: '/images/glassesBlack3.jpg',
                image4: '/images/glassesBlack4.jpg',
                image5: '/images/glassesBlack5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'These black glasses feature a timeless design suitable for any occasion. Made from high-quality materials, they offer durability and comfort. The classic frame design ensures they remain stylish and versatile.',
            },
            {
                productName: 'GLASSES',
                productPrice: 199,
                productPopularity: 5,
                productId: 'crystal',
                productCategory: 'Accessories',
                image: '/images/glassesCrystal1.jpg',
                image2: '/images/glassesCrystal2.jpg',
                image3: '/images/glassesCrystal3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Stand out with these crystal glasses. The transparent frames add a modern touch, while the high-quality construction ensures durability. Perfect for those who want a unique yet elegant accessory.',
            },
            {
                productName: 'GLASSES',
                productPrice: 249,
                productPopularity: 6,
                productId: 'orange',
                productCategory: 'Accessories',
                image: '/images/glassesOrange1.jpg',
                image2: '/images/glassesOrange2.jpg',
                image3: '/images/glassesOrange3.jpg',
                image4: '/images/glassesOrange4.jpg',
                image5: '/images/glassesOrange5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Add a pop of color to your look with these orange glasses. The vibrant frames are made from durable materials, providing both style and comfort. Ideal for making a bold fashion statement.',
            },

            {
                productName: 'GLASSES',
                productPrice: 399,
                productPopularity: 7,
                productId: 'magma',
                productCategory: 'Accessories',
                image: '/images/glassesMagma1.jpg',
                image2: '/images/glassesMagma2.jpg',
                image3: '/images/glassesMagma3.jpg',
                image4: '/images/glassesMagma4.jpg',
                image5: '/images/glassesMagma5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'These magma glasses feature a striking design with a blend of red and black hues. Crafted from high-quality materials, they offer a comfortable fit and a unique look. Perfect for those who want to stand out.',
            },
            {
                productName: 'CAP',
                productPrice: 29,
                productPopularity: 8,
                productId: 'blue',
                productCategory: 'Accessories',
                image: '/images/cap1.jpg',
                image2: '/images/cap2.jpg',
                image3: '/images/cap3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'This blue cap is a stylish and practical accessory for any outfit. Made from breathable fabric, it offers comfort and a secure fit. Ideal for casual wear or outdoor activities.',
            },

            {
                productName: 'SCARF',
                productPrice: 49,
                productPopularity: 9,
                productId: 'colorful',
                productCategory: 'Accessories',
                image: '/images/scarf3.jpg',
                image2: '/images/scarf2.jpg',
                image3: '/images/scarf1.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Brighten up your wardrobe with this colorful scarf. Made from soft, lightweight fabric, it provides warmth and style. Perfect for adding a splash of color to any outfit.',
            },
            {
                productName: 'BAG',
                productPrice: 109,
                productPopularity: 10,
                productId: 'big',
                productCategory: 'Accessories',
                image: '/images/bigBag1.jpg',
                image2: '/images/bigBag2.jpg',
                image3: '/images/bigBag3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'This big bag is perfect for those who need extra space. Made from durable materials, it offers ample storage and a sleek design. Ideal for travel or everyday use.',
            },

            {
                productName: 'BAG',
                productPrice: 79,
                productPopularity: 11,
                productId: 'small',
                productCategory: 'Accessories',
                image: '/images/smallBag1.jpg',
                image2: '/images/smallBag2.jpg',
                image3: '/images/smallBag3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'A chic small bag perfect for carrying essentials. Made from high-quality materials, it combines style and functionality. Ideal for both casual and formal occasions.',
            },
            {
                productName: 'BEANIE',
                productPrice: 39,
                productPopularity: 12,
                productId: 'black',
                productCategory: 'Accessories',
                image: '/images/beanie1.jpg',
                image2: '/images/beanie2.jpg',
                image3: '/images/beanie3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Stay warm and stylish with this black beanie. Made from soft, cozy fabric, it offers comfort and a snug fit. Perfect for cold weather.',
            },
            {
                productName: 'CAP',
                productPrice: 29,
                productPopularity: 13,
                productId: 'black',
                productCategory: 'Accessories',
                image: '/images/capBlack1.jpg',
                image2: '/images/capBlack2.jpg',
                image3: '/images/capBlack3.jpg',
                image4: '/images/capBlack4.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'A classic black cap that complements any outfit. Made from durable materials, it provides comfort and a secure fit. Ideal for everyday wear.',
            },
            {
                productName: 'POUCH',
                productPrice: 89,
                productPopularity: 14,
                productId: 'brown',
                productCategory: 'Accessories',
                image: '/images/pouchBag1.jpg',
                image2: '/images/pouchBag3.jpg',
                image3: '/images/pouchBag2.jpg',
                image4: '/images/pouchBag4.jpg',
                image5: '/images/pouchBag5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This brown pouch is a versatile accessory for carrying small essentials. Made from high-quality materials, it offers a sleek design and ample space. Perfect for both casual and formal occasions.',
            },
            {
                productName: 'RING',
                productPrice: 499,
                productPopularity: 15,
                productId: 'pink',
                productCategory: 'Accessories',
                image: '/images/ring1.png',
                image2: '/images/ring5.png',
                image3: '/images/ring3.png',
                image4: '/images/ring4.png',
                image5: '/images/ring2.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'This pink ring features a stunning design with intricate details. Made from high-quality materials, it offers elegance and durability. Ideal for special occasions or as a statement piece.',
            },
            {
                productName: 'WATCH',
                productPrice: 999,
                productPopularity: 19,
                productId: 'gold',
                productCategory: 'Accessories',
                image: '/images/watch1.png',
                image2: '/images/watch5.png',
                image3: '/images/watch2.png',
                image4: '/images/watch4.png',
                image5: '/images/watch3.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Elevate your style with this gold watch. Featuring a luxurious design and high-quality craftsmanship, it combines functionality with elegance. Perfect for making a sophisticated statement.',
            },
        ],
        [
            {
                productName: 'KEY SHOES',
                productPrice: 320,
                productPopularity: 1,
                productId: 'white',
                productCategory: 'Shoes',
                image: '/images/keyShoes1.png',
                image2: '/images/keyShoes2.png',
                image3: '/images/keyShoes3.png',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Stylish white sneakers that complement any outfit. Made from durable materials, they provide comfort and versatility for everyday wear. Perfect for those who value both fashion and function.',
            },
            {
                productName: 'HYPER SHOES',
                productPrice: 999,
                productPopularity: 2,
                productId: 'special',
                productCategory: 'Shoes',
                image: '/images/hyperShoes1.jpg',
                image2: '/images/hyperShoes2.jpg',
                image3: '/images/hyperShoes3.jpg',
                image4: '/images/hyperShoes4.jpg',
                image5: '/images/hyperShoes5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Bold, special edition shoes designed for those who love to stand out. Featuring unique design and top-notch craftsmanship, they are perfect for special occasions. These shoes combine striking aesthetics with exceptional quality.',
            },
            {
                productName: 'SBW SHOES',
                productPrice: 450,
                productPopularity: 3,
                productId: 'leather',
                productCategory: 'Shoes',
                image: '/images/sbwShoes1.png',
                image2: '/images/sbwShoes2.png',
                image3: '/images/sbwShoes3.png',
                image4: '/images/sbwShoes4.png',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Elegant leather shoes that add a touch of class to any outfit. Crafted from high-quality leather, they offer both durability and style. Ideal for both formal events and everyday wear',
            },
            {
                productName: 'HEELS',
                productPrice: 450,
                productPopularity: 4,
                productId: 'white',
                productCategory: 'Shoes',
                image: '/images/heels1.jpg',
                image2: '/images/heels2.jpg',
                image3: '/images/heels3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Classic white heels that blend elegance with comfort. Perfect for formal events, they add a touch of glamour to any outfit. These heels are designed to make you feel confident and stylish',
            },
            {
                productName: 'TIM BOOTS',
                productPrice: 90,
                productPopularity: 5,
                productId: 'wood',
                productCategory: 'Shoes',
                image: '/images/timBoots1.jpg',
                image2: '/images/timBoots2.jpg',
                image3: '/images/timBoots3.jpg',
                image4: '/images/timBoots4.jpg',
                image5: '/images/timBoots5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Sturdy boots in a wood-tone finish, designed for outdoor activities. Made from high-quality materials, they provide comfort and durability. These boots are perfect for both rugged adventures and casual wear',
            },
            {
                productName: 'SPECIAL SHOES',
                productPrice: 500,
                productPopularity: 6,
                productId: 'yellow',
                productCategory: 'Shoes',
                image: '/images/specialShoes1.jpg',
                image2: '/images/specialShoes2.jpg',
                image3: '/images/specialShoes3.jpg',
                image4: '/images/specialShoes4.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Vibrant yellow shoes that are sure to catch the eye. These shoes are perfect for adding a pop of color and flair to any outfit. Crafted with care, they combine style and comfort seamlessly',
            },
            {
                productName: 'BRD SHOES',
                productPrice: 123,
                productPopularity: 7,
                productId: 'multicolor',
                productCategory: 'Shoes',
                image: '/images/brdShoes1.jpg',
                image2: '/images/brdShoes2.jpg',
                image3: '/images/brdShoes3.jpg',
                image4: '/images/brdShoes4.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Multicolored shoes that highlight your individuality. They offer a unique blend of style and comfort for any occasion. These shoes are perfect for those who love to make a statement',
            },
            {
                productName: 'SLIDES',
                productPrice: 70,
                productPopularity: 8,
                productId: 'creamy',
                productCategory: 'Shoes',
                image: '/images/slides1.jpg',
                image2: '/images/slides2.jpg',
                image3: '/images/slides3.jpg',
                imagesCount: 3,
                isFavorite: false,
                productDescription:
                    'Comfortable creamy slides, perfect for everyday outings or lounging at home. They offer simplicity and style in one package. These slides are a must-have for anyone looking for casual comfort',
            },
            {
                productName: 'GOAT SHOES',
                productPrice: 750,
                productPopularity: 9,
                productId: 'black',
                productCategory: 'Shoes',
                image: '/images/goatShoes1.jpg',
                image2: '/images/goatShoes2.jpg',
                image3: '/images/goatShoes3.jpg',
                image4: '/images/goatShoes4.jpg',
                image5: '/images/goatShoes5.jpg',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Luxurious black shoes with an elegant design. Ideal for both formal and casual occasions, they add a touch of sophistication to any outfit. Made from high-quality materials, they ensure long-lasting comfort',
            },
            {
                productName: 'UNIQUE SHOES',
                productPrice: 400,
                productPopularity: 10,
                productId: 'reflective',
                productCategory: 'Shoes',
                image5: '/images/uniqueShoes1.png',
                image2: '/images/uniqueShoes2.png',
                image3: '/images/uniqueShoes3.png',
                image4: '/images/uniqueShoes4.png',
                image: '/images/uniqueShoes5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Reflective shoes that combine safety with fashion. Perfect for those who love to stand out, these shoes offer both visibility and style. They are designed to make a bold statement wherever you go',
            },
            {
                productName: 'PUFFED SHOES',
                productPrice: 300,
                productPopularity: 11,
                productId: 'gray',
                productCategory: 'Shoes',
                image: '/images/puffedShoes1.png',
                image2: '/images/puffedShoes3.png',
                image3: '/images/puffedShoes2.png',
                image4: '/images/puffedShoes4.jpg',
                image5: '/images/puffedShoes5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Gray, plush shoes that provide all-day comfort. Ideal for everyday wear, they offer a blend of style and coziness. These shoes are perfect for anyone seeking both comfort and elegance',
            },
            {
                productName: 'VANS',
                productPrice: 40,
                productPopularity: 12,
                productId: 'classic',
                productCategory: 'Shoes',
                image: '/images/vans1.jpg',
                image2: '/images/vans2.jpg',
                image3: '/images/vans3.jpg',
                image4: '/images/vans4.jpg',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Classic and durable shoes, perfect for any casual occasion. They offer a timeless style that pairs well with any outfit. These shoes are a staple for those who value both comfort and fashion',
            },
            {
                productName: 'CLASSIC',
                productPrice: 100,
                productPopularity: 14,
                productId: 'white',
                productCategory: 'Shoes',
                image: '/images/classicShoes1.png',
                image2: '/images/classicShoes2.png',
                image3: '/images/classicShoes3.png',
                image4: '/images/classicShoes4.png',
                image5: '/images/classicShoes5.png',
                imagesCount: 5,
                isFavorite: false,
                productDescription:
                    'Minimalist white sneakers, perfect for everyday wear. They combine comfort, style, and versatility in one. These sneakers are ideal for those who appreciate a clean, classic look',
            },
            {
                productName: 'ANKLE SHOES',
                productPrice: 80,
                productPopularity: 15,
                productId: 'white',
                productCategory: 'Shoes',
                image: '/images/ankleShoes1.png',
                image2: '/images/ankleShoes2.png',
                image3: '/images/ankleShoes3.png',
                image4: '/images/ankleShoes4.png',
                imagesCount: 4,
                isFavorite: false,
                productDescription:
                    'Elegant white ankle shoes that add sophistication to any outfit. Ideal for both everyday and semi-formal occasions, they provide comfort and style. These shoes are a great addition to any wardrobe',
            },
        ],
    ],
};

const allProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        /*toggleFavorite: (state, action) => {
            const uniqueImage = action.payload; // Unikalny identyfikator - image
            const product = state.allProducts.find(
                (item) => item.image === uniqueImage
            ); // Znajdź produkt po 'image'
            if (product) {
                product.isFavorite = !product.isFavorite; // Przełącz ulubiony status
            }
        },*/

        /*toggleFavorite: (state, action) => {
            const uniqueImage = action.payload; // Unikalny identyfikator - image
            state.allProducts = state.allProducts.map((category) =>
                category.map((item) =>
                    item.image === uniqueImage
                        ? { ...item, isFavorite: !item.isFavorite } // Odwrócenie wartości `isFavorite`
                        : item
                )
            );
        },*/

        /*
        toggleFavorite: (state, action) => {
            const product = state.products.find(
                (item) => item.productId === action.payload
            );
            if (product) {
                product.isFavorite = !product.isFavorite;
            }
        },
        */
        /*
        toggleFavorite: (state, action) => {
            // Przechodzimy po wszystkich kategoriach
            state.products.forEach((categoryArr) => {
                categoryArr.forEach((product) => {
                    if (product.productId === action.payload) {
                        product.isFavorite = !product.isFavorite;
                    }
                });
            });
        }, */

        toggleFavorite: (state, action) => {
            // Przechodzimy po wszystkich kategoriach
            const productId = action.payload;
            state.products.forEach((categoryArr) => {
                categoryArr.forEach((product) => {
                    if (product.productId === productId) {
                        product.isFavorite = !product.isFavorite;
                    }
                });
            });
        },
    },
});

export const { setProducts, toggleFavorite } = allProductsSlice.actions;
export default allProductsSlice.reducer;
