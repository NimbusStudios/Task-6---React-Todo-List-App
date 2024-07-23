// Importing necessary dependencies from React library
import React, { useState, useEffect } from 'react';

// Functional component for the Profile page
const Profile = () => {
  // State variables to store user data (username and password)
  const [user, setUser] = useState({ username: '', password: '' });

  // useEffect hook to retrieve user data from local storage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // If user data exists in local storage, update the state with that data
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to handle updating user data when the form is submitted
  const handleUpdate = (e) => {
    e.preventDefault();
    // Store the updated user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
  };

  // JSX to render the Profile page with form fields for username, password, and update button
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        {/* Input field for username with dynamic value and onChange event */}
        <input
          type="text"
          value={user.username}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        {/* Input field for password with dynamic value and onChange event */}
        <input
          type="password"
          value={user.password}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {/* Button to submit the form and update the user profile */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Update Profile</button>
      </form>
    </div>
  );
};

// Exporting the Profile component to be used in other parts of the application
export default Profile;

