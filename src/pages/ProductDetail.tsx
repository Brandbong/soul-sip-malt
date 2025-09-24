import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Star, Plus, Minus, Share2 } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-emerald-700 hover:text-emerald-800 font-medium">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
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
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100">
                <motion.img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-stone-700">{product.rating}</span>
                    <span className="text-sm text-stone-500">({product.reviews} reviews)</span>
                  </div>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">{product.name}</h1>
                <p className="text-lg text-stone-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-emerald-700">{product.price}</span>
                <span className="text-stone-500">200g pack</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-stone-700 font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </motion.button>
                <button
                  onClick={handleWishlistToggle}
                  className="w-16 h-16 rounded-xl border-2 border-stone-200 hover:border-emerald-500 flex items-center justify-center transition-colors"
                >
                  <Heart className={`w-6 h-6 transition-colors ${
                    user && isInWishlist(product.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-stone-600 hover:text-red-500'
                  }`} />
                </button>
                <button className="w-16 h-16 rounded-xl border-2 border-stone-200 hover:border-emerald-500 flex items-center justify-center transition-colors">
                  <Share2 className="w-6 h-6 text-stone-600 hover:text-emerald-600 transition-colors" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ingredients */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Ingredients</h3>
              <div className="space-y-3">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-stone-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Health Benefits</h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stone-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nutritional Facts */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Nutrition Facts</h3>
              {product.nutritionalFacts && (
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Calories</span>
                    <span className="font-medium text-stone-800">{product.nutritionalFacts.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Protein</span>
                    <span className="font-medium text-stone-800">{product.nutritionalFacts.protein}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Carbohydrates</span>
                    <span className="font-medium text-stone-800">{product.nutritionalFacts.carbs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Fiber</span>
                    <span className="font-medium text-stone-800">{product.nutritionalFacts.fiber}</span>
                  </div>
                  <div className="pt-4 border-t border-stone-200">
                    <h4 className="font-semibold text-stone-800 mb-2">Key Vitamins & Minerals:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.nutritionalFacts.vitamins.map((vitamin, index) => (
                        <span key={index} className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">
                          {vitamin}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Usage Instructions */}
          <motion.div
            className="mt-8 bg-emerald-50 p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-stone-800 mb-4">How to Use</h3>
            <p className="text-stone-700 leading-relaxed">{product.usage}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;