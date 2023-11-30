import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Retrieve token from local storage on initialization
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken) => {
    console.log("Setting token:", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const getToken = () => {
    return token;
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
