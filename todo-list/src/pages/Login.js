import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === formData.username && user.password === formData.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/home');
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Login</h2>
        {message && <p className="mb-4 text-red-500 dark:text-red-300">{message}</p>}
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Login</button>
      </form>
    </div>
  );
};

export default Login;
