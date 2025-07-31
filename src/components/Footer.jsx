// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      // bg-gray-200 py-8 text-gray-700 text-center mt-12 shadow-inner: Light mode footer styling.
      // dark:bg-[#161B22] dark:text-[#A0AEC0] dark:shadow-inner: Dark mode footer styling (secondary dark bg, muted text).
      className="bg-gray-200 py-8 text-gray-700 text-center mt-12 shadow-inner
                 dark:bg-[#161B22] dark:text-[#A0AEC0] dark:shadow-inner"
      initial={{ opacity: 0, y: 50 }} // Start hidden, 50px below
      whileInView={{ opacity: 1, y: 0 }} // Animate when element enters viewport
      viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of element is visible
      transition={{ duration: 0.6, delay: 0.2 }} // Animation duration and delay
    >
      <div className="container mx-auto px-4">
        {/* Copyright text */}
        <motion.p
          className="text-lg mb-2"
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ delay: 0.8 }} // Animation delay
        >
          &copy; {new Date().getFullYear()} Murlikrishna Naral. All rights reserved.
        </motion.p>
        {/* Design credit text */}
        <motion.p
          className="text-md text-gray-500 dark:text-[#A0AEC0]" // Muted text for light and dark mode
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ delay: 1 }} // Animation delay
        >
          Designed & Built with <span className="text-red-500">❤️</span> using React.js and Tailwind CSS.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;