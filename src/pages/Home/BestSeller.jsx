import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BestSellerSection() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const products = [
        {
            id: 1,
            name: "Elegant Gold Earrings",
            price: "₹149",
            originalPrice: "₹249",
            image: "/Product_Images/bestSeller1.png",
            category: "Earrings",
            isNew: true
        },
        {
            id: 2,
            name: "Earring and Pendant Set",
            price: "₹199",
            originalPrice: "₹299",
            image: "/Product_Images/bestSeller2.png",
            category: "Bracelets",
            isNew: false
        },
        {
            id: 3,
            name: "Earrings",
            price: "₹149",
            originalPrice: "₹249",
            image: "/Product_Images/bestSeller3.png",
            category: "Earrings",
            isNew: true
        },
        {
            id: 4,
            name: "Earrings",
            price: "₹149",
            originalPrice: "₹249",
            image: "/Product_Images/bestSeller4.png",
            category: "Pendants",
            isNew: false
        },
        {
            id: 5,
            name: "Earring and Pendant Set",
            price: "₹199",
            originalPrice: "₹299",
            image: "/Product_Images/bestSeller5.png",
            category: "Earrings",
            isNew: true
        },
        {
            id: 6,
            name: "Pendant Set",
            price: "₹199",
            originalPrice: "₹299",
            image: "/Product_Images/bestSeller6.png",
            category: "Rings",
            isNew: false
        }
    ];

    return (
        <div>
            <section className="bg-[#faf8ec] flex justify-center py-8 sm:py-16 w-full relative overflow-hidden">

                <div className="w-[90%]">
                    {/* Header */}
                    <div className="text-center">
                        <div className="text-center mb-6 sm:mb-10 px-6" data-aos="fade-up" data-aos-duration="1500">

                            <div className="mb-2">
                                <span className="inline-block px-6 py-2 text-white bg-[var(--primary-gold)] text-sm font-medium tracking-wider uppercase rounded-full">
                                    Jewellery
                                </span>
                            </div>


                            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-black leading-tight">
                                <span className="heading-text">Best </span>
                                <span className="mt-2">
                                    <span className="heading-text text-[var(--primary-gold)] animate-pulse">
                                        Sellers
                                    </span>
                                </span>
                            </h1>
                            <p className="text-black text-[16px] sm:text-lg sm:max-w-2xl mx-auto">
                                Find the perfect piece for every occasion.
                            </p>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group relative rounded-[16px] sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                                onMouseEnter={() => setHoveredCard(product.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Product Image */}
                                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#faf8ec] to-white">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${hoveredCard === product.id ? 'opacity-100' : 'opacity-0'}`}>

                                        {/* Product Name - Bottom Left */}
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="text-white text-lg font-bold drop-shadow-lg">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-white text-sm font-semibold drop-shadow-md">
                                                    {product.price}
                                                </span>
                                                <span className="text-white/70 text-xs line-through drop-shadow-md">
                                                    {product.originalPrice}
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--primary-gold)]/10 via-transparent to-[var(--primary-gold)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 lg:mt-16">
                        <Link to={"/product"}>
                            <button className="luxury-btn cursor-pointer px-10 py-4 text-white font-semibold rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <span className="relative z-10">
                                    View All Products
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
}