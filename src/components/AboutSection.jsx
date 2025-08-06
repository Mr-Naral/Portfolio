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
  { name: 'PostgreSQL', icon: '��' },
  { name: 'Git/GitHub', icon: '🐙' },
  { name: 'REST APIs', icon: '📡' },
];

// Social media links
const socialLinks = [
  {
    name: 'WhatsApp',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 3.5 20.5L2 24l3.63-1.49a11.92 11.92 0 0 0 14.89-19.03zm-5.6 13.26c-.25.69-1.47 1.32-2.06 1.4-.54.07-1.2.1-1.92-.12a9.26 9.26 0 0 1-3.04-1.94 9.08 9.08 0 0 1-2.06-3.2c-.13-.3-.31-.9-.37-1.18a2.1 2.1 0 0 1 .16-1.23c.18-.43.66-.7 1.06-.79.13-.02.3-.05.47.01.2.07.44.24.55.44.18.3.61 1.05.67 1.13.14.2.28.46.21.74-.06.25-.28.57-.54.83-.08.07-.15.15-.06.31.1.2.45.74.98 1.2.67.6 1.23.8 1.42.88.15.06.24.05.33-.05s.38-.44.48-.6.2-.13.34-.08.87.41 1.02.48.25.11.29.17c.07.13.07.73-.18 1.42z" />
      </svg>
    ),
    url: 'https://wa.me/+919876543210',
    color: 'hover:bg-green-500'
  },
  {
    name: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.5 2.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
      </svg>
    ),
    url: 'https://instagram.com/your_username',
    color: 'hover:bg-pink-500'
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 8.98h4v12H3v-12zm7.5 0h3.6v1.64h.05a3.94 3.94 0 0 1 3.55-1.95c3.8 0 4.5 2.5 4.5 5.73v6.58h-4v-5.83c0-1.39-.03-3.18-1.94-3.18-1.95 0-2.25 1.52-2.25 3.08v5.93h-4v-12z" />
      </svg>
    ),
    url: 'https://www.linkedin.com/in/murlikrishna-naral-827037294/',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12a10.02 10.02 0 0 0 6.84 9.5c.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 0 0-1.11-1.46c-.91-.63.07-.62.07-.62a2.1 2.1 0 0 1 1.54 1.04 2.13 2.13 0 0 0 2.91.83 2.1 2.1 0 0 1 .63-1.32c-2.22-.26-4.56-1.11-4.56-4.93a3.84 3.84 0 0 1 1.03-2.66 3.56 3.56 0 0 1 .1-2.63s.84-.27 2.75 1.02a9.42 9.42 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.63.64.7 1.03 1.6 1.03 2.66 0 3.83-2.34 4.67-4.57 4.92a2.39 2.39 0 0 1 .68 1.86c0 1.34-.01 2.42-.01 2.75 0 .27.17.58.67.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
    url: 'https://github.com/Mr-Naral',
    color: 'hover:bg-gray-800'
  }
];

const AboutSection = ({ isDarkMode }) => {
  // Variants for the entire section container, to trigger child animations on scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  // Variants for individual text elements
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

  // Variants for individual skill tags
  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, backgroundColor: '#4299E1', color: '#0D1117' },
  };

  // Variants for profile photo
  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for social media icons
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.2, y: -5 },
  };

  return (
    <section id="about" className="py-16">
      {/* Section Heading */}
      <motion.h2
        className={`text-5xl font-extrabold text-center mb-12 transition-colors duration-300 ${
          isDarkMode ? 'text-[#4299E1]' : 'text-blue-600'
        }`}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className={`max-w-6xl mx-auto p-8 rounded-lg shadow-xl border transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-[#161B22] border-[#2D3748]' 
            : 'bg-white border-gray-200'
        }`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Profile Photo */}
          <motion.div
            className="lg:w-1/3 flex justify-center"
            variants={photoVariants}
          >
            <div className="relative">
              {/* Profile Photo Container */}
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                <img 
                  src="/profile_photo.jpeg" 
                  alt="Murlikrishna Naral" 
                  className="w-full h-full object-cover"
                />
               
              </div>
              
              {/* Decorative elements around the photo */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div className="lg:w-2/3 space-y-6">
            {/* About Me Paragraph 1 */}
            <motion.p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              Hello! I'm <span className="font-bold text-blue-500">Murlikrishna Naral</span>, a passionate and results-driven developer with a knack for building beautiful and functional web applications. My journey into programming started with a fascination for how technology can solve real-world problems and create engaging user experiences.
            </motion.p>

            {/* About Me Paragraph 2 */}
            <motion.p
              className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-700'
              }`}
              variants={itemVariants}
            >
              With expertise in modern web technologies, I specialize in creating responsive, scalable applications that deliver exceptional user experiences. From frontend frameworks like React and Next.js to backend solutions with Node.js and Express, I enjoy working across the full stack to bring ideas to life.
            </motion.p>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-800'
              }`}>
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-[#2D3748] text-[#E2E8F0] hover:bg-[#4299E1] hover:text-[#0D1117]' 
                        : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'
                    }`}
                    variants={skillTagVariants}
                    whileHover="hover"
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media Links Section */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-[#E2E8F0]' : 'text-gray-800'
              }`}>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-[#2D3748] text-[#E2E8F0] hover:text-white' 
                        : 'bg-gray-200 text-gray-700 hover:text-white'
                    } ${social.color}`}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;