import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', color: 'bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700' },
    { id: 'nutrient-digestive', name: 'Nutrient & Digestive Health', color: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200' },
    { id: 'hormonal-immunity', name: 'Hormonal & Immunity Support', color: 'bg-primary-100 text-primary-700 hover:bg-primary-200' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesCategory;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'nutrient-digestive') {
      matchesCategory = product.name === 'Fig Malt' || product.name === 'ABC Malt';
    } else if (selectedCategory === 'hormonal-immunity') {
      matchesCategory = product.name === 'Banana Flower Malt' || product.name === 'Golden Milk';
    } else {
      matchesCategory = false;
    }
    return matchesSearch && matchesCategory;
  });

  const scrollProducts = (direction: 'left' | 'right') => {
    const container = document.getElementById('shop-carousel');
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16 lg:pt-20 pb-16 lg:pb-0">
      {/* Header */}
      <section className="py-20 lg:py-32 gradient-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.h1
            className="heading-lg mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shop Our Premium Malts
          </motion.h1>
          <motion.p
            className="body-lg text-primary-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our carefully crafted collection of traditional malt blends, each designed to nourish your body and soul.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search malts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 shadow-soft"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'gradient-primary text-white shadow-medium'
                      : category.color
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products - Horizontal Carousel for Mobile, Grid for Desktop */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Mobile/Tablet Carousel */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-neutral-800 font-serif">
                {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
              </h3>
              <div className="flex space-x-2">
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
            </div>

            <div
              id="shop-carousel"
              className="flex space-x-6 overflow-x-auto carousel-container pb-4"
            >
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="flex-none w-80">
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">No products found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your search or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="gradient-primary text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;