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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]'
      ).content;
      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

      console.log("Login form data:", formData); // Log the form data being sent

      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );

      console.log("Login response:", response.data);

      if (response.data.token) {
        // Save relevant user data to local storage
        saveToLocalStorage({
          Data: response.data,
        });
        console.log("Login successful!");
        login("/");
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      setError("An unexpected error occurred. Please try again.");
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
