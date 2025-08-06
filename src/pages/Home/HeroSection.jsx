import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        const moveX = (mousePos.x / window.innerWidth - 0.5) * -20;
        const moveY = (mousePos.y / window.innerHeight - 0.5) * -20;
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
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                speed={1000}
                modules={[Navigation, Autoplay]}
                className="mySwiper h-auto w-full bg-[#f4e7d6] relative"
            >
                <SwiperSlide className='mt-[120px]'>
                    <div className="mainDiv grid grid-cols-1 md:grid-cols-12 h-auto relative">
                        {/* Black stars */}

                        <img src="/star.svg" className='absolute top-[15%] h-[30px] left-[30%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute top-[20%] h-[15px] right-[50%] text-black text-2xl animate-pulse opacity-30 md:text-3xl lg:text-4xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[30%] h-[30px] right-[37%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[25%] h-[15px] right-[15%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />


                        {/* Image */}
                        <div className="imageDiv flex justify-center items-center md:col-span-5 xl:col-span-4 h-[70vh] xs:h-[80vh] sm:h-[100vh] relative">
                            <div
                                className="image overflow-hidden z-10 rounded-t-full h-[350px] xs:h-[550px] lg:h-[600px] w-full max-w-[500px] mx-[30px] flex justify-center items-center"
                                data-aos="fade"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img className="w-full h-full object-cover rounded-t-full" src="/slider1.webp" alt="" />
                            </div>


                            <img className='absolute bottom-0 h-full' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Description */}
                        <div className="descriptionDiv flex justify-center items-start sm:items-center md:col-span-7 xl:col-span-8 p-4 md:p-0">
                            <div className="description relative text-left">
                                <p
                                    className="text-[var(--smallText-color)] tracking-widest text-[14px] sm:text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-primary)" }}
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    RADIANT SPARKLE ✦
                                </p>
                                <h1 className="text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.2] w-full md:w-[80%] mx-auto md:mx-0"
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    LET YOURS EARS SPARKLE, EACH PAIR TELLS STORY!
                                </h1>
                                <p className='mt-4 text-[14px] sm:text-[18px] xl:absolute right-[0%] xl:right-[10%] bottom-[0%] xl:bottom-[25%] w-[90%] xl:w-[45%]' data-aos="fade-left"
                                    data-aos-duration="1500">
                                    Let your ears do the talking. Our intricately crafted
                                    earrings are more than just ornaments — they’re expressions
                                    of timeless charm and bold femininity.
                                </p>
                                <button
                                    type="submit"
                                    class="relative z-10 px-3 sm:px-6 py-2 sm:py-3 mt-[15px] overflow-hidden rounded-[5px] bg-black text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                                >
                                    <span class="relative z-10 text-[14px] sm:text-[16px] transition-colors duration-300 group-hover:text-black">
                                        Know More
                                    </span>
                                    <svg
                                        class="w-6 sm:w-8 h-6 sm:h-8 p-[5px] sm:p-2 border border-white rounded-full transition-all duration-300 rotate-45 group-hover:rotate-90 group-hover:bg-white group-hover:border-transparent group-hover:text-black"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            class="fill-white group-hover:fill-black"
                                        ></path>
                                    </svg>

                                    <span class="absolute inset-0 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:bg-white before:-left-full before:transition-all before:duration-700 group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>
                                </button>


                                <div className="custom-pagination absolute bottom-[-10%] left-[0%] flex items-center gap-3 text-black text-xl font-light z-10">
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="left_arrow.svg" alt="" />
                                    </div>

                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="/right_arrow.svg" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Small Boxes - Mouse Move */}
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[3%] xl:top-[5%] right-[30%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] bg-gray-300 border overflow-hidden items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.3, 0.05, true) }}
                        >
                            <img className='rounded-[10px]' src="/slider_product_1.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[18%] right-[5%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.05, 0.25, false) }}>
                            <img className='rounded-[10px]' src="/slider_product_2.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] sm:flex absolute bottom-[3%] xxl:bottom-[18%] right-[50%] md:right-[25%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}
                        >
                            <img className='rounded-[10px]' src="/slider_product_3.webp" alt="" />
                        </div>

                        <div
                            className="flex absolute bottom-[0%] sm:bottom-[5%] right-[5%] h-[80px] sm:h-[100px] transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}

                        >
                            <img className='rounded-[10px]' src="/sliderImage_1.png" alt="" />
                        </div>

                    </div>
                </SwiperSlide>

                <SwiperSlide className='mt-[120px]'>
                    <div className="mainDiv grid grid-cols-1 md:grid-cols-12 h-auto relative">
                        {/* Black stars */}

                        <img src="/star.svg" className='absolute top-[15%] h-[30px] left-[30%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute top-[20%] h-[15px] right-[50%] text-black text-2xl animate-pulse opacity-30 md:text-3xl lg:text-4xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[30%] h-[30px] right-[37%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[25%] h-[15px] right-[15%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />


                        {/* Image */}
                        <div className="imageDiv flex justify-center items-center md:col-span-5 xl:col-span-4 h-[70vh] xs:h-[80vh] sm:h-[100vh] relative">
                            <div
                                className="image overflow-hidden h-[80%] z-10 w-[80%] xs:h-[90%] xs:w-[90%] sm:h-[90%] sm:w-[70%] bg-gray-300 rounded-t-[200px] flex justify-center items-center md:h-[70%] md:w-[80%] lg:h-[70%] lg:w-[80%]"
                                data-aos="fade"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img className="h-full w-full z-10" src="/slider2.webp" alt="" />
                            </div>

                            <img className='absolute bottom-0 h-full' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Description */}
                        <div className="descriptionDiv flex justify-center items-start sm:items-center md:col-span-7 xl:col-span-8 p-4 md:p-0">
                            <div className="description relative text-left">
                                <p
                                    className="text-[var(--smallText-color)] tracking-widest text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-primary)" }}
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    RADIANT SPARKLE ✦
                                </p>
                                <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.2] w-full md:w-[80%] mx-auto md:mx-0"
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    ELEGANCE IN EVERY CHAIN, BEAUTY UNCHAINED
                                </h1>
                                <p className='mt-4 xl:absolute right-[0%] xl:right-[10%] bottom-[0%] xl:bottom-[25%] w-[90%] xl:w-[45%]' data-aos="fade-left"
                                    data-aos-duration="1500">
                                    Discover finely crafted imitation chains that blend elegance, strength, and timeless shine — only at <strong>CB Imitation</strong>.

                                </p>

                                <button
                                    type="submit"
                                    class="relative z-10 px-6 py-3 mt-[15px] overflow-hidden rounded-[5px] bg-black text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                                >
                                    <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
                                        Know More
                                    </span>
                                    <svg
                                        class="w-8 h-8 p-2 border border-white rounded-full transition-all duration-300 rotate-45 group-hover:rotate-90 group-hover:bg-white group-hover:border-transparent group-hover:text-black"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            class="fill-white group-hover:fill-black"
                                        ></path>
                                    </svg>

                                    <span class="absolute inset-0 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:bg-white before:-left-full before:transition-all before:duration-700 group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>
                                </button>


                                <div className="custom-pagination absolute bottom-[-10%] left-[0%] flex items-center gap-3 text-black text-xl font-light z-10">
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="left_arrow.svg" alt="" />
                                    </div>

                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="/right_arrow.svg" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Small Boxes - Mouse Move */}
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[3%] xl:top-[5%] right-[30%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] bg-gray-300 border overflow-hidden items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.3, 0.05, true) }}
                        >
                            <img className='rounded-[10px]' src="/slider_product_4.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[18%] right-[5%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.05, 0.25, false) }}
                        >
                            <img className='rounded-[10px]' src="/slider_product_5.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] sm:flex absolute bottom-[3%] xxl:bottom-[18%] right-[50%] md:right-[25%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}

                        >
                            <img className='rounded-[10px]' src="/slider_product_6.webp" alt="" />
                        </div>

                        {/* <div
                            className="flex absolute bottom-[0%] sm:bottom-[5%] right-[5%] h-[80px] sm:h-[100px] transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}

                        >
                            <img className='rounded-[10px]' src="/sliderImage_1.png" alt="" />
                        </div> */}

                    </div>
                </SwiperSlide>

                <SwiperSlide className='mt-[120px]'>
                    <div className="mainDiv grid grid-cols-1 md:grid-cols-12 h-auto relative">
                        {/* Black stars */}

                        <img src="/star.svg" className='absolute top-[15%] h-[30px] left-[30%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute top-[20%] h-[15px] right-[50%] text-black text-2xl animate-pulse opacity-30 md:text-3xl lg:text-4xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[30%] h-[30px] right-[37%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />
                        <img src="/star.svg" className='absolute bottom-[25%] h-[15px] right-[15%] text-black text-3xl animate-pulse opacity-30 md:text-4xl lg:text-5xl' alt="" />


                        {/* Image */}
                        <div className="imageDiv flex justify-center items-center md:col-span-5 xl:col-span-4 h-[70vh] xs:h-[80vh] sm:h-[100vh] relative">
                            <div
                                className="image overflow-hidden h-[80%] z-10 w-[80%] xs:h-[90%] xs:w-[90%] sm:h-[90%] sm:w-[70%] bg-gray-300 rounded-t-[200px] flex justify-center items-center md:h-[70%] md:w-[80%] lg:h-[70%] lg:w-[80%]"
                                data-aos="fade"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                            >
                                <img className="h-full w-full z-10" src="/slider3.webp" alt="" />
                            </div>


                            <img className='absolute bottom-0 h-full' src="/leaf_bg.png" alt="" />
                        </div>

                        {/* Description */}
                        <div className="descriptionDiv flex justify-center items-start sm:items-center md:col-span-7 xl:col-span-8 p-4 md:p-0">
                            <div className="description relative text-left">
                                <p
                                    className="text-[var(--smallText-color)] tracking-widest text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-primary)" }}
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    GLIMMER OF HERITAGE ✦
                                </p>
                                <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.2] w-full md:w-[80%] mx-auto md:mx-0"
                                    data-aos="fade"
                                    data-aos-offset="200"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                >
                                    WRAP YOUR WRISTS IN GOLD, WHERE TRADITION MEETS RADIANCE!
                                </h1>
                                <p className='mt-4 xl:absolute right-[0%] xl:right-[10%] bottom-[0%] xl:bottom-[20%] w-[90%] xl:w-[45%]' data-aos="fade-left"
                                    data-aos-duration="1500">
                                    Our gold bangles are legacies carved in gold — timeless craftsmanship and cultural beauty, made to shine through every celebration.
                                </p>
                                <button
                                    type="submit"
                                    class="relative z-10 px-6 py-3 mt-[15px] overflow-hidden rounded-[5px] bg-black text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                                >
                                    <span class="relative z-10 transition-colors duration-300 group-hover:text-black">
                                        Know More
                                    </span>
                                    <svg
                                        class="w-8 h-8 p-2 border border-white rounded-full transition-all duration-300 rotate-45 group-hover:rotate-90 group-hover:bg-white group-hover:border-transparent group-hover:text-black"
                                        viewBox="0 0 16 19"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                            class="fill-white group-hover:fill-black"
                                        ></path>
                                    </svg>

                                    <span class="absolute inset-0 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:bg-white before:-left-full before:transition-all before:duration-700 group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>
                                </button>


                                <div className="custom-pagination absolute bottom-[-10%] left-[0%] flex items-center gap-3 text-black text-xl font-light z-10">
                                    <div className="custom-prev cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="left_arrow.svg" alt="" />
                                    </div>

                                    <div className="custom-next cursor-pointer hover:scale-110 transition-transform duration-200">
                                        <img className='w-[50px]' src="/right_arrow.svg" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Small Boxes - Mouse Move */}
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[3%] xl:top-[5%] right-[30%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] bg-gray-300 border overflow-hidden items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.3, 0.05, true) }}
                        >
                            <img className='rounded-[10px]' src="/slider_product_7.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] md:flex absolute top-[18%] right-[5%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.05, 0.25, false) }}>
                            <img className='rounded-[10px]' src="/slider3.webp" alt="" />
                        </div>
                        <div
                            className="hidden rounded-[10px] sm:flex absolute bottom-[3%] xxl:bottom-[18%] right-[50%] md:right-[25%] w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] overflow-hidden bg-gray-300 items-center justify-center text-gray-500 transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}
                        >
                            <img className='rounded-[10px] h-full' src="/catbg3.webp" alt="" />
                        </div>

                        {/* <div
                            className="flex absolute bottom-[0%] sm:bottom-[5%] right-[5%] h-[80px] sm:h-[100px] transition-transform duration-300 ease-out"
                            style={{ transform: getTransform(0.25, 0.82, false) }}
                        >
                            <img className='rounded-[10px]' src="/sliderImage_1.png" alt="" />
                        </div> */}

                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    );
}
