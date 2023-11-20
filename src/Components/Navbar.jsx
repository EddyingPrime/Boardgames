import { Link } from "react-router-dom";
import { UseAuth } from "../authentication/UseAuth";
import DropdownMenu from "./Dropdown";

const Navbar = () => {
  const { isAuthenticated, logout } = UseAuth();

  return (
    <nav className="bg-white border p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="src/assets/logo.png" alt="Logo" />
        </div>
        <div className="flex space-x-4 md:space-x-20">
          <Link to="/" className="text-orange hover:underline">
            Home
          </Link>
          <Link to="/games" className="text-orange hover:underline">
            Games
          </Link>
          <Link to="/cafe" className="text-orange hover:underline">
            Cafe
          </Link>
          <Link to="/forums" className="text-orange hover:underline">
            Forum
          </Link>
        </div>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="text-white bg-orange text-lg font-medium whitespace-nowrap justify-center items-center rounded px-5 py-2 border"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="text-white text-center text-lg font-medium whitespace-nowrap justify-center items-center rounded bg-orange px-5 py-2 border"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white bg-orange text-lg font-medium whitespace-nowrap justify-center items-center rounded px-5 py-2 border"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-white text-center text-lg font-medium whitespace-nowrap justify-center items-center rounded bg-orange px-5 py-2 border"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
