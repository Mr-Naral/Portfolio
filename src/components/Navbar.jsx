// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Icons for theme toggle and mobile menu

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Framer Motion variants for the main navigation bar's entrance animation
  const navVariants = {
    hidden: { opacity: 0, y: -50 }, // Starts hidden, slightly above its final position
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }, // Fades in and slides down
  };

  // Framer Motion variants for navigation links on hover/tap
  const linkVariants = {
    hover: { scale: 1.05, color: isDarkMode ? '#63B3ED' : '#2563EB' }, // Slightly enlarge and change color on hover based on mode
    tap: { scale: 0.95 }, // Shrink slightly on tap for feedback
  };

  // Framer Motion variants for mobile menu items
  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      // Styling for the navbar:
      // sticky top-0 z-50: Makes the navbar stick to the top when scrolling.
      // bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md: Light mode styles.
      // dark:bg-[#161B22] dark:bg-opacity-90 dark:shadow-xl: Dark mode styles.
      // py-4: Vertical padding.
      className="sticky top-0 z-50 bg-gray-50 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-md
                 dark:bg-[#161B22] dark:bg-opacity-90 dark:shadow-xl py-4"
      variants={navVariants} // Apply the entrance animation variants
      initial="hidden" // Start with the 'hidden' state
      animate="visible" // Animate to the 'visible' state on mount
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
        {/* Portfolio Title/Logo */}
        <motion.a
          href="#" // Link to the top of the page
          // Styling for the title:
          // text-3xl font-bold: Large, bold text.
          // text-[#2563EB]: Light mode accent blue.
          // dark:text-[#63B3ED]: Dark mode highlight blue.
          // hover:text-[#2563EB] dark:hover:text-white: Hover effects for both modes.
          // transition-colors duration-300: Smooth color transition on hover.
          className="text-3xl font-bold text-[#2563EB] dark:text-[#63B3ED] hover:text-[#2563EB] dark:hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 0.8, delay: 0.3 }} // Animation duration and delay
        >
          <p>{"</>MrN "}</p>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`} // Anchor link to respective section
              // Styling for links:
              // text-gray-700 hover:text-blue-600: Light mode text and hover.
              // dark:text-[#E2E8F0] dark:hover:text-[#4299E1]: Dark mode text and hover.
              // font-medium transition-colors duration-200: Font weight and smooth color transition.
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200
                         dark:text-[#E2E8F0] dark:hover:text-[#4299E1]"
              variants={linkVariants} // Apply hover/tap animations
              whileHover="hover" // Trigger 'hover' variant on hover
              whileTap="tap" // Trigger 'tap' variant on tap
              initial={{ opacity: 0, y: -20 }} // Start hidden, slightly above
              animate={{ opacity: 1, y: 0 }} // Fade in and slide down
              transition={{ delay: 0.1 * index + 0.5 }} // Staggered delay for each link
            >
              {item}
            </motion.a>
          ))}

          {/* Dark Mode Toggle Button (Desktop) */}
          <motion.button
            onClick={toggleDarkMode} // Call the toggle function on click
            // Styling for the button:
            // p-2 rounded-full: Padding and fully rounded.
            // bg-gray-200 text-gray-700 hover:bg-gray-300: Light mode styles.
            // dark:bg-[#0D1117] dark:text-[#4299E1] dark:hover:bg-[#1A202C] dark:hover:text-[#63B3ED]: Dark mode styles.
            // transition-colors duration-300: Smooth color transition.
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300
                       dark:bg-[#0D1117] dark:text-[#4299E1] dark:hover:bg-[#1A202C] dark:hover:text-[#63B3ED]"
            whileHover={{ scale: 1.1, rotate: 15 }} // Enlarge and rotate slightly on hover
            whileTap={{ scale: 0.9 }} // Shrink slightly on tap
          >
            {/* Conditionally render Sun or Moon icon based on current theme */}
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" /> // Sun icon for dark mode (suggests switching to light)
            ) : (
              <MoonIcon className="h-6 w-6" /> // Moon icon for light mode (suggests switching to dark)
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle Button (Mobile) */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300
                       dark:bg-[#0D1117] dark:text-[#4299E1] dark:hover:bg-[#1A202C] dark:hover:text-[#63B3ED]"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-[#E2E8F0] p-2 rounded-md
                       hover:bg-gray-200 dark:hover:bg-[#1A202C] transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-7 w-7" /> // Close icon when menu is open
            ) : (
              <Bars3Icon className="h-7 w-7" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // bg-gray-50 bg-opacity-90
          className="md:hidden px-4 pt-2 pb-4 space-y-2
                       backdrop-filter backdrop-blur-lg shadow-inner
                     dark:bg-[#161B22] dark:bg-opacity-90"
        >
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              //text-gray-700 hover:bg-gray-200 hover:text-blue-600
              className="block text-lg font-medium py-2 px-3 rounded-md
                         
                         dark:text-[#E2E8F0] dark:hover:bg-[#0D1117] dark:hover:text-[#4299E1]
                         transition-colors duration-200"
              variants={mobileMenuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.05 * index }}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
