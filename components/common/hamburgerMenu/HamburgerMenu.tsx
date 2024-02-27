import { HiMenu, HiX } from "react-icons/hi";

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    // Button to toggle the mobile menu
    <button
      data-collapse-toggle="navbar-user"
      type="button"
      className="block-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-user"
      aria-expanded={isMenuOpen ? "true" : "false"}
      onClick={toggleMenu}
    >
      <span className="sr-only">Toggle menu</span>
      {/* Display hamburger or close icon based on menu state */}
      {isMenuOpen ? (
        <HiX className="h-6 w-6" />
      ) : (
        <HiMenu className="h-6 w-6" />
      )}
    </button>
  );
};

export default HamburgerMenu;
