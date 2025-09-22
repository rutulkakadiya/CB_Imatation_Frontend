import React from 'react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Gold Earrings",
      price: "₹1,299",
      originalPrice: "₹2,599",
      discount: "50% OFF",
      image: "/Product_Images/Product_1_1.webp",
      category: "Earrings",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Diamond Necklace Set",
      price: "₹2,499",
      originalPrice: "₹4,999",
      discount: "50% OFF",
      image: "/Product_Images/Product_2_1.jpg",
      category: "Necklace",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Traditional Bangles",
      price: "₹1,899",
      originalPrice: "₹3,799",
      discount: "50% OFF",
      image: "/Product_Images/Product_3_1.webp",
      category: "Bangles",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "Royal Ring Collection",
      price: "₹999",
      originalPrice: "₹1,999",
      discount: "50% OFF",
      image: "/Product_Images/Product_4_1.webp",
      category: "Rings",
      rating: 4.6,
      reviews: 203
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--cream-bg)] to-[#F5F5DC]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ab7f5c] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3">
            Featured Collection
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
            Our Most Popular Pieces
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-light)] max-w-2xl mx-auto">
            Discover our handpicked selection of the most loved jewelry pieces, crafted with precision and designed for elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden product-card">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 bg-[#ab7f5c] text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {product.discount}
                </div>

                {/* Quick View Button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-[#ab7f5c] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#ab7f5c] hover:text-white transition-colors duration-300">
                    Quick View
                  </button>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-[var(--text-dark)]">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <h3 className="font-semibold text-[var(--text-dark)] text-sm sm:text-base mb-2 group-hover:text-[#ab7f5c] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[var(--text-light)] ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg sm:text-xl font-bold text-[var(--text-dark)]">
                      {product.price}
                    </span>
                    <span className="text-sm text-[var(--text-light)] line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#ab7f5c] text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-[#8b6b4a] transition-colors duration-300">
                    Add to Cart
                  </button>
                  <button className="p-2 border border-[#ab7f5c] text-[#ab7f5c] rounded-lg hover:bg-[#ab7f5c] hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="luxury-btn px-8 py-3 text-white font-semibold rounded-lg shadow-lg text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

