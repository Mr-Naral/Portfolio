// src/components/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

// Store images in /public and reference without leading slash if possible
const projects = [
  {
    title: 'ShareMyRide',
    description: 'A React Native and MERN Stack project for secure ride sharing.',
    image: 'smr.png',
    liveLink: 'https://smr-ten.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'AI ChatBot',
    description: 'AI-powered chatbot with API integration.',
    image: 'aicb.png',
    liveLink: 'https://ai-chatbot-gamma-gray-21.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'SolapurMall',
    description: '5000+ firm listings redesigned using React.js & Spring Boot.',
    image: 'smit.png',
    liveLink: 'https://solapurmall.com/env',
    codeLink: '#',
  },
  {
    title: 'Collage Generator',
    description: 'Convert photos into signature collages.',
    image: 'cg.png',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Supermall',
    description: 'HTML, CSS, JS-based E-commerce platform.',
    image: 'supM.png',
    liveLink: 'https://mr-naral.github.io/SuperMall/index.html',
    codeLink: '#',
  },
  {
    title: 'Simon Says Game',
    description: 'Pattern memory challenge game.',
    image: 'game1.png',
    liveLink: 'https://mr-naral.github.io/SimonSaysGame/',
    codeLink: '#',
  },
  {
    title: 'Spotify Clone',
    description: 'Spotify UI replica.',
    image: 'spoti5.png',
    liveLink: 'https://mr-naral.github.io/MySpotify/',
    codeLink: '#',
  },
  {
    title: 'TO DO LIST',
    description: 'Basic task manager.',
    image: 'todo.png',
    liveLink: 'https://mr-naral.github.io/Todo_List/',
    codeLink: '#',
  },
];

const ProjectsSection = ({ isDarkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12 transition-colors duration-300 ${
          isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
        }`}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        My Recent Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }} // Lowered so mobile triggers easier
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} isDarkMode={isDarkMode} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
