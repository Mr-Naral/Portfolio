// src/components/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

// Sample project data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product catalog, and secure payment gateway integration.',
    image: 'https://via.placeholder.com/400x250/111827/9CA3AF?text=Project+1',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Real-time Chat Application',
    description: 'Developed a real-time chat application with WebSockets, private messaging, and user presence indicators.',
    image: 'https://via.placeholder.com/400x250/111827/9CA3AF?text=Project+2',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Personal Blog Site',
    description: 'A responsive blog platform with Markdown support, custom CMS, and integrated search functionality.',
    image: 'https://via.placeholder.com/400x250/111827/9CA3AF?text=Project+3',
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Task Management Tool',
    description: 'A Kanban-style task management tool with drag-and-drop functionality and user collaboration features.',
    image: 'https://via.placeholder.com/400x250/111827/9CA3AF?text=Project+4',
    liveLink: '#',
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
