import React, { useState } from 'react';
import { Wrench, Cog, Target, Award, Factory, Puzzle, Package, ArrowRight, Sparkles, Diamond, Circle, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const categories = [
        {
            id: 'earrings',
            icon: <Sparkles className="w-8 h-8" />,
            title: 'Earrings',
            marqueeText:
                'Earrings • Earrings • Earrings • Earrings • Earrings • Earrings',
            gradient: 'from-[var(--primary-gold)] to-[var(--accent-gold)]',
            bgImage: '/Product_Images/bestSeller3.png',
            link: "/",
        },
        {
            id: 'pendants',
            icon: <Diamond className="w-8 h-8" />,
            title: 'Pendants',
            marqueeText:
                'Pendants • Pendants • Pendants • Pendants • Pendants • Pendants',
            gradient: 'from-[var(--primary-gold)] to-[var(--accent-gold)]',
            bgImage: '/Product_Images/bestSeller2.png',
            link: "/",
        },
        {
            id: 'bangles',
            icon: <Circle className="w-8 h-8" />,
            title: 'Bangles',
            marqueeText:
                'Bangles • Bangles • Inserts, Bangles',
            gradient: 'from-[var(--primary-gold)] to-[var(--accent-gold)]',
            bgImage: '/catbg3.webp',
            link: "/",
        },
        {
            id: 'necklace',
            icon: <Gem className="w-8 h-8" />,
            title: 'Necklace',
            marqueeText:
                'Necklace • Necklace • Necklace',
            gradient: 'from-[var(--primary-gold)] to-[var(--accent-gold)]',
            bgImage: '/Product_Images/category4.png',
            link: "/",
        },
    ];

    return (
        <section className=" bg-[#faf8ec] py-10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#156f7e]/10 to-[#f3846c]/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#f3846c]/8 to-[#156f7e]/8 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    className="absolute top-1/4 left-1/5 w-2 h-2 bg-[var(--primary-gold)] rounded-full animate-bounce opacity-40"
                    style={{ animationDelay: '1s' }}
                ></div>
                <div
                    className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-[var(--primary-gold)] rounded-full animate-bounce opacity-50"
                    style={{ animationDelay: '3s' }}
                ></div>
                <div
                    className="absolute top-1/2 right-1/6 w-1 h-1 bg-[var(--primary-gold)] rounded-full animate-ping opacity-60"
                    style={{ animationDelay: '4s' }}
                ></div>
            </div>

            <div className="relative z-10 w-full">
                {/* Section Header */}
                <div className="text-center mb-16 px-6" data-aos="fade-up" data-aos-duration="1500">

                    <div className="mb-2">
                        <span className="inline-block px-6 py-2 text-white bg-[var(--primary-gold)] text-sm font-medium tracking-wider uppercase rounded-full">
                            Selection
                        </span>
                    </div>

                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        <span className="heading-text">Timeless Jewelry </span>
                        <span className="mt-2">
                            <span className="heading-text text-[var(--primary-gold)] animate-pulse">
                                Selections
                            </span>
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Find the perfect piece for every occasion.
                    </p>
                </div>

                {/* Categories Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[20px] h-auto lg:h-[500px] mx-4" data-aos="fade" data-aos-duration="1500"
                >
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`relative transition-all duration-700 ease-in-out cursor-pointer group overflow-hidden rounded-2xl
        ${hoveredCategory === category.id ? 'lg:flex-[3] shadow-2xl shadow-[#156f7e]/30' : hoveredCategory === null ? 'lg:flex-1' : 'lg:flex-[2]'}`}
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                        >
                            {/* Background with Image */}
                            <div
                                className={`
          absolute inset-0 transition-all duration-700 bg-cover bg-center
          ${hoveredCategory === category.id ? "opacity-100 scale-105" : "opacity-100"}
          lg:group-hover:scale-105
        `}
                                style={{
                                    backgroundImage: `url(${category.bgImage})`,
                                }}
                            ></div>

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 transition-all duration-700 ${hoveredCategory === category.id ? 'bg-[var(--primary-gold)]/10' : 'bg-[var(--primary-gold)]/10 lg:bg-[var(--primary-gold)]/30'}`}
                            ></div>

                            {/* Content */}
                            <div className="relative z-10 h-[300px] sm:h-[400px] md:h-full flex sm:flex-col justify-between items-end sm:items-baseline py-2 sm:py-8">
                                {/* Top Content */}
                                <div className="justify-end items-center text-center space-y-4 pe-[30px] w-full hidden sm:flex">
                                    <div
                                        className={`w-16 h-16 rounded-2xl group-hover:rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-125 bg-gradient-to-br ${category.gradient} group-hover:shadow-2xl
              ${hoveredCategory === category.id ? 'shadow-xl' : ''}`}
                                    >
                                        <div className="text-white block group-hover:hidden group-hover:scale-110 transition-transform duration-300">
                                            {category.icon}
                                        </div>
                                        <Link to={category.link}>
                                            <div className="text-white hidden group-hover:block transition-transform duration-300">
                                                <ArrowRight />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                {/* Bottom Indicator */}
                                <div className="flex justify-center">
                                    <div className="flex flex-col items-center w-full">
                                        {/* Marquee Text */}
                                        <div className="transition-all hidden md:block duration-700 opacity-100 w-full">
                                            <div className="relative py-4">
                                                <div className="marquee-container">
                                                    <div
                                                        className={`
          marquee-content text-gray-300 font-bold 
          text-[32px] sm:text-[40px] lg:text-[70px] whitespace-nowrap text-center
          ${hoveredCategory === category.id
                                                                ? 'marquee-scroll opacity-100'
                                                                : 'opacity-100 sm:opacity-100 lg:opacity-30 lg:marquee-scroll'}
        `}>
                                                        {category.marqueeText} • {category.marqueeText}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="transition-all block md:hidden duration-700 opacity-100 w-full">
                                            <div className="relative py-2 sm:py-4">
                                                <div className="marquee-container">
                                                    <div
                                                        className="marquee-scroll marquee-content text-white font-bold 
          text-[32px] sm:text-[40px] lg:text-[70px] whitespace-nowrap text-center"
                                                    >
                                                        {category.marqueeText} • {category.marqueeText}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* Title */}
                                        <div className="text-left w-full ps-[15px]">
                                            <h3
                                                className={`heading-text font-black text-white transition-all duration-500
                  ${hoveredCategory === category.id ? 'text-lg sm:text-xl lg:text-2xl' : 'text-[18px] lg:text-lg'}`}
                                            >
                                                {category.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: inline-block;
          white-space: nowrap;
        }

        .marquee-scroll {
          animation: marqueeMove 15s linear infinite;
        }

        @keyframes marqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    );
};

export default Category;