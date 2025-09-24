import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto container-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.png" alt="Soul Sip Malts" className="w-16" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white font-serif">Soul Sip Malts</span>
                <span className="text-xs text-neutral-400">Tradition in Every Sip</span>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Tradition in Every Sip. Nutrition for Every Life. Crafted with nature's best ingredients for modern wellness.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-neutral-700 rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-700 rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-700 rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-serif">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block text-neutral-400 hover:text-secondary-400 transition-colors">About Us</Link>
              <Link to="/shop" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Shop Malts</Link>
              <Link to="/franchise" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Franchise</Link>
              <Link to="/journal" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Journal</Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-serif">Our Malts</h3>
            <div className="space-y-3">
              <a href="#" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Fig Malt</a>
              <a href="#" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Banana Flower Malt</a>
              <a href="#" className="block text-neutral-400 hover:text-secondary-400 transition-colors">ABC Malt</a>
              <a href="#" className="block text-neutral-400 hover:text-secondary-400 transition-colors">Golden Milk (New!)</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold font-serif">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  43/354 Vivekananda Street<br />
                  Poonga Nagar, Thiruvallur<br />
                  Tamil Nadu 602001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">+91 80723 61484</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">support@soulsipmalts.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-400 text-sm">
            © 2025 Soul Sip Malts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-secondary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-400 hover:text-secondary-400 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;