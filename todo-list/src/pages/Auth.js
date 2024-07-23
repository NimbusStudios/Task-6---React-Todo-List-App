// Import the necessary dependencies for the Auth component
import React, { useState } from 'react'; // Import the useState hook from React
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom

// Define the Auth component
const Auth = () => {
  // Initialize state variables for form data, login/register status, and message
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Define the handleAuth function to handle form submission
  const handleAuth = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const users = JSON.parse(localStorage.getItem('users')) || []; // Get the users from localStorage or an empty array

    if (isLogin) {
      // If the user is logging in
      const user = users.find(user => user.username === formData.username && user.password === formData.password);

      if (user) {
        // If the user credentials are valid
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store the user in localStorage
        navigate('/home'); // Navigate to the home page
      } else {
        setMessage('Invalid credentials'); // Set an error message
      }
    } else {
      // If the user is registering
      const userExists = users.find(user => user.username === formData.username);

      if (userExists) {
        setMessage('User already exists. Please login.'); // Set an error message
      } else {
        users.push(formData); // Add the new user to the users array
        localStorage.setItem('users', JSON.stringify(users)); // Store the users in localStorage
        setMessage('Registration successful! Please login.'); // Set a success message
        setIsLogin(true); // Switch to login mode
        setFormData({ username: '', password: '' }); // Reset the form data
      }
    }
  };

  // Render the Auth component
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleAuth} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">{isLogin ? 'Login' : 'Register'}</h2>
        {message && <p className="mb-4 text-red-500 dark:text-red-300">{message}</p>} {/* Display the error or success message */}
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        /> {/* Render the username input field */}
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        /> {/* Render the password input field */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">{isLogin ? 'Login' : 'Register'}</button> {/* Render the login or register button */}
        <p className="mt-4 dark:text-white">
          {isLogin ? 'New user? ' : 'Already have an account? '}
          <button type="button" className="text-blue-500" onClick={() => { setIsLogin(!isLogin); setMessage(''); }}>
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p> {/* Render the switch login/register button */}
      </form>
    </div>
  );
};

export default Auth; // Export the Auth component

