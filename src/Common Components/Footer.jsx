import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-black bg-[#f4e7d6] py-16" data-section="footer">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <img className='h-[100px]' src="/Group 1 black.png" alt="" />
                            </div>
                            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text1-color)' }}>
                                Redefining elegance with timeless jewelry that celebrates life's most cherished moments.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="transition-all duration-300" style={{ color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Facebook</a>
                                <a href="#" className="transition-all duration-300" style={{ color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Instagram</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-[var(--smallText-color)]">Shop</h4>
                            <ul className="space-y-3" style={{ color: 'var(--text1-color)' }}>
                                <li><a href="/new-arrivals" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">New Arrivals</a></li>
                                <li><a href="/products" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Products</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-[var(--smallText-color)]">Support</h4>
                            <ul className="space-y-3" style={{ color: 'var(--text1-color)' }}>
                                <li><a href="/contact-us" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Contact Us</a></li>
                                <li><a href="/size-guide" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Size Guide</a></li>
                                <li><a href="/shipping-info" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Shipping Info</a></li>
                                <li><a href="/returns" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Returns</a></li>
                                <li><a href="/care-guide" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Care Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 text-[var(--smallText-color)]">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <Phone className="w-4 h-4 text-[var(--smallText-color)]" />
                                    <span>+91 91234 56789</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="w-4 h-4 text-[var(--smallText-color)]" />
                                    <span>support@cbimitation.com</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <MapPin className="w-4 h-4 text-[var(--smallText-color)]" />
                                    <span>Jaipur & Mumbai, India</span>
                                </li>
                            </ul>

                     
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-sm">© 2025 CB Imitation is Developed by <b>EasyWay IT Solutions</b></div>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-sm transition-all duration-300 underline-grow">Privacy Policy</a>
                                <a href="#" className="text-sm transition-all duration-300 underline-grow">Terms of Service</a>
                                <a href="#" className="text-sm transition-all duration-300 underline-grow">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}