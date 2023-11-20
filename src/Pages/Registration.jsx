import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const clearMessages = () => {
    setSuccessMessage(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    clearMessages();

    try {
      const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]'
      ).content;
      axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData
      );

      if (response.data.success) {
        setSuccessMessage("Registration successful");
        setError(null);
        // Clear form data in local storage upon successful registration
        localStorage.removeItem("registrationFormData");
      } else {
        setSuccessMessage(null);
        if (response.data.error) {
          setError(response.data.error); // Display specific error message
        } else {
          setError("Registration failed. Please check your information.");
        }
      }
    } catch (error) {
      setSuccessMessage(null);
      setError(
        error.response ? error.response.data.message : "Registration failed"
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem("registrationFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-500">
            <p>{successMessage}</p>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>
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
          <label
            htmlFor="password_confirmation"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-orange text-white p-2 rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="mt-4 text-center text-sm">
          <p>
            Already registered?{" "}
            <span
              className="text-orange hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
