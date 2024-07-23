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

// Define the main App component
function App() {
  // Check if user is already stored in localStorage, if not, set a default user
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      const defaultUser = { username: 'admin', password: 'admin123' };
      localStorage.setItem('user', JSON.stringify(defaultUser));
    }
  }, []);

  // Render the main App component
  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect root to login page */}
            <Route path="/register" element={<Registration />} />  {/* Render Registration component */}
            <Route path="/login" element={<Login />} />  {/* Render Login component */}
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />  {/* Render Home component with ProtectedRoute */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />  {/* Render Profile component with ProtectedRoute */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Export the main App component
export default App;

