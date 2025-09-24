import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  
  const handleAddToCart = () => {
    addItem(product);
  };

  const handleWishlistToggle = () => {
    if (!user) {
      window.location.href = '/auth';
      return;
    }
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-4xl shadow-soft overflow-hidden group hover:shadow-large transition-all duration-500 card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <motion.button 
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white transition-all duration-300 shadow-soft"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className={`w-5 h-5 transition-colors ${
            user && isInWishlist(product.id) 
              ? 'text-red-500 fill-current' 
              : 'text-neutral-600 hover:text-red-500'
          }`} />
        </motion.button>
        
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-2xl shadow-soft">
          <Star className="w-4 h-4 text-secondary-400 fill-current" />
          <span className="text-sm font-semibold text-neutral-700">{product.rating}</span>
          <span className="text-xs text-neutral-500">({product.reviews})</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-3 font-serif group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
          {product.description.substring(0, 100)}...
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neutral-700 mb-3">Key Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {product.benefits.slice(0, 3).map((benefit, idx) => (
              <span
                key={idx}
                className="bg-secondary-100 text-secondary-700 text-xs px-3 py-1 rounded-full font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600 font-serif">{product.price}</span>
          <div className="flex space-x-2">
            <Link 
              to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-primary-600 hover:text-primary-700 px-4 py-2 rounded-xl border-2 border-primary-200 hover:bg-primary-50 transition-all duration-300 text-sm font-medium flex items-center space-x-1"
            >
              <Eye className="w-4 h-4" />
              <span>Details</span>
            </Link>
            <motion.button
              onClick={handleAddToCart}
              className="gradient-primary text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-soft hover:shadow-medium btn-ripple"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;