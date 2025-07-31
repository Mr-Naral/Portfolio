import React, { useState, useEffect } from 'react';

const Typewriter = ({ strings, typeSpeed = 100, deleteSpeed = 50, delay = 1500 }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullString = strings[currentStringIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(currentFullString.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(currentFullString.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    // When typing is complete for the current string
    if (!isDeleting && currentText === currentFullString) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), delay);
    }
    // When deleting is complete for the current string
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delay]);

  return (
    // Directly applying the dark theme text color
    <span className="font-mono text-2xl font-bold text-[#E2E8F0]">
      {currentText}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </span>
  );
};

export default Typewriter;