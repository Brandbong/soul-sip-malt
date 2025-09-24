import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Star, ShoppingCart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import { products } from '../data/products';

const Homepage = () => {
  const bestSellers = products.slice(0, 4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Natural',
      description: 'No artificial additives, preservatives, or chemicals - just pure, natural goodness'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Nutrient-Dense',
      description: 'Packed with essential vitamins, minerals, and antioxidants for optimal health'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Traditional Wisdom',
      description: 'Time-honored recipes passed down through generations, perfected for modern life'
    }
  ];

  const scrollProducts = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollProducts('right');
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="pt-16 lg:pt-20 pb-16 lg:pb-0">
      {/* Hero Section - Split Screen */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: ["0%", "-2%", "0%"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <img
                    src="/images/products/BG.png"
                    alt="Soul Sip Malts Premium Collection"
                    className="w-full h-96 lg:h-[500px] object-cover rounded-4xl shadow-large"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-4xl"></div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ✨ Traditional Wellness Redefined
              </motion.div>
              
              <h1 className="heading-xl text-neutral-800 mb-6 font-serif">
                Tradition in Every Sip.
                <span className="block text-primary-600">Nutrition for Every Life.</span>
              </h1>
              
              <p className="body-lg text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Premium instant malt mixes crafted with nature's finest ingredients – designed for busy lives, healthy families, and timeless wellness.
              </p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  to="/shop"
                  className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-medium flex items-center justify-center space-x-2 btn-ripple"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Shop Premium Malts</span>
                </Link>
                <Link
                  to="/about"
                  className="bg-white border-2 border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-neutral-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-secondary-400 fill-current" />
                  <span>4.8/5 Rating</span>
                </div>
                <div>10,000+ Happy Customers</div>
                <div>100% Natural</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-neutral-800 mb-6 font-serif">
              Why Choose Soul Sip Malts?
            </h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Every sip delivers the perfect blend of tradition, nutrition, and taste
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers - Horizontal Carousel */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-neutral-800 mb-6 font-serif">
              Our Best Sellers
            </h2>
            <p className="body-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our most loved malt blends, each crafted with care and tradition
            </p>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-3">
              <button
                onClick={() => scrollProducts('left')}
                className="p-3 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 text-neutral-700 hover:text-primary-600"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollProducts('right')}
                className="p-3 rounded-2xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 text-neutral-700 hover:text-primary-600"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              to="/shop"
              className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1 transition-colors"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Products Carousel */}
          <div
            ref={carouselRef}
            id="products-carousel"
            className="flex space-x-6 overflow-x-auto carousel-container pb-4"
          >
            {bestSellers.map((product, index) => (
              <div key={product.id} className="flex-none w-80">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6 font-serif">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have made Soul Sip Malts part of their daily nutrition routine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-large btn-ripple"
              >
                Explore Our Products
              </Link>
              <Link
                to="/franchise"
                className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 border-primary-400 btn-ripple"
              >
                Start a Franchise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <motion.button
        onClick={() => window.open('https://wa.me/918072361484', '_blank')}
        className="floating-cta gradient-primary text-white p-3 lg:p-4 rounded-full shadow-large hover:shadow-xl transition-all duration-300 group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 500, damping: 30 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 bg-neutral-800 text-white px-3 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Order on WhatsApp
        </span>
      </motion.button>
    </div>
  );
};

export default Homepage;
