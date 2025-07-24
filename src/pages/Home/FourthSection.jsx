import React from 'react';

export default function FourthSection() {
    return (
        <div>
            <section className="bg-[#fdf7f2] py-16 w-full relative">
                <div className="grid w-[95%] ms-[2.5%] grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-12">
                    {/* Left Content */}
                    <div className='order-2 md:order-1'>
                        <p className="uppercase text-sm text-[var(--smallText-color)] tracking-widest mb-3" data-aos="fade-right"
                            data-aos-duration="1500">
                            Jewels as unique as you
                        </p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-black mb-6" data-aos="fade-right"
                            data-aos-duration="1500">
                            Timeless Commitment, Crafted in Every Sparkle

                        </h1>

                        <p className="text-[#666] mb-8 leading-relaxed text-base sm:text-lg" data-aos="fade-right"
                            data-aos-duration="1500">
                            At CB Imitation, we bring elegance and excellence together to create imitation jewelry that radiates beauty and brilliance. As a trusted manufacturer and seller, we take pride in our craftsmanship, offering jewelry that’s not only stunning but also affordable and long-lasting.

                            Each piece is thoughtfully designed to reflect grace, tradition, and modern charm — perfect for every moment, from everyday wear to life’s most special occasions.                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-[#3a2e2a] text-base sm:text-lg mb-10" data-aos="fade-right"
                            data-aos-duration="1500">
                            <div className="space-y-3">
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> Brilliant Cut Quality</p>
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> High Clarity Rating</p>
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> Elegant Setting Style</p>
                            </div>
                            <div className="space-y-3">
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> Natural Color Grade</p>
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> Precise Carat Weight</p>
                                <p className='flex gap-2 items-center'><img src="/star.svg" className='h-[15px]' alt="" /> Durable Metal Choice</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="relative z-10 px-6 py-3 overflow-hidden rounded-[5px] bg-black text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                            data-aos="fade-right"
                            data-aos-duration="1500"
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


                    </div>

                    {/* Right Content */}
                    <div className="relative order-1 md:order-2"
                        data-aos="fade"
                        data-aos-offset="200"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="border-[6px] border-[#d8a14f] rounded-t-full h-[350px] xs:h-[550px] lg:h-[650px] w-full max-w-[500px] mx-auto overflow-hidden">
                            <img
                                src="/img5.webp"
                                alt="model"
                                className="w-full h-full object-cover rounded-t-full"
                            />
                        </div>
                        <div className="absolute hidden sm:block top-[65%] left-[5%] md:left-[10%] lg:left-[15%] border-4 border-white rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 overflow-hidden shadow-xl bg-white">
                            <img
                                src="/img6.webp"
                                alt="earring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
