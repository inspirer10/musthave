import React from 'react';
import './exploreBrand.scss';
import Image from 'next/image';

function ExploreBrand() {
    return (
        <section className='explore_brand-section'>
            {/*<h2>ExploreBrand</h2>     WHAT MAKES <br />A PERFECT T-SHIRT*/}
            <h2>
                WHAT MAKES <br />
                OUR BRAND SPECIAL
            </h2>

            <main>
                <article>
                    <div className='position'>
                        <h5>ARTISAN CRAFTSMANSHIP</h5>
                        <p>
                            Every garment is meticulously crafted by skilled
                            artisans who combine time-honored techniques with
                            modern precision. From hand-finished seams to custom
                            dyeing processes, each piece reflects a dedication
                            to detail that elevates everyday wear into wearable
                            art.
                        </p>
                    </div>

                    <div className='position'>
                        <h5>QUALITY MATERIALS</h5>
                        <p>
                            We thoughtfully select premium fabrics—like organic
                            cotton, TENCEL™ lyocell, and recycled nylon—that
                            deliver unmatched softness and resilience. Every
                            yard is traced back to its source, ensuring
                            transparency and minimal environmental footprint
                            without sacrificing luxury.
                        </p>
                    </div>

                    <div className='position'>
                        <h5>PERFORMANCE INNOVATION</h5>
                        <p>
                            Our fabrics integrate cutting-edge technology for
                            maximum comfort and durability. Moisture-wicking
                            treatments, anti-odor finishes, and stretch recovery
                            systems ensure each item adapts to your lifestyle,
                            maintaining shape and freshness from morning to
                            night.
                        </p>
                    </div>
                </article>

                <aside>
                    <Image
                        src={'/perfectShirt/1.png'}
                        height={400}
                        width={300}
                        alt='//*TO FILL'
                        className='image_1'
                        quality={90}
                    />

                    <Image
                        src={'/perfectShirt/2.jpeg'}
                        height={400}
                        width={300}
                        alt='//*TO FILL'
                        className='image_2'
                        quality={90}
                    />

                    <Image
                        src={'/perfectShirt/4.jpg'}
                        height={400}
                        width={300}
                        alt='//*TO FILL'
                        className='image_3'
                        quality={90}
                    />

                    {/*<div className='image_wrapper'>
                        <Image
                            src={'/perfectShirt/5.jpg'}
                            height={400}
                            width={300}
                            alt='//*TO FILL'
                            className='image_1'
                        />
                    </div>*/}
                </aside>
            </main>
        </section>
    );
}

export default ExploreBrand;
