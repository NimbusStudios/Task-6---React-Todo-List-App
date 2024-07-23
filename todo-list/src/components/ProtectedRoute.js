// Import the necessary React and react-router-dom libraries
import React from 'react';
import { Navigate } from 'react-router-dom';

// Define a ProtectedRoute component that takes a children prop
const ProtectedRoute = ({ children }) => {
  // Check if the user is authenticated by checking if a 'user' item exists in localStorage
  const isAuthenticated = !!localStorage.getItem('user');

  // If the user is authenticated, render the children prop
  // This is typically a component that is only accessible to authenticated users
  if (isAuthenticated) {
    return children;
  }
  // If the user is not authenticated, redirect them to the login page
  else {
    return <Navigate to="/login" />;
  }
};

// Export the ProtectedRoute component so that it can be used in other parts of the application
export default ProtectedRoute;
