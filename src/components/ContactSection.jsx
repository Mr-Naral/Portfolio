// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ContactSection = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      console.log('Form Data Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you for your message! I will get back to you soon.');

      // Redirect to Gmail compose
      const { name, email, message } = formData;
      const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=murlikrishnanaral2004@gmail.com&su=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;
      window.open(gmailURL, '_blank');

      // Clear form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };


  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const inputVariants = {
    focus: {
      borderColor: '#4299E1',
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      scale: 1.01,
      transition: { duration: 0.2 }
    },
  };

  const contactItems = [
    {
      title: "Email",
      value: "murlikrishnanaral2004@gmail.com",
      Icon: EnvelopeIcon
    },
    {
      title: "Phone",
      value: "+91 91754 82748",
      Icon: PhoneIcon
    },
    {
      title: "Location",
      value: "Solapur, India",
      Icon: MapPinIcon
    }
  ];

  return (
    <section id="contact" className="py-16">
      <motion.h2
        className={`text-5xl font-extrabold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
          }`}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className={`max-w-4xl mx-auto p-8 rounded-lg shadow-xl border transition-colors duration-300 ${isDarkMode ? 'bg-[#161B22] border-[#2D3748]' : 'bg-white border-gray-200'
          }`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Contact Form */}
        <motion.form onSubmit={handleSubmit} variants={itemVariants} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'}`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
                  }`}
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
                  }`}
                placeholder="your.email@example.com"
              />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={inputVariants} whileFocus="focus" className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'}`}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-[#0D1117] border-[#2D3748] text-[#E2E8F0] focus:border-[#4299E1]'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-600'
                }`}
              placeholder="Your message..."
            />
          </motion.div>

          {/* Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${isDarkMode
                ? 'bg-[#4299E1] text-gray-900 hover:bg-[#63B3ED] disabled:bg-[#2D3748]'
                : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {submitMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg ${submitMessage.includes('Thank you')
                  ? (isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800')
                  : (isDarkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800')
                }`}
            >
              {submitMessage}
            </motion.p>
          )}
        </motion.form>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="grid text-sm w-full grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map(({ title, value, Icon }, index) => (
            <div
              key={index}
              className={`flex items-start p-4  rounded-lg transition-colors duration-300 ${isDarkMode ? 'bg-[#0D1117]' : 'bg-gray-50'
                }`}
            >
              <Icon className={`h-6 w-6 mr-3 mt-1 ${isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'}`} />
              <div className="break-words w-full">
                <p className={`font-semibold ${isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-900'}`}>{title}</p>
                <p className={`${isDarkMode ? 'text-[#A0AEC0]' : 'text-gray-600'}`}>{value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
