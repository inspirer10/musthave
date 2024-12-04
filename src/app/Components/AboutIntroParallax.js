import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

function AboutIntroParallax() {
    const zoomParallaxContainer = useRef(null);
    const { scrollYProgress } = useScroll({
        target: zoomParallaxContainer,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const scaleName = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 1],
        [1, 1, 2, 10]
    );

    const video = [
        {
            scale: scale4,
        },
    ];

    return (
        <section
            ref={zoomParallaxContainer}
            className='zoom-parallax-container-test'
        >
            <div className='sticky-div-test'>
                {video.map(({ scale }, index) => (
                    <motion.div
                        style={{ scale: scale }}
                        className='wrapper'
                        key={index}
                    >
                        <div className='img-container'>
                            <div className='video-container'>
                                <video
                                    playsinline='true'
                                    autoPlay='true'
                                    loop='true'
                                    muted='true'
                                    disablepictureinpicture='true'
                                    controlslist='nodownload nofullscreen noremoteplayback'
                                >
                                    <source
                                        src={'/video3.mp4'}
                                        type='video/mp4'
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className='name-wrapper'>
                                <motion.div
                                    style={{ scale: scaleName }}
                                    className='brand-name'
                                >
                                    MUSTHAVE
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default AboutIntroParallax;
