import React, { useState } from 'react';
import { Package, Users, Star, ArrowRight, Phone, Mail, ShoppingCart, Truck, Award, Clock } from 'lucide-react';

const BulkOrder = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const benefits = [
        {
            icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Wholesale Prices",
            description: "Get up to 50% off on bulk purchases",
            color: "from-[var(--primary-gold)] to-[var(--secondary-gold)]"
        },
        {
            icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Free Shipping",
            description: "Complimentary delivery on orders above ₹10,000",
            color: "from-[var(--primary-gold)] to-[var(--secondary-gold)]"
        },
        {
            icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Quality Assured",
            description: "Premium quality imitation jewelry guaranteed",
            color: "from-[var(--primary-gold)] to-[var(--secondary-gold)]"
        },
        {
            icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Quick Processing",
            description: "Fast order processing within 24-48 hours",
            color: "from-[var(--primary-gold)] to-[var(--secondary-gold)]"
        }
    ];


    const orderToWhatsapp = () => {
        const phoneNumber = "919724076944";
        console.log("click");

        const message = `📩 New Inquiry!\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📱 *Contact Number:* ${number}\n📦 *Quantity:* ${quantity}\n📝 *Description:* ${description}`;

        const encodedMessage = encodeURIComponent(message);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappURL = isMobile
            ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="min-h-screen bg-[#faf8ec] py-16">

            {/* Hero Section */}
            <div className="w-[90%] mx-auto px-4">
                <div className="text-center mb-6"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className="mb-2">
                        <span className="inline-block px-6 py-2 text-white bg-[var(--primary-gold)] text-sm font-medium tracking-wider uppercase rounded-full">
                            Bulk Orders
                        </span>
                    </div>


                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-[var(--text-dark)]">
                        Bulk Orders Made
                        <span className="block text-[var(--primary-gold)]">
                            Simple & Profitable
                        </span>
                    </h2>

                    <p className="text-[16px] lg:text-[18px] text-[var(--text-light)] max-w-3xl mx-auto mb-8 leading-relaxed">
                        Transform your business with our premium imitation jewelry collection.
                    </p>

                </div>


                <div className="rounded-2xl text-black relative overflow-hidden mb-12 lg:mb-16"
                    data-aos="fade-up"
                    data-aos-duration="1000">

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
                                Ready to Place Your
                                <span className="block text-[var(--primary-gold)]">
                                    Bulk Order?
                                </span>
                            </h3>

                            <p className="text-base sm:text-lg lg:text-xl text-black mb-8 leading-relaxed">
                                Get personalized quotes, exclusive designs, and dedicated support
                                for your business needs.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-black">
                                    <div className="w-2 h-2 bg-[var(--primary-gold)] rounded-full animate-pulse"></div>
                                    <span className="text-sm sm:text-base">Minimum Order: 50 pieces</span>
                                </div>
                                <div className="flex items-center gap-4 text-black">
                                    <div className="w-2 h-2 bg-[var(--primary-gold)] rounded-full animate-pulse"></div>
                                    <span className="text-sm sm:text-base">Custom Packaging Available</span>
                                </div>
                                <div className="flex items-center gap-4 text-black">
                                    <div className="w-2 h-2 bg-[var(--primary-gold)] rounded-full animate-pulse"></div>
                                    <span className="text-sm sm:text-base">Pan India Delivery</span>
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4 mt-[30px] items-center">
                                <button className="luxury-btn px-6 sm:px-8 py-3 sm:py-4 text-black font-semibold rounded-lg shadow-lg text-sm sm:text-base flex items-center gap-2 group">
                                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="relative z-10 transition-colors duration-300">
                                        Get Bulk Quote
                                    </span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] font-semibold rounded-lg hover:bg-[var(--primary-gold)] hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center gap-2">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Call Now: +91 97240 76944
                                </button>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/20 px-2">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={((e) => setName(e.target.value))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={((e) => setEmail(e.target.value))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={number}
                                        onChange={((e) => setNumber(e.target.value))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Expected Quantity"
                                        value={quantity}
                                        onChange={((e) => setQuantity(e.target.value))}
                                        className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base"
                                    />
                                </div>

                                <textarea
                                    placeholder="Tell us about your requirements..."
                                    rows="4"
                                    onChange={((e) => setDescription(e.target.value))}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[var(--primary-gold)] transition-all duration-300 resize-none text-sm sm:text-base"
                                ></textarea>

                                <button
                                    onClick={orderToWhatsapp}
                                    className="w-full luxury-btn text-white font-semibold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 group text-sm sm:text-base"
                                >
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="relative z-10 transition-colors duration-300">
                                        Send Bulk Inquiry
                                    </span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group rounded-xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-[var(--primary-gold)]/20"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay={index * 100}
                        >
                            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>

                            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-dark)] mb-2 group-hover:text-[var(--primary-gold)] transition-all duration-300">
                                {benefit.title}
                            </h3>

                            <p className="text-sm sm:text-base text-[var(--text-light)] group-hover:text-[var(--text-dark)] transition-colors duration-300">
                                {benefit.description}
                            </p>

                            <div className={`mt-4 w-0 h-1 bg-gradient-to-r ${benefit.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}


            </div>
        </div>
    );
};

export default BulkOrder;