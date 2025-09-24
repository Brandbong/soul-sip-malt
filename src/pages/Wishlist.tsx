import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="w-24 h-24 text-stone-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-stone-800 mb-4">Please Sign In</h1>
              <p className="text-lg text-stone-600 mb-8">
                Sign in to view and manage your wishlist
              </p>
              <Link
                to="/auth"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>Sign In</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Shop</span>
            </Link>
          </motion.div>
          
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart className="w-24 h-24 text-stone-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-stone-800 mb-4">Your Wishlist is Empty</h1>
              <p className="text-lg text-stone-600 mb-8">
                Save your favorite malts to your wishlist for easy access
              </p>
              <Link
                to="/shop"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Discover Malts</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-800">My Wishlist</h1>
          <p className="text-stone-600 mt-2">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
        </motion.div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {product.description.substring(0, 100)}...
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.slice(0, 3).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-700">{product.price}</span>
                  <div className="flex space-x-2">
                    <Link
                      to={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-emerald-700 hover:text-emerald-800 px-4 py-2 rounded-lg border border-emerald-200 hover:bg-emerald-50 transition-colors text-sm font-medium"
                    >
                      View Details
                    </Link>
                    <motion.button
                      onClick={() => addItem(product)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm font-medium">Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;