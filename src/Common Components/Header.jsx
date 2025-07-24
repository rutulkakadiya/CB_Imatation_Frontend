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
            <header className='h-[120px] w-[100%] absolute flex items-center justify-center z-50 top-0 bg-transparent'>
                <nav className='flex justify-between items-center w-[95%]'>
                    <div className="logo">
                        <Link to={"/"}><img className='h-[100px]' src="/cb_logo.png" alt="" /></Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="pagination hidden md:flex items-center gap-[30px]">
                        <Link to={"/"}><p className='hover:text-[var(--smallText-color)] font-semibold cursor-pointer'>Home</p></Link>
                        <Link to={"/product"}><p className='hover:text-[var(--smallText-color)] font-semibold cursor-pointer'>Collection</p></Link>
                        <Link to={"/contact"}><p className='hover:text-[var(--smallText-color)] font-semibold cursor-pointer'>Contact Us</p></Link>
                        <button onClick={navigateToContact} className='px-5 py-3 text-white bg-[var(--smallText-color)] hover:bg-black'>Get A Quote</button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-60 transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span className={`absolute h-1 rounded bg-[var(--smallText-color)] transition-all duration-500 ${isMenuOpen ? 'rotate-45 w-full' : 'w-[70%] top-2'}`}></span>
                        <span className={`h-1 w-full rounded bg-[var(--smallText-color)] transition-all duration-500 ${isMenuOpen ? 'scale-x-0' : ''}`}></span>
                        <span className={`absolute h-1 rounded bg-[var(--smallText-color)] transition-all duration-500 ${isMenuOpen ? '-rotate-45 w-full' : 'w-[70%] bottom-2'}`}></span>
                    </button>

                </nav>

                {/* Mobile Slide Menu */}
                <div className={`fixed top-0 right-0 h-full w-80 bg-[#fffefc] shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="flex flex-col p-8 pt-32 gap-8">
                        <Link to={"/"}><p className='hover:text-[var(--smallText-color)] font-semibold text-xl cursor-pointer border-b border-gray-200 pb-4'>Home</p></Link>
                        <Link to={"/product"}><p className='hover:text-[var(--smallText-color)] font-semibold text-xl cursor-pointer border-b border-gray-200 pb-4'>Collection</p></Link>
                        <Link to={"/contact"}><p className='hover:text-[var(--smallText-color)] font-semibold text-xl cursor-pointer border-b border-gray-200 pb-4'>Contact Us</p></Link>
                        <Link to={"/contact"}><button className='px-6 py-4 text-white bg-[var(--smallText-color)] hover:bg-black text-lg mt-4'>Get A Quote</button></Link>
                    </div>
                </div>

                {/* Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}
            </header>
        </div>
    )
}