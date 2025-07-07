import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send, Sun, Moon } from 'lucide-react';
import Footer from '../Common Components/Footer';
import Header from '../Common Components/Header';
import "../index.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 1500);
    };

    const [theme, setTheme] = useState('light');
    const [manualTheme, setManualTheme] = useState(null);

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

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'var(--bg-color)' }}>


            <Header handleThemeToggle={handleThemeToggle} theme={theme} />

            {/* Header Section */}
            <div className="text-center py-20 px-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg1-color)]/20 to-transparent pointer-events-none"></div>
                <div className="flex items-center justify-center space-x-3 animate-[fadeInUp_0.6s_ease-out]">
                    <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                    <p className="text-base uppercase tracking-widest text-accent font-medium subheading">
                        GET IN TOUCH
                    </p>
                    <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
                    <div className="w-6 h-1 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-8 royal-heading">
                    Let's <span className="text-accent">Connect</span>
                </h1>
                <p className="text-xl max-w-3xl mx-auto text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                    Ready to transform your vision into reality? Let's create something extraordinary together.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 pb-20 pt-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 royal-heading">
                            We're Here to Help
                        </h2>
                        <p className="text-xl mb-12 text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                            Connect with us through your preferred channel.
                        </p>

                        <div className="space-y-6">
                            {/* Location */}
                            <div className="leftHelp flex items-start space-x-5 p-6 rounded-3xl">
                                <div className="w-14 h-14 icon-container rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-semi-bold)' }}>
                                        Location
                                    </h3>
                                    <p className="text-lg text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                        CB Imitation, Pedak Main Road,<br />
                                        Dist. Rajkot, Gujarat.
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="leftHelp flex items-start space-x-5 p-6 rounded-3xl">
                                <div className="w-14 h-14 icon-container rounded-full flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-semi-bold)' }}>
                                        Phone
                                    </h3>
                                    <p className="text-lg text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                        +91 97240 76944
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="leftHelp flex items-start space-x-5 p-6 rounded-3xl">
                                <div className="w-14 h-14 icon-container rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-semi-bold)' }}>
                                        Email
                                    </h3>
                                    <p className="text-lg text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                        cbimitation@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="leftHelp flex items-start space-x-5 p-6 rounded-3xl">
                                <div className="w-14 h-14 icon-container rounded-full flex items-center justify-center flex-shrink-0">
                                    <Instagram className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-semi-bold)' }}>
                                        Follow Us On
                                    </h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white no-underline">
                                            <Facebook size={24} />
                                        </a>
                                        <a href="#" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white no-underline">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="#" className="social-icon w-12 h-12 rounded-full flex items-center justify-center text-white no-underline">
                                            <Youtube size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div>
                        <h2 className="text-3xl font-bold mb-10 royal-heading">
                            Find Us on Map
                        </h2>
                        <p className="text-xl mb-12 text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                            Visit us at our prime location in Rajkot.
                        </p>

                        <div className="map-container mt-3 p-8 h-[582px] flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-base mt-3 text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                                    Click to explore our location
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-24 mb-20">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 animate-[fadeInUp_0.6s_ease-out]">
                            <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
                            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                            <p className="text-base uppercase tracking-widest text-accent font-medium subheading">
                                SEND MESSAGE
                            </p>
                            <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
                            <div className="w-6 h-1 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold mb-8 royal-heading">
                            Let's Start a <span className="text-accent">Conversation</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto text-primary" style={{ fontFamily: 'var(--font-secondary)' }}>
                            Share your ideas, and our team will respond within 24 hours.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="contact-card p-10">
                            {submitMessage && (
                                <div className="success-message p-6 rounded-lg mb-8 text-center font-medium text-lg" style={{ fontFamily: 'var(--font-secondary)' }}>
                                    {submitMessage}
                                </div>
                            )}

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="form-input w-full p-4 rounded-2xl"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="form-input w-full p-4 rounded-2xl"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Phone */}
                                    <div>
                                        <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            className="form-input w-full p-4 rounded-2xl"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="form-input w-full p-4 pr-6 rounded-2xl"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="custom">Custom Jewelry</option>
                                            <option value="repair">Jewelry Repair</option>
                                            <option value="appointment">Schedule Appointment</option>
                                            <option value="wholesale">Wholesale Orders</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-base font-medium mb-3 text-secondary" style={{ fontFamily: 'var(--font-secondary)', fontWeight: 'var(--font-medium)' }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project or inquiry..."
                                        className="form-input w-full p-4 rounded-2xl resize-vertical min-h-40"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="btn-primary inline-flex items-center space-x-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactForm;