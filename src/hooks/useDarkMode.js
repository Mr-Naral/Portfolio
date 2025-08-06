import { useEffect, useState } from 'react';

const useDarkMode = () => {
  // Initialize state with a simple boolean
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to handle theme changes
  useEffect(() => {
    console.log('🎨 useDarkMode effect triggered - isDarkMode:', isDarkMode);
    
    try {
      const root = document.documentElement;
      
      if (isDarkMode) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        console.log('✅ Added dark class to documentElement');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        console.log('✅ Removed dark class from documentElement');
      }
    } catch (error) {
      console.error('❌ Error in useDarkMode effect:', error);
    }
  }, [isDarkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    console.log('🔄 Toggle called, current state:', isDarkMode);
    console.log('🔄 Setting new state to:', !isDarkMode);
    
    try {
      setIsDarkMode(prev => {
        const newState = !prev;
        console.log('🔄 State updated from', prev, 'to', newState);
        return newState;
      });
    } catch (error) {
      console.error('❌ Error in toggleDarkMode:', error);
    }
  };

  console.log('📊 useDarkMode hook state:', { isDarkMode, toggleDarkMode: typeof toggleDarkMode });

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
