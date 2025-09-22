import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules'; // Added Autoplay module
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const DetailedProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { state } = useLocation();

    const [quantities, setQuantities] = useState({});

    // Function to increase quantity for a specific product
    const increase = (productId) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1,
        }));
    };

    const decrease = (productId) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) - 1, 1),
        }));
    };

     const orderToWhatsapp = (product, quantity) => {
        const phoneNumber = "919724076944";
        console.log("product", product);
        console.log("quantity", quantity);

        const message = `🛒 New Order!\n\n*Product:* ${product.name}\n*Price:* ${product.salePrice}\n*Quantity:* ${quantity}\n\n📸 Product Image: http://cbimitation.com/${product.defaultImage}`;

        const encodedMessage = encodeURIComponent(message);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    console.log("state", state);

    return (
        <div className='bg-[#faf8ec]'>

            <Header />

            <div className="flex flex-col md:flex-row container mx-auto p-4 gap-6 w-[90%]">
                {/* Left Side: Image Slider */}
                <div className="w-full md:w-1/2">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        autoplay={{
                            delay: 3000, // Slide changes every 3 seconds
                            disableOnInteraction: false, // Continues autoplay even after user interaction
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs, Autoplay]} // Added Autoplay module
                        className="mySwiper2 h-[500px] w-[90%] mb-4"
                    >
                        <SwiperSlide>
                            <img
                                src={state.defaultImage}
                                alt={state.name}
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </SwiperSlide>
                        {/* Hover Image Slide */}
                        <SwiperSlide>
                            <img
                                src={state.hoverImage}
                                alt={`${state.name} Hover`}
                                className="w-full h-full rounded-2xl object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper h-[100px] w-full"
                    >
                        <SwiperSlide>
                            <img
                                src={state.defaultImage}
                                alt={`${state.name} Thumbnail`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <img
                                src={state.hoverImage}
                                alt={`${state.name} Hover Thumbnail`}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Right Side: Product Content */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 className="text-3xl font-bold mb-4">{state.name}</h1>
                    <p className="text-gray-600 mb-4">
                        This is a sample product description. It features a high-quality design with exceptional
                        features and performance. Perfect for all your needs.
                    </p>
                    <div className="mb-4">
                        <span className="text-2xl font-semibold">{state.salePrice}</span>
                        <span className="text-gray-500 line-through ml-2">{state.originalPrice}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <button
                            onClick={() => decrease(state.id)}
                            className="px-3 py-1 bg-[var(--primary-gold)] text-white rounded-full"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold">{quantities[state.id] || 1}</span>
                        <button
                            onClick={() => increase(state.id)}
                            className="px-3 py-1 bg-[var(--primary-gold)] text-white rounded-full"
                        >
                            +
                        </button>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Product Details</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Base Metal : Brass & Copper</li>
                            <li>Plating : Gold Plated</li>
                            <li>Net Weight(g): 10</li>
                            <li>Sizing: Free</li>
                            <li>Manufacturer: CB Imitation</li>
                        </ul>
                    </div>
                    <button
                        className="luxury-btn w-full py-3 text-white font-semibold rounded-lg cursor-pointer shadow-lg text-sm"
                        onClick={() => orderToWhatsapp(state)}
                    >
                        <span className="relative z-10 transition-colors duration-300">
                            Buy Now
                        </span>
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default DetailedProduct;