import { useState } from "react";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
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
