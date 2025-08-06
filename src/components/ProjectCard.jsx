// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, liveLink, codeLink, isDarkMode }) => {
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
      className={`rounded-lg  shadow-xl overflow-hidden p-6 border transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-[#161B22] shadow-2xl border-[#2D3748]' 
          : 'bg-white border-gray-200'
      }`}
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
        <img src={image} alt={title} className="w-full  object-cover rounded-md mb-4" />
      )}
      {/* Project Title */}
      <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
        isDarkMode ? 'text-[#63B3ED]' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      {/* Project Description */}
      <p className={`text-lg mb-4 transition-colors duration-300 ${
        isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
      }`}>
        {description}
      </p>
      {/* Action Buttons (Live Demo, Code) */}
      <div className="flex justify-start  space-x-4 mb-2 ">
        {liveLink && (
          <motion.a
            href={liveLink}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className={`px-6 py-2 mb-2 align-centre rounded-full text-md font-semibold transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-[#4299E1] text-gray-900 hover:bg-[#63B3ED] hover:text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            whileHover={{ scale: 1.05 }} // Enlarge slightly on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
          >
            Live Demo
          </motion.a>
        )}
        {/* {codeLink && (
          <motion.a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-6 py-2 rounded-full text-md font-semibold transition-colors duration-300 ${
              isDarkMode 
                ? 'border-[#4299E1] text-[#4299E1] hover:bg-[#4299E1] hover:text-[#0D1117]' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }} // Enlarge slightly on hover
            whileTap={{ scale: 0.95 }} // Shrink on tap
          >
            Code
          </motion.a>
        )} */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;