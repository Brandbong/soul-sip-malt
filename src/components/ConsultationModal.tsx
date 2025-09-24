
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must contain only digits';
    }
    if (!formData.date) newErrors.date = 'Preferred Date is required';
    if (!formData.time) newErrors.time = 'Preferred Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4"
          variants={modalVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {isSubmitted ? (
            <div className="p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
              <p className="text-gray-600">We’ll reach out soon to confirm your consultation.</p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#418968] text-white px-6 py-2 rounded-lg hover:bg-[#356e54] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Schedule Free Consultation</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="date"
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    <input
                      type="time"
                      name="time"
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                  </div>
                  {errors.date && <p className="text-red-500 text-sm -mt-3">{errors.date}</p>}
                  {errors.time && <p className="text-red-500 text-sm -mt-3 text-right">{errors.time}</p>}
                </div>
                <div className="mt-4">
                  <textarea
                    name="message"
                    placeholder="Additional Notes (optional)"
                    rows="4"
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg border-gray-300"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f7c30e] text-gray-800 font-bold p-4 rounded-lg hover:bg-opacity-90 transition-all disabled:bg-gray-400"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </motion.div>
      )}
      </AnimatePresence>
  );
};

export default ConsultationModal;
