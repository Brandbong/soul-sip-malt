import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="text-center p-8 rounded-4xl bg-white shadow-soft hover:shadow-medium transition-all duration-500 card-hover group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 gradient-primary text-white rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-neutral-800 mb-4 font-serif group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;