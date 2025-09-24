import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award, CheckCircle, ArrowRight } from 'lucide-react';
import ConsultationModal from '../components/ConsultationModal';

const Franchise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const benefits = [
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Growing Market', description: 'Health and wellness industry growing at 8.5% annually' },
    { icon: <Users className="w-8 h-8" />, title: 'Proven Model', description: 'Tested business model with successful franchises nationwide' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Low Investment', description: 'Affordable startup costs with high profit margins' },
    { icon: <Award className="w-8 h-8" />, title: 'Brand Support', description: 'Complete training and ongoing marketing support' }
  ];

  const steps = [
    { step: '01', title: 'Initial Consultation', description: 'Discuss your goals and assess market opportunity in your area' },
    { step: '02', title: 'Business Plan', description: 'Receive detailed business plan and financial projections' },
    { step: '03', title: 'Training Program', description: 'Complete our comprehensive training on products and operations' },
    { step: '04', title: 'Launch Support', description: 'Grand opening support and ongoing business guidance' }
  ];

  const packages = [
    {
      title: 'Kiosk Setup',
      price: 'Low Investment',
      features: ['Compact kiosk design', 'Initial malt inventory', 'Basic training program', 'Marketing materials', '6 months support'],
      recommended: false
    },
    {
      title: 'Stall Integration',
      price: 'Medium Investment',
      features: ['Complete stall setup', 'Full product range', 'Comprehensive training', 'Marketing campaign', '12 months support', 'Territory guidance'],
      recommended: true
    },
    {
      title: 'Franchise Integration',
      price: 'Flexible Investment',
      features: ['Integrate with existing tea/coffee business', 'Full product training', 'Staff development', 'Marketing & advertising', 'Ongoing support', 'Business consultation', 'Custom solutions'],
      recommended: false
    }
  ];

  const handleGetStarted = (packageName) => {
    const phoneNumber = '918072361484'; // Replace with your WhatsApp number
    const message = `I'm interested in the ${packageName} franchise package.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16 lg:pt-20">
       <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Start Your Franchise Journey
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our growing family of entrepreneurs bringing traditional wellness to communities across the nation. Build a profitable business while making a positive impact on people's health.
          </motion.p>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-emerald-100 text-lg">
              <strong>Our Vision:</strong> Empower rural & suburban entrepreneurs while building a global wellness brand that revolutionizes the healthy drinks market.
            </p>
          </motion.div>
          <motion.button
            onClick={openModal}
            className="bg-white text-emerald-700 hover:bg-stone-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Why Choose Soul Sip Malts Franchise?
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Partner with a brand that's committed to your success and community wellness
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">{benefit.title}</h3>
                <p className="text-stone-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Your Journey to Success
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              We'll guide you every step of the way to ensure your franchise thrives
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-xl text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-2">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-emerald-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Choose Your Franchise Package
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Select the perfect package that fits your investment level and business goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  pkg.recommended ? 'border-emerald-500 scale-105' : 'border-stone-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">{pkg.title}</h3>
                  <div className="text-4xl font-bold text-emerald-700">{pkg.price}</div>
                  <div className="text-stone-500 text-sm">One-time investment</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleGetStarted(pkg.title)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.recommended
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;