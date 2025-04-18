'use client';

import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  );

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 bg-slate-50 dark:bg-[#333] rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-slate-500 dark:text-blue mb-4">
          Settings
        </h1>
        {/* Dark Mode Toggle */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
