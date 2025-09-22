import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideVisible, setSlideVisible] = useState([true, false, false]); // Per-slide visibility

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Trigger content and image animation when slide changes
    useEffect(() => {
        // Reset all to hidden
        setSlideVisible([false, false, false]);
        
        const timer = setTimeout(() => {
            // Show only current slide
            const newVisible = [...slideVisible];
            newVisible[currentSlide] = true;
            setSlideVisible(newVisible);
        }, 600); // Slightly more than half of 1000ms speed for smooth transition
        
        return () => clearTimeout(timer);
    }, [currentSlide]);

    const getTransform = (baseX, baseY, isOpposite = false) => {
        const moveX = (mousePos.x / window.innerWidth - 0.5) * -20;
        const moveY = (mousePos.y / window.innerHeight - 0.5) * -20;
        return `translate(${isOpposite ? -moveX : moveX}px, ${moveY}px)`;
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.activeIndex);
    };

    // Helper to check if current slide is visible
    const isCurrentSlideVisible = (slideIndex) => slideVisible[slideIndex];

    return (
        <div className="w-full">
            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .heading-animate {
                    animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                
                .content-animate {
                    animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                
                .image-animate {
                    animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                
                .button-animate {
                    animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    animation-delay: 0.8s;
                    opacity: 0; /* Initial opacity 0 for animation */
                }

                .content-hidden {
                    opacity: 0 !important; /* Force opacity 0 to reset animation start */
                    transform: translateX(-60px); /* Reset for heading and content */
                }

                /* Specific resets for content, image, and button */
                .content-hidden .content-animate {
                    opacity: 0;
                    transform: translateX(-60px);
                }

                .content-hidden .image-animate {
                    opacity: 0;
                    transform: translateX(60px);
                }

                .content-hidden .button-animate {
                    opacity: 0;
                    transform: translateY(30px);
                }
            `}</style>

            <Swiper
                onSlideChange={handleSlideChange}
                pagination={{
                    type: 'fraction',
                    el: '.custom-pagination',
                    clickable: false,
                }}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                loop={true}
                autoplay={true}
                speed={1000}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full bg-[#faf8ec] relative"
            >

                {/* Slide 1: Earrings */}
                <SwiperSlide>
                    <div className="mainDiv grid grid-cols-12 h-auto relative w-[90%] mx-auto">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img src="/star.svg" className='absolute top-[10%] sm:top-[15%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] left-[8%] sm:left-[15%] lg:left-[25%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute top-[20%] sm:top-[25%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[35%] sm:right-[45%] lg:right-[50%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[35%] sm:bottom-[40%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] right-[15%] sm:right-[30%] lg:right-[35%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[25%] sm:bottom-[30%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[8%] sm:right-[10%] lg:right-[15%] animate-pulse opacity-20' alt="" />
                        </div>

                        {/* Image Section */}
                        <div className="imageDiv flex justify-center items-center col-span-5 xs:col-span-6 xl:col-span-5 relative">
                            <img className={`w-[95%] xs:w-[70%] sm:w-[80%] z-50 h-[70%] xs:h-[75%] sm:h-[85%] object-cover rounded-tl-[25px] xs:rounded-tl-[35px] sm:rounded-tl-[70px] md:rounded-tl-[80px] lg:rounded-tl-[100px] rounded-br-[25px] xs:rounded-br-[35px] sm:rounded-br-[70px] md:rounded-br-[80px] lg:rounded-br-[100px] ${isCurrentSlideVisible(0) ? 'image-animate' : 'content-hidden'}`} src="/slide1.png" alt="Elegant Earrings" />
                            <img className='absolute bottom-0 h-full opacity-50 sm:opacity-60' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Content Section */}
                        <div className="descriptionDiv relative flex justify-start items-center col-span-7 xs:col-span-6 xl:col-span-7">
                            <div className={`description relative text-left max-w-2xl ps-[10px] xs:ps-0 py-2 ${!isCurrentSlideVisible(0) ? 'content-hidden' : ''}`}>
                                <p className={`text-[#ab7f5c] tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mb-2 sm:mb-3 lg:mb-4 ${isCurrentSlideVisible(0) ? 'content-animate' : ''}`}
                                    style={{ fontFamily: "var(--font-secondary)" }}
                                >
                                    RADIANT SPARKLE ✦
                                </p>
                                
                                <h1 className={`text-[16px] xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[25px] sm:leading-[45px] lg:leading-[60px] font-bold text-[var(--text-dark)] mb-3 sm:mb-4 lg:mb-6 ${isCurrentSlideVisible(0) ? 'heading-animate' : ''}`}
                                >
                                    LET YOUR EARS SPARKLE, EACH PAIR TELLS A STORY!
                                </h1>
                                
                                <p className={`block text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-[var(--text-light)] w-[100%] xs:leading-relaxed mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(0) ? 'content-animate' : ''}`}
                                >
                                    Let your ears do the talking. Our intricately crafted
                                    earrings are more than just ornaments — they're expressions
                                    of timeless charm and bold femininity.
                                </p>

                                <div className={`flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-start mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(0) ? 'button-animate' : ''}`}>
                                    <button className="luxury-btn px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-white font-semibold rounded-[5px] xs:rounded-lg shadow-lg text-[9px] sm:text-[14px] md:text-sm lg:text-base">
                                        <span className="relative z-10 transition-colors duration-300">
                                            Explore Collection
                                        </span>
                                    </button>
                                </div>

                                {/* Navigation Controls */}
                                <div className={`custom-pagination flex items-center justify-start gap-2 sm:gap-3 lg:gap-4 text-[var(--text-dark)] z-10 ${isCurrentSlideVisible(0) ? 'content-animate' : ''}`}>
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="left_arrow.svg" alt="Previous" />
                                    </div>
                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="/right_arrow.svg" alt="Next" />
                                    </div>
                                </div>
                            </div>

                            <div className="hidden xl:block">
                                <div className="absolute top-[3%] right-[35%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.3, 0.05, true) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_1.webp" alt="Product" />
                                </div>
                                <div className="absolute top-[38%] right-[0%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.05, 0.25, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_2.webp" alt="Product" />
                                </div>
                                <div className="absolute bottom-[20%] right-[25%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.25, 0.82, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_3.webp" alt="Product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Necklace */}
                <SwiperSlide>
                    <div className="mainDiv grid grid-cols-12 h-auto relative w-[90%] mx-auto">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img src="/star.svg" className='absolute top-[10%] sm:top-[15%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] left-[8%] sm:left-[15%] lg:left-[25%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute top-[20%] sm:top-[25%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[35%] sm:right-[45%] lg:right-[50%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[35%] sm:bottom-[40%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] right-[15%] sm:right-[30%] lg:right-[35%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[25%] sm:bottom-[30%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[8%] sm:right-[10%] lg:right-[15%] animate-pulse opacity-20' alt="" />
                        </div>

                        {/* Image Section */}
                        <div className="imageDiv flex justify-center items-center col-span-5 xs:col-span-6 xl:col-span-5 relative">
                            <img className={`w-[95%] xs:w-[70%] sm:w-[80%] z-50 h-[70%] xs:h-[75%] sm:h-[85%] object-cover rounded-tl-[25px] xs:rounded-tl-[35px] sm:rounded-tl-[70px] md:rounded-tl-[80px] lg:rounded-tl-[100px] rounded-br-[25px] xs:rounded-br-[35px] sm:rounded-br-[70px] md:rounded-br-[80px] lg:rounded-br-[100px] ${isCurrentSlideVisible(1) ? 'image-animate' : 'content-hidden'}`} src="/slide2.png" alt="Elegant Necklace" />
                            <img className='absolute bottom-0 h-full opacity-50 sm:opacity-60' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Content Section */}
                        <div className="descriptionDiv relative flex justify-start items-center col-span-7 xs:col-span-6 xl:col-span-7">
                            <div className={`description relative text-left max-w-2xl ps-[10px] xs:ps-0 py-2 ${!isCurrentSlideVisible(1) ? 'content-hidden' : ''}`}>
                                <p className={`text-[#ab7f5c] tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mb-2 sm:mb-3 lg:mb-4 ${isCurrentSlideVisible(1) ? 'content-animate' : ''}`}
                                    style={{ fontFamily: "var(--font-secondary)" }}
                                >
                                    ELEGANCE UNLEASHED ✦
                                </p>
                                
                                <h1 className={`text-[16px] xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[25px] sm:leading-[45px] lg:leading-[60px] font-bold text-[var(--text-dark)] mb-3 sm:mb-4 lg:mb-6 ${isCurrentSlideVisible(1) ? 'heading-animate' : ''}`}
                                >
                                    ELEGANCE IN EVERY CHAIN, BEAUTY UNCHAINED
                                </h1>
                                
                                <p className={`block text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-[var(--text-light)] w-[100%] xs:leading-relaxed mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(1) ? 'content-animate' : ''}`}
                                >
                                    Discover finely crafted imitation chains that blend elegance, strength,
                                    and timeless shine — only at <strong>CB Imitation</strong>.
                                </p>

                                <div className={`flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-start mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(1) ? 'button-animate' : ''}`}>
                                    <button className="luxury-btn px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-white font-semibold rounded-[5px] xs:rounded-lg shadow-lg text-[9px] sm:text-[14px] md:text-sm lg:text-base">
                                        <span className="relative z-10 transition-colors duration-300">
                                            Explore Collection
                                        </span>
                                    </button>
                                </div>

                                {/* Navigation Controls */}
                                <div className={`custom-pagination flex items-center justify-start gap-2 sm:gap-3 lg:gap-4 text-[var(--text-dark)] z-10 ${isCurrentSlideVisible(1) ? 'content-animate' : ''}`}>
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="left_arrow.svg" alt="Previous" />
                                    </div>
                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="/right_arrow.svg" alt="Next" />
                                    </div>
                                </div>
                            </div>

                            <div className="hidden xl:block">
                                <div className="absolute top-[3%] right-[35%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.3, 0.05, true) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_4.webp" alt="Product" />
                                </div>
                                <div className="absolute top-[38%] right-[0%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.05, 0.25, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_5.webp" alt="Product" />
                                </div>
                                <div className="absolute bottom-[20%] right-[25%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.25, 0.82, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_6.webp" alt="Product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3: Bangles */}
                <SwiperSlide>
                    <div className="mainDiv grid grid-cols-12 h-auto relative w-[90%] mx-auto">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img src="/star.svg" className='absolute top-[10%] sm:top-[15%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] left-[8%] sm:left-[15%] lg:left-[25%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute top-[20%] sm:top-[25%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[35%] sm:right-[45%] lg:right-[50%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[35%] sm:bottom-[40%] h-[12px] sm:h-[16px] md:h-[20px] lg:h-[24px] right-[15%] sm:right-[30%] lg:right-[35%] animate-pulse opacity-20' alt="" />
                            <img src="/star.svg" className='absolute bottom-[25%] sm:bottom-[30%] h-[10px] sm:h-[12px] md:h-[14px] lg:h-[16px] right-[8%] sm:right-[10%] lg:right-[15%] animate-pulse opacity-20' alt="" />
                        </div>

                        {/* Image Section */}
                        <div className="imageDiv flex justify-center items-center col-span-5 xs:col-span-6 xl:col-span-5 relative">
                            <img className={`w-[95%] xs:w-[70%] sm:w-[80%] z-50 h-[70%] xs:h-[75%] sm:h-[85%] object-cover rounded-tl-[25px] xs:rounded-tl-[35px] sm:rounded-tl-[70px] md:rounded-tl-[80px] lg:rounded-tl-[100px] rounded-br-[25px] xs:rounded-br-[35px] sm:rounded-br-[70px] md:rounded-br-[80px] lg:rounded-br-[100px] ${isCurrentSlideVisible(2) ? 'image-animate' : 'content-hidden'}`} src="/slider3.webp" alt="Gold Bangles" />
                            <img className='absolute bottom-0 h-full opacity-50 sm:opacity-60' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Content Section */}
                        <div className="descriptionDiv relative flex justify-start items-center col-span-7 xs:col-span-6 xl:col-span-7">
                            <div className={`description relative text-left max-w-2xl ps-[10px] xs:ps-0 py-2 ${!isCurrentSlideVisible(2) ? 'content-hidden' : ''}`}>
                                <p className={`text-[#ab7f5c] tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mb-2 sm:mb-3 lg:mb-4 ${isCurrentSlideVisible(2) ? 'content-animate' : ''}`}
                                    style={{ fontFamily: "var(--font-secondary)" }}
                                >
                                    GLIMMER OF HERITAGE ✦
                                </p>
                                
                                <h1 className={`text-[16px] xs:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[25px] sm:leading-[45px] lg:leading-[60px] font-bold text-[var(--text-dark)] mb-3 sm:mb-4 lg:mb-6 ${isCurrentSlideVisible(2) ? 'heading-animate' : ''}`}
                                >
                                    WRAP YOUR WRISTS IN GOLD, WHERE TRADITION MEETS RADIANCE!
                                </h1>
                                
                                <p className={`block text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-[var(--text-light)] w-[100%] xs:leading-relaxed mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(2) ? 'content-animate' : ''}`}
                                >
                                    Our gold bangles are legacies carved in gold — timeless craftsmanship and cultural beauty, made
                                    to shine through every celebration.
                                </p>

                                <div className={`flex flex-row gap-2 sm:gap-3 lg:gap-4 justify-start mb-4 sm:mb-6 lg:mb-8 ${isCurrentSlideVisible(2) ? 'button-animate' : ''}`}>
                                    <button className="luxury-btn px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 text-white font-semibold rounded-[5px] xs:rounded-lg shadow-lg text-[9px] sm:text-[14px] md:text-sm lg:text-base">
                                        <span className="relative z-10 transition-colors duration-300">
                                            Explore Collection
                                        </span>
                                    </button>
                                </div>

                                {/* Navigation Controls */}
                                <div className={`custom-pagination flex items-center justify-start gap-2 sm:gap-3 lg:gap-4 text-[var(--text-dark)] z-10 ${isCurrentSlideVisible(2) ? 'content-animate' : ''}`}>
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="left_arrow.svg" alt="Previous" />
                                    </div>
                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-[var(--cream-bg)]">
                                        <img className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[40px]' src="/right_arrow.svg" alt="Next" />
                                    </div>
                                </div>
                            </div>

                            <div className="hidden xl:block">
                                <div className="absolute top-[3%] right-[35%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.3, 0.05, true) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider_product_7.webp" alt="Product" />
                                </div>
                                <div className="absolute top-[38%] right-[0%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.05, 0.25, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/slider3.webp" alt="Product" />
                                </div>
                                <div className="absolute bottom-[20%] right-[25%] w-[100px] h-[100px] bg-white rounded-lg shadow-xl overflow-hidden transition-transform duration-300 ease-out border border-[#ab7f5c]"
                                    style={{ transform: getTransform(0.25, 0.82, false) }}
                                >
                                    <img className='w-full h-full object-cover' src="/catbg3.webp" alt="Product" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}