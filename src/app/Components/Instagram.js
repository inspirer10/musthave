import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

function Instagram() {
    const handleSubmit = (e) => {
        e.preventDefault();
        document.querySelector('#newsletterInput').value = '';
    };

    return (
        <>
            <section className='highlightedProduct__container'>
                <div className='highlightedProduct__image' />

                <aside className='highlightedProduct__text'>
                    <h2>HOODIE</h2>
                    <p>
                        Experience ultimate comfort and style with our premium
                        hoodie. Crafted from soft,{' '}
                        <span>high-quality cotton, </span> this piece is perfect
                        for any casual occasion. It's simple, versatile design
                        pairs effortlessly with jeans, shorts, or layered under
                        a jacket. Stay cozy and fashionable. Elevate your
                        wardrobe with this{' '}
                        <span>essential, durable hoodie.</span>
                    </p>

                    <div className='view_product'>
                        <a href='/product/black/HOODIE'>VIEW PRODUCT</a>
                        <FiArrowUpRight className='icon' />
                    </div>
                </aside>
            </section>

            <section className='instagramSection'>
                <div className='top__gallery'>
                    <div className='top_gallery_item1' />
                    <div className='instagramSection__followUs'>
                        <h2>WE'RE ON INSTAGRAM</h2>
                        <button>follow us</button>
                    </div>
                    <div className='top_gallery_item2' />
                </div>

                <div className='bottom__gallery'>
                    <div className='bottom__gallery_item1' />
                    <div className='bottom__gallery_item2' />
                    <div className='bottom__gallery_item3' />
                    <div className='bottom__gallery_item4' />
                </div>
            </section>

            <section className='newsletter'>
                <p>
                    Sign up for our newsletter to receive
                    <br /> special offers, news & events.
                </p>
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            id='newsletterInput'
                            type='email'
                            placeholder='Enter your email address'
                        />
                        <input id='submitButton' type='submit' value='OK' />
                    </label>
                </form>
            </section>
        </>
    );
}

export default Instagram;
