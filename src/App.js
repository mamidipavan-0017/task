import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user credentials are present in localStorage
    const userDetailsString = localStorage.getItem("userArray");
    const isAuthenticated = userDetailsString !== null;

    // Set the authentication state
    setLoggedIn(isAuthenticated);
  }, []);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = (userData) => {
    // Add your authentication logic here
    // For example, you might check credentials and setLoggedIn(true) if authentication is successful

    // Store user details in localStorage
    localStorage.setItem("userArray", JSON.stringify(userData));

    // Set the authentication state
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear user details from localStorage
    // Set the authentication state
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={<SignIn onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={
            <>
              <SignUp />
              <RouterLink to="/signin" variant="body2" onClick={handleToggle}>
              </RouterLink>
            </>
          }
        />
        {/* Protect the Dashboard route */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              // Redirect to SignIn if not authenticated
              <Navigate to="/signin" />
            )
          }
        />
        {/* Redirect any other paths to SignIn */}
        <Route path="/*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}
