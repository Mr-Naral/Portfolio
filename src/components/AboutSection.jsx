// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Array of skills with names and emojis for icons
const skills = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'Next.js', icon: '🚀' },
  { name: 'Node.js', icon: '🌳' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'TypeScript', icon: 'ʦ' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Git/GitHub', icon: '🐙' },
  { name: 'REST APIs', icon: '📡' },
];

const AboutSection = () => {
  // Variants for the entire section container, to trigger child animations on scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // Starts hidden, 100px below
    visible: {
      opacity: 1,
      y: 0, // Slides up to original position
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
        staggerChildren: 0.15, // Stagger delay for children (paragraphs, skill tags)
      },
    },
  };

  // Variants for individual text elements (paragraphs, sub-heading)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden, 50px below
    visible: {
      opacity: 1,
      y: 0, // Slides up
      transition: {
        type: "spring", // Spring animation
        damping: 10,
        stiffness: 100,
      },
    },
  };

  // Variants for individual skill tags
  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start hidden and small
    visible: { opacity: 1, scale: 1 }, // Fade in and scale up
    hover: { scale: 1.1, backgroundColor: '#4299E1', color: '#0D1117' }, // Enlarge, change background to accent blue, text to primary dark on hover
  };

  return (
    <section id="about" className="py-16">
      {/* Section Heading */}
      <motion.h2
        // text-5xl font-extrabold text-center mb-12: Styling for the heading
        // text-blue-600: Light mode accent blue
        // dark:text-[#4299E1]: Dark mode accent blue
        className="text-5xl font-extrabold text-center text-blue-600 mb-12
                   dark:text-[#4299E1]"
        initial={{ opacity: 0, y: -50 }} // Start hidden, slightly above
        whileInView={{ opacity: 1, y: 0 }} // Animate when element enters viewport
        viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of element is visible
        transition={{ duration: 0.8 }} // Animation duration
      >
        About Me
      </motion.h2>

      <motion.div
        // max-w-4xl mx-auto: Max width and center horizontally
        // bg-white p-8 rounded-lg shadow-xl border border-gray-200: Light mode card styling
        // dark:bg-[#161B22] dark:border-[#2D3748]: Dark mode card styling (secondary dark bg, dark border)
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200
                   dark:bg-[#161B22] dark:border-[#2D3748]"
        variants={sectionVariants} // Apply section animation variants
        initial="hidden" // Start hidden
        whileInView="visible" // Animate when element enters viewport
        viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of element is visible
      >
        {/* About Me Paragraph 1 */}
        <motion.p
          // text-gray-700 text-lg leading-relaxed mb-6: Light mode text styling
          // dark:text-[#E2E8F0]: Dark mode soft off-white text
          className="text-gray-700 text-lg leading-relaxed mb-6
                     dark:text-[#E2E8F0]"
          variants={itemVariants} // Apply individual item animation
        >
          Hello! I'm <span className='text-'>Murlikrishna Naral</span>, a passionate and results-driven developer with a knack for building beautiful and functional web applications. My journey into programming started with a fascination for how technology can solve real-world problems and create engaging user experiences.
        </motion.p>
        {/* About Me Paragraph 2 */}
        <motion.p
          // text-gray-700 text-lg leading-relaxed mb-8: Light mode text styling
          // dark:text-[#E2E8F0]: Dark mode soft off-white text
          className="text-gray-700 text-lg leading-relaxed mb-8
                     dark:text-[#E2E8F0]"
          variants={itemVariants} // Apply individual item animation
        >
          I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and enjoy crafting responsive, scalable, and user-friendly interfaces. I'm always eager to learn new technologies and improve my skills, believing that continuous learning is key in the ever-evolving tech landscape.
        </motion.p>

        {/* Skills Sub-heading */}
        <motion.h3
          // text-3xl font-bold text-gray-900 mb-6: Light mode heading styling
          // dark:text-[#63B3ED]: Dark mode highlight blue
          className="text-3xl font-bold text-gray-900 mb-6
                     dark:text-[#63B3ED]"
          variants={itemVariants} // Apply individual item animation
        >
          My Skills
        </motion.h3>
        {/* Skills Tags Container */}
        <motion.div
          className="flex flex-wrap gap-3" // Flexbox for skill tags with spacing
          variants={itemVariants} // Apply item variant to the container to stagger its children
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              // bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-md font-semibold cursor-pointer border border-gray-300: Light mode tag styling
              // dark:bg-[#0D1117] dark:text-[#4299E1] dark:border-[#4299E1] dark:hover:border-[#63B3ED]: Dark mode tag styling (primary dark bg, accent blue text/border, highlight blue border on hover)
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-md font-semibold cursor-pointer border border-gray-300
                         dark:bg-[#0D1117] dark:text-[#4299E1] dark:border-[#4299E1] dark:hover:border-[#63B3ED]"
              variants={skillTagVariants} // Apply skill tag specific animations
              whileHover="hover" // Trigger 'hover' variant on hover
              whileTap={{ scale: 0.9 }} // Shrink on tap
              custom={index} // Pass index as custom prop for potential staggered delays within the map if needed
            >
              {skill.icon} {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;