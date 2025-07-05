
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Star, ArrowRight, Phone, Mail, MapPin, Search, ShoppingCart, User, Heart, Eye, Gift } from 'lucide-react';
import '../index.css'
// Import all original images (unchanged)
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
import Button from '../components/Button';
import Header from '../Common Components/Header';


// Primary Gold: #D4AF37
// Secondary Gold: #F4E4BC
// Accent Black: #1A1A1A
// Background: #FEFDF8
// Text: #2C2C2C

const ImitationWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);

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
    { name: "New Arrivals", count: "200+ Designs", image: Cat1 },
    { name: "Rings", count: "100+ Designs", image: Cat2 },
    { name: "Necklaces", count: "150+ Designs", image: Cat3 },
    { name: "Earrings", count: "120+ Designs", image: Cat4 },
    { name: "Bangles", count: "80+ Designs", image: Cat5 },
    { name: "Bridal Sets", count: "60+ Designs", image: Cat6 },
  ];

  const products = [
    {
      id: 11,
      name: "Crystal Glow Necklace",
      category: "Bridal Collection",
      originalPrice: "₹49,999",
      salePrice: "₹34,999",
      discount: "30",
      rating: 4.9,
      reviews: 298,
      image: P1,
      badge: "BESTSELLER",
      badgeColor: "bg-red-600",
    },
    {
      id: 12,
      name: "Faux Pearl Earrings",
      category: "Luxury Earrings",
      originalPrice: "₹15,999",
      salePrice: "₹10,999",
      discount: "31",
      rating: 4.8,
      reviews: 182,
      image: p2,
      badge: "NEW ARRIVAL",
      badgeColor: "bg-green-600",
    },
    {
      id: 13,
      name: "CZ Bangles Set",
      category: "Heritage Collection",
      originalPrice: "₹29,999",
      salePrice: "₹21,999",
      discount: "27",
      rating: 4.7,
      reviews: 105,
      image: p3,
      badge: "LIMITED",
      badgeColor: "bg-purple-600",
    },
    {
      id: 14,
      name: "Imitation Gold Ring",
      category: "Engagement Collection",
      originalPrice: "₹39,999",
      salePrice: "₹32,999",
      discount: "18",
      rating: 4.9,
      reviews: 350,
      image: p4,
      badge: "PREMIUM",
      badgeColor: "bg-blue-600",
    },
    {
      id: 15,
      name: "Faux Diamond Chain",
      category: "Signature Collection",
      originalPrice: "₹32,999",
      salePrice: "₹24,999",
      discount: "24",
      rating: 4.6,
      reviews: 92,
      image: p5,
    },
    {
      id: 16,
      name: "Imitation Bracelet",
      category: "Modern Collection",
      originalPrice: "₹22,999",
      salePrice: "₹17,999",
      discount: "22",
      rating: 4.8,
      reviews: 175,
      image: p6,
      badge: "TRENDING",
      badgeColor: "bg-orange-600",
    },
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
      setIsLoading(false); // Fallback in case of errors
    });

    // Fallback timeout to ensure loader doesn't persist indefinitely
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Reduced to 5 seconds for faster fallback

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
      { threshold: 0.1, rootMargin: '50px' } // Adjusted for better visibility detection
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    // Fallback: Make all sections visible after 3 seconds if observer fails
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

  // const handleLikeClick = (productId) => {
  //   setLikedProducts(prev => {
  //     const newLiked = prev.includes(productId)
  //       ? prev.filter(id => id !== productId)
  //       : [...prev, productId];

  //     // Trigger animation
  //     const heartElement = document.querySelector(`#heart-${productId}`);
  //     if (heartElement) {
  //       heartElement.classList.add('animate-heartBeat');
  //       setTimeout(() => {
  //         heartElement.classList.remove('animate-heartBeat');
  //       }, 500);
  //     }

  //     return newLiked;
  //   });
  // };
  const closePopup = () => {
    setSelectedProduct(null);
  };

  // Loader UI
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-[#CC9543] rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>
            Loading CB Imitation...
          </p>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen  bg-[var(--bg-color)] relative overflow-x-hidden">
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closePopup}>
          <div
            className="relative  p-4 rounded-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-96 object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold">{selectedProduct.name}</h3>
              <p className="text-gray-600">{selectedProduct.category}</p>
            </div>
          </div>
        </div>
      )}
   

      {/* Header */}
      <Header/>
 

      {/* Hero Slider Section */}
      <section className="relative h-[90vh] sm:h-[80vh] md:h-[90vh] overflow-hidden" data-section="hero">
        {/* Slider Background Images */}
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
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Slider Content - Modern Minimalist Design */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute'}`}
                >
                  {/* Minimalist Tag */}
                  <div className="mb-4 sm:mb-6">
                    <span className="inline-block px-3 py-1 rounded-md text-xs font-medium uppercase tracking-wider /90 text-[#CC9543] backdrop-blur-sm">
                      New Collection
                    </span>
                  </div>

                  {/* Slide Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight text-[#D4AF37]">
                    {slide.title}
                  </h1>

                  {/* Slide Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg">
                    {slide.subtitle}
                  </p>

                  {/* Slide Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button variant="primary" icon="arrow">
                      Shop Now
                    </Button>
                    <Button variant="secondary">
                      View Lookbook
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Indicators - Minimal Design */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-1 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#CC9543]' : '/50 hover:/70'}`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#FEFDF8]" data-section="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-3 sm:mb-4 animate-gentleFade" >
              Explore by Category
            </h2>
            <p className="text-base sm:text-lg text-[#2C2C2C] max-w-2xl mx-auto animate-gentleFade" >
              Discover our exclusive range of imitation jewelry designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer  rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 flex flex-col justify-between w-full p-4 sm:p-6">
                    <h3 className="text-white text-lg sm:text-xl font-bold" style={{ marginBottom: "0" }} >{category.name}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm font-medium" style={{ marginBottom: "8px sm:10px" }}>{category.count}</p>
                    <Button variant="outline" className="border-2 border-[#CC9543] bg-transparent text-white hover:bg-[#CC9543]/20 p-2 mt-2" style={{ border: "2px solid #CC9543" }}>
                      Explore All
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 sm:py-16 md:py-20 " data-section="new-arrivals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 animate-pulseGlow" style={{ backgroundColor: '#CC9543' }}>
              SIGNATURE ARRIVALS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-gentleFade">
              New Designs Unveiled
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-gentleFade">
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
              <div key={index} className="group cursor-pointer">
                <div className=" rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative pt-[100%] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col flex-grow">
                    <span className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">
                      New Arrival
                    </span>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {product.name}
                    </h3>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="text-base sm:text-lg font-bold text-[#CC9543]">{product.price}</span>
                        <span className="text-xs sm:text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="primary" icon="" className="flex-1 text-sm sm:text-base">
                          Add to Cart
                        </Button>
                        {/* <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => handleLikeClick(product.id)}>
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill={likedProducts.includes(product.id) ? 'text-red-500' : 'none'} />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="primary" icon="" >
              View All Arrivals
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-20 " data-section="featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-gentleFade" >
              Signature Masterpieces
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-gentleFade" >
              Our curated selection of iconic CB Imitation designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="product-card group cursor-pointer" >
                <div className=" rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden flex-grow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.badge && (
                      <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 ${product.badgeColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow royal-badge`}>
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#CC9543] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold animate-pulseGlow royal-badge">
                      {product.discount}% OFF
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex space-x-2 sm:space-x-3">
                        <button
                          onClick={() => handleProductClick(product)}
                          className=" text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        {/* <button
                          onClick={() => handleLikeClick(product.id)}
                          className={` text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 ${likedProducts.includes(product.id) ? 'text-red-500' : ''
                            }`}
                        >
                          <Heart
                            className="w-3 h-3 sm:w-4 sm:h-4"
                            fill={likedProducts.includes(product.id) ? 'currentColor' : 'none'}
                          />
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide royal-subtext">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#CC9543]" />
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">{product.rating}</span>
                        <span className="text-xs sm:text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4 line-clamp-2 royal-product-title">
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 mt-auto">
                      <span className="text-lg sm:text-xl font-bold text-black royal-price">
                        {product.salePrice}
                      </span>
                      <span className="text-base sm:text-lg text-gray-500 line-through royal-original-price">
                        {product.originalPrice}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="primary" icon="" className="flex-1 text-sm sm:text-base">
                        Add to Cart
                      </Button>
                      {/* <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => handleLikeClick(product.id)}>
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill={likedProducts.includes(product.id) ? 'text-red-500' : 'none'} />
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button variant="primary" icon="" >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      < section className="py-20 " data-section="best-sellers" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-red-600 text-white animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
              BEST SELLING DESIGNS
            </div>
            <h2 className="text-3xl font-semibold text-black mb-6 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400' }}>
              Most Loved Creations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
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
                name: "Faux Emerald Bracelet",
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
                <div className=" rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
                        <button onClick={() => handleProductClick(product)}
                          className=" text-black p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className=" text-black p-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-600" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>CB IMITATION</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" style={{ color: '#CC9543' }} />
                        <span className="text-sm font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-3" style={{ fontFamily: 'Bodoni Moda', fontWeight: '800' }}>{product.name}</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-bold text-black" style={{ fontFamily: 'Raleway', fontWeight: '600' }}>{product.price}</span>
                      <span className="text-lg text-gray-500 line-through" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>{product.originalPrice}</span>
                    </div>
                    {/* <button className="btn btn-primary btn-sm w-full btn-hover-effect">
                      Add to Cart
                    </button> */}
                    <div className="flex gap-2">
                      <Button variant="primary" icon="" className="flex-1">
                        Add to Cart
                      </Button>
                      {/* <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors" onClick={() => handleLikeClick(product.id)}>
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill={likedProducts.includes(product.id) ? 'text-red-500' : 'none'} />
                      </button> */}
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" icon="" >
              View All Best Sellers
            </Button>

            {/* <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 animate-bounceIn" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
              View All Best Sellers
            </button> */}
          </div>
        </div>
      </section >

      {/* Special Offer Section */}
      < section className="py-20 relative h-150 overflow-hidden" data-section="special-offer" >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #2D1546 0%, #4B0082 100%)' }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
              <div className="text-white">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulseGlow" style={{ backgroundColor: '#CC9543', color: '#000', fontFamily: 'Raleway', fontWeight: '700' }}>
                  CB IMITATION - SPECIAL OFFER
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400' }}>
                  Get <span style={{ color: '#CC9543' }}>40% OFF</span><br />
                  on <span style={{ color: '#E11D48' }}>Wedding Collection</span>
                </h2>
                <p className="text-base text-gray-300 mb-8 animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
                  Celebrate your special day with our exquisite wedding jewelry. Offer valid for a limited time!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000', fontFamily: 'Raleway', fontWeight: '700' }}>
                    <span className="flex items-center space-x-2">
                      <Gift className="w-5 h-5" />
                      <span>Shop Wedding Collection</span>
                    </span>
                  </button>
                  <button className="px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover: hover:text-black transition-all duration-300 transform hover:scale-105 animate-bounceIn" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                    View Catalog
                  </button>
                </div>
              </div>

              <div className="relative px-4 py-10">
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
      </section >

      {/* Customer Reviews Section */}
      < section className="py-20 " data-section="customer-reviews" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 bg-green-600 text-white animate-pulseGlow" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400' }}>
              Voices of Elegance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
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
                      <h4 className="font-bold text-black" style={{ fontFamily: 'Bodoni Moda', fontWeight: '400', margin: "0" }}>{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs px-2 py-1 rounded-full text-white animate-pulseGlow" style={{ backgroundColor: '#CC9543', fontFamily: 'Raleway', fontWeight: '700' }}> ✓ Verified</span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-600" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>{review.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#CC9543' }} />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>"{review.review}"</p>

                <div className="text-sm text-gray-500" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
                  <span className="font-medium">Purchased: </span>{review.purchase}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 animate-bounceIn" style={{ backgroundColor: '#CC9543', color: '#000', fontFamily: 'Raleway', fontWeight: '700' }}>
              Read More Testimonials
            </button>
          </div>
        </div>
      </section >

      {/* Newsletter Section */}
      < section className="py-20" style={{ backgroundColor: '#CC9543' }} data-section="newsletter" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 animate-gentleFade" style={{ fontFamily: 'Great Vibes', fontWeight: '400' }}>
              Join the CB Imitation Family
            </h2>
            <p className="text-base text-black/80 mb-8 animate-gentleFade" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
              Unlock exclusive offers, new arrivals, and styling tips
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-black  focus:outline-none focus:ring-2 focus:ring-black/20"
                style={{ fontFamily: 'Raleway', fontWeight: '400' }}
              />
              <button className="btn btn-primary btn-hover-effect px-8 " style={{ border: "2px solid white", color: "white" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-black text-white py-16" data-section="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 100 100" className="w-8 h-8" style={{ color: '#CC9543' }}>
                    <g fill="none">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                      <span className="text-center text-sm text-black font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>
                        CB
                      </span>
                      {[...Array(6)].map((_, i) => (
                        <g key={i} transform={`rotate(${i * 60} 50 50)`}>
                          <path d="M50 20 Q50 30 50 40 Q50 30 50 20" fill="currentColor" opacity="0.6" />
                        </g>
                      ))}
                    </g>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', backgroundColor: '#CC9543' }}>
                      <span className="text-black text-xs font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700', fontSize: '6px' }}>
                        CB
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Bodoni Moda', fontWeight: '400' }}>
                  CB IMITATION
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>
                Redefining elegance with timeless jewelry that celebrates life's most cherished moments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Pinterest</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: '#CC9543', fontFamily: 'Bodoni Moda', fontWeight: '400' }}>Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Collections</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: '#CC9543', fontFamily: 'Bodoni Moda', fontWeight: '400' }}>Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Returns</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Care Guide</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6" style={{ color: '#CC9543', fontFamily: 'Bodoni Moda', fontWeight: '400' }}>Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" style={{ color: '#CC9543' }} />
                  <span style={{ fontFamily: 'Raleway', fontWeight: '400' }}>+91 91234 56789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" style={{ color: '#CC9543' }} />
                  <span style={{ fontFamily: 'Raleway', fontWeight: '400' }}>support@cbimitation.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" style={{ color: '#CC9543' }} />
                  <span style={{ fontFamily: 'Raleway', fontWeight: '400' }}>Jaipur & Mumbai, India</span>
                </li>
              </ul>

              <div className="mt-6">
                <div className="text-gray-400 text-sm mb-2" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>Follow us for inspiration</div>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>f</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>ig</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300" style={{ backgroundColor: '#CC9543' }}>
                    <span className="text-black text-sm font-bold" style={{ fontFamily: 'Raleway', fontWeight: '700' }}>pin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Raleway', fontWeight: '400' }}>© 2025 CB Imitation is Proudly Powered by <span className='text-white'>EasyWay IT Solutions</span></div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 underline-grow" style={{ fontFamily: 'Raleway', fontWeight: '500' }}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>    </div >
  );
};

export default ImitationWebsite;