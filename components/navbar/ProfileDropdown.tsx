"use client";
import Link from "next/link";

const ProfileDropdown = ({ isDropdownOpen }: { isDropdownOpen: boolean }) => {
  return (
    <div
      className={`absolute left-3 top-full z-50 -translate-x-full transform ${
        isDropdownOpen ? "" : "hidden"
      } my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}
      id="user-dropdown"
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          John Doe
        </span>
        <span className="block truncate  text-sm text-gray-500 dark:text-gray-400">
          john@gmail.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
