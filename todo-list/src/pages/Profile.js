// This is a functional component called Profile. It renders a form for the user to update their profile information.

import React, { useState, useEffect } from 'react';

const Profile = () => {
  // Initialize state variables to store the user's information and a message to be displayed
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  // When the component mounts, check if there is a logged in user in local storage
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      // If there is a logged in user, set the user state variable to the logged in user's information
      setUser(loggedInUser);
    }
  }, []);

  // Function to handle the form submission
  const handleUpdate = (e) => {
    e.preventDefault();

    // Get the list of users from local storage and update the user's information in the list
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => u.username === user.username ? user : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Set a success message to be displayed to the user
    setMessage('Profile updated successfully');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Render a form with the user's information and a submit button */}
      <form onSubmit={handleUpdate} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Profile</h2>
        {/* Render a success message if there is one */}
        {message && <p className="mb-4 text-green-500 dark:text-green-300">{message}</p>}
        {/* Render a read-only input field for the user's username */}
        <input
          type="text"
          value={user.username}
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          readOnly
        />
        {/* Render an input field for the user to update their password */}
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {/* Render a submit button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;

