import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-24 h-24 flex items-center justify-center bg-white dark:bg-[#000000] text-primary dark:text-white-100">
  <button
    onClick={toggleDarkMode}
    className="w-full flex relative items-center p-2 rounded-full bg-gray-300 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
  >
    {darkMode ? (
      <FaSun className="w-5 h-5 text-yellow-500 ml-2" />
    ) : (
      <FaMoon className="w-5 h-5 text-yellow-300 ml-2" />
    )}
    <span
      className={`absolute left-2 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform ${
        darkMode ? 'translate-x-full' : ''
      }`}
      style={{ transform: darkMode ? 'translateX(100%)' : 'translateX(0)' }}
    ></span>
  </button>
</div>

  );
};

export default ThemeSwitcher;
