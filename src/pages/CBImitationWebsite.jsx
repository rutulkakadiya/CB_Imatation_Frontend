import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, ArrowRight, Phone, Mail, MapPin, Search, ShoppingCart, User, Heart, Eye, Gift } from 'lucide-react';

// Import all your original images
import SliderImage1 from '../assets/slider-1.jpg';
import SliderImage2 from '../assets/slider-2.jpg';
import SliderImage3 from '../assets/slider-3.jpg';
import Cat1 from '../assets/new.jpg';
import Cat2 from '../assets/ring.jpg';
import Cat3 from '../assets/nackless.jpg';
import Cat4 from '../assets/earring.jpg';
import Cat5 from '../assets/bangle.jpg';
import Cat6 from '../assets/bright.jpg';
import P1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import ml1 from '../assets/ml1.jpg';
import ml2 from '../assets/ml2.jpg';
import ml3 from '../assets/ml3.jpg';
import ml4 from '../assets/ml4.jpg';
import ml5 from '../assets/ml5.jpg';
import ml6 from '../assets/ml6.jpg';
import nd1 from '../assets/nd1.jpg';
import nd2 from '../assets/nd2.jpg';
import nd3 from '../assets/nd3.jpg';
import nd4 from '../assets/nd4.jpg';

const ImitationWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const heroSlides = [
    { 
      image: SliderImage1,
      title: "Timeless Necklace Elegance",
      subtitle: "Discover the beauty of imitation craftsmanship"
    },
    { 
      image: SliderImage2,
      title: "Glamorous Earring Collection",
      subtitle: "Shine bright with affordable luxury"
    },
    { 
      image: SliderImage3,
      title: "Bridal Imitation Sets",
      subtitle: "Perfect for your special day"
    }
  ];

  const categories = [
    { name: "New Arrivals", count: "200+ Designs", image: Cat1 },
    { name: "Rings", count: "100+ Designs", image: Cat2 },
    { name: "Necklaces", count: "150+ Designs", image: Cat3 },
    { name: "Earrings", count: "120+ Designs", image: Cat4 },
    { name: "Bangles", count: "80+ Designs", image: Cat5 },
    { name: "Bridal Sets", count: "60+ Designs", image: Cat6 }
  ];

  const products = [
    {
      id: 1,
      name: "Crystal Glow Necklace",
      category: "Bridal Collection",
      originalPrice: "₹49,999",
      salePrice: "₹34,999",
      discount: "30",
      rating: 4.9,
      reviews: 298,
      image: P1,
      badge: "BESTSELLER",
      badgeColor: "bg-red-600"
    },
    {
      id: 2,
      name: "Faux Pearl Earrings",
      category: "Luxury Earrings",
      originalPrice: "₹15,999",
      salePrice: "₹10,999",
      discount: "31",
      rating: 4.8,
      reviews: 182,
      image: p2,
      badge: "NEW ARRIVAL",
      badgeColor: "bg-green-600"
    },
    {
      id: 3,
      name: "CZ Bangles Set",
      category: "Heritage Collection",
      originalPrice: "₹29,999",
      salePrice: "₹21,999",
      discount: "27",
      rating: 4.7,
      reviews: 105,
      image: p3,
      badge: "LIMITED",
      badgeColor: "bg-purple-600"
    },
    {
      id: 4,
      name: "Imitation Gold Ring",
      category: "Engagement Collection",
      originalPrice: "₹39,999",
      salePrice: "₹32,999",
      discount: "18",
      rating: 4.9,
      reviews: 350,
      image: p4,
      badge: "PREMIUM",
      badgeColor: "bg-blue-600"
    },
    {
      id: 5,
      name: "Faux Diamond Chain",
      category: "Signature Collection",
      originalPrice: "₹32,999",
      salePrice: "₹24,999",
      discount: "24",
      rating: 4.6,
      reviews: 92,
      image: p5
    },
    {
      id: 6,
      name: "Imitation Bracelet",
      category: "Modern Collection",
      originalPrice: "₹22,999",
      salePrice: "₹17,999",
      discount: "22",
      rating: 4.8,
      reviews: 175,
      image: p6,
      badge: "TRENDING",
      badgeColor: "bg-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.dataset.section));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes gentleFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes smoothSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes smoothSlideLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes smoothSlideRight {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes subtleScale {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(204, 149, 67, 0.3); }
          50% { box-shadow: 0 0 20px rgba(204, 149, 67, 0.6); }
        }
        @keyframes softRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.8); }
          60% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes underlineGrow {
          0% { width: 0; }
          100% { width: 100%; }
        }

        .animate-gentleFade { animation: gentleFade 1.2s ease-in forwards; }
        .animate-smoothSlideUp { animation: smoothSlideUp 1s ease-out forwards; }
        .animate-smoothSlideLeft { animation: smoothSlideLeft 1s ease-out forwards; }
        .animate-smoothSlideRight { animation: smoothSlideRight 1s ease-out forwards; }
        .animate-subtleScale { animation: subtleScale 0.6s ease-in-out forwards; }
        .animate-pulseGlow { animation: pulseGlow 2.5s ease-in-out infinite; }
        .animate-softRotate { animation: softRotate 1.2s ease-in-out forwards; }
        .animate-gradientFlow { 
          background-size: 200% 100%; 
          animation: gradientFlow 6s linear infinite; 
        }
        .animate-bounceIn { animation: bounceIn 0.8s ease-out forwards; }
        .underline-grow::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #CC9543;
          transition: width 0.4s ease;
        }
        .underline-grow:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Top Announcement Bar */}
      <div className="bg-black text-white py-2 px-4 text-center relative overflow-hidden animate-gentleFade">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent animate-gradientFlow"></div>
        <p className="text-sm font-medium relative z-10" style={{ color: '#CC9543' }}>
          ✨ FESTIVE SALE: Up to 50% OFF on Signature Collections! 
          <span className="ml-2 bg-white/10 px-2 py-1 rounded text-xs animate-pulseGlow">CB IMITATION - Limited Time</span>
        </p>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 hover:shadow-xl animate-smoothSlideUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-3 group animate-smoothSlideLeft">
              <div className="relative">
                <div className="w-12 h-12 relative transform transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 absolute inset-0" style={{ color: '#CC9543' }}>
                    <g fill="currentColor" fillOpacity="0.8">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                      {[...Array(8)].map((_, i) => (
                        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                          <path d="M50 15 Q55 25 50 35 Q45 25 50 15" fill="currentColor" opacity="0.6"/>
                          <path d="M50 20 Q52 27 50 34 Q48 27 50 20" fill="currentColor" opacity="0.8"/>
                        </g>
                      ))}
                    </g>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-125" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', backgroundColor: '#CC9543' }}>
                      <span className="text-black text-xs font-bold" style={{ color: '#000', fontSize: '8px' }}>CB</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <h1 className="text-2xl font-bold text-black tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                  CB IMITATION
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-widest">ELEGANT CRAFTSMANSHIP</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 animate-smoothSlideRight">
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors relative group transform hover:scale-105 underline-grow">
                Home
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-black font-medium transition-colors transform hover:scale-105">
                  <span className="underline-grow">Categories</span>
                  <ChevronDown className="w-4 h-4 group-hover:animate-softRotate transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 animate-bounceIn">
                  <div className="p-4 space-y-2">
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors transform hover:translate-x-2">Imitation Jewelry</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors transform hover:translate-x-2">Bridal Collection</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors transform hover:translate-x-2">Fashion Pieces</a>
                    <a href="#" className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors transform hover:translate-x-2">Daily Wear</a>
                  </div>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors relative group transform hover:scale-105 underline-grow">
                Collections
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors relative group transform hover:scale-105 underline-grow">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors relative group transform hover:scale-105 underline-grow">
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4 animate-smoothSlideRight">
              <div className="hidden md:flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110 group">
                  <Search className="w-5 h-5 text-gray-600 group-hover:animate-subtleScale" />
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110 group">
                  <Heart className="w-5 h-5 text-gray-600 group-hover:animate-subtleScale" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>2</span>
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110 group">
                  <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:animate-subtleScale" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>3</span>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110 group">
                  <User className="w-5 h-5 text-gray-600 group-hover:animate-subtleScale" />
                </button>
              </div>

              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110"
              >
                {isMenuOpen ? <X size={24} className="animate-softRotate" /> : <Menu size={24} className="animate-softRotate" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-smoothSlideUp">
            <div className="p-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2">Home</a>
              <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2">Categories</a>
              <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2">Collections</a>
              <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2">About</a>
              <a href="#" className="block text-gray-700 hover:text-black py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:translate-x-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden" data-section="hero">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60 animate-gradientFlow"></div>
        <div className="absolute inset-0 animate-gentleFade">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover animate-subtleScale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-8 animate-smoothSlideUp">
              <span className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                CB IMITATION - Signature Collection 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              {heroSlides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto animate-smoothSlideUp">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                <span className="flex items-center justify-center space-x-2">
                  <span>Discover Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:animate-subtleScale" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn">
                Watch Video
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                index === currentSlide ? 'w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
              style={{ backgroundColor: index === currentSlide ? '#CC9543' : undefined }}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50" data-section="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-smoothSlideUp">
              Discover our exclusive range of imitation jewelry designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-smoothSlideLeft`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:scale-115"></div>
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-white text-xl font-bold mb-2 animate-smoothSlideUp">{category.name}</h3>
                    <p className="text-gray-300 text-sm mb-3 animate-smoothSlideUp">{category.count}</p>
                    <button className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-white" data-section="new-arrivals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('new-arrivals') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
              SIGNATURE ARRIVALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              New Designs Unveiled
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-smoothSlideUp">
              Explore the latest additions to our CB Imitation collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Faux Emerald Necklace",
                price: "₹3,499",
                originalPrice: "₹5,999",
                image: nd1,
                isNew: true
              },
              {
                name: "CZ Stud Earrings",
                price: "₹1,999",
                originalPrice: "₹2,999",
                image: nd2,
                isNew: true
              },
              {
                name: "Imitation Bangles",
                price: "₹4,199",
                originalPrice: "₹5,999",
                image: nd3,
                isNew: true
              },
              {
                name: "Faux Gold Ring Set",
                price: "₹2,799",
                originalPrice: "₹3,999",
                image: nd4,
                isNew: true
              },
            ].map((product, index) => (
              <div key={index} className={`group cursor-pointer animate-smoothSlideUp`} style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulseGlow z-10">
                        NEW
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Eye className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Heart className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-black mb-2 animate-smoothSlideUp">{product.name}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg font-bold text-black">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="w-full py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000' }}>
              View All Arrivals
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white" data-section="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('featured') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              Signature Masterpieces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-smoothSlideUp">
              Our curated selection of iconic CB Imitation designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className={`group cursor-pointer animate-smoothSlideUp`} style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    
                    {product.badge && (
                      <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow z-10`}>
                        {product.badge}
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow z-10" style={{ backgroundColor: '#CC9543' }}>
                      {product.discount}% OFF
                    </div>
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Eye className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                        <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Heart className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{product.category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-black mb-4 line-clamp-2 animate-smoothSlideUp">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-xl font-bold text-black">{product.salePrice}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    
                    <button className="w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-20 bg-white" data-section="best-sellers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('best-sellers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-red-600 text-white animate-pulseGlow">
              BEST SELLING DESIGNS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              Most Loved Creations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-smoothSlideUp">
              Timeless pieces cherished by our CB Imitation community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Imitation Star Studs",
                price: "₹5,499",
                originalPrice: "₹7,999",
                image: ml1,
                soldCount: "600+ sold",
                rating: 4.9,
                badge: "#1 BESTSELLER"
              },
              {
                name: "Faux Emerald Bracelet",
                price: "₹3,199",
                originalPrice: "₹4,499",
                image: ml2,
                soldCount: "400+ sold",
                rating: 4.8,
                badge: "#2 BESTSELLER"
              },
              {
                name: "CZ Crown Ring",
                price: "₹3,799",
                originalPrice: "₹5,499",
                image: ml3,
                soldCount: "320+ sold",
                rating: 4.7,
                badge: "#3 BESTSELLER"
              },
              {
                name: "Imitation Statement Necklace",
                price: "₹6,499",
                originalPrice: "₹8,999",
                image: ml4,
                soldCount: "250+ sold",
                rating: 4.8,
                badge: "TOP RATED"
              },
              {
                name: "Faux Gold Chain",
                price: "₹4,799",
                originalPrice: "₹6,499",
                image: ml5,
                soldCount: "200+ sold",
                rating: 4.6,
                badge: "CUSTOMER CHOICE"
              },
              {
                name: "Imitation Glow Earrings",
                price: "₹2,999",
                originalPrice: "₹4,499",
                image: ml6,
                soldCount: "450+ sold",
                rating: 4.9,
                badge: "MOST POPULAR"
              }
            ].map((product, index) => (
              <div key={index} className={`group cursor-pointer animate-smoothSlideUp`} style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulseGlow z-10">
                      {product.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs animate-pulseGlow z-10">
                      {product.soldCount}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Eye className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 group-inner">
                          <Heart className="w-4 h-4 group-inner-hover:animate-subtleScale" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-600">CB IMITATION</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                        <span className="text-sm font-bold">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-3 animate-smoothSlideUp">{product.name}</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-bold text-black">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn">
              View All Best Sellers
            </button>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-1 relative h-150 overflow-hidden" data-section="special-offer">
        <div className="absolute inset-0 animate-gradientFlow" style={{ background: 'linear-gradient(135deg, #2D1546 0%, #4B0082 100%)' }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 transition-all duration-1000 ${
              visibleSections.has('special-offer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-white">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                  CB IMITATION - SPECIAL OFFER
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get <span style={{ color: '#CC9543' }}>40% OFF</span><br />
                  on <span style={{ color: '#E11D48' }}>Wedding Collection</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 animate-smoothSlideUp">
                  Celebrate your special day with our exquisite wedding jewelry. Offer valid for a limited time!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000' }}>
                    <span className="flex items-center space-x-2">
                      <Gift className="w-5 h-5 group-hover:animate-subtleScale" />
                      <span>Shop Wedding Collection</span>
                    </span>
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn">
                    View Catalog
                  </button>
                </div>
              </div>
              
              <div className="relative px-4 py-10">
                <img
                  src="https://images.unsplash.com/photo-1731068381691-dd9f121114e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Wedding Collection"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl animate-smoothSlideRight"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-white" data-section="customer-reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('customer-reviews') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-green-600 text-white animate-pulseGlow">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
              Voices of Elegance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-smoothSlideUp">
              Hear from our delighted clients who adore CB Imitation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha Mehra",
                location: "Jaipur",
                rating: 5,
                review: "The craftsmanship is breathtaking! CB Imitation's jewelry made my wedding day truly magical.",
                image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&dpr=1",
                verified: true,
                purchase: "Bridal Set"
              },
              {
                name: "Vikram Singh",
                location: "Chennai",
                rating: 5,
                review: "A perfect anniversary gift! The quality and packaging were exceptional. Highly recommend!",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&dpr=1",
                verified: true,
                purchase: "Faux Emerald Necklace"
              },
              {
                name: "Nisha Kapoor",
                location: "Kolkata",
                rating: 5,
                review: "CB Imitation's designs are stunning and elegant. I receive compliments every time I wear them!",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&dpr=1",
                verified: true,
                purchase: "CZ Earrings"
              }
            ].map((review, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 animate-smoothSlideLeft`} style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 transform transition-transform duration-300 hover:scale-110 animate-smoothSlideRight"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-black">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs px-2 py-1 rounded-full text-white animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>✓ Verified</span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-600">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3 group">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic animate-smoothSlideUp">"{review.review}"</p>
                
                <div className="text-sm text-gray-500 animate-smoothSlideUp">
                  <span className="font-semibold">Purchased: </span>{review.purchase}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000' }}>
              Read More Testimonials
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20" style={{ backgroundColor: '#CC9543' }} data-section="newsletter">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-black transition-all duration-1000 mb-4 animate-smoothSlideUp ${
            visibleSections.has('newsletter') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Join the CB Imitation Family
          </h2>
          <p className="text-lg text-black/80 mb-8 transition-all duration-1000 animate-smoothSlideUp">
            Unlock exclusive offers, new arrivals, and styling tips
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-black bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transform transition-transform duration-300 hover:scale-105 animate-smoothSlideLeft"
            />
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-smoothSlideRight">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16" data-section="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
            visibleSections.has('footer') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <div className="flex items-center space-x-2 mb-4 animate-smoothSlideUp">
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 100 100" className="w-8 h-8" style={{ color: '#CC9543' }}>
                    <g fill="currentColor" fillOpacity="0.8">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
                      {[...Array(6)].map((_, i) => (
                        <g key={i} transform={`rotate(${i * 60} 50 50)`}>
                          <path d="M50 20 Q53 30 50 40 Q47 30 50 20" fill="currentColor" opacity="0.6"/>
                        </g>
                      ))}
                    </g>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', backgroundColor: '#CC9543' }}>
                      <span className="text-black text-xs font-bold" style={{ color: '#000', fontSize: '6px' }}>
                        CB
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold animate-smoothSlideUp" style={{ fontFamily: "'Playfair Display', serif" }}>
                  CB IMITATION
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed animate-smoothSlideUp">
                Redefining elegance with timeless jewelry that celebrates life's most cherished moments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 animate-subtleScale">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 animate-subtleScale">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 animate-subtleScale">Pinterest</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 animate-smoothSlideUp" style={{ color: '#CC9543' }}>Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Collections</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 animate-smoothSlideUp" style={{ color: '#CC9543' }}>Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2 underline-grow">Care Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 animate-smoothSlideUp" style={{ color: '#CC9543' }}>Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                  <span>+91 91234 56789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                  <span>support@cbimitation.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 group-hover:animate-subtleScale" style={{ color: '#CC9543' }} />
                  <span>Jaipur & Mumbai, India</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <div className="text-gray-400 text-sm mb-2 animate-smoothSlideUp">Follow us for inspiration</div>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 group animate-subtleScale" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold group-hover:animate-subtleScale">f</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 group animate-subtleScale" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold group-hover:animate-subtleScale">ig</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 group animate-subtleScale" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold group-hover:animate-subtleScale">pin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm animate-smoothSlideUp">© 2025 CB Imitation. All rights reserved.</div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 transform hover:scale-110 underline-grow">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 transform hover:scale-110 underline-grow">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 transform hover:scale-110 underline-grow">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImitationWebsite;