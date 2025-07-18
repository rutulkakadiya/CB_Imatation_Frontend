import React, { useEffect, useState } from 'react';
import { MapPin, Send, Sun, Moon, Search, X } from 'lucide-react';
import Footer from '../Common Components/Footer';
import Header from '../Common Components/Header';
import "../index.css";

const ProductPage = () => {
    const [theme, setTheme] = useState('light');
    const [manualTheme, setManualTheme] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [materialFilter, setMaterialFilter] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100000]);

    useEffect(() => {
        const updateTheme = () => {
            if (manualTheme === null) {
                const hour = new Date().getHours();
                const newTheme = hour >= 6 && hour < 19 ? 'light' : 'dark';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        updateTheme();
        const interval = setInterval(updateTheme, 60000);
        return () => clearInterval(interval);
    }, [manualTheme]);

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setManualTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Sample product data
    const products = [
        { id: 1, name: "Gold Plated Kundan Necklace", price: 25000, image: "/images/kundan-necklace.jpg", material: "Gold Plated" },
        { id: 2, name: "Temple Jewelry Set", price: 35000, image: "/images/temple-set.jpg", material: "Gold Plated" },
        { id: 3, name: "CZ Earring Pair", price: 15000, image: "/images/cz-earrings.jpg", material: "Silver Plated" },
        { id: 4, name: "Polki Bridal Set", price: 45000, image: "/images/polki-set.jpg", material: "Rose Gold Plated" },
        { id: 5, name: "Silver Kundan Bangle", price: 20000, image: "/images/kundan-bangle.jpg", material: "Silver Plated" },
        { id: 6, name: "Rose Gold Anklet", price: 30000, image: "/images/rose-anklet.jpg", material: "Rose Gold Plated" },
    ];

    // Filter products based on search and filters
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMaterial = materialFilter ? product.material === materialFilter : true;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearch && matchesMaterial && matchesPrice;
    });

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleInquiry = () => {
        alert(`Inquiry sent for ${selectedProduct?.name || 'selected product'}!`);
    };

    const handleClearFilters = () => {
        setSearchQuery('');
        setMaterialFilter('');
        setPriceRange([0, 100000]);
    };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>
            <Header handleThemeToggle={handleThemeToggle} theme={theme} />

            {/* Hero Section */}
            <div className="text-center py-20 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg1-color)]/20 to-transparent pointer-events-none"></div>
                <div className="flex items-center justify-center space-x-3 animate-[fadeInUp_0.6s_ease-out]">
                    <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                    <p className="text-base uppercase tracking-widest text-accent font-medium subheading">
                        OUR COLLECTION
                    </p>
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
                    <div className="w-6 h-1 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 royal-heading" style={{ fontFamily: 'var(--font-primary)' }}>
                    Exquisite <span className="text-accent">Imitation Jewelry</span>
                </h1>
                <p className="text-xl max-w-3xl mx-auto text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                    Discover our handcrafted collection, blending traditional craftsmanship with modern elegance.
                </p>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-7xl mx-auto px-4 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className="form-input w-full p-4 pr-12 rounded-2xl"
                            style={{ fontFamily: 'var(--font-secondary)' }}
                        />
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-2/3 justify-end">
                        <div className="flex-1">
                            <label className="block text-base font-medium mb-2 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                Material
                            </label>
                            <select
                                value={materialFilter}
                                onChange={(e) => setMaterialFilter(e.target.value)}
                                className="form-input w-full p-4 rounded-2xl"
                                style={{ fontFamily: 'var(--font-secondary)' }}
                            >
                                <option value="">All Materials</option>
                                <option value="Gold Plated">Gold Plated</option>
                                <option value="Silver Plated">Silver Plated</option>
                                <option value="Rose Gold Plated">Rose Gold Plated</option>
                            </select>
                        </div>
                        <div className="flex-1">
                            <label className="block text-base font-medium mb-2 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                Price Range
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                    placeholder="Min"
                                    className="form-input w-1/2 p-4 rounded-2xl"
                                    style={{ fontFamily: 'var(--font-secondary)' }}
                                />
                                <span className="text-primary">-</span>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    placeholder="Max"
                                    className="form-input w-1/2 p-4 rounded-2xl"
                                    style={{ fontFamily: 'var(--font-secondary)' }}
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleClearFilters}
                            className="btn-primary inline-flex items-center space-x-2 px-4 py-2 self-end"
                            style={{ background: 'var(--gold-gradient)' }}
                        >
                            <X size={18} />
                            <span>Clear Filters</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <h2 className="text-3xl font-bold mb-10 royal-heading" style={{ fontFamily: 'var(--font-primary)' }}>
                    Featured Products
                </h2>
                {filteredProducts.length === 0 ? (
                    <p className="text-lg text-primary text-center" style={{ fontFamily: 'var(--font-secondary)' }}>
                        No products found. Try adjusting your filters.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="product-card p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-[var(--box-shadow)]"
                                style={{ backgroundColor: 'var(--bg1-color)', boxShadow: 'var(--box-shadow)' }}
                                onClick={() => handleProductClick(product)}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded-2xl mb-4"
                                />
                                <h3 className="text-xl font-semibold text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-semi-bold)' }}>
                                    {product.name}
                                </h3>
                                <p className="text-lg text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                    ₹{product.price.toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Product Detail Section */}
                {selectedProduct && (
                    <div className="mt-20">
                        <div className="contact-card p-10 rounded-3xl" style={{ backgroundColor: 'var(--bg1-color)', boxShadow: 'var(--box-shadow)' }}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-96 object-cover rounded-2xl"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 royal-heading" style={{ fontFamily: 'var(--font-primary)' }}>
                                        {selectedProduct.name}
                                    </h2>
                                    <p className="text-xl mb-4 text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                        ₹{selectedProduct.price.toLocaleString()}
                                    </p>
                                    <p className="text-lg mb-6 text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                        Material: {selectedProduct.material}
                                    </p>
                                    <div className="mb-6">
                                        <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                            Select Material
                                        </label>
                                        <select className="form-input w-full p-4 rounded-2xl">
                                            <option value="gold">Gold Plated</option>
                                            <option value="silver">Silver Plated</option>
                                            <option value="rose">Rose Gold Plated</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={handleInquiry}
                                        className="btn-primary inline-flex items-center space-x-3"
                                        style={{ background: 'var(--gold-gradient)', transition: 'background 0.3s ease' }}
                                    >
                                        <span>Inquire Now</span>
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ProductPage;