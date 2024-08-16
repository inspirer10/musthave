import React from 'react';

import { FaArrowRightLong } from 'react-icons/fa6';

function AboutCompany() {
    return (
        <>
            <section className='aboutCompany'>
                <div className='video-container'>
                    <video
                        playsinline='true'
                        autoPlay='true'
                        loop='true'
                        muted='true'
                        disablepictureinpicture='true'
                        controlslist='nodownload nofullscreen noremoteplayback'
                    >
                        <source src={'/video3.mp4'} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>

                    <div className='video-text'>MUSTHAVE</div>
                </div>

                <aside className='aboutCompany__container'>
                    <article>
                        <div className='aboutCompany__description'>
                            <h2>ABOUT US</h2>
                            <p>
                                <span>MUSTHAVE</span> is a brand with unique
                                clothing that combines the latest trends with
                                high quality. We offer a wide range of products
                                that will make you stand out and highlight your
                                unique style. Our mission is to provide
                                fashion-forward pieces that are both stylish and
                                comfortable.
                            </p>

                            <div className='view_more'>
                                <a href='/aboutCompany'>VIEW MORE</a>
                                <FaArrowRightLong className='icon' />
                            </div>
                        </div>
                    </article>

                    <div className='aboutCompany__item__image'></div>
                </aside>
            </section>

            <article className='quoteSection'>
                <p className='quote'>
                    <i>" </i>Dressing well doesn't depend on a lot of clothes.
                    It's a matter of harmony and common sense.<i>"</i>
                </p>
                <p className='author'>Oscar de la Renta</p>
            </article>
        </>
    );
}

export default AboutCompany;
