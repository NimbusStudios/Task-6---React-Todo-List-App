// Import necessary modules from React
import React, { useContext } from 'react';
// Import the ThemeContext from the specified file
import { ThemeContext } from '../contexts/ThemeContext';

// Define the Header functional component
const Header = () => {
  // Destructure theme and toggleTheme from ThemeContext using the useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Return the header section with dynamic styling based on the theme
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl">Todo List App</h1>
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-600 rounded"
      >
        {/* Conditional rendering of Dark Mode or Light Mode based on the theme */}
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

// Export the Header component as the default export
export default Header;

