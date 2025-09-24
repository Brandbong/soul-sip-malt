import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { openWhatsAppOrder } from '../utils/whatsapp';

const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const orderDetails = state.items.map(item => 
      `${item.product.name} x${item.quantity}`
    ).join(', ');
    
    const totalAmount = state.total.toFixed(2);
    const message = `Hi Soul Sip Malts, I would like to order: ${orderDetails}. Total: ₹${totalAmount}/-. Please assist me with the order.`;
    
    const phoneNumber = '918072361484';
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    }
    
    window.open(whatsappUrl, '_blank');
  };

  if (state.items.length === 0) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ShoppingBag className="w-24 h-24 text-stone-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-stone-800 mb-4">Your Cart is Empty</h1>
              <p className="text-lg text-stone-600 mb-8">
                Discover our premium malt collection and start your wellness journey
              </p>
              <Link
                to="/shop"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Start Shopping</span>
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
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-800">Shopping Cart</h1>
          <p className="text-stone-600 mt-2">{state.itemCount} item{state.itemCount !== 1 ? 's' : ''} in your cart</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item, index) => (
              <motion.div
                key={item.product.id}
                className="bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-stone-800">{item.product.name}</h3>
                    <p className="text-stone-600 text-sm">{item.product.description.substring(0, 80)}...</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-lg font-bold text-emerald-700">{item.product.price}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-stone-800">
                      ₹{(parseFloat(item.product.price.replace('₹', '').replace('/-', '')) * item.quantity).toFixed(0)}/-
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 mt-2 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg h-fit"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-stone-600">{item.product.name} x{item.quantity}</span>
                  <span className="font-medium text-stone-800">
                    ₹{(parseFloat(item.product.price.replace('₹', '').replace('/-', '')) * item.quantity).toFixed(0)}/-
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 pt-4 mb-6">
              <div className="flex justify-between text-lg font-bold">
                <span className="text-stone-800">Total</span>
                <span className="text-emerald-700">₹{state.total.toFixed(0)}/-</span>
              </div>
              <p className="text-stone-500 text-sm mt-1">Free delivery on orders above ₹500</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </button>
              <button
                onClick={clearCart}
                className="w-full text-stone-600 hover:text-stone-800 px-6 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;