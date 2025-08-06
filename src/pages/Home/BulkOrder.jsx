import React, { useState } from 'react';
import { Package, Users, Star, ArrowRight, Phone, Mail, ShoppingCart, Truck, Award, Clock } from 'lucide-react';

const BulkOrder = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const benefits = [
        {
            icon: <Package className="w-8 h-8" />,
            title: "Wholesale Prices",
            description: "Get up to 60% off on bulk purchases",
            color: "from-[var(--smallText-color)] to-[var(--smallText-color)]"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Free Shipping",
            description: "Complimentary delivery on orders above ₹10,000",
            color: "from-[var(--smallText-color)] to-[var(--smallText-color)]"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality Assured",
            description: "Premium quality imitation jewelry guaranteed",
            color: "from-[var(--smallText-color)] to-[var(--smallText-color)]"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Quick Processing",
            description: "Fast order processing within 24-48 hours",
            color: "from-[var(--smallText-color)] to-[var(--smallText-color)]"
        }
    ];

    const pricingTiers = [
        { quantity: "50-100 pieces", discount: "20% OFF", bgColor: "bg-[var(--smallText-color)]/30" },
        { quantity: "100-500 pieces", discount: "35% OFF", bgColor: "bg-[var(--smallText-color)]/30" },
        { quantity: "500+ pieces", discount: "60% OFF", bgColor: "bg-[var(--smallText-color)]/30" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
            {/* Hero Section */}
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--smallText-color)] to-[var(--smallText-color)] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
                        <Star className="w-4 h-4" />
                        Special Bulk Offers Available
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent">
                        Bulk Orders Made
                        <span className="block bg-gradient-to-r from-[var(--smallText-color)] to-[var(--smallText-color)] bg-clip-text text-transparent">
                            Simple & Profitable
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Transform your business with our premium imitation jewelry collection.
                        Perfect for retailers, boutiques, and wedding planners.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group bg-gradient-to-r from-[var(--smallText-color)] to-[var(--smallText-color)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5" />
                            Get Bulk Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="group bg-white text-black border-2 border-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call Now: +91 98765 43210
                        </button>
                    </div>
                </div>

                {/* Benefits Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--smallText-color)] group-hover:to-[var(--smallText-color)] group-hover:bg-clip-text transition-all duration-300">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                {benefit.description}
                            </p>

                            <div className={`mt-4 w-0 h-1 bg-gradient-to-r ${benefit.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                        </div>
                    ))}
                </div>


                {/* Contact Form Section */}
                <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--smallText-color)]/10 to-[var(--smallText-color)]/10"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                Ready to Place Your
                                <span className="block bg-gradient-to-r from-[var(--smallText-color)] to-[var(--smallText-color)] bg-clip-text text-transparent">
                                    Bulk Order?
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Get personalized quotes, exclusive designs, and dedicated support
                                for your business needs.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse"></div>
                                    <span>Minimum Order: 50 pieces</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse"></div>
                                    <span>Custom Packaging Available</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse"></div>
                                    <span>Pan India Delivery</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--smallText-color)] transition-all duration-300"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--smallText-color)] transition-all duration-300"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--smallText-color)] transition-all duration-300"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Expected Quantity"
                                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--smallText-color)] transition-all duration-300"
                                    />
                                </div>

                                <textarea
                                    placeholder="Tell us about your requirements..."
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--smallText-color)] transition-all duration-300 resize-none"
                                ></textarea>

                                <button
                                    onClick={() => alert('Bulk inquiry submitted! We will contact you soon.')}
                                    className="w-full bg-gradient-to-r from-[var(--smallText-color)] to-[var(--smallText-color)] text-white font-bold py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group"
                                >
                                    <Mail className="w-5 h-5" />
                                    Send Bulk Inquiry
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-12 border border-yellow-100">
                    <Users className="w-16 h-16 mx-auto mb-6 text-yellow-600" />
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Join 1000+ Happy Business Partners
                    </h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        From small boutiques to large retailers, businesses trust us for their bulk jewelry needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                            View Bulk Catalog
                        </button>
                        <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                            WhatsApp: +91 98765 43210
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Bulk Pricing Tiers
                        </h2>
                        <p className="text-xl text-gray-600">
                            The more you order, the more you save!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <div
                                key={index}
                                className={`${tier.bgColor} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-yellow-400`}
                            >
                                <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[var(--smallText-color)] group-hover:to-[var(--smallText-color)] group-hover:bg-clip-text transition-all duration-300">
                                    {tier.discount}
                                </div>
                                <div className="text-lg text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                    {tier.quantity}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BulkOrder;