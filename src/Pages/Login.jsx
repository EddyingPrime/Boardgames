import { useState } from "react";
import axios from "axios";
import { useAuth } from "../authentication/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, // New state for Remember Me checkbox
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));

    // Check if data.user exists before accessing its properties
    if (data.user && data.user.name) {
      // Save other user data if needed
      localStorage.setItem("userName", data.user.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      console.log("Login response:", response.data);

      if (response.data.token) {
        login(response.data.token);

        console.log(response.data.token);

        if (response.data.user) {
          saveToLocalStorage(response.data.user);
        }

        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // Server returned an error response
        setError(
          error.response.data.message || "An unexpected error occurred."
        );
      } else if (error.request) {
        // The request was made but no response was received
        setError("Network error. Please check your internet connection.");
      } else {
        // Something happened in setting up the request
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <button
        className="mb-4 text-white p-1 rounded-md bg-orange"
        onClick={() => navigate("/")}
      >
        &#8592;
      </button>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm">Remember Me</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-white p-2 rounded-md bg-orange hover:bg-orange-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-4 text-center text-sm">
          <p className="space-x-2">
            <span>Not registered yet?</span>
            <span
              className="text-orange hover:underline cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
