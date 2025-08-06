// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'; // Icons for contact info

const ContactSection = ({ isDarkMode }) => {
  // State for form data, submission status, and feedback message
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set submitting state to true
    setSubmitMessage(''); // Clear previous messages

    // --- IMPORTANT: Replace this with your actual form submission logic ---
    // For a real portfolio, you'd integrate with a backend service like:
    // - Formspree.io: Simple for static sites (e.g., set form 'action' attribute)
    // - Netlify Forms / Vercel Forms: If hosting on these platforms
    // - Your own backend API (Node.js/Express, Python/Flask, etc.)
    // For now, it's just a simulated asynchronous call:
    try {
      console.log('Form Data Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call delay
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Variants for the entire section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // Start hidden, 100px below
    visible: {
      opacity: 1,
      y: 0, // Slides up
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
        staggerChildren: 0.2, // Stagger delay for children (form, contact info)
      },
    },
  };

  // Variants for individual items within the section (form, contact details)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start hidden, 30px below
    visible: {
      opacity: 1,
      y: 0, // Slides up
      transition: {
        type: "spring", // Spring animation
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Variants for form input focus animation
  const inputVariants = {
    focus: {
      borderColor: '#4299E1', // Accent blue border on focus
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)', // Subtle glow matching accent
      scale: 1.01, // Slightly enlarge
      transition: { duration: 0.2 } // Quick transition
    },
  };

  return (
    <section id="contact" className="py-16">
      {/* Section Heading */}
      <motion.h2
        className={`text-5xl font-extrabold text-center mb-12 transition-colors duration-300 ${
          isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
        }`}
        initial={{ opacity: 0, y: -50 }} // Start hidden, slightly above
        whileInView={{ opacity: 1, y: 0 }} // Animate when element enters viewport
        viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of element is visible
        transition={{ duration: 0.8 }} // Animation duration
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className={`max-w-4xl mx-auto p-8 rounded-lg shadow-xl border transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-[#161B22] border-[#2D3748]' 
            : 'bg-white border-gray-200'
        }`}
        variants={sectionVariants} // Apply section animation variants
        initial="hidden" // Start hidden
        whileInView="visible" // Animate when element enters viewport
        viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of element is visible
      >
        {/* Contact Form */}
        <motion.form onSubmit={handleSubmit} variants={itemVariants} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
            >
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
              }`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
                }`}
                placeholder="Your name"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              variants={inputVariants}
              whileFocus="focus"
            >
              <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
              }`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
                }`}
                placeholder="your.email@example.com"
              />
            </motion.div>
          </div>

          {/* Message Input */}
          <motion.div
            variants={inputVariants}
            whileFocus="focus"
            className="mb-6"
          >
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
            }`}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]' 
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
              }`}
              placeholder="Your message..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#4299E1] text-gray-900 hover:bg-[#63B3ED] disabled:bg-[#2D3748]' 
                : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Submit Message */}
          {submitMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg transition-colors duration-300 ${
                submitMessage.includes('Thank you') 
                  ? (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                  : (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
              }`}
            >
              {submitMessage}
            </motion.p>
          )}
        </motion.form>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className={`flex items-center p-4 rounded-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-[#0D1117]' : 'bg-gray-50'
          }`}>
            <EnvelopeIcon className={`h-6 w-6 mr-3 transition-colors duration-300 ${
              isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
            }`} />
            <div>
              <p className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-900'
              }`}>Email</p>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-[#A0AEC0]' : 'text-gray-600'
              }`}>murlikrishnanaral2004@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className={`flex items-center p-4 rounded-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-[#0D1117]' : 'bg-gray-50'
          }`}>
            <PhoneIcon className={`h-6 w-6 mr-3 transition-colors duration-300 ${
              isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
            }`} />
            <div>
              <p className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-900'
              }`}>Phone</p>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-[#A0AEC0]' : 'text-gray-600'
              }`}>+91 91754 82748</p>
            </div>
          </div>

          {/* Location */}
          <div className={`flex items-center p-4 rounded-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-[#0D1117]' : 'bg-gray-50'
          }`}>
            <MapPinIcon className={`h-6 w-6 mr-3 transition-colors duration-300 ${
              isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
            }`} />
            <div>
              <p className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-900'
              }`}>Location</p>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-[#A0AEC0]' : 'text-gray-600'
              }`}>Solapur, India</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;