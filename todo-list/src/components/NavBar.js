import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  const isAuthenticated = !!localStorage.getItem('loggedInUser');

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/home" className="hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
        {isAuthenticated && <Link to="/profile" className="hover:bg-gray-700 px-3 py-2 rounded">Profile</Link>}
      </div>
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
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
