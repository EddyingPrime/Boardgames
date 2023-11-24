import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-4" />
        </div>

        <div className="md:flex space-x-4">
          <ul className="flex space-x-8">
            <li className="laptop:flex phone:hidden">
              <Link to="/" className="text-orange hover:text-gray-300 -ml-[300px]">
                Home
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link to="/games" className="text-orange hover:text-gray-300 -ml-[250px]">
                Games
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link to="/cafe" className="text-orange hover:text-gray-300 -ml-[200px] ">
                Cafe
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link to="/forum" className="text-orange hover:text-gray-300 -ml-[150px] ">
                Forums
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link to="/login" className="text-orange hover:text-gray-300 ml-20">
                Login
              </Link>
            </li>
            <li className="laptop:flex phone:hidden">
              <Link to="/register" className="text-orange hover:text-gray-300 ml-5">
                Register
              </Link>
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
          <ul className="mt-2">
            <li>
              <Link to="/" className="block text-orange py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games" className="block text-orange py-2">
                Games
              </Link>
            </li>
            <li>
              <Link to="/cafe" className="block text-orange py-2">
                Cafe
              </Link>
            </li>
            <li>
              <Link to="/forum" className="block text-orange py-2">
                Forum
              </Link>
            </li>
          </ul>
          <ul className="mt-2">
            <li className="hidden md:block">
              <a href="#login" className="block text-orange ">
                Login
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#register" className="block text-orange ">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
