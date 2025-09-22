import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigateToContact = () => {
        navigate("/contact")
    }

    return (
        <div>
            <header className='h-[80px] sm:h-[120px] w-[100%] flex items-center justify-center z-50 top-0 bg-[#faf8ec]'>
                <nav className='flex justify-between items-center w-[90%] mx-auto'>
                    <div className="logo">
                        <Link to={"/"}><img className='h-[50px] sm:h-[100px] transition-transform hover:scale-105' src="/cb_logo.png" alt="CB Imitation" /></Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="pagination hidden md:flex items-center gap-[30px]">
                        <Link to={"/"}><p className='hover:text-[var(--primary-gold)] font-semibold cursor-pointer transition-colors duration-300 text-[var(--text-dark)]'>Home</p></Link>
                        <Link to={"/product"}><p className='hover:text-[var(--primary-gold)] font-semibold cursor-pointer transition-colors duration-300 text-[var(--text-dark)]'>Collection</p></Link>
                        <Link to={"/contact"}><p className='hover:text-[var(--primary-gold)] font-semibold cursor-pointer transition-colors duration-300 text-[var(--text-dark)]'>Contact Us</p></Link>
                        <button onClick={navigateToContact} className='luxury-btn px-6 py-3 text-white font-semibold rounded-md shadow-lg'>Get A Quote</button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`md:hidden flex flex-col items-center justify-center w-8 sm:w-10 h-10 sm:h-10 relative z-60 transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`absolute h-0.5 rounded-full bg-[var(--primary-gold)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 w-full' : 'w-[70%] top-3'}`}></span>
                        <span className={`h-0.5 w-full rounded-full bg-[var(--primary-gold)] transition-all duration-300 ${isMenuOpen ? 'scale-x-0' : ''}`}></span>
                        <span className={`absolute h-0.5 rounded-full bg-[var(--primary-gold)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 w-full' : 'w-[70%] bottom-3'}`}></span>
                    </button>

                </nav>

                {/* Mobile Slide Menu */}
                <div className={`fixed top-0 right-0 h-full w-full sm:w-80 mobile-nav shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col p-8 pt-32 gap-6">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-semibold text-[var(--text-dark)]">Menu</h3>
                            <button 
                                onClick={toggleMenu}
                                className="text-[var(--primary-gold)] hover:text-[var(--secondary-gold)] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <Link to={"/"} onClick={toggleMenu}>
                            <div className='flex items-center justify-between p-4 hover:bg-[var(--cream-bg)] rounded-lg transition-all duration-300 border-b border-gray-100'>
                                <p className='text-[var(--text-dark)] font-semibold text-lg'>Home</p>
                                <svg className="w-5 h-5 text-[var(--primary-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                        
                        <Link to={"/product"} onClick={toggleMenu}>
                            <div className='flex items-center justify-between p-4 hover:bg-[var(--cream-bg)] rounded-lg transition-all duration-300 border-b border-gray-100'>
                                <p className='text-[var(--text-dark)] font-semibold text-lg'>Collection</p>
                                <svg className="w-5 h-5 text-[var(--primary-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                        
                        <Link to={"/contact"} onClick={toggleMenu}>
                            <div className='flex items-center justify-between p-4 hover:bg-[var(--cream-bg)] rounded-lg transition-all duration-300 border-b border-gray-100'>
                                <p className='text-[var(--text-dark)] font-semibold text-lg'>Contact Us</p>
                                <svg className="w-5 h-5 text-[var(--primary-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                        
                        <div className="mt-8">
                            <Link to={"/contact"} onClick={toggleMenu}>
                                <button className='luxury-btn w-full px-6 py-4 text-white font-semibold text-lg rounded-lg shadow-lg'>
                                    Get A Quote
                                </button>
                            </Link>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="mt-8 p-4 bg-[var(--cream-bg)] rounded-lg">
                            <h4 className="font-semibold text-[var(--text-dark)] mb-3">Contact Info</h4>
                            <div className="space-y-2 text-sm text-[var(--text-light)]">
                                <p>📍 Mumbai, India</p>
                                <p>📞 +91 98765 43210</p>
                                <p>✉️ info@cbimitation.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
                        onClick={toggleMenu}
                    ></div>
                )}
            </header>
        </div>
    )
}