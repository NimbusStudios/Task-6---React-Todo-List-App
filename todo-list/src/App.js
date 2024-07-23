// Import necessary libraries and components
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import NavBar from './components/NavBar';

// Define the main App component
function App() {
  // Load user data from localStorage or create a default user if no users exist
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
      const defaultUser = { username: 'admin', password: 'admin123' };
      localStorage.setItem('users', JSON.stringify([defaultUser]));
    }
  }, []);

  // Render the main App component
  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans">
          <NavBar /> {/* Render the navigation bar */}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect root path to the login page */}
            <Route path="/login" element={<Login />} />  {/* Render the Login page */}
            <Route path="/register" element={<Registration />} />  {/* Render the Registration page */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />  {/* Render the Home page with authentication */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />  {/* Render the Profile page with authentication */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Export the main App component
export default App;

