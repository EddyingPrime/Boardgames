import { useState } from "react";
import axios from "axios";
import { UseAuth } from "../authentication/UseAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = UseAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Add the 'loading' state
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set 'loading' to true when starting the login process
    setLoading(true);

    try {
      // Make a POST request to your PHP login endpoint
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      // Handle the response
      console.log("Login successful:", response.data);

      // Call the login function from the AuthContext if using context
      login();

      navigate("/");
    } catch (error) {
      // Handle login error
      console.error(
        "Login error:",
        error.response ? error.response.data.error : "Login failed"
      );
    } finally {
      // Set 'loading' back to false when the login process is complete
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white p-2 rounded-md hover: bg-orange"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
