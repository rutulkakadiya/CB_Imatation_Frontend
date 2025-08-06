import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import Footer from '../Common Components/Footer';
import Header from '../Common Components/Header';
import "../index.css";
import 'aos/dist/aos.css'; // Import AOS styles
import Whatsapp from '../Common Components/WhatsApp';
import ScrollToTop2 from '../Common Components/ScrollToTop2';

const ContactForm = ({ theme, handleThemeToggle }) => {
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

    return (
        <div className="min-h-screen relative overflow-hidden">
            <Header />
            <ScrollToTop2 />
            <Whatsapp />
            {/* Header Section */}
            <div className="text-center py-20 px-4 relative mt-[100px]">

                {/* Stars */}
                <img src="/star.svg" className="absolute top-[10%] left-[20%] h-[30px] animate-pulse opacity-30" alt="" />
                <img src="/star.svg" className="absolute top-[15%] right-[25%] h-[15px] animate-pulse opacity-30" alt="" />
                <img src="/star.svg" className="absolute bottom-[20%] left-[30%] h-[30px] animate-pulse opacity-30" alt="" />
                <img src="/star.svg" className="absolute bottom-[15%] right-[15%] h-[15px] animate-pulse opacity-30" alt="" />

                {/* Section Title */}
                <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3" data-aos="fade-up" data-aos-duration="1000">
                    <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[var(--smallText-color)] rounded-full"></div>
                    <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse"></div>
                    <p className="text-sm sm:text-base md:text-lg uppercase tracking-widest text-[var(--smallText-color)] font-medium">
                        GET IN TOUCH
                    </p>
                    <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse delay-75"></div>
                    <div className="w-6 h-1 bg-gradient-to-l from-transparent to-[var(--smallText-color)] rounded-full"></div>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000">
                    Let's <span className="text-[var(--smallText-color)]">Connect</span>
                </h1>

                {/* Paragraph */}
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-black" data-aos="fade-up" data-aos-duration="1000">
                    Ready to transform your vision into reality? Let's create something extraordinary together.
                </p>
            </div>


            {/* Main Content */}
            <div className="w-[95%] mx-auto px-4 pb-20 pt-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-[var(--smallText-color)]" data-aos="fade-right" data-aos-duration="1500">
                            We're Here to Help
                        </h2>
                        <p className="text-[16px] sm:text-[20px] mb-12 text-black" data-aos="fade-right" data-aos-duration="1500">
                            Connect with us through your preferred channel.
                        </p>

                        <div className="space-y-6">
                            {/* Location */}
                            <div className="flex items-start space-x-5 p-6 rounded-3xl bg-[#fcf7f1]" data-aos="fade-right" data-aos-duration="1500">
                                <div className="h-10 sm:w-14 w-10 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-[var(--smallText-color)]">
                                    <MapPin className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-black">
                                        Location
                                    </h3>
                                    <p className="text-[16px] sm:text-[18px] text-black">
                                        CB Imitation, Pedak Main Road,<br />
                                        Dist. Rajkot, Gujarat.
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start space-x-5 p-6 rounded-3xl bg-[#fcf7f1]" data-aos="fade-right" data-aos-duration="1500">
                                <div className="h-10 sm:w-14 w-10 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-[var(--smallText-color)]">
                                    <Phone className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-black">
                                        Phone
                                    </h3>
                                    <p className="text-[16px] sm:text-[18px] text-black">
                                        +91 97240 76944
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-5 p-6 rounded-3xl bg-[#fcf7f1]" data-aos="fade-right" data-aos-duration="1500">
                                <div className="h-10 sm:w-14 w-10 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 bg-[var(--smallText-color)]">
                                    <Mail className="w-4 h-4 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-3 text-black">
                                        Email
                                    </h3>
                                    <p className="text-[16px] sm:text-[18px] text-black">
                                        cbimitation@gmail.com
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div className="relative">
                        <h2 className="text-3xl sm:text-5xl font-bold mb-5 text-[var(--smallText-color)]" data-aos="fade-left" data-aos-duration="1500">
                            Find Us on Map
                        </h2>
                        <p className="text-[16px] sm:text-[20px] mb-12 text-black" data-aos="fade-left" data-aos-duration="1500">
                            Visit us at our prime location in Rajkot.
                        </p>

                        <div className="relative mt-3 p-8 h-[430px] rounded-[30px] bg-gray-300 shadow-xl overflow-hidden" data-aos="fade-left" data-aos-duration="1500">
                            <img className="absolute bottom-0 h-full" src="/leaf_bg.png" alt="" />

                            {/* Embedded Google Map */}
                            <iframe
                                title="CB Imitation Location"
                                src="https://www.google.com/maps?q=CB+Imitation,+Pedak+Main+Road,+Rajkot,+Gujarat&output=embed"
                                className="absolute inset-0 w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Contact Form Section */}
                <div className="mt-24 mb-20">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center space-x-3" data-aos="fade-up" data-aos-duration="1500">
                            <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[var(--smallText-color)] rounded-full"></div>
                            <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse"></div>
                            <p className="text-base uppercase tracking-widest text-[var(--smallText-color)] font-medium">
                                SEND MESSAGE
                            </p>
                            <div className="w-2 h-2 bg-[var(--smallText-color)] rounded-full animate-pulse delay-75"></div>
                            <div className="w-6 h-1 bg-gradient-to-l from-transparent to-[var(--smallText-color)] rounded-full"></div>
                        </div>

                        <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-8" data-aos="fade-up" data-aos-duration="1500">
                            Let's Start a <span className="text-[var(--smallText-color)]">Conversation</span>
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto text-black" style={{ fontFamily: 'var(--font-primary)' }} data-aos="fade-up" data-aos-duration="1500">
                            Share your ideas, and our team will respond within 24 hours.
                        </p>
                    </div>

                    <div className="w-[95%] mx-auto">
                        <div className="p-5 sm:p-10 rounded-3xl bg-[#fcf7f1] shadow-md" data-aos="fade-up" data-aos-duration="1000">
                            {submitMessage && (
                                <div className="p-6 rounded-lg mb-8 text-center font-medium text-lg text-black">
                                    {submitMessage}
                                </div>
                            )}

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-base font-semibold mb-3 text-[var(--smallText-color)]">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Enter your full name"
                                            className="w-full p-4 rounded-2xl bg-white border-2 border-gray-50 text-black"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-base font-semibold mb-3 text-[var(--smallText-color)]">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            className="w-full p-4 rounded-2xl bg-white border-2 border-gray-50 text-black"
                                            style={{ fontFamily: 'var(--font-primary)' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Phone */}
                                    <div>
                                        <label className="block text-base font-semibold mb-3 text-[var(--smallText-color)]">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Enter your phone number"
                                            className="w-full p-4 rounded-2xl bg-white border-2 border-gray-50 text-black"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-base font-semibold mb-3 text-[var(--smallText-color)]">
                                            Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full p-4 rounded-2xl bg-white border-2 border-gray-50 text-black"
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
                                    <label className="block text-base font-semibold mb-3 text-[var(--smallText-color)]">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your project or inquiry..."
                                        className="w-full p-4 rounded-2xl bg-white border-2 border-gray-50 text-black resize-vertical min-h-40"
                                        style={{ fontFamily: 'var(--font-primary)' }}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="relative z-10 px-6 py-3 overflow-hidden rounded-[5px] bg-[var(--smallText-color)] text-white font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--smallText-color)]">
                                                    Send Message
                                                </span>
                                                <svg
                                                    className="w-8 h-8 p-2 border border-white rounded-full transition-all duration-300 rotate-45 group-hover:rotate-90 group-hover:bg-white group-hover:border-transparent group-hover:text-black"
                                                    viewBox="0 0 16 19"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                                        className="fill-white group-hover:fill-[var(--smallText-color)]"
                                                    ></path>
                                                </svg>
                                                <span className="absolute inset-0 before:content-[''] before:absolute before:w-full before:aspect-square before:rounded-full before:bg-white before:-left-full before:transition-all before:duration-700 group-hover:before:left-0 group-hover:before:scale-150 before:-z-10"></span>
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