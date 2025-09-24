import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Leaf } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: '2010', title: 'The Beginning', description: 'Started in Naveena\'s kitchen with a passion for traditional wellness' },
    { year: '2015', title: 'First Products', description: 'Launched our signature Fig Malt blend to local community' },
    { year: '2020', title: 'Growing Family', description: 'Expanded to serve thousands of health-conscious families' },
    { year: '2025', title: 'Global Vision', description: 'Bringing traditional wellness to modern lives worldwide' }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-6">
              From a Mother's Kitchen to a Global Mission
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Soul Sip Malts was founded by Naveena, a passionate food technologist inspired by her mother's decade-long expertise in food and nutrition. What began as a simple idea to create instant yet nutritious drinks has evolved into a mission – bringing balanced nutrition, antioxidants, and tradition into every home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="images/Founder.png"
                alt="Our Founder"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800">
                Our Founder's Vision
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                While the world chases coffee chains and tea franchises, we envisioned something revolutionary: a Healthy Drink Movement. Our malts are meticulously designed for all age groups, blending ancient ingredients with modern convenience and scientific precision.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Whether you want to start a health-focused franchise or simply enjoy wholesome drinks at home, Soul Sip Malts is here to nourish both body and business. Each blend represents our unwavering commitment to bringing traditional wellness into modern lifestyles.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700">15+</div>
                  <div className="text-neutral-600">Years of Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-700">10k+</div>
                  <div className="text-neutral-600">Happy Families</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, title: 'Family First', description: 'Every recipe is tested by our own families before reaching yours' },
              { icon: <Leaf className="w-8 h-8" />, title: 'Pure & Natural', description: 'Only the finest natural ingredients, no shortcuts or compromises' },
              { icon: <Users className="w-8 h-8" />, title: 'Community Care', description: 'Supporting local farmers and communities in our ingredient sourcing' },
              { icon: <Award className="w-8 h-8" />, title: 'Quality Excellence', description: 'Rigorous quality standards ensure consistency in every batch' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-700 rounded-2xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Our Journey
            </h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="bg-neutral-50 p-6 rounded-2xl">
                      <div className="text-2xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">{milestone.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-primary-600 rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;