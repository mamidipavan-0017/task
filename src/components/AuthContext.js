// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Create the provider
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user credentials are present in localStorage
    const userDetailsString = localStorage.getItem('userArray');
    const isAuthenticated = userDetailsString !== null;

    // Set the authentication state
    setLoggedIn(isAuthenticated);
  }, []);

  const login = () => {
    // Your login logic (replace with actual login logic)
    // For simplicity, we're just setting the loggedIn state to true
    setLoggedIn(true);
  };

  const logout = () => {
    // Your logout logic (replace with actual logout logic)
    // For simplicity, we're just setting the loggedIn state to false
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
