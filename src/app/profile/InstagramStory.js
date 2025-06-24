import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function InstagramStory() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const slideRef = useRef(currentSlide);

    const slides = [
        { id: 1, image: '/instaGallery6.jpg', time: '19h' },
        { id: 2, image: '/instaGallery2.jpg', time: '3h' },
        { id: 3, image: '/aboutCompany2.jpg', time: '1h' },
    ];

    const SLIDE_DURATION = 3500; //3.5-sekundy

    //Synchronizuj slideRef z currentSlide zawsze przy zmianie
    useEffect(() => {
        slideRef.current = currentSlide;
    }, [currentSlide]);

    // Auto-play logic
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    // Użyj wartości z refa do obliczeń
                    const next = (slideRef.current + 1) % slides.length;
                    setCurrentSlide(next);
                    return 0;
                }
                return prev + 100 / (SLIDE_DURATION / 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isPlaying, slides.length]);

    // Reset progress when slide changes
    useEffect(() => {
        setProgress(0);
    }, [currentSlide]);

    const goToNext = () => {
        const next = (slideRef.current + 1) % slides.length;
        setCurrentSlide(next);
    };

    const goToPrev = () => {
        const prev = (slideRef.current - 1 + slides.length) % slides.length;
        setCurrentSlide(prev);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <aside
            className='instagram-story'
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <div className='instagram-story__progress'>
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className='instagram-story__progress-bar'
                        onClick={() => goToSlide(index)}
                    >
                        <div
                            className='instagram-story__progress-fill'
                            style={{
                                width:
                                    index === currentSlide
                                        ? `${progress}%`
                                        : index < currentSlide
                                        ? '100%'
                                        : '0%',
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className='instagram-story__header'>
                <div className='instagram-story__user'>
                    <div className='instagram-story__avatar'>
                        <Image
                            src='/logo.jpg'
                            alt='company avatar'
                            width={50}
                            height={50}
                        />
                    </div>
                    <span className='instagram-story__username'>@musthave</span>
                    <span className='instagram-story__time'>
                        {slides[currentSlide].time}
                    </span>
                </div>
            </div>

            <main className='instagram-story__content'>
                <div className='instagram-story__image-container'>
                    <Image
                        src={slides[currentSlide].image}
                        alt={`Story ${currentSlide + 1}`}
                        fill
                        className='instagram-story__image'
                        //priority
                        priority
                    />
                </div>

                <button
                    className='instagram-story__nav instagram-story__nav--prev'
                    onClick={goToPrev}
                    aria-label='Previous story'
                >
                    <IoChevronBack />
                </button>

                <button
                    className='instagram-story__nav instagram-story__nav--next'
                    onClick={goToNext}
                    aria-label='Next story'
                >
                    <IoChevronForward />
                </button>
            </main>
        </aside>
    );
}

export default InstagramStory;
