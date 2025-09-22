import React, { useState } from 'react';

const MobileProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '✨' },
    { id: 'earrings', name: 'Earrings', icon: '💎' },
    { id: 'necklace', name: 'Necklace', icon: '👑' },
    { id: 'bangles', name: 'Bangles', icon: '💫' },
    { id: 'rings', name: 'Rings', icon: '💍' }
  ];

  const products = [
    {
      id: 1,
      name: "Golden Hoop Earrings",
      price: "₹899",
      originalPrice: "₹1,799",
      image: "/Product_Images/Product_1_1.webp",
      category: "earrings",
      isNew: true,
      isTrending: false
    },
    {
      id: 2,
      name: "Diamond Pendant Set",
      price: "₹1,499",
      originalPrice: "₹2,999",
      image: "/Product_Images/Product_2_1.jpg",
      category: "necklace",
      isNew: false,
      isTrending: true
    },
    {
      id: 3,
      name: "Traditional Bangles",
      price: "₹1,299",
      originalPrice: "₹2,599",
      image: "/Product_Images/Product_3_1.webp",
      category: "bangles",
      isNew: true,
      isTrending: false
    },
    {
      id: 4,
      name: "Royal Ring Collection",
      price: "₹699",
      originalPrice: "₹1,399",
      image: "/Product_Images/Product_4_1.webp",
      category: "rings",
      isNew: false,
      isTrending: true
    },
    {
      id: 5,
      name: "Pearl Drop Earrings",
      price: "₹799",
      originalPrice: "₹1,599",
      image: "/Product_Images/Product_5_1.webp",
      category: "earrings",
      isNew: true,
      isTrending: false
    },
    {
      id: 6,
      name: "Gold Chain Necklace",
      price: "₹1,199",
      originalPrice: "₹2,399",
      image: "/Product_Images/Product_6_1.webp",
      category: "necklace",
      isNew: false,
      isTrending: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-dark)] mb-2">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-light)]">
            Explore our curated collection of fine jewelry
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#ab7f5c] text-white shadow-lg'
                    : 'bg-gray-100 text-[var(--text-dark)] hover:bg-gray-200'
                }`}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Mobile First */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden product-card">
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </div>
                  )}
                  {product.isTrending && (
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      HOT
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm p-1 rounded-full text-[#ab7f5c] hover:bg-[#ab7f5c] hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Discount Badge */}
                <div className="absolute bottom-2 left-2 bg-[#ab7f5c] text-white px-2 py-1 rounded-full text-xs font-semibold">
                  50% OFF
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4">
                <h3 className="font-medium text-[var(--text-dark)] text-xs sm:text-sm mb-2 line-clamp-2 group-hover:text-[#ab7f5c] transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-sm sm:text-base font-bold text-[var(--text-dark)]">
                      {product.price}
                    </span>
                    <span className="text-xs text-[var(--text-light)] line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#ab7f5c] text-white py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#8b6b4a] transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="mt-8 text-center lg:hidden">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-[#ab7f5c] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
          <p className="text-xs text-[var(--text-light)] mt-2">
            Swipe to explore more products
          </p>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border-2 border-[#ab7f5c] text-[#ab7f5c] font-semibold rounded-lg hover:bg-[#ab7f5c] hover:text-white transition-all duration-300 text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileProductShowcase;

