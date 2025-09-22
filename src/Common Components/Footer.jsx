import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-[var(--text-dark)] bg-gradient-to-br from-[var(--cream-bg)] to-[#F5F5DC] py-6" data-section="footer">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-2 mb-6">
                                <img className='h-[80px] sm:h-[100px]' src="/cb_logo.png" alt="CB Imitation" />
                            </div>
                            <p className="mb-6 leading-relaxed text-sm sm:text-base text-[var(--text-light)]">
                                Redefining elegance with timeless jewelry that celebrates life's most cherished moments. Crafted with precision and designed for beauty.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex space-x-4 mb-6">
                                <a href="#" className="w-10 h-10 bg-[var(--primary-gold)]/10 hover:bg-[var(--primary-gold)] text-[var(--primary-gold)] hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[var(--primary-gold)]/10 hover:bg-[var(--primary-gold)] text-[var(--primary-gold)] hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-[var(--primary-gold)]/10 hover:bg-[var(--primary-gold)] text-[var(--primary-gold)] hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold mb-6 text-[var(--primary-gold)] text-lg">Shop</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#newArrival" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        New Arrivals
                                    </a>
                                </li>
                                <li>
                                    <a href="/product" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Best Sellers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Sale Items
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Pages */}
                        <div>
                            <h4 className="font-bold mb-6 text-[var(--primary-gold)] text-lg">Pages</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/product" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Collection
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300 text-sm sm:text-base block py-1">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-bold mb-6 text-[var(--primary-gold)] text-lg">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <Phone className="w-4 h-4 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[var(--text-dark)] font-medium text-sm sm:text-base">Phone</p>
                                        <p className="text-[var(--text-light)] text-sm sm:text-base">+91 97240 76944</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Mail className="w-4 h-4 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[var(--text-dark)] font-medium text-sm sm:text-base">Email</p>
                                        <p className="text-[var(--text-light)] text-sm sm:text-base">cbimitation@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <MapPin className="w-4 h-4 text-[var(--primary-gold)] mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-[var(--text-dark)] font-medium text-sm sm:text-base">Address</p>
                                        <p className="text-[var(--text-light)] text-sm sm:text-base">Pedak Main Road, Rajkot, Gujarat.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-[var(--primary-gold)]/20 mt-12 pt-8">
                        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                            <div className="text-sm text-[var(--text-light)] text-center lg:text-left">
                                © 2025 CB Imitation is Developed by <b className="text-[var(--primary-gold)]">EasyWay IT Solutions</b>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                                <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300">Privacy Policy</a>
                                <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300">Terms of Service</a>
                                <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-gold)] transition-all duration-300">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}