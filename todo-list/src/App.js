// App.js
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

function App() {
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length === 0) {
      const defaultUser = { username: 'admin', password: 'admin123' };
      localStorage.setItem('users', JSON.stringify([defaultUser]));
    }
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="font-sans">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />  {/* Redirect root to login */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
