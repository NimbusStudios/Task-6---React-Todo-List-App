import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <input
          type="text"
          value={user.username}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          value={user.password}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
