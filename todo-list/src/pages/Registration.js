import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    window.location.href = "/login"; // Navigate to login page
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;