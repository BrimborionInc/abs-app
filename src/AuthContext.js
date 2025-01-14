import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsAuthenticated(userLoggedIn);
    console.log("AuthContext initialized with isAuthenticated:", userLoggedIn); // Logging for initialization
  }, []);

  useEffect(() => {
    console.log("AuthContext updated with isAuthenticated:", isAuthenticated); // Logging for updates
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
