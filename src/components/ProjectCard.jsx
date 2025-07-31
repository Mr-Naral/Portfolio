// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, liveLink, codeLink }) => {
  // Variants for the card's animation (fade-in, slide-up, and hover effect)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden, 50px below
    visible: {
      opacity: 1,
      y: 0, // Slide up to original position
      transition: {
        type: "spring", // Spring animation
        damping: 12,    // Less damping
        stiffness: 100, // More stiffness
      },
    },
    hover: {
      scale: 1.03, // Slightly enlarge on hover
      boxShadow: "0 15px 30px rgba(0,0,0,0.4)", // Add a darker, larger shadow on hover
      transition: {
        duration: 0.2, // Quick transition for hover effect
      },
    },
  };

  return (
    <motion.div
      // Styling for the project card:
      // bg-white rounded-lg shadow-xl overflow-hidden p-6 border border-gray-200: Light mode card styling.
      // dark:bg-[#161B22] dark:shadow-2xl dark:border-[#2D3748]: Dark mode card styling (secondary dark bg, more prominent shadow, dark border).
      className="bg-white rounded-lg shadow-xl overflow-hidden p-6 border border-gray-200
                 dark:bg-[#161B22] dark:shadow-2xl dark:border-[#2D3748]"
      variants={cardVariants} // Apply the animation variants
      whileHover="hover" // Trigger 'hover' variant on hover
      initial="hidden" // Start with 'hidden' state
      // Note: This 'animate="visible"' is for demonstration. In ProjectsSection,
      // 'whileInView="visible"' will be used for scroll-triggered animations.
      animate="visible"
      viewport={{ once: true }} // Ensures the animation plays only once when it enters the viewport
    >
      {/* Project Image (if provided) */}
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      {/* Project Title */}
      <h3
        // text-3xl font-bold text-gray-900 mb-2: Light mode title styling.
        // dark:text-[#63B3ED]: Dark mode highlight blue for title.
        className="text-3xl font-bold text-gray-900 mb-2
                     dark:text-[#63B3ED]">{title}</h3>
      {/* Project Description */}
      <p
        // text-gray-700 text-lg mb-4: Light mode description styling.
        // dark:text-[#E2E8F0]: Dark mode soft off-white text.
        className="text-gray-700 text-lg mb-4
                    dark:text-[#E2E8F0]">{description}</p>
      {/* Action Buttons (Live Demo, Code) */}
      <div className="flex justify-end space-x-4 mt-6">
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            // bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700: Light mode button styling.
            // dark:bg-[#4299E1] dark:text-gray-900 dark:hover:bg-[#63B3ED] dark:hover:text-white: Dark mode button styling (accent blue, dark text, highlight blue on hover).
            // transition-colors duration-300: Smooth color transition.
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-700 transition-colors duration-300
                       dark:bg-[#4299E1] dark:text-gray-900 dark:hover:bg-[#63B3ED] dark:hover:text-white"
            whileHover={{ scale: 1.05 }} // Enlarge slightly on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
          >
            Live Demo
          </motion.a>
        )}
        {codeLink && (
          <motion.a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            // border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-600 hover:text-white: Light mode outlined button.
            // dark:border-[#4299E1] dark:text-[#4299E1] dark:hover:bg-[#4299E1] dark:hover:text-[#0D1117]: Dark mode outlined button (accent blue border/text, accent blue fill on hover, primary dark text on hover).
            // transition-colors duration-300: Smooth color transition.
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300
                       dark:border-[#4299E1] dark:text-[#4299E1] dark:hover:bg-[#4299E1] dark:hover:text-[#0D1117]"
            whileHover={{ scale: 1.05 }} // Enlarge slightly on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
          >
            Code
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;