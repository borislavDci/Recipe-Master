"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "@/public/navbar/profile.png";
import ProfileDropdown from "./ProfileDropdown";

interface NavItem {
  title: string;
  href: string;
}

const Navbar = () => {
  // State variables for dropdown and menu visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle function for opening/closing the dropdown
  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsMenuOpen(false); // Close the menu when opening dropdown
  }, []);

  // Toggle function for opening/closing the menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
    setIsDropdownOpen(false); // Close the dropdown when opening menu
  }, []);

  // Defines an array of navigation items
  const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  return (
    <nav className="relative border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Brand/logo section */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Recipe Master
          </span>
        </Link>

        {/* User profile and menu section */}
        <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* User profile button */}
          <button
            type="button"
            className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>

            {/* User profile image */}
            <Image
              className="h-8 w-8 rounded-full"
              src={profile}
              alt="user photo"
            />
          </button>

          {/* Dropdown menu */}
          <ProfileDropdown isDropdownOpen={isDropdownOpen} />
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle menu</span>

            {/* Menu toggle icon */}
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {/* Renders Navbar Items */}
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
