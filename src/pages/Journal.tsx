import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      slug: 'nutrient-beverages-modern-health-solution',
      title: 'Nutrient Beverages: The Modern Answer to Health Challenges',
      excerpt: 'In today\'s fast-paced world, maintaining optimal nutrition can be challenging. Soul Sip\'s nutrient beverages offer a convenient and effective solution to meet your daily nutritional needs.',
      image: 'images/journal/Nutrient Beverages The Modern Answer to Health Challenges.png',
      author: 'Soul Sip Nutrition Team',
      date: '2025-01-15',
      readTime: '6 min read',
      category: 'Product Spotlight'
    },
    {
      id: 2,
      slug: 'fig-malt-superfood-drink',
      title: 'Why Fig Malt is the Superfood Drink Your Body Needs',
      excerpt: 'Soul Sip\'s Fig Malt is a unique blend that combines the natural sweetness and nutritional benefits of figs with the power of malted grains. Our traditional recipe has been enhanced with modern nutritional science.',
      image: 'images/journal/Why Fig Malt is the Superfood Drink Your Body Needs.png',
      author: 'Soul Sip Product Specialist',
      date: '2025-01-12',
      readTime: '4 min read',
      category: 'Product Features'
    },
    {
      id: 3,
      slug: 'banana-flower-womens-health-secret',
      title: 'Banana Flower: The Ancient Secret for Women\'s Health',
      excerpt: 'Discover the traditional wisdom behind our Banana Flower beverage, specially formulated to support women\'s health and wellness. This unique product combines ancient knowledge with modern nutritional science.',
      image: 'images/journal/Banana Flower The Ancient Secret for Women\’s Health.png',
      author: 'Soul Sip Research Team',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Women\'s Wellness'
    },
    {
      id: 4,
      slug: 'abc-malt-kids-nutrition-hack',
      title: 'ABC Malt – The Smart Way to Sneak Nutrition into Kids\' Meals',
      excerpt: 'Soul Sip\'s ABC Malt is specifically designed to make nutrition fun and tasty for children. Our special formula combines essential nutrients with a delicious taste that kids love.',
      image: 'images/journal/ABC Malt – The Smart Way to Sneak Nutrition into Kids\’ Meals.png',
      author: 'Soul Sip Development Team',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'Kids Nutrition'
    },
    {
      id: 5,
      slug: 'golden-milk-ayurvedic-bedtime-ritual',
      title: 'Golden Milk: The Ayurvedic Bedtime Drink That Heals from Within',
      excerpt: 'Discover the ancient wisdom of Ayurveda with Soul Sip\'s Golden Milk, a soothing blend of turmeric, saffron, and premium herbs that promotes restful sleep and overall wellness.',
      image: 'images/journal/Golden Milk The Ayurvedic Bedtime Drink That Heals from Within.png',
      author: 'Ayurveda Specialist',
      date: '2025-01-05',
      readTime: '5 min read',
      category: 'Ayurveda'
    },
    {
      id: 6,
      slug: 'storage-tips-malt-freshness',
      title: 'Keeping Your Malts Fresh: Essential Storage Tips',
      excerpt: 'Proper storage is key to maintaining the quality, flavor, and nutritional value of your Soul Sip malt products. Follow these expert guidelines to ensure your malts stay fresh and potent.',
      image: 'images/journal/Keeping Your Malts Fresh Essential Storage Tips.png',
      author: 'Quality Team',
      date: '2025-01-03',
      readTime: '3 min read',
      category: 'Storage Tips'
    }
  ];

  const categories = ['All', 'Product Spotlight', 'Product Features', 'Women\'s Wellness', 'Kids Nutrition', 'Ayurveda', 'Storage Tips'];

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
            Wellness Journal
          </motion.h1>
          <motion.p
            className="body-lg text-primary-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, recipes, and wellness wisdom to support your journey to better health and traditional nutrition
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 bg-neutral-100 text-neutral-700 hover:bg-primary-100 hover:text-primary-700 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid with Card Overlays */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
              >
                <Link to={`/journal/${article.slug}`}>
                  <div className="relative h-80 rounded-4xl overflow-hidden shadow-soft group-hover:shadow-large transition-all duration-500 card-hover">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 journal-card-overlay"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-4 text-xs text-white/80 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 font-serif group-hover:text-primary-200 transition-colors text-white">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-4 leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-white/70" />
                          <span className="text-xs text-white/80">{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-primary-200 group-hover:text-white transition-colors">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Instructions */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-neutral-800 mb-4 font-serif">
              Storage Instructions for Maximum Freshness
            </h2>
            <p className="body-lg text-neutral-600">
              Follow these simple guidelines to maintain the quality and nutrition of your malt mixes
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-4xl p-8 lg:p-12 shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Transfer to Clean Container</h4>
                    <p className="text-neutral-600 text-sm">Use a clean, dry, airtight container for storage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Use Dry Spoon Only</h4>
                    <p className="text-neutral-600 text-sm">Always use a completely dry spoon to prevent moisture</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Store in Cool Place</h4>
                    <p className="text-neutral-600 text-sm">Keep away from direct sunlight and heat sources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">No Chemicals or Preservatives</h4>
                    <p className="text-neutral-600 text-sm">Our natural products stay fresh with proper storage</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-6 font-serif">
              Stay Updated with Wellness Tips
            </h2>
            <p className="body-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest wellness insights, traditional recipes, and health tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl text-neutral-800 focus:ring-2 focus:ring-primary-300 focus:outline-none shadow-soft"
              />
              <motion.button
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-soft hover:shadow-medium btn-ripple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Journal;