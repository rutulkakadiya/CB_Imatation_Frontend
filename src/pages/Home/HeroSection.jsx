import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const getTransform = (baseX, baseY, isOpposite = false) => {
        const moveX = (mousePos.x / window.innerWidth - 0.5) * -10;
        const moveY = (mousePos.y / window.innerHeight - 0.5) * -10;
        return `translate(${isOpposite ? -moveX : moveX}px, ${moveY}px)`;
    };

    return (
        <div className="w-full">
            <Swiper
                pagination={{
                    type: 'fraction',
                    el: '.custom-pagination',
                    clickable: false,
                }}
                navigation={true}
                speed={1000}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full h-[100vh] bg-[#f4e7d6] relative"
            >
                <SwiperSlide>
                    <div className="mainDiv grid grid-cols-1 md:grid-cols-12 h-full relative">
                        {/* Black stars */}
                        <span className="absolute top-[15%] left-[30%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl"></span>
                        <span className="absolute top-[20%] right-[50%] text-black text-2xl animate-pulse opacity-30 md:text-3xl lg:text-4xl"></span>
                        <span className="absolute bottom-[30%] right-[37%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl"></span>
                        <span className="absolute bottom-[25%] right-[15%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl"></span>

                        {/* Image */}
                        <div className="imageDiv flex justify-center items-center md:col-span-4 border h-[40vh] md:h-full">
                            <div className="image h-[70%] w-[70%] bg-gray-300 border rounded-t-[200px] flex justify-center items-center md:h-[60%] md:w-[60%] lg:h-[50%] lg:w-[50%]">
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-center">
                                    Box Placeholder
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="descriptionDiv flex justify-center items-start sm:items-center md:col-span-8 p-4 md:p-0">
                            <div className="description relative text-center md:text-left">
                                <p
                                    className="text-[var(--smallText-color)] tracking-widest text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-primary)" }}
                                >
                                    TIMELESS BEAUTY ✦
                                </p>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.2] w-full md:w-[80%] mx-auto md:mx-0">
                                    ELEGANCE IN EVERY CHAIN, BEAUTY UNCHAINED
                                </h1>
                                <p className="mt-4 text-sm md:text-base absolute right-2 left-2 md:static md:right-[10%] md:bottom-[25%] md:left-auto lg:right-[20%]">
                                    Let your ears do the talking. Our intricately crafted <br className="hidden md:inline" />
                                    earrings are more than just ornaments — they’re expressions <br className="hidden md:inline" />
                                    of timeless charm and bold femininity.
                                </p>
                                <button className="px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 mt-[80px] md:mt-[30px] bg-black text-white transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105">
                                    Know More
                                </button>

                                <div className="custom-pagination absolute bottom-6 left-[0%] -translate-x-1/2 flex items-center gap-6 text-black text-xl font-light z-10">
                                    <div className="swiper-button-next cursor-pointer hover:scale-110 transition-transform duration-200">←</div>
                                    <div className="swiper-button-prev cursor-pointer hover:scale-110 transition-transform duration-200">→</div>
                                    <div className="swiper-pagination" />
                                </div>

                            </div>
                        </div>

                        {/* Small Boxes - Mouse Move */}
                        {/* Small Boxes - Mouse Move */}
                        <div
                            className="hidden sm:flex absolute top-[5%] right-[30%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300  items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.3, 0.05, true) }}
                        >
                            Box Placeholder
                        </div>
                        <div
                            className="hidden sm:flex absolute top-[18%] right-[5%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.05, 0.25, false) }}
                        >
                            Box Placeholder
                        </div>
                        <div
                            className="hidden sm:flex absolute bottom-[18%] right-[25%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}
                        >
                            Box Placeholder
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[100vh] flex items-center justify-center text-3xl">
                        Slide 2
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-full h-[100vh] flex items-center justify-center text-3xl">
                        Slide 3
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
