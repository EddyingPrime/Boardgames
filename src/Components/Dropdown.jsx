import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div
      id="dropdown"
      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul className="py-2 text-sm text-orange dark:text-white">
        <li>
          <Link
            to="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-orange"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-orange"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-orange"
          >
            Earnings
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-orange"
          >
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
