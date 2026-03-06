import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import './exploreBrand.scss';

const SECTION_HEADING_LINES = ['WHAT MAKES', 'OUR BRAND SPECIAL'];

const BRAND_FEATURES = [
    {
        title: 'ARTISAN CRAFTSMANSHIP',
        description:
            'Every garment is meticulously crafted by skilled artisans who combine time-honored techniques with modern precision. From hand-finished seams to custom dyeing processes, each piece reflects a dedication to detail that elevates everyday wear into wearable art.',
    },
    {
        title: 'QUALITY MATERIALS',
        description:
            'We thoughtfully select premium fabrics - like organic cotton, TENCEL lyocell, and recycled nylon - that deliver unmatched softness and resilience. Every yard is traced back to its source, ensuring transparency and minimal environmental footprint without sacrificing luxury.',
    },
    {
        title: 'PERFORMANCE INNOVATION',
        description:
            'Our fabrics integrate cutting-edge technology for maximum comfort and durability. Moisture-wicking treatments, anti-odor finishes, and stretch recovery systems ensure each item adapts to your lifestyle, maintaining shape and freshness from morning to night.',
    },
];

const revealFromBottom = {
    initial: { y: '110%', opacity: 0 },
    animate: (index = 0) => ({
        y: '0%',
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.06 + index * 0.12,
        },
    }),
};

const revealParagraph = {
    initial: { opacity: 0, y: 25, filter: 'blur(3px)' },
    animate: (index = 0) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.06 + index * 0.12,
        },
    }),
};

function ExploreBrand() {
    return (
        <motion.section
            className='explore_brand-section'
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.35 }}
        >
            {/*<h2>ExploreBrand</h2>     WHAT MAKES <br />A PERFECT T-SHIRT*/}

            <h2 className='explore_brand-heading'>
                {SECTION_HEADING_LINES.map((line, index) => (
                    <span key={line} className='reveal-line'>
                        <motion.span
                            className='reveal-line-inner'
                            variants={revealFromBottom}
                            custom={index}
                        >
                            {line}
                        </motion.span>
                    </span>
                ))}
            </h2>

            <main>
                <article>
                    {BRAND_FEATURES.map((feature, index) => {
                        const order = SECTION_HEADING_LINES.length + index * 2;

                        return (
                            <div className='position' key={feature.title}>
                                <h5 className='reveal-line'>
                                    <motion.span
                                        className='reveal-line-inner'
                                        variants={revealFromBottom}
                                        custom={order}
                                    >
                                        {feature.title}
                                    </motion.span>
                                </h5>

                                <motion.p
                                    variants={revealParagraph}
                                    custom={order + 1}
                                >
                                    {feature.description}
                                </motion.p>
                            </div>
                        );
                    })}
                </article>

                <aside>
                    <Image
                        src={'/perfectShirt/1.png'}
                        height={400}
                        width={300}
                        alt='close-up of premium shirt texture and stitching'
                        className='image_1'
                        quality={90}
                    />

                    <Image
                        src={'/perfectShirt/2.jpeg'}
                        height={400}
                        width={300}
                        alt='studio photo of minimalist shirt on model'
                        className='image_2'
                        quality={80}
                    />

                    <Image
                        src={'/perfectShirt/4.jpg'}
                        height={400}
                        width={300}
                        alt='dark apparel piece highlighting fit and fabric'
                        className='image_3'
                        quality={90}
                    />

                    <Image
                        src={'/perfectShirt/3.jpg'}
                        height={400}
                        width={300}
                        alt='folded premium garments arranged for display'
                        className='image_4'
                        quality={90}
                    />

                    {/*<div className='image_wrapper'>
                        <Image
                            src={'/perfectShirt/5.jpg'}
                            height={400}
                            width={300}
                            alt='additional premium garment detail'
                            className='image_1'
                        />
                    </div>*/}
                </aside>
            </main>
        </motion.section>
    );
}

export default ExploreBrand;
