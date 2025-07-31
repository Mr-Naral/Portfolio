// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'; // Icons for contact info

const ContactSection = () => {
  // State for form data, submission status, and feedback message
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set submitting state to true
    setSubmitMessage(''); // Clear previous messages

    // --- IMPORTANT: Replace this with your actual form submission logic ---
    // For a real portfolio, you'd integrate with a backend service like:
    // - Formspree.io: Simple for static sites (e.g., set form 'action' attribute)
    // - Netlify Forms / Vercel Forms: If hosting on these platforms
    // - Your own backend API (Node.js/Express, Python/Flask, etc.)
    // For now, it's just a simulated asynchronous call:
    try {
      console.log('Form Data Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call delay
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      setSubmitMessage('Oops! Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Variants for the entire section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // Start hidden, 100px below
    visible: {
      opacity: 1,
      y: 0, // Slides up
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
        staggerChildren: 0.2, // Stagger delay for children (form, contact info)
      },
    },
  };

  // Variants for individual items within the section (form, contact details)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start hidden, 30px below
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

  // Variants for form input focus animation
  const inputVariants = {
    focus: {
      borderColor: '#4299E1', // Accent blue border on focus
      boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)', // Subtle glow matching accent
      scale: 1.01, // Slightly enlarge
      transition: { duration: 0.2 } // Quick transition
    },
  };

  return (
    <section id="contact" className="py-16">
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
        Get In Touch
      </motion.h2>

      <motion.div
        // max-w-4xl mx-auto: Max width and center horizontally
        // bg-white p-8 rounded-lg shadow-xl border border-gray-200: Light mode card styling
        // dark:bg-[#161B22] dark:border-[#2D3748]: Dark mode card styling (secondary dark bg, dark border)
        // flex flex-col md:flex-row gap-8: Responsive flex layout for form and info sections
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200
                   dark:bg-[#161B22] dark:border-[#2D3748] flex flex-col md:flex-row gap-8"
        variants={sectionVariants} // Apply section animation variants
        initial="hidden" // Start hidden
        whileInView="visible" // Animate when element enters viewport
        viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% of element is visible
      >
        {/* Contact Form Section */}
        <motion.div className="md:w-2/3" variants={itemVariants}>
          <h3
            // text-3xl font-bold text-gray-900 mb-6: Light mode heading styling
            // dark:text-[#63B3ED]: Dark mode highlight blue
            className="text-3xl font-bold text-gray-900 mb-6
                         dark:text-[#63B3ED]">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name"
                // block text-gray-700 text-lg font-medium mb-2: Label styling
                // dark:text-[#E2E8F0]: Dark mode soft off-white text
                className="block text-gray-700 text-lg font-medium mb-2
                                              dark:text-[#E2E8F0]">Name</label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // w-full p-3 rounded-md: Full width, padding, rounded corners
                // bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500: Light mode input styling
                // focus:outline-none focus:ring-2 focus:ring-blue-500: Focus styles for light mode
                // dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]: Dark mode input styling (primary dark bg, dark border, soft off-white text, accent blue ring on focus)
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]"
                required
                variants={inputVariants} // Apply focus animation variants
                whileFocus="focus" // Trigger 'focus' variant on focus
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email"
                // block text-gray-700 text-lg font-medium mb-2: Label styling
                // dark:text-[#E2E8F0]: Dark mode soft off-white text
                className="block text-gray-700 text-lg font-medium mb-2
                                              dark:text-[#E2E8F0]">Email</label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // w-full p-3 rounded-md: Full width, padding, rounded corners
                // bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500: Light mode input styling
                // focus:outline-none focus:ring-2 focus:ring-blue-500: Focus styles for light mode
                // dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]: Dark mode input styling
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]"
                required
                variants={inputVariants} // Apply focus animation variants
                whileFocus="focus" // Trigger 'focus' variant on focus
              />
            </div>
            {/* Message Textarea */}
            <div>
              <label htmlFor="message"
                // block text-gray-700 text-lg font-medium mb-2: Label styling
                // dark:text-[#E2E8F0]: Dark mode soft off-white text
                className="block text-gray-700 text-lg font-medium mb-2
                                              dark:text-[#E2E8F0]">Message</label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5" // Number of rows for textarea
                // w-full p-3 rounded-md: Full width, padding, rounded corners
                // bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500: Light mode input styling
                // focus:outline-none focus:ring-2 focus:ring-blue-500: Focus styles for light mode
                // dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]: Dark mode input styling
                className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-[#0D1117] dark:border-[#2D3748] dark:text-[#E2E8F0] dark:placeholder-gray-400 dark:focus:ring-[#4299E1]"
                required
                variants={inputVariants} // Apply focus animation variants
                whileFocus="focus" // Trigger 'focus' variant on focus
              ></motion.textarea>
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              // w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700: Light mode button styling.
              // transition-colors duration-300 shadow-md: Smooth color transition and shadow.
              // disabled:opacity-50 disabled:cursor-not-allowed: Styles when button is disabled.
              // dark:bg-[#4299E1] dark:text-gray-900 dark:hover:bg-[#63B3ED] dark:hover:text-white: Dark mode button styling (accent blue, dark text, highlight blue on hover).
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed
                         dark:bg-[#4299E1] dark:text-gray-900 dark:hover:bg-[#63B3ED] dark:hover:text-white"
              whileHover={{ scale: 1.02 }} // Slightly enlarge on hover
              whileTap={{ scale: 0.98 }} // Slightly shrink on tap
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {/* Submission Feedback Message */}
            {submitMessage && (
              <p className={`mt-4 text-center font-semibold ${submitMessage.includes('Oops') ? 'text-red-500 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div className="md:w-1/3 flex flex-col justify-center items-center md:items-start" variants={itemVariants}>
          <h3
            // text-3xl font-bold text-gray-900 mb-6: Light mode heading styling
            // dark:text-[#63B3ED]: Dark mode highlight blue
            className="text-3xl font-bold text-gray-900 mb-6 md:mt-0 mt-8
                         dark:text-[#63B3ED]">My Details</h3>
          <div className="space-y-4 text-gray-700 text-lg dark:text-[#E2E8F0]">
            {/* Email */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5, color: '#4299E1' }} // Slide right and change color on hover
              transition={{ duration: 0.2 }}
            >
              <EnvelopeIcon className="h-7 w-7 text-blue-600 dark:text-[#4299E1]" />
              <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a>
            </motion.div>
            {/* Phone */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5, color: '#4299E1' }} // Slide right and change color on hover
              transition={{ duration: 0.2 }}
            >
              <PhoneIcon className="h-7 w-7 text-blue-600 dark:text-[#4299E1]" />
              <span>+91 12345 67890</span> {/* Replace with your number */}
            </motion.div>
            {/* Location */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5, color: '#4299E1' }} // Slide right and change color on hover
              transition={{ duration: 0.2 }}
            >
              <MapPinIcon className="h-7 w-7 text-blue-600 dark:text-[#4299E1]" />
              <span>Solapur, Maharashtra, India</span> {/* Replace with your location */}
            </motion.div>
          </div>
          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/your-github" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              // text-gray-700 hover:text-blue-600: Light mode icon color and hover
              // dark:text-[#E2E8F0] dark:hover:text-[#4299E1]: Dark mode icon color and hover (soft off-white, accent blue)
              className="text-gray-700 hover:text-blue-600 dark:text-[#E2E8F0] dark:hover:text-[#4299E1]"
              whileHover={{ scale: 1.2, rotate: 10 }} // Enlarge and rotate on hover
              whileTap={{ scale: 0.9 }} // Shrink on tap
            >
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.2 3.633 17.791 3.633 17.791c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.49.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.295-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.89-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              // text-gray-700 hover:text-blue-600: Light mode icon color and hover
              // dark:text-[#E2E8F0] dark:hover:text-[#4299E1]: Dark mode icon color and hover
              className="text-gray-700 hover:text-blue-600 dark:text-[#E2E8F0] dark:hover:text-[#4299E1]"
              whileHover={{ scale: 1.2, rotate: -10 }} // Enlarge and rotate on hover
              whileTap={{ scale: 0.9 }} // Shrink on tap
            >
              <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.51V14.62c0-1.325-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.93H9.274V9.284h3.362v1.54h.047c.447-.842 1.547-1.725 3.307-1.725 3.554 0 4.204 2.335 4.204 5.37V20.45zM5.234 7.648c-1.168 0-2.105-.939-2.105-2.096 0-1.157.937-2.096 2.105-2.096s2.104.939 2.104 2.096c0 1.157-.936 2.096-2.104 2.096zm1.785 12.804H3.45V9.284h3.57V20.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.208 0 22.225 0z"/>
              </svg>
            </motion.a>
            {/* Add more social media links as needed (e.g., Twitter, Instagram) */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;