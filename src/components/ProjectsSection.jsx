// src/components/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

// Sample project data
const projects = [
  {
    title: 'ShareMyRide',
    description: 'A React Native and Mern Stack based project for a perfect and secure platform for Ride sharing for cost effective travelling in inter and intra city by local peoples with their own empty seats vehicles.',
    image: '/smr.png',
    liveLink: 'https://smr-ten.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'AI ChatBot',
    description: 'Developed an AI-powered chatbot that understands and responds to user queries intelligently. Integrated an AI Tool Api into it.',
    image: '/aicb.png',
    liveLink: 'https://ai-chatbot-gamma-gray-21.vercel.app/',
    codeLink: '#',
  },
  {
    title: 'SolapurMall - A Complete Web Directory',
    description: 'A Website that represents almost 5000+ Firm listings of the Solapur areawise. Used React.js, Spring Boot, and MySQL to Redesign it newly using the existing old website. Fully deployed on their github which is now Live.',
    image: '/smit.png',
    liveLink: 'https://solapurmall.com/env',
    codeLink: '#',
  },
  {
    title: 'Collage Generator ',
    description: 'A platform used to convert your photo into collage of signatures.',
    image: '/cg.png',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Supermall',
    description: 'A E-commerce platform developed using html css and javascript.',
    image: '/supM.png',
    liveLink: 'https://mr-naral.github.io/SuperMall/index.html',
    codeLink: '#',
  },
  {
    title: 'Simon Says Game',
    description: 'Built a Simon Says game using HTML, CSS, and JavaScript! 🎮Challenge yourself to remember the pattern and test your memory 🧠.',
    image: '/game1.png',
    liveLink: 'https://mr-naral.github.io/SimonSaysGame/',
    codeLink: '#',
  },
  {
    title: 'Spotify Clone',
    description: 'Built a web application replicating Spotify’s core features of UI',
    image: '/spoti5.png',
    liveLink: 'https://mr-naral.github.io/MySpotify/',
    codeLink: '#',
  },
  {
    title: 'TO DO LIST',
    description: 'A simple to-do list application that allows users to add, remove, and edit tasks.',
    image: '/todo.png',
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
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="py-16">
      <motion.h2
        className={`text-5xl font-extrabold text-center mb-12 transition-colors duration-300 ${
          isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
        }`}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        My Recent Work
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} isDarkMode={isDarkMode} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
