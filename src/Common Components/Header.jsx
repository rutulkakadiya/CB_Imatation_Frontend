import { Menu, Search, ShoppingCart, User, Sun, Moon } from 'lucide-react';
import React, { useState } from 'react';

const Header = ({ handleThemeToggle, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                <div className="logo-container">
                    <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                        <img className='h-[80px]' src="/logo.png" alt="" />
                    </div>
                </div>
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">Shop</a></li>
                        <li><a href="/product" className="nav-link">Collections</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="/contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
                    {/* <ShoppingCart className="w-5 h-5" style={{ color: 'var(--text-color)' }} /> */}
                    <User className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
                    {/* ---------------------------------------------------------------------------------------------- */}
                    {/* switch */}

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={handleThemeToggle}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[var(--primary-color)] transition-all duration-300"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5 flex items-center justify-center">
                            {theme === 'dark' ? (
                                <Moon className="w-3 h-3" style={{ color: 'var(--black)' }} />
                            ) : (
                                <Sun className="w-3 h-3" style={{ color: 'var(--text1-color)' }} />
                            )}
                        </div>
                    </label>
                    {/* --------------------------------------------------------------------------------------------------- */}
                    {/* button */}

                    {/* <button
                        onClick={handleThemeToggle}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-2 hover:border-[var(--text-color)] hover:shadow-lg"
                        style={{color: 'var(--text1-color)' }}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-4 h-4" />
                        ) : (
                            <Moon className="w-4 h-4" />
                        )}
                    </button> */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                        <Menu className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
