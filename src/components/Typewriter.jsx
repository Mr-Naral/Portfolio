import React, { useState, useEffect } from 'react';

const Typewriter = ({
  strings,
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 1500,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullString = strings[currentStringIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullString.substring(0, currentText.length - 1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullString.substring(0, currentText.length + 1));
      }, typeSpeed);
    }

    if (!isDeleting && currentText === fullString) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, deleteSpeed, delay]);

  return (
    <span className="font-mono text-2xl font-bold text-gray-800 dark:text-[#E2E8F0]">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Typewriter;
