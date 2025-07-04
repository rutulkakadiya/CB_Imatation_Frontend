import { Heart, Search, ShoppingCart, User, Menu } from 'lucide-react'
import React, { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    return (
        <div>
            <header className=" bg-[#FAF6EF] h-[100px] backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 hover:shadow-xl animate-gentleFade">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3 group">
                        
                            <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                                <img className='h-[90px]' src="/logo.png" alt="" />
                            </div>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {['Home', 'Categories', 'Collections', 'About', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-gray-700 hover:text-black font-medium transition-colors relative nav-link royal-nav-item"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-3">
                                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                                    <Search className="w-5 h-5 text-gray-600" />
                                </button>
                                {/* <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 relative">
                                    <Heart
                                        className="w-5 h-5"
                                        fill={likedProducts.length > 0 ? '#CC9543' : 'none'}
                                        stroke="#CC9543"
                                    />
                                    {likedProducts.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>
                                            {likedProducts.length}
                                        </span>
                                    )}
                                </button> */}
                                {/* <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 relative">
                                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    {likedProducts.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>
                                            {likedProducts.length}
                                        </span>
                                    )}                </button> */}
                                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                                    <User className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>

                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t animate-gentleFade">
                        <div className="p-4 space-y-3">
                            <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2" >Home</a>
                            <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2" >Categories</a>
                            <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2" >Collections</a>
                            <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2" >About</a>
                            <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2" >Contact</a>
                            <div className="flex space-x-4 pt-2">
                                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                                    <Search className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 relative">
                                    <Heart
                                        className="w-5 h-5"
                                        fill={likedProducts.length > 0 ? '#CC9543' : 'none'}
                                        stroke="#CC9543"
                                    />
                                    {likedProducts.length > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>
                                            {likedProducts.length}
                                        </span>
                                    )}
                                </button>                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 relative">
                                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                                    <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>3</span>
                                </button>
                                <button className="p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                                    <User className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
