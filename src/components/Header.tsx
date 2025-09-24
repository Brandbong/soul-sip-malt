import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Heart, Home, Store, BookOpen, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { state: cartState } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [isScrolled]);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About Us', path: '/about', icon: <User className="w-5 h-5" /> },
    { name: 'Shop Malts', path: '/shop', icon: <Store className="w-5 h-5" /> },
    { name: 'Franchise', path: '/franchise', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Journal', path: '/journal', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-5 h-5" /> },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-200' 
            : 'bg-white/90 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/images/logo.png" alt="Soul Sip Malts Logo" className="h-12 lg:h-16" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-neutral-800 group-hover:text-primary-600 transition-colors font-serif">
                  Soul Sip Malts
                </span>
                <span className="text-xs sm:text-xs text-neutral-500 font-medium hidden sm:block">Tradition in Every Sip</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Wishlist */}
              {user && (
                <Link to="/wishlist">
                  <motion.button
                    className="p-3 rounded-xl transition-colors text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                </Link>
              )}

              {/* Cart */}
              <Link to="/cart" className="relative">
                <motion.button
                  className="p-3 rounded-xl transition-colors text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartState.itemCount > 0 && (
                    <motion.span
                      className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      {cartState.itemCount}
                    </motion.span>
                  )}
                </motion.button>
              </Link>

              {/* User Account */}
              {user ? (
                <div className="relative group">
                  <motion.button
                    className="p-3 rounded-xl transition-colors text-neutral-700 hover:bg-primary-50 hover:text-primary-600 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-5 h-5" />
                    <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                  </motion.button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-large border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-2">
                      <Link
                        to="/wishlist"
                        className="block px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                      >
                        My Wishlist
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to="/auth">
                  <motion.button
                    className="p-3 rounded-xl transition-colors text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="w-5 h-5" />
                  </motion.button>
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl transition-colors text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-neutral-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden bottom-nav">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-colors ${
                location.pathname === item.path
                  ? 'text-primary-600'
                  : 'text-neutral-500 hover:text-primary-600'
              }`}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.name.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;