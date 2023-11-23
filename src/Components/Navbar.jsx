import { Link } from "react-router-dom";
import { UseAuth } from "../authentication/UseAuth";
import logo from "../assets/logo.png"; // Import the logo image

const Navbar = () => {
  const { isAuthenticated, logout } = UseAuth();

  return (
    <nav className="bg-white border p-4 ">
      <div className="container mx-auto flex items-center justify-between laptop:space-x-5 tablet:space-x-5 phone:space-x-1 gap-0">
        <div className="flex items-center">
          {/* Use the imported logo image */}
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="flex phone:space-x-1 gap-1 font-bold  tablet:space-x-5 text-lg">
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
        <div className="flex laptop:space-x-4 tablet:space-x-4 phone:space-x-2 gap-0">
          {isAuthenticated ? (
            <>
              <Link
                to="/profile"
                className="text-white bg-orange text-lg font-medium whitespace-nowrap justify-center items-center rounded laptop:px-5 py-2 phone:text-sm px-1"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="text-white text-center text-lg font-medium whitespace-nowrap justify-center items-center rounded bg-orange laptop:px-5 py-2 phone:text-sm px-1"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white bg-orange text-lg font-medium whitespace-nowrap justify-center items-center rounded border laptop:px-5 py-2 phone:text-sm px-1"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-white text-center text-lg font-medium whitespace-nowrap justify-center items-center rounded bg-orange border laptop:px-5 py-2 phone:text-sm px-1 "
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
