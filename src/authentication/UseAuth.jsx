import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check if a token exists in local storage
  const initialToken = localStorage.getItem("AUTH_TOKEN");

  const [token, setToken] = useState(initialToken);
  const isAuthenticated = !!token;

  const login = (newToken) => {
    // Save the token to local storage
    localStorage.setItem("AUTH_TOKEN", newToken);
    setToken(newToken);
  };

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("AUTH_TOKEN");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
