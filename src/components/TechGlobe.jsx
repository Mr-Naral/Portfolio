// src/components/TechGlobe.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Tech stack with icons
const techIcons = [
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
  { name: 'Node.js', icon: '🌳', color: '#3C873A' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248' },
  { name: 'Java', icon: '☕', color: '#007396' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'C++', icon: '➕', color: '#00599C' },
  { name: 'HTML5', icon: '📄', color: '#E44D26' },
  { name: 'CSS3', icon: '🎨', color: '#1572B6' },
  { name: 'Spring Boot', icon: '🌸', color: '#6DB33F' },
  { name: 'Express.js', icon: '🚀', color: '#000000' },
  { name: 'TailwindCSS', icon: '🌬️', color: '#38B2AC' },
  { name: 'Redux', icon: '🔴', color: '#764ABC' },
  { name: 'MySQL', icon: '🐬', color: '#00758F' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Redis', icon: '💨', color: '#DC382D' },
  { name: 'Docker', icon: '🐳', color: '#2496ED' },
  { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
  { name: 'AWS', icon: '☁️', color: '#FF9900' },
  { name: 'Azure', icon: '🔵', color: '#0078D4' },
  { name: 'Git', icon: '🌿', color: '#F05032' },
  { name: 'GitHub', icon: '🐙', color: '#181717' },
  { name: 'VS Code', icon: '💻', color: '#007ACC' },
  { name: 'Figma', icon: '📐', color: '#F24E1E' },
  { name: 'Postman', icon: '📮', color: '#FF6C37' },
  { name: 'Jupyter', icon: '📊', color: '#F37626' },
];

const TechGlobe = ({ isDarkMode }) => {
  console.log('🌍 TechGlobe rendering with isDarkMode:', isDarkMode);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Globe */}
      <div className="relative">
        {/* Main Globe */}
        <motion.div
          className={`w-32 h-32 rounded-full border-2 ${
            isDarkMode 
              ? 'border-blue-400 bg-blue-900/20' 
              : 'border-blue-600 bg-blue-100/50'
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner Globe */}
        <motion.div
          className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-full border ${
            isDarkMode 
              ? 'border-green-400 bg-green-900/20' 
              : 'border-green-600 bg-green-100/50'
          }`}
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Core */}
        <div className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full ${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-400 to-purple-600' 
            : 'bg-gradient-to-br from-blue-500 to-purple-700'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Orbiting Tech Icons */}
      {techIcons.map((tech, index) => {
        const angle = (index / techIcons.length) * 2 * Math.PI;
        const radius = 120; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              x: [x, x],
              y: [y, y],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.1,
            }}
          >
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-600' 
                  : 'bg-white border border-gray-200'
              }`}
              whileHover={{ scale: 1.2, zIndex: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {tech.icon}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Additional orbiting rings */}
      <motion.div
        className={`absolute w-64 h-64 rounded-full border ${
          isDarkMode 
            ? 'border-purple-400/30' 
            : 'border-purple-600/30'
        }`}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className={`absolute w-80 h-80 rounded-full border ${
          isDarkMode 
            ? 'border-blue-400/20' 
            : 'border-blue-600/20'
        }`}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default TechGlobe;