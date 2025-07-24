import React, { useEffect, useState } from 'react';
import { MapPin, Send, Sun, Moon, Search, X, Heart, Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import Header from '../Common Components/Header';
import Whatsapp from '../Common Components/WhatsApp';

const ProductPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [materialFilter, setMaterialFilter] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [sortBy, setSortBy] = useState('name');


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



    const handleProductClick = (product) => {
        setSelectedProduct(product);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const handleClearFilters = () => {
        setSearchQuery('');
        setMaterialFilter('');
        setPriceRange([0, 1000]);
        setSortBy('name');
    };

    const getBadgeColor = (badge) => {
        const colors = {
            'Best Seller': 'bg-gradient-to-r from-[#d4a373] to-[#ab7f5c]',
            'New': 'bg-gradient-to-r from-[#4a7043] to-[#6b8e23]',
            'Popular': 'bg-gradient-to-r from-[#ab7f5c] to-[#d4a373]',
            'Premium': 'bg-gradient-to-r from-[#3c2f2f] to-[#5c4033]',
            'Trending': 'bg-gradient-to-r from-[#4a7043] to-[#ab7f5c]',
            'Limited': 'bg-gradient-to-r from-[#8b3a3a] to-[#ab7f5c]'
        };
        return colors[badge] || 'bg-gray-500';
    };

    return (
        <div className="min-h-screen bg-[#fefaf6] text-[#3c2f2f] font-sans">
            {/* Hero Section */}
            <Header />
            <Whatsapp/>
            <div className="text-center py-16 px-4">
                <div className="flex items-center justify-center space-x-3 mb-6 mt-[100px]">
                    <div className="w-6 h-1 bg-[#ab7f5c] rounded-full"></div>
                    <p className="text-base uppercase tracking-widest font-bold font-serif">
                        EXQUISITE COLLECTION
                    </p>
                    <div className="w-6 h-1 bg-[#ab7f5c] rounded-full"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-[#3c2f2f]">
                    Luxury Imitation Jewelry
                </h1>
                <p className="text-lg max-w-3xl mx-auto text-[#212121] leading-relaxed mb-8">
                    Discover our handcrafted collection where traditional artistry meets contemporary elegance. Each piece tells a story of timeless beauty.
                </p>
                <button className="bg-[#ab7f5c] text-white px-8 py-3 font-medium hover:bg-[#d4a373] transition-all duration-300 rounded-md shadow-md">
                    Explore Collection
                </button>
            </div>

            <div className="w-[95%] mx-auto pb-16">
                {/* Search and Filter Section */}
                <div className="py-10 px-4">
                    <div className="bg-[#f4e7d6] rounded-xl shadow-lg p-6 mb-12 border border-[#ab7f5c]/30 mx-auto">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            {/* Search Bar */}
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search our beautiful collection..."
                                    className="w-full p-3 pr-10 rounded-md border border-[#ab7f5c]/50 focus:border-[#ab7f5c] focus:ring-2 focus:ring-[#d4a373]/30 focus:outline-none bg-[#fefaf6] text-[#212121] placeholder-[#3c2f2f]/50 shadow-sm transition-all duration-300"
                                />
                                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#ab7f5c]" />
                            </div>

                            {/* Filters Row */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <select
                                    value={materialFilter}
                                    onChange={(e) => setMaterialFilter(e.target.value)}
                                    className="p-3 rounded-md border border-[#ab7f5c]/50 focus:border-[#ab7f5c] focus:ring-2 focus:ring-[#d4a373]/30 focus:outline-none bg-[#fefaf6] text-[#212121] min-w-[140px] shadow-sm transition-all duration-300"
                                >
                                    <option value="">All Materials</option>
                                    <option value="Gold Plated">Gold Plated</option>
                                    <option value="Silver Plated">Silver Plated</option>
                                    <option value="Rose Gold Plated">Rose Gold</option>
                                </select>

                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="p-3 rounded-md border border-[#ab7f5c]/50 focus:border-[#ab7f5c] focus:ring-2 focus:ring-[#d4a373]/30 focus:outline-none bg-[#fefaf6] text-[#212121] min-w-[140px] shadow-sm transition-all duration-300"
                                >
                                    <option value="name">Sort by Name</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) =>
                                            setPriceRange([Math.max(0, Number(e.target.value)), priceRange[1]])
                                        }
                                        placeholder="Min"
                                        className="w-20 p-3 rounded-md border border-[#ab7f5c]/50 focus:border-[#ab7f5c] focus:ring-2 focus:ring-[#d4a373]/30 focus:outline-none bg-[#fefaf6] text-[#212121] shadow-sm transition-all duration-300"
                                        min="0"
                                    />
                                    <span className="text-[#3c2f2f] font-medium">to</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) =>
                                            setPriceRange([
                                                priceRange[0],
                                                Math.max(priceRange[0], Number(e.target.value)),
                                            ])
                                        }
                                        placeholder="Max"
                                        className="w-20 p-3 rounded-md border border-[#ab7f5c]/50 focus:border-[#ab7f5c] focus:ring-2 focus:ring-[#d4a373]/30 focus:outline-none bg-[#fefaf6] text-[#212121] shadow-sm transition-all duration-300"
                                        min={priceRange[0]}
                                    />
                                </div>

                                <button
                                    onClick={handleClearFilters}
                                    className="bg-[#8b3a3a] text-white px-6 py-3 rounded-md hover:bg-[#ab7f5c] transition-all duration-300 font-medium flex items-center gap-2 shadow-md"
                                >
                                    <X size={18} />
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-[#3c2f2f] font-serif">
                        Featured Products ({products.length})
                    </h2>
                </div>

                {/* Product Grid */}
                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">💍</div>
                        <p className="text-2xl text-[#3c2f2f] mb-4 font-serif">No products found</p>
                        <p className="text-lg text-[#212121]">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                )}

            </div>
        </div>
    );
};

export default ProductPage;