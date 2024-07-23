import React, { useContext } from 'react'; // Import the necessary dependencies for the NavBar component
import { Link, useNavigate } from 'react-router-dom'; // Import the Link and useNavigate hooks from react-router-dom
import { ThemeContext } from '../contexts/ThemeContext'; // Import the ThemeContext from the specified file

// Define the NavBar component
const NavBar = () => {
  // Use the useNavigate hook to get the navigate function
  const navigate = useNavigate();
  // Use the useContext hook to get the theme and toggleTheme from the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the handleLogout function to be used when the logout button is clicked
  const handleLogout = () => {
    // Remove the 'loggedInUser' item from localStorage
    localStorage.removeItem('loggedInUser');
    // Navigate to the login page
    navigate('/login');
  };

  // Check if the user is authenticated by checking if the 'loggedInUser' item exists in localStorage
  const isAuthenticated = !!localStorage.getItem('loggedInUser');

  // Render the navigation bar
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      {/* Render the links for the navigation bar */}
      <div className="flex space-x-4">
        <Link to="/home" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
        {/* If the user is authenticated, render the profile link */}
        {isAuthenticated && <Link to="/profile" className="hover:bg-gray-700 px-3 py-2 rounded">Profile</Link>}
      </div>
      {/* Render the login/register and theme toggle buttons */}
      <div className="flex space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
            <Link to="/register" className="hover:bg-gray-700 px-3 py-2 rounded">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="hover:bg-gray-700 px-3 py-2 rounded">Logout</button>
        )}
        <button onClick={toggleTheme} className="hover:bg-gray-700 px-3 py-2 rounded">
          {/* Toggle the theme based on the current theme */}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

