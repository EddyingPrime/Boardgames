import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import http from "../Http/http";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      // Make a request to log out
      const response = await http().post("/logout");

      // Log the response from the server
      console.log("Logout response:", response);

      // Redirect to the home page after logout
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);

      // Log any specific error message from the server (if available)
      if (error.response) {
        console.error("Server error message:", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Close the navbar if the window is resized to a larger size than mobile
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-white p-4 border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="h- mr-4 w-[300px]" />
        </div>

        <div className="md:flex space-x-4">
          <ul className="flex space-x-8">
            <li className="laptop:flex phone:hidden">
              <Link
                to="/"
                className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-orange uppercase -ml-[200px]"
              >
                Home
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link
                to="/games"
                className="block py-2 shadow-md shadow-orange  focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-orange uppercase -ml-[150px]"
              >
                Games
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link
                to="/cafe"
                className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-orange uppercase -ml-[100px]"
              >
                Cafe
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link
                to="/forums"
                className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-orange uppercase -ml-[60px]"
              >
                Forums
              </Link>
            </li>
            {/* Replace the following links with your actual routes */}
            <li className="laptop:flex phone:hidden">
              <Link
                to="/profile"
                className="block py-2 shadow-md shadow-black  px-3 text-black hover:text-black uppercase ml-40"
              >
                Profile
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <button
                onClick={handleLogout}
                disabled={loading}
                className="block py-2 shadow-md shadow-black  px-3 text-black hover:text-black uppercase -ml-5"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="laptop:hidden tablet:flex phone:flex">
          <button
            onClick={toggleNavbar}
            className="block text-orange focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="mt-2">{/* Your mobile menu items here */}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
