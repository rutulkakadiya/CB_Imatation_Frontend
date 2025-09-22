import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Whatsapp from '../../Common Components/ProductWhatsApp';

const LatestCollection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: '1 Gram Gold Plated Traditional Hanging Stud Earrings',
            originalPrice: '₹ 199.00',
            salePrice: '₹ 99.00',
            defaultImage: '/Product_Images/Product_1_1.webp',
            hoverImage: '/Product_Images/Product_1_2.webp',
        },
        {
            id: 2,
            name: 'Geometric Spark Gold Studs',
            originalPrice: '₹ 199.00',
            salePrice: '₹ 99.00',
            defaultImage: '/Product_Images/Product_2_1.jpg',
            hoverImage: '/Product_Images/Product_2_2.webp',
        },
        {
            id: 3,
            name: 'Floral Swirl Drop Earrings',
            originalPrice: '₹ 199.00',
            salePrice: '₹ 99.00',
            defaultImage: '/Product_Images/Product_3_1.webp',
            hoverImage: '/Product_Images/Product_3_2.webp',
        },
        {
            id: 4,
            name: 'Festive Bloom Gold Drops',
            originalPrice: '₹ 199.00',
            salePrice: '₹ 99.00',
            defaultImage: '/Product_Images/Product_4_1.webp',
            hoverImage: '/Product_Images/Product_4_2.webp',
        },
        {
            id: 5,
            name: 'Festive Bloom Gold Drops',
            originalPrice: '₹ 199.00',
            salePrice: '₹ 99.00',
            defaultImage: '/Product_Images/Product_4_1.webp',
            hoverImage: '/Product_Images/Product_4_2.webp',
        },
    ];



    const navigate = useNavigate('');
    const handleProduct = (product) => {
        navigate("/detailedProduct", { state: product })
    }

    return (
        <div className="min-h-screen bg-[#faf8ec] py-16 sm:py-20 lg:py-24 px-4" id="newArrival">
            {/* Decorative Elements */}
            <div className="fixed top-10 right-10 text-4xl sm:text-6xl text-[var(--primary-gold)]/20 rotate-12 pointer-events-none">
                ✦
            </div>
            <div className="fixed bottom-20 left-10 text-3xl sm:text-4xl text-[var(--primary-gold)]/20 -rotate-12 pointer-events-none">
                ◆
            </div>

            <div className="w-[90%] mx-auto">
                <div className="text-center">
                    <div className="text-center mb-6 sm:mb-10 px-6" data-aos="fade-up" data-aos-duration="1500">
                        <div className="mb-2">
                            <span className="inline-block px-6 py-2 text-white bg-[var(--primary-gold)] text-sm font-medium tracking-wider uppercase rounded-full">
                                Exclusive
                            </span>
                        </div>
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-black leading-tight">
                            <span className="heading-text">New </span>
                            <span className="mt-2">
                                <span className="heading-text text-[var(--primary-gold)] animate-pulse">
                                    Arrivals
                                </span>
                            </span>
                        </h1>
                        <p className="text-black text-[16px] sm:text-lg sm:max-w-2xl mx-auto">
                            Discover our latest collection of exquisite imitation jewelry, crafted with precision and designed for elegance.
                        </p>
                    </div>
                </div>

                {/* Products Slider */}
                <div className="relative">
                    {/* Navigation Buttons in Top-Right Box */}
                    <div className="flex justify-end gap-[30px] w-full xs:w-[80%] sm:w-full ms-0 xs:ms-[10%] sm:ms-0">
                        <div className="swiper-button-prev z-10 bg-[var(--primary-gold)] text-white rounded-full shadow-lg hover:bg-[var(--secondary-gold)] transition-colors duration-300">

                        </div>
                        <div className="swiper-button-next z-10 bg-[var(--primary-gold)] text-white rounded-full shadow-lg hover:bg-[var(--secondary-gold)] transition-colors duration-300">

                        </div>
                    </div>

                    {/* Slider */}
                    <div className="mt-[10px]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination',
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 28 },
                                1024: { slidesPerView: 3, spaceBetween: 36 },
                                1236: { slidesPerView: 4, spaceBetween: 40 },
                            }}
                            className="mySwiper"
                        >
                            {products.map((product, index) => (
                                <SwiperSlide key={product.id}>
                                    <div
                                        className="group cursor-pointer transform transition-all duration-500 product-card w-full xs:w-[80%] ms-0 xs:ms-[10%] sm:ms-0 sm:w-full h-full flex flex-col"
                                        onMouseEnter={() => setHoveredProduct(product.id)}
                                        onMouseLeave={() => setHoveredProduct(null)}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 100}
                                    >
                                        {/* Product Image */}
                                        <div className="relative mb-4 overflow-hidden bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                                            <div className="h-[280px] xs:h-[350px] lg:h-[350px] relative">
                                                <img
                                                    src={product.defaultImage}
                                                    alt={product.name}
                                                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                                                        }`}
                                                />
                                                <img
                                                    src={product.hoverImage}
                                                    alt={`${product.name} alternate view`}
                                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                                                        }`}
                                                />
                                            </div>
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-col flex-grow justify-between p-4 min-h-[180px]">
                                            {/* Title */}
                                            <h3
                                                className="text-sm sm:text-base lg:text-lg font-semibold text-[var(--text-dark)] mb-3 group-hover:text-[var(--primary-gold)] transition-colors duration-300 line-clamp-1 min-h-[24px] sm:min-h-[28px] truncate-ellipsis"
                                            >
                                                {product.name}
                                            </h3>

                                            {/* Price */}
                                            <div className="flex items-center space-x-3 mb-4">
                                                <span className="text-lg sm:text-xl font-bold text-[var(--text-dark)]">
                                                    {product.salePrice}
                                                </span>
                                                <span className="text-[var(--text-light)] line-through text-sm">
                                                    {product.originalPrice}
                                                </span>
                                            </div>

                                            {/* Add to Cart Button */}
                                            <div className="mt-auto">
                                                <button
                                                    className="luxury-btn w-full py-3 text-white font-semibold rounded-lg shadow-lg text-sm"
                                                    onClick={() => handleProduct(product)}
                                                >
                                                    <span className="relative z-10 transition-colors duration-300">
                                                        Add to Cart
                                                    </span>
                                                </button>
                                                <div
                                                    className={`h-0.5 bg-[var(--primary-gold)] mt-4 transition-all duration-500 ${hoveredProduct === product.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Pagination Dots */}
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12 w-full xs:w-[80%] sm:w-full ms-0 xs:ms-[10%] sm:ms-0" data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to={"/product"}>
                            <button className="luxury-btn cursor-pointer px-10 py-4 text-white font-semibold rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <span className="relative z-10">
                                    View All Products
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[var(--primary-gold)]/5 to-transparent rounded-full" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[var(--secondary-gold)]/5 to-transparent rounded-full" />
            </div>
        </div>
    );
};

export default LatestCollection;