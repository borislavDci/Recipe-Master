"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

import Image from "next/image";
import profile from "@/public/navbar/profile.png";
import ProfileDropdown from "@/common/profileDropdown/ProfileDropdown";
import SearchForm from "@/common/search/SearchForm";
import HamburgerMenu from "@/common/hamburgerMenu/HamburgerMenu";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
    setIsDropdownOpen(false);
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  return (
    <nav className="relative bg-gray-800 ">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Renders the Hamburger menu */}
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
          <button
            type="button"
            className="flex rounded-full bg-textColor     text-sm focus:ring-4 md:me-0 dark:focus:ring-info"
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

          {/* Renders the Profile dropdown componenet */}
          <ProfileDropdown isDropdownOpen={isDropdownOpen} />
        </div>

        <ul className="hidden md:flex md:items-center md:space-x-8">
          {/* Renders NavItems components to dispay the nav items */}
          <NavItems items={navItems} />
          <li>
            <SearchForm />
          </li>
        </ul>
      </div>

      <div className={`w-full ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
          {/* Renders NavItems components to dispay the nav items */}
          <NavItems items={navItems} />
          <li>
            {/* Renders the search form component */}
            <SearchForm />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
