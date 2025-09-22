import React from 'react';

export default function FourthSection() {
    return (
        <div>
            <section className="bg-[#faf8ec] py-16 sm:py-20 lg:py-24 w-full relative overflow-hidden">
                <div className="w-[90%] mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        {/* Left Content */}
                        <div className='order-2 lg:order-1'>
                            <p className="uppercase text-xs sm:text-sm text-[var(--primary-gold)] tracking-widest mb-4 font-medium"
                                data-aos="fade-right"
                                data-aos-duration="1500">
                                Jewels that Shine with Grace
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[var(--text-dark)] mb-6 font-bold"
                                data-aos="fade-right"
                                data-aos-duration="1500">
                                Crafted to Celebrate Every Moment
                            </h2>

                            <p className="hidden sm:block text-black mb-8 leading-relaxed text-sm sm:text-base lg:text-lg"
                                data-aos="fade-right"
                                data-aos-duration="1500">
                                At CB Imitation, we blend artistry and tradition to create imitation jewelry that sparkles with elegance.
                                Every piece is carefully crafted to capture the richness of fine jewelry while remaining affordable, durable,
                                and timeless.
                                <br /><br />
                                Our designs are more than accessories – they are symbols of style, grace, and unforgettable charm. Whether it's for
                                daily wear or a special celebration, our jewelry ensures you shine with confidence.
                            </p>

                            <div className="hidden sm:grid grid-cols-2 gap-4 sm:gap-6 text-[var(--text-dark)] text-sm sm:text-base lg:text-lg mb-10"
                                data-aos="fade-right"
                                data-aos-duration="1500">
                                <div className="space-y-3">
                                    <div className='group relative overflow-hidden p-4 bg-gradient-to-br from-white to-[#faf8ec] rounded-2xl shadow-lg border-l-4 border-[var(--primary-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary-gold)]/5 rounded-full -translate-y-8 translate-x-8"></div>
                                        <div className='flex gap-3 items-center relative z-10'>
                                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-gold)] to-[var(--primary-gold)]/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <img src="/star.svg" className='h-[15px] sm:h-[18px] text-white' alt="" />
                                            </div>
                                            <span className="font-medium group-hover:text-[var(--primary-gold)] transition-colors duration-300">Brilliant Craftsmanship & Detailing</span>
                                        </div>
                                    </div>
                                    <div className='group relative overflow-hidden p-4 bg-gradient-to-br from-white to-[#faf8ec] rounded-2xl shadow-lg border-l-4 border-[var(--primary-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary-gold)]/5 rounded-full -translate-y-8 translate-x-8"></div>
                                        <div className='flex gap-3 items-center relative z-10'>
                                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-gold)] to-[var(--primary-gold)]/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <img src="/star.svg" className='h-[15px] sm:h-[18px] text-white' alt="" />
                                            </div>
                                            <span className="font-medium group-hover:text-[var(--primary-gold)] transition-colors duration-300">Elegant Designs with Lasting Shine</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className='group relative overflow-hidden p-4 bg-gradient-to-br from-white to-[#faf8ec] rounded-2xl shadow-lg border-l-4 border-[var(--primary-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary-gold)]/5 rounded-full -translate-y-8 translate-x-8"></div>
                                        <div className='flex gap-3 items-center relative z-10'>
                                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-gold)] to-[var(--primary-gold)]/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <img src="/star.svg" className='h-[15px] sm:h-[18px] text-white' alt="" />
                                            </div>
                                            <span className="font-medium group-hover:text-[var(--primary-gold)] transition-colors duration-300">Premium Quality & Durability</span>
                                        </div>
                                    </div>
                                    <div className='group relative overflow-hidden p-4 bg-gradient-to-br from-white to-[#faf8ec] rounded-2xl shadow-lg border-l-4 border-[var(--primary-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary-gold)]/5 rounded-full -translate-y-8 translate-x-8"></div>
                                        <div className='flex gap-3 items-center relative z-10'>
                                            <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-gold)] to-[var(--primary-gold)]/80 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                                <img src="/star.svg" className='h-[15px] sm:h-[18px] text-white' alt="" />
                                            </div>
                                            <span className="font-medium group-hover:text-[var(--primary-gold)] transition-colors duration-300">Affordable Luxury for Every Occasion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4"
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <button
                                    type="submit"
                                    className="luxury-btn px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold rounded-lg shadow-lg text-sm sm:text-base"
                                >
                                    <span className="relative z-10 transition-colors duration-300">
                                        Explore Collection
                                    </span>
                                </button>

                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="relative order-1 lg:order-2"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            <div className="rounded-t-full w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[500px] mx-auto overflow-hidden shadow-2xl aspect-[4/5]">
                                <img
                                    src="/1.png"
                                    alt="Elegant Model"
                                    className="w-full h-full object-cover rounded-t-full"
                                />
                            </div>

                            {/* Floating Product Card */}
                            <div className="absolute hidden sm:block top-[65%] left-[5%] lg:left-[-10%] xl:left-[5%] border-4 border-white rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden shadow-xl bg-white">
                                <img
                                    src="/img6.webp"
                                    alt="Elegant Earring"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4 w-16 h-16 bg-[var(--primary-gold)]/10 rounded-full flex items-center justify-center">
                                <img src="/star.svg" className="w-8 h-8 text-[var(--primary-gold)]" alt="" />
                            </div>

                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-[var(--primary-gold)]/10 rounded-full flex items-center justify-center">
                                <img src="/star.svg" className="w-6 h-6 text-[var(--primary-gold)]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}