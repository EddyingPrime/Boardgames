import { useContext } from "react";
import AuthContext from "./AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  console.log("Token from useAuth:", context.token);
  return context;
};
