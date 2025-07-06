import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="text-white py-16" style={{ backgroundColor: 'var(--bg1-color)' }} data-section="footer">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                              
                                    <img className='h-[100px]' src="/logo.png" alt="" />

                            </div>
                            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text1-color)' }}>
                                Redefining elegance with timeless jewelry that celebrates life's most cherished moments.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="transition-all duration-300" style={{ color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Facebook</a>
                                <a href="#" className="transition-all duration-300" style={{ color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Instagram</a>
                                <a href="#" className="transition-all duration-300" style={{ color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Pinterest</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6" style={{ color: '#CC9543', fontFamily: 'Bodoni Moda', fontWeight: '400' }}>Shop</h4>
                            <ul className="space-y-3" style={{ color: 'var(--text1-color)' }}>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">New Arrivals</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Best Sellers</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Collections</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Gift Cards</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6" style={{ color: '#CC9543', fontFamily: 'Bodoni Moda', fontWeight: '400' }}>Support</h4>
                            <ul className="space-y-3" style={{ color: 'var(--text1-color)' }}>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Size Guide</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Returns</a></li>
                                <li><a href="#" className="hover:text-[var(--text-color)] transition-all duration-300 underline-grow">Care Guide</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Contact</h4>
                            <ul className="space-y-4" style={{ color: 'var(--text1-color)' }}>
                                <li className="flex items-center space-x-3">
                                    <Phone className="w-4 h-4" style={{ color: '#CC9543' }} />
                                    <span>+91 91234 56789</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="w-4 h-4" style={{ color: '#CC9543' }} />
                                    <span>support@cbimitation.com</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <MapPin className="w-4 h-4" style={{ color: '#CC9543' }} />
                                    <span>Jaipur & Mumbai, India</span>
                                </li>
                            </ul>

                            <div className="mt-6">
                                <div className="text-sm mb-2">Follow us for inspiration</div>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                                        <span className="text-black text-sm font-bold">f</span>
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                                        <span className="text-black text-sm font-bold">ig</span>
                                    </a>
                                    <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                                        <span className="text-black text-sm font-bold">pin</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-sm" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>© 2025 CB Imitation is Proudly Powered by <span style={{ color: 'var(--text-color)' }}>EasyWay IT Solutions</span></div>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                <a href="#" className="text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Privacy Policy</a>
                                <a href="#" className="text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Terms of Service</a>
                                <a href="#" className="text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text1-color)', hover: { color: 'var(--text-color)' } }}>Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
