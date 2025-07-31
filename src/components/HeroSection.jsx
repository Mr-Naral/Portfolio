// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TechGlobe from './TechGlobe.jsx'; // Import the new globe component
import Typewriter from './Typewriter.jsx';

const HeroSection = () => {
  // Variants for the main container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each main child element's animation
      },
    },
  };

  // Variants for individual text lines and button groups
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Variants for staggering words in the rainbow text
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const rainbowText = "I build things for the WEB".split(" ");

  return (
    <section id="home"
      // min-h-screen: Ensures section takes at least the full viewport height.
      // relative: Needed for the starry background (if not on body)
      // overflow-hidden: Prevent scrollbar from globe animation.
      // px-4 py-16: Horizontal padding and vertical padding.
      // For two-column layout: flex items-center justify-center
      className="min-h-screen relative overflow-hidden px-4 py-16
                 flex items-center justify-center"
      // The background stars are now applied to the `body` in index.css
      // If you want them only here, you'd add classes like:
      // bg-[#0D1117] [background-image:url('/path/to/stars.png')]
      // Or use absolute positioned divs with the CSS from index.css.
    >
      <div
        // Container for the two-column layout
        // max-w-7xl mx-auto: Max width and center.
        // flex flex-col lg:flex-row items-center justify-between: Responsive flex layout.
        // gap-12: Spacing between columns.
        className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left Side: Text and Buttons */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left z-10" // Adjust width and text alignment for large screens
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First Line: "ii, I'm Yogesh Sai" */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight
                       text-white" // Default white text
            variants={itemVariants}
          >
            <span className="text-[#FF6B6B]">Hi,</span> I'm{' '}
            <span className="relative inline-block">
              Murlikrishna
              {/* <Typewriter strings={Murli}/> */}
              <motion.span
                className="absolute right-0 top-0 bottom-0 w-1 bg-white
                           dark:bg-[#FFD700]" // Blinking pipe cursor
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
              />
            </span>
          </motion.h1>

          {/* Second Line: "I build things for the WEB" with Rainbow Effect */}
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight
                       bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500
                       text-transparent bg-clip-text
                       animate-rainbow-text-animation" // Apply custom rainbow animation
            style={{ backgroundSize: '200% auto' }} // Necessary for the background-position animation
            variants={itemVariants}
          >
            <motion.span variants={containerVariants} initial="hidden" animate="visible">
              {rainbowText.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-2">
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Discover the bespoke solutions and projects delivered.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            {/* My Resume Button */}
            <motion.a
              href="/path/to/your-resume.pdf" // Replace with actual path to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold
                         bg-[#FFD700] text-gray-900 shadow-lg
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
            </motion.a>
            {/* Mail Me Button */}
            <motion.a
              href="mailto:your.email@example.com" // Replace with your email
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold
                         border border-gray-400 text-gray-300 shadow-lg
                         hover:bg-gray-700 hover:border-gray-700 hover:text-white
                         dark:hover:bg-[#1A202C] dark:hover:border-[#1A202C] dark:hover:text-[#FFD700]
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mail Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Globe/Network Visualization */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center h-[60vh] lg:h-[80vh] w-full z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <TechGlobe />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;