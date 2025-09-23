import React from 'react';
import './ourVision.scss';
import Image from 'next/image';

function OurVision() {
    return (
        <section className='ourVision_section'>
            <header>
                <h2>Our Vision</h2>

                <p>
                    At <span>MUSTHAVE</span>, we believe in redefining modern
                    fashion through innovation, quality, and comfort. Our vision
                    is to create clothing that empowers individuality while
                    maintaining timeless design and sustainability. With a focus
                    on craftsmanship and premium materials, we aim to inspire
                    confidence and <span>expand our reach worldwide</span>,{' '}
                    making unique fashion accessible to everyone
                </p>
            </header>

            <main>
                <div className='images-container'>
                    <div className='card'>
                        <Image
                            src='/ourVision/test4.jpg'
                            height={550}
                            width={550}
                            quality={100}
                            className='image'
                            alt=''
                        />
                        <p>Creating borderless connection</p>
                    </div>

                    <div className='card'>
                        <Image
                            src='/ourVision/1.jpg'
                            height={550}
                            width={550}
                            quality={100}
                            className='image'
                            alt=''
                        />
                        <p>Exploring innovation</p>
                    </div>

                    <div className='card'>
                        <Image
                            src='/ourVision/6.png'
                            height={550}
                            width={550}
                            quality={100}
                            className='image'
                            alt=''
                        />
                        <p>Transforming dreams into reality</p>
                    </div>
                </div>

                <div className='content-wrapper'>
                    <h3>Our way to achieve it</h3>

                    <div className='step-wrapper'>
                        <h6 className='number-tag'>[1]</h6>
                        <h4 className='heading'>
                            Strategic Market Research & Analysis
                        </h4>
                        <p>
                            We conduct comprehensive market research to identify
                            emerging trends, customer preferences, and untapped
                            opportunities. This data-driven approach allows us
                            to make informed decisions about product
                            development, target demographics, and expansion
                            strategies across different regions
                        </p>
                    </div>

                    <div className='step-wrapper'>
                        <h6 className='number-tag'>[2]</h6>
                        <h4 className='heading'>
                            Top Quality & Perfect Control
                        </h4>
                        <p>
                            Every stage of our production undergoes rigorous
                            quality-control procedures to ensure the durability
                            and flawless finish of our garments. We use only
                            premium materials subjected to strict tests for
                            strength and color retention. Regular audits and
                            manual inspections of each piece guarantee that
                            customers receive products meeting the highest
                            industry standards
                        </p>
                    </div>

                    <div className='step-wrapper'>
                        <h6 className='number-tag'>[3]</h6>
                        <h4 className='heading'>
                            Digital Innovation & Customer Experience
                        </h4>
                        <p>
                            We leverage cutting-edge technology to enhance our
                            online presence, streamline the shopping experience,
                            and build stronger connections with our customers.
                            From advanced e-commerce platforms to personalized
                            recommendations, we're constantly improving how
                            customers discover and interact with our brand
                        </p>
                    </div>

                    <Image
                        src='/ourVision/5.png'
                        height={600}
                        width={450}
                        quality={100}
                        className='floating_image'
                        alt=''
                    />
                </div>
            </main>
        </section>
    );
}

export default OurVision;
