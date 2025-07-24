import React, { useState } from 'react';

const Collection = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Gold Bangle',
            originalPrice: '24.00$',
            salePrice: '23.00$',
            defaultImage: '/Product_Images/Product_1_1.webp',
            hoverImage: '/Product_Images/Product_1_2.webp'
        },
        {
            id: 2,
            name: 'Adjustable Gold Chain',
            originalPrice: '22.00$',
            salePrice: '20.00$',
            defaultImage: '/Product_Images/Product_2_1.webp',
            hoverImage: '/Product_Images/Product_2_2.webp'
        },
        {
            id: 3,
            name: 'Couple Ring',
            originalPrice: '19.00$',
            salePrice: '17.00$',
            defaultImage: '/Product_Images/Product_3_1.webp',
            hoverImage: '/Product_Images/Product_3_2.webp'
        },
        {
            id: 4,
            name: 'Premium Necklace',
            originalPrice: '45.00$',
            salePrice: '39.00$',
            defaultImage: '/Product_Images/Product_4_1.webp',
            hoverImage: '/Product_Images/Product_4_2.webp'
        }
    ];

    return (
        <div className="min-h-screen bg-[#fef9f3] py-16 px-6" id='newArrival'>
            {/* Decorative Elements */}
            <div className="fixed top-10 right-10 text-6xl text-amber-200/30 rotate-12 pointer-events-none">
                ✦
            </div>
            <div className="fixed bottom-20 left-10 text-4xl text-orange-200/40 -rotate-12 pointer-events-none">
                ◆
            </div>

            <div className="w-[95%] mx-auto">
                {/* Header Section */}
                <div className="text-left mb-20">
                    <p className="text-sm text-[var(--smallText-color)] tracking-[0.3em] uppercase font-light mb-4">
                        Fresh Arrivals, Just For You
                    </p>
                    <h1 className="text-5xl md:text-6xl font-light text-gray-800 tracking-tight leading-tight">
                        New Arrivals, Endless Choices
                    </h1>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-3"
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Product Image Container */}
                            <div className="relative mb-8 overflow-hidden bg-gradient-to-br from-white to-amber-50 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                                <div className="h-[350px] relative">
                                    {/* Default Image */}
                                    <img
                                        src={product.defaultImage}
                                        alt={product.name}
                                        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id
                                            ? 'opacity-0 scale-110'
                                            : 'opacity-100 scale-100'
                                            }`}
                                    />

                                    {/* Hover Image */}
                                    <img
                                        src={product.hoverImage}
                                        alt={`${product.name} alternate view`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${hoveredProduct === product.id
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-110'
                                            }`}
                                    />
                                </div>

                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Floating Add to Cart Button */}
                                <div className={`absolute bottom-4 left-1/2 w-[95%] transform -translate-x-1/2 transition-all duration-500 ${hoveredProduct === product.id
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                                    }`}>
                                    <button className="bg-[#ab7f5c] backdrop-blur-sm text-white w-[100%] py-2 rounded-[5px] text-sm font-medium shadow-lg hover:bg-white hover:border border-[#ab7f5c] hover:text-[#ab7f5c] hover:shadow-xl transition-all duration-300">
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="text-center">
                                <h3 className="text-xl font-light text-black mb-3 group-hover:text-[var(--smallText-color)] transition-colors duration-300">
                                    {product.name}
                                </h3>

                                <div className="flex items-center justify-center space-x-3">
                                    <span className="text-xl font-medium text-gray-800">
                                        {product.salePrice}
                                    </span>
                                    <span className="text-gray-400 line-through text-sm">
                                        {product.originalPrice}
                                    </span>

                                </div>

                                <button className="bg-[#ab7f5c] block sm:hidden mt-[15px] backdrop-blur-sm text-white w-[100%] py-2 rounded-[5px] text-sm font-medium shadow-lg hover:bg-white hover:border border-[#ab7f5c] hover:text-[#ab7f5c] hover:shadow-xl transition-all duration-300">
                                    Buy Now
                                </button>

                                {/* Hover Underline Effect */}
                                <div className={`h-px bg-[var(--smallText-color)] mt-4 transition-all duration-500 ${hoveredProduct === product.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                                    }`} />
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* Background Pattern */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-amber-100/20 to-transparent rounded-full" />
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-orange-100/20 to-transparent rounded-full" />
            </div>
        </div>
    );
};

export default Collection;