import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => u.username === user.username ? user : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setMessage('Profile updated successfully');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleUpdate} className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Profile</h2>
        {message && <p className="mb-4 text-green-500 dark:text-green-300">{message}</p>}
        <input
          type="text"
          value={user.username}
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          readOnly
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          className="mb-4 p-2 border border-gray-300 rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full dark:bg-blue-700">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
