// This is a functional component called Login that represents the login page of the application.
// It uses React hooks to manage state and navigation.

import React, { useState } from 'react'; // Importing the useState hook from React
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from React Router DOM

const Login = () => {
  // Declaring a state variable called formData using the useState hook.
  // The initial value is an object with empty strings for username and password.
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Declaring a variable called navigate using the useNavigate hook from React Router DOM.
  // This allows us to navigate to different routes in the application.
  const navigate = useNavigate();

  // Defining a function called handleLogin that will be called when the form is submitted.
  const handleLogin = (e) => {
    // Preventing the default form submission behavior.
    e.preventDefault();

    // Retrieving the user data from local storage and parsing it as JSON.
    const user = JSON.parse(localStorage.getItem('user'));

    // Checking if the user exists and if the entered username and password match the stored data.
    if (user && user.username === formData.username && user.password === formData.password) {
      // If the credentials are valid, navigating to the home page.
      navigate('/home');
    } else {
      // If the credentials are invalid, displaying an alert.
      alert('Invalid credentials');
    }
  };

  // Returning the JSX for the login form.
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          // Updating the username value in the formData state variable whenever the input changes.
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          // Updating the password value in the formData state variable whenever the input changes.
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;

