import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, ArrowRight, Phone, Mail, MapPin, Search, ShoppingCart, User, Heart, Eye, Gift, Users, Zap, Factory, Sparkles, Award } from 'lucide-react';
import '../index.css';
import SliderImage1 from '../assets/slider-1.jpg';
import SliderImage2 from '../assets/slider-2.jpg';
import SliderImage3 from '../assets/slider-3.jpg';
import Cat1 from '/Product 1.png';
import Cat2 from '/Product 3.png';
import Cat3 from '/Product 9.png';
import Cat4 from '../assets/earring.jpg';
import Cat5 from '../assets/bangle.jpg';
import Cat6 from '../assets/bright.jpg';
import P1 from '/Product 7.png';
import p2 from '/Product 8.png';
import p3 from '/Product 10.png';
import p4 from '/Product 12.png';
import p5 from '/Product 13.png';
import p6 from '/Product 14.png';
import ml1 from '../assets/ml1.jpg';
import ml2 from '../assets/ml2.jpg';
import ml3 from '../assets/ml3.jpg';
import ml4 from '../assets/ml4.jpg';
import ml5 from '../assets/ml5.jpg';
import ml6 from '../assets/ml6.jpg';
import nd1 from '/Product 2.png';
import nd2 from '/Product 4.png';
import nd3 from '/Product 5.png';
import nd4 from '/Product 6.png';
import Button from '../components/Button';
import Header from '../Common Components/Header';
import Footer from '../Common Components/Footer';

const ImitationWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  const [theme, setTheme] = useState('light');
  const [manualTheme, setManualTheme] = useState(null); // Track manual theme override

  // Theme toggle based on time or manual selection
  useEffect(() => {
    const updateTheme = () => {
      if (manualTheme === null) { // Only update based on time if no manual override
        const hour = new Date().getHours();
        const newTheme = hour >= 6 && hour < 19 ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000);

    return () => clearInterval(interval);
  }, [manualTheme]);

  // Handle manual theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setManualTheme(newTheme); // Set manual override
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroSlides = [
    {
      image: SliderImage1,
      title: "Timeless Necklace Elegance",
      subtitle: "Discover the beauty of imitation craftsmanship",
    },
    {
      image: SliderImage2,
      title: "Glamorous Earring Collection",
      subtitle: "Shine bright with affordable luxury",
    },
    {
      image: SliderImage3,
      title: "Bridal Imitation Sets",
      subtitle: "Perfect for your special day",
    },
  ];

  const categories = [
    { name: "Earings", count: "100+ Designs", image: Cat1 },
    { name: "Pendant and Earings", count: "150+ Designs", image: Cat2 },
    { name: "New Arrivals", count: "200+ Designs", image: Cat3 },
  ];

  const products = [
    {
      id: 11,
      name: "Crystal Glow Necklace",
      originalPrice: "₹49,999",
      salePrice: "₹34,999",
      discount: "30",
      image: P1,
      badge: "BESTSELLER",
      badgeColor: "bg-red-600",
    },
    {
      id: 12,
      name: "Faux Pearl Earrings",
      originalPrice: "₹15,999",
      salePrice: "₹10,999",
      discount: "31",
      image: p2,
      badge: "NEW ARRIVAL",
      badgeColor: "bg-green-600",
    },
    {
      id: 13,
      name: "CZ Bangles Set",
      originalPrice: "₹29,999",
      salePrice: "₹21,999",
      discount: "27",
      image: p3,
      badge: "LIMITED",
      badgeColor: "bg-purple-600",
    },
    {
      id: 14,
      name: "Imitation Gold Ring",
      originalPrice: "₹39,999",
      salePrice: "₹32,999",
      discount: "18",
      image: p4,
      badge: "PREMIUM",
      badgeColor: "bg-blue-600",
    },
    {
      id: 15,
      name: "Faux Diamond Chain",
      originalPrice: "₹32,999",
      salePrice: "₹24,999",
      discount: "24",
      image: p5,
    },
    {
      id: 16,
      name: "Imitation Bracelet",
      originalPrice: "₹22,999",
      salePrice: "₹17,999",
      discount: "22",
      image: p6,
      badge: "TRENDING",
      badgeColor: "bg-orange-600",
    },
  ];

  const promises = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "1000+",
      subtitle: "Happy Clients",
      description: "Satisfied customers trust our quality"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Direct",
      subtitle: "Manufacturer",
      description: "Factory direct pricing & quality"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium",
      subtitle: "Designs",
      description: "Endless variety to choose from"
    }
  ];


  // Preload images to ensure loader hides after images are loaded
  useEffect(() => {
    const images = [
      SliderImage1, SliderImage2, SliderImage3,
      Cat1, Cat2, Cat3, Cat4, Cat5, Cat6,
      P1, p2, p3, p4, p5, p6,
      ml1, ml2, ml3, ml4, ml5, ml6,
      nd1, nd2, nd3, nd4,
    ];

    let loadedImages = 0;
    const totalImages = images.length;

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedImages += 1;
          if (loadedImages === totalImages) setIsLoading(false);
          resolve();
        };
        img.onerror = () => {
          loadedImages += 1;
          if (loadedImages === totalImages) setIsLoading(false);
          resolve();
        };
      });
    };

    Promise.all(images.map((src) => preloadImage(src))).catch(() => {
      setIsLoading(false);
    });

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  // IntersectionObserver to handle section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.dataset.section);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    const fallback = setTimeout(() => {
      setVisibleSections(new Set(['hero', 'categories', 'new-arrivals', 'featured', 'best-sellers', 'special-offer', 'customer-reviews', 'newsletter', 'footer']));
    }, 3000);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      clearTimeout(fallback);
    };
  }, []);

  // Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  // Loader UI
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-[var(--primary-color)] rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text-color)' }}>
            Loading CB Imitation...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closePopup}>
          <div
            className="relative p-4 rounded-lg max-w-md w-full"
            style={{ backgroundColor: 'var(--bg1-color)', color: 'var(--text-color)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2"
              style={{ color: 'var(--text-color)' }}
            >
              <X size={24} />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-96 object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold" style={{ color: 'var(--headingText-color)' }}>{selectedProduct.name}</h3>
              <p style={{ color: 'var(--text1-color)' }}>{selectedProduct.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <Header handleThemeToggle={handleThemeToggle} theme={theme} />

      {/* Hero Slider Section */}
      <section className="relative h-[90vh] sm:h-[80vh] md:h-[90vh] overflow-hidden" data-section="hero">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'}`}
                >
                  <div className="mb-4 sm:mb-6"
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-medium uppercase tracking-wider backdrop-blur-sm" style={{ color: 'var(--headingText-color)' }}>
                      New Collection
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight" style={{ color: 'var(--headingText-color)' }}
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg" style={{ color: 'var(--text1-color)' }}
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    data-aos="fade-right"
                    data-aos-duration="1500">
                    <Button variant="primary" icon="arrow">
                      Shop Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[var(--primary-color)]' : 'bg-gray-400 hover:bg-gray-500'}`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </section>


      <div className="text-center mt-[100px]">
        <div className="inline-block"
          data-aos="fade-up"
          data-aos-duration="1500">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            About CB Imitation
          </h2>
          {/* Bottom Decorative Element */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
            <div className="w-3 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
            <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
          </div>
        </div>

      </div>

      <section
        className="mt-[50px] flex items-center justify-center">

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl w-full">

          {/* Text Section */}
          <div data-aos="fade-right"
            data-aos-duration="1500" className="space-y-6">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-primary)", color: "var(--headingText-color)", textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Who are we?
            </h2>
            <div
              className="h-1 w-24 rounded-full"
              style={{ background: "var(--gold-gradient)" }}
            ></div>
            <p
              className="text-lg sm:text-md leading-relaxed"
              style={{
                fontFamily: "var(--font-secondary)",
                fontWeight: "var(--font-regular)",
                color: "var(--text2-color)",
              }}
            >
              Established in 2010, <strong>CB Imitation</strong> has grown to become a trusted name in the world of imitation jewellery. With a deep commitment to quality and design excellence, we specialize in crafting jewellery that blends traditional elegance with contemporary trends. Our pieces are thoughtfully designed to reflect beauty, durability, and affordability—making timeless style accessible to everyone.

            </p>

            <blockquote
              className="border-l-4 pl-4 italic text-lg"
              style={{ borderColor: "var(--accent-color)", color: "var(--text2-color)" }}
            >
              “Luxury is not just how something looks, but how it’s made and who it touches.”
            </blockquote>


            <Button variant="primary" icon="">
              Explore Our Story
            </Button>
          </div>

          {/* Image Section */}
          <div className="relative w-full flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
            <img
              src="/logo.png"
              alt="Heritage Craftsmanship"
              className="h-[400px] object-cover transform transition-transform duration-500 hover:scale-105"
            />

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 sm:mb-20" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="inline-block"
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Explore by Category
              </h2>
              {/* Bottom Decorative Element */}
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                <div className="w-3 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
                <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
              </div>
            </div>
            <p
              className="text-md sm:text-lg max-w-3xl mx-auto mt-3 leading-relaxed"
              style={{
                color: 'var(--text1-color)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Discover our exclusive collection of premium imitation jewelry,
              crafted with precision and elegance
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10" data-aos="fade-up"
            data-aos-duration="1500">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                {/* Circle Container */}
                <div className="relative mb-6">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/20 group-hover:ring-[var(--headingText-color)]/30 transition-all duration-500">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-full border-2 border-dashed border-[var(--headingText-color)]/30 group-hover:border-[var(--headingText-color)]/60 transition-all duration-500 group-hover:rotate-45"></div>


                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-wide transform group-hover:scale-105 transition-transform duration-300"
                    style={{
                      color: 'var(--headingText-color)',
                      fontFamily: 'var(--font-primary)'
                    }}
                  >
                    {category.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[var(--headingText-color)] rounded-full"></div>
                    <span
                      className="text-sm font-medium tracking-widest uppercase"
                      style={{
                        color: 'var(--text1-color)',
                        fontFamily: 'var(--font-secondary)'
                      }}
                    >
                      {category.count}
                    </span>
                    <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[var(--headingText-color)] rounded-full"></div>
                  </div>


                </div>
              </div>
            ))}
          </div>
          {/* Explore Button */}
          <center>
            <Button className='mt-[50px]' variant="primary" icon="" data-aos="fade-up"
              data-aos-duration="1000">
              Explore Collection
            </Button>
          </center>


        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12" data-section="new-arrivals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up"
            data-aos-duration="1500">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-primary)", color: "var(--headingText-color)", textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              New Arrivals
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-3">
              <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
              <div className="w-3 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
              <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
            </div>
            <p className="text-base sm:text-md max-w-2xl mx-auto animate-gentleFade mt-3" style={{ color: 'var(--text1-color)' }}>
              Explore the latest additions to our CB Imitation collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                id: 1,
                name: "Faux Emerald Necklace",
                price: "₹3,499",
                originalPrice: "₹5,999",
                image: nd1,
                isNew: true,
              },
              {
                id: 2,
                name: "CZ Stud Earrings",
                price: "₹1,999",
                originalPrice: "₹2,999",
                image: nd2,
                isNew: true,
              },
              {
                id: 3,
                name: "Imitation Bangles",
                price: "₹4,599",
                originalPrice: "₹5,999",
                image: nd3,
                isNew: true,
              },
              {
                id: 4,
                name: "Faux Gold Ring Set",
                price: "₹2,799",
                originalPrice: "₹3,999",
                image: nd4,
                isNew: true,
              },
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer" data-aos="fade-up"
                data-aos-duration="1500">
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative pt-[100%] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <p className="text-xs font-medium mb-1 uppercase tracking-wider" style={{ color: 'var(--text1-color)' }}>
                      New Arrival
                    </p>
                    <p className="text-base sm:text-lg font-semibold mb-2 leading-tight" style={{ color: 'var(--headingText-color)' }}>
                      {product.name}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="text-base sm:text-md font-bold" style={{ color: 'var(--headingText-color)' }}>{product.price}</span>
                        <span className="text-xs line-through" style={{ color: 'var(--text1-color)' }}>{product.originalPrice}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="primary" icon="" className="flex-1 text-sm sm:text-base">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12" data-aos="fade-up"
            data-aos-duration="1500">
            <Button variant="primary" icon="">
              View All Arrivals
            </Button>
          </div>
        </div>
      </section>




      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20" data-section="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16" data-aos="fade-up"
            data-aos-duration="1500">
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-primary)", color: "var(--headingText-color)", textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Best Sellers
            </h2>
            <div className="flex items-center justify-center space-x-2 mt-3">
              <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
              <div className="w-3 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
              <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
            </div>
            <p className="text-base sm:text-md max-w-2xl mx-auto animate-gentleFade mt-3" style={{ color: 'var(--text1-color)' }}>
              Our curated selection of iconic CB Imitation designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="product-card group cursor-pointer" data-aos="fade-up"
                data-aos-duration="1500">
                <div className="card rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden flex-grow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] sm:h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* {product.badge && (
                      <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${product.badgeColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow royal-badge`} style={{ fontFamily: "var(--font-secondary)" }}>
                        {product.badge}
                      </div>
                    )} */}
                    {/* <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[var(--headingText-color)] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow royal-badge" style={{ fontFamily: "var(--font-secondary)" }}>
                      {product.discount}% OFF
                    </div> */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2 sm:space-x-3">
                        <button
                          onClick={() => handleProductClick(product)}
                          className="text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-grow flex flex-col">

                    <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 line-clamp-2 royal-product-title" style={{ color: 'var(--headingText-color)' }}>
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 mt-auto">
                      <span className="text-md font-bold royal-price" style={{ color: 'var(--headingText-color)', fontFamily: "var(--font-secondary)" }}>
                        {product.salePrice}
                      </span>
                      <span className="text-base sm:text-sm line-through royal-original-price" style={{ color: 'var(--text1-color)', fontFamily: "var(--font-secondary)" }}>
                        {product.originalPrice}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="primary" icon="" className="flex-1 text-sm sm:text-base">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16" data-aos="fade-up"
            data-aos-duration="1500">
            <Button variant="primary" icon="">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      {/* <section className="py-20" data-section="best-sellers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-red-600 text-white animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
              BEST SELLING DESIGNS
            </div>
            <h2 className="text-3xl font-semibold mb-6 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400', color: 'var(--headingText-color)' }}>
              Most Loved Creations
            </h2>
            <p className="text-lg max-w-2xl mx-auto animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>
              Timeless pieces cherished by our CB Imitation community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 5,
                name: "Imitation Star Studs",
                price: "₹5,499",
                originalPrice: "₹7,999",
                image: ml1,
                soldCount: "600+ sold",
                rating: 4.9,
                badge: "#1 BESTSELLER",
              },
              {
                id: 6,
                name: "Faux Emeraldmaybe Bracelet",
                price: "₹3,199",
                originalPrice: "₹4,499",
                image: ml2,
                soldCount: "400+ sold",
                rating: 4.8,
                badge: "#2 BESTSELLER",
              },
              {
                id: 7,
                name: "CZ Crown Ring",
                price: "₹3,799",
                originalPrice: "₹5,499",
                image: ml3,
                soldCount: "320+ sold",
                rating: 4.7,
                badge: "#3 BESTSELLER",
              },
              {
                id: 8,
                name: "Imitation Statement Necklace",
                price: "₹6,499",
                originalPrice: "₹8,999",
                image: ml4,
                soldCount: "250+ sold",
                rating: 4.8,
                badge: "TOP RATED",
              },
              {
                id: 9,
                name: "Faux Gold Chain",
                price: "₹4,799",
                originalPrice: "₹6,499",
                image: ml5,
                soldCount: "200+ sold",
                rating: 4.6,
                badge: "CUSTOMER CHOICE",
              },
              {
                id: 10,
                name: "Imitation Glow Earrings",
                price: "₹2,999",
                originalPrice: "₹4,499",
                image: ml6,
                soldCount: "450+ sold",
                rating: 4.9,
                badge: "MOST POPULAR",
              },
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                      {product.badge}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                      {product.soldCount}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <button onClick={() => handleProductClick(product)} className="text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text1-color)' }}>CB IMITATION</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" style={{ color: 'var(--primary-color)' }} />
                        <span className="text-sm font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700', color: 'var(--text-color)' }}>{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Bodoni Moda', fontWeight: '800', color: 'var(--headingText-color)' }}>{product.name}</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-bold" style={{ fontFamily: 'Raleway', fontWeight: '600', color: 'var(--headingText-color)' }}>{product.price}</span>
                      <span className="text-lg line-through" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>{product.originalPrice}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="primary" icon="" className="flex-1">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" icon="">
              View All Best Sellers
            </Button>
          </div>
        </div>
      </section> */}

      {/* Special Offer Section */}
      <section className="py-20 relative h-150 overflow-hidden" data-section="special-offer">
        <div className="absolute inset-0" style={{ background: 'var(--bg1-color)' }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
              <div className="text-white"
                data-aos="fade-right"
                data-aos-duration="1500">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulseGlow" style={{ backgroundColor: 'var(--headingText-color)', color: '#000', fontWeight: '700' }}>
                  CB IMITATION - SPECIAL OFFER
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gentleFade text-[var(--text1-color)]">
                  Get 40% OFF<br />
                  on Earing and Pendant
                </h2>
                <p className="text-base mb-8 animate-gentleFade" style={{ color: 'var(--text1-color)' }}>
                  Celebrate your special day with our exquisite wedding jewelry. Offer valid for a limited time!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">


                  <Button variant="primary" icon="">
                    View Catalog
                  </Button>

                </div>
              </div>

              <div className="relative px-4 py-10" data-aos="fade-left"
                data-aos-duration="1500">
                <img
                  src={nd1}
                  alt="Wedding Collection"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      {/* <section className="py-20" data-section="customer-reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-green-600 text-white animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400', color: 'var(--headingText-color)' }}>
              Voices of Elegance
            </h2>
            <p className="text-lg max-w-2xl mx-auto animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>
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
                image: p2,
                verified: true,
                purchase: "Bridal Set",
              },
              {
                name: "Vikram Singh",
                location: "Chennai",
                rating: 5,
                review: "A perfect anniversary gift! The quality and packaging were exceptional. Highly recommend!",
                image: p3,
                verified: true,
                purchase: "Faux Emerald Necklace",
              },
              {
                name: "Nisha Kapoor",
                location: "Kolkata",
                rating: 5,
                review: "CB Imitation's designs are stunning and elegant. I receive compliments every time I wear them!",
                image: p4,
                verified: true,
                purchase: "CZ Earrings",
              },
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center space-x-5">
                      <h4 className="font-bold" style={{ fontFamily: 'Bodoni Moda', fontWeight: '400', margin: "0", color: 'var(--headingText-color)' }}>{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs px-2 py-1 rounded-full text-white animate-pulseGlow" style={{ backgroundColor: 'var(--headingText-color)', fontFamily: 'Raleway', fontWeight: '700' }}>✓ Verified</span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ fontFamily: 'Raleway', fontWeight: '500', color: 'var(--text1-color)' }}>{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--headingText-color)' }} />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text-color)' }}>"{review.review}"</p>

                <div className="text-sm" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>
                  <span className="font-medium">Purchased: </span>{review.purchase}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 animate-bounceIn" style={{ backgroundColor: 'var(--headingText-color)', color: '#000', fontFamily: 'Raleway', fontWeight: '700' }}>
              Read More Testimonials
            </button>
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <section className="py-20" style={{ backgroundColor: 'var(--primary-color)' }} data-section="newsletter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400', color: 'var(--headingText-color)' }}>
              Join the CB Imitation Family
            </h2>
            <p className="text-base mb-8 animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400', color: 'var(--text1-color)' }}>
              Unlock exclusive offers, new arrivals, and styling tips
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{ fontFamily: 'Raleway', fontWeight: '400' }}
              />
              <button className="btn btn-primary btn-hover-effect px-8" style={{ border: "2px solid white", color: "white" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[var(--headingText-color)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-[var(--headingText-color)] rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[var(--headingText-color)] rounded-full animate-pulse delay-150"></div>
        </div>

    
          {/* Promises Grid */}
          <div className="w-full min-h-screen py-20 px-4">
            <style dangerouslySetInnerHTML={{
              __html: `
          @keyframes spin-slow {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `
            }} />

            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ backgroundColor: 'var(--headingText-color)' }}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: 'var(--headingText-color)', fontFamily: 'var(--font-primary)' }}>
                  Why Choose Us
                </h2>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--primary-color)] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></div>
                  <div className="w-3 h-0.5 bg-[var(--primary-color)] rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse delay-75"></div>
                  <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--primary-color)] rounded-full"></div>
                </div>
                <p className="text-md mt-3 max-w-2xl mx-auto"
                  style={{ color: 'var(--text1-color)', fontFamily: 'var(--font-secondary)' }}>
                  Experience excellence with our proven track record and commitment to quality
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {promises.map((promise, index) => (
                  <div
                    key={index}
                    className="group relative isolate"
                    style={{ pointerEvents: 'auto' }}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {/* Main Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[var(--headingText-color)]/30 rounded-2xl p-8 text-center transition-all duration-500 ease-out hover:border-[var(--headingText-color)] hover:shadow-2xl hover:shadow-[var(--headingText-color)]/30 hover:scale-105 will-change-transform will-change-border will-change-shadow">
                      {/* Premium Corner Decorations */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--headingText-color)] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--headingText-color)] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--headingText-color)] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--headingText-color)] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>

                      {/* Icon/Number */}
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out relative">
                        <div className="w-20 h-20 mx-auto rounded-full bg-[var(--headingText-color)] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--headingText-color)]/40 transition-shadow duration-500 ease-out">
                          <span
                            className="text-white text-2xl"
                            style={{ fontFamily: 'var(--font-primary)' }}
                          >
                            {promise.icon}
                          </span>
                        </div>

                        {/* Floating Ring */}
                        <div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-[var(--headingText-color)]/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500 ease-out will-change-transform will-change-opacity"
                        ></div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3
                          className="text-xl font-bold tracking-wide"
                          style={{
                            color: 'var(--headingText-color)',
                            fontFamily: 'var(--font-primary)',
                          }}
                        >
                          {promise.title}
                        </h3>

                        <h4
                          className="text-lg font-semibold"
                          style={{
                            color: 'var(--headingText-color)',
                            fontFamily: 'var(--font-primary)',
                          }}
                        >
                          {promise.subtitle}
                        </h4>

                        {/* Decorative Line */}
                        <div className="flex items-center justify-center space-x-2 my-4">
                          <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-[var(--headingText-color)] rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-[var(--headingText-color)] rounded-full animate-pulse"></div>
                          <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-[var(--headingText-color)] rounded-full"></div>
                        </div>

                        <p
                          className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                          style={{
                            color: 'var(--text1-color)',
                            fontFamily: 'var(--font-secondary)',
                          }}
                        >
                          {promise.description}
                        </p>
                      </div>

                      {/* Shine Effect */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-2xl will-change-transform pointer-events-none"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            
            </div>
          </div>

       
 

        <style jsx>{`
    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }

    /* Ensure smooth hover transitions */
    .group {
      transform: translateZ(0); /* Force hardware acceleration */
      will-change: transform;
    }

    /* Prevent hover conflicts */
    .group:hover .group-hover\\:opacity-100 {
      opacity: 1;
    }

    /* Optimize shine effect */
    .group-hover\\:translate-x-full {
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  `}</style>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ImitationWebsite;
