"use client";
import { useState, useCallback } from "react";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import Image from "next/image";
import profile from "@/public/navbar/profile.png";
import ProfileDropdown from "@/common/profileDropdown/ProfileDropdown";
import SearchForm from "@/components/common/searchForm/SearchForm";
import NavItems from "./NavItems";
import LoginButton from "@/common/loginButton/LoginButton";
import HamburgerMenu from "@/common/hamburgerMenu/HamburgerMenu";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = true;

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
    setIsDropdownOpen(false);
  }, []);

  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Hamburger menu */}
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Recipe Master
          </span>
        </Link>

        <div className="relative flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <>
              <button
                type="button"
                className="flex rounded-full bg-textColor text-sm focus:ring-4 md:me-0 dark:focus:ring-info"
                id="user-menu-button"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-10 w-10 rounded-full"
                  src={profile}
                  alt="user photo"
                />
              </button>

              {/* Conditionally renders ProfileDropdown and LoginButton components */}
              <ProfileDropdown isDropdownOpen={isDropdownOpen} />
            </>
          ) : (
            <LoginButton ButtonIcon={FaSignInAlt} />
          )}
        </div>

        <ul className="hidden md:flex md:items-center md:space-x-8">
          <NavItems /> {/* Renders the NavItems component */}
          <li>
            <SearchForm /> {/* Renders the SearchForm component */}
          </li>
        </ul>
      </div>

      {/* Responsive menu for mobile */}
      <div className={`w-full ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center border-0 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:bg-gray-700">
          <NavItems /> {/* Renders the NavItems component */}
          <li>
            <SearchForm /> {/* Renders the SearchForm component */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
