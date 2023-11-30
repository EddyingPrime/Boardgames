import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../authentication/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
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

  // Move the hook calls here
  const isAuthenticated = useAuth().isAuthenticated;
  const logout = useAuth().logout;

  

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
                className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange bg px-4 text-black hover:text-orange uppercase -ml-[200px]"
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
            {/* Conditionally render links based on authentication status */}
            {isAuthenticated ? (
              <>
                <li className="laptop:flex phone:hidden">
                  <Link
                    to="/profile"
                    className="text-orange hover:text-gray-300 ml-20"
                  >
                    Profile
                  </Link>
                </li>
                <li className="laptop:flex phone:hidden">
                  <button
                    onClick={logout}
                    className="text-orange hover:text-gray-300 ml-5"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="laptop:flex phone:hidden">
                  <Link
                    to="/login"
                    className="block py-2 shadow-md shadow-black  px-3 text-black hover:text-black uppercase ml-40"
                  >
                    Login
                  </Link>
                </li>
                <li className="laptop:flex phone:hidden">
                  <Link
                    to="/register"
                    className="block py-2 shadow-md shadow-black  px-3 text-black hover:text-black uppercase -ml-5"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
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
          <ul className="mt-2">
            <li>
              <Link to="/" className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-black uppercase">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games" className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-black uppercase">
                Games
              </Link>
            </li>
            <li>
              <Link to="/cafe" className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-black uppercase">
                Cafe
              </Link>
            </li>
            <li>
              <Link to="/forums" className="block py-2 shadow-md shadow-orange focus:outline-none focus:ring focus:ring-orange px-4 text-black hover:text-black uppercase">
                Forums
              </Link>
            </li>
          </ul>
          <ul className="mt-2">
            {/* Conditionally render links based on authentication status */}
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/profile" className="block py-2 shadow-md shadow-black  px-4 text-black hover:text-black uppercase">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="block py-2 shadow-md shadow-black  px-4 text-black hover:text-black uppercase">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="block py-2 shadow-md shadow-black  px-4 text-black hover:text-black uppercase">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="block py-2 shadow-md shadow-black  px-4 text-black hover:text-black uppercase">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
