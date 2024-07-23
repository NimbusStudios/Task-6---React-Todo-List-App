import React, { useState } from 'react';

// Functional component for user registration
const Registration = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Function to handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(formData));
    // Redirect to the login page after registration
    window.location.href = "/login";
  };

  // Return the JSX for the registration form
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          // Update username in form data on input change
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          // Update password in form data on input change
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
      </form>
    </div>
  );
};

export default Registration;

