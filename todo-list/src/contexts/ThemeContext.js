// This file creates a ThemeContext which allows components to access and modify the current theme.
// The ThemeContext is a React context which provides a way to share data between components without having to pass props down manually.

// Import necessary libraries and modules
import React, { createContext, useState, useEffect } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// The ThemeProvider is a higher-order component (HOC) that wraps the children components and provides them with the current theme and a way to toggle the theme.
export const ThemeProvider = ({ children }) => {

  // Initialize the theme state with the value stored in localStorage, or 'light' if no theme is stored in localStorage.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Use the useEffect hook to run some code after the component has rendered.
  // In this case, we remove the 'light' and 'dark' classes from the document's root element, and add the current theme class.
  // We also store the current theme in localStorage.
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Define the toggleTheme function which toggles the theme between 'light' and 'dark'.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Return a JSX element that provides the theme and toggleTheme function to its children using the ThemeContext.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

