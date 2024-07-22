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
    <form onSubmit={handleUpdate}>
      <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;