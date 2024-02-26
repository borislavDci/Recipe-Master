import Link from "next/link";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface ProfileDropdownProps {
  isDropdownOpen: boolean;
}

interface ProfileDropdownItem {
  title: string;
  href: string;
  icon: JSX.Element;
}

const ProfileDropdown = ({ isDropdownOpen }: ProfileDropdownProps) => {
  const profileDropdownItems: ProfileDropdownItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <MdDashboardCustomize />,
    },
    {
      title: "Logout",
      href: "/logout",
      icon: <RiLogoutBoxRLine />,
    },
  ];

  return (
    <div
      className={`absolute left-8 top-full z-50 w-48 -translate-x-full transform ${
        isDropdownOpen ? "" : "hidden"
      } my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}
      id="user-dropdown"
    >
      <div className="px-4 py-4">
        <span className="block text-sm text-gray-900 dark:text-white">
          John Doe
        </span>
        <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
          john@gmail.com
        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">
        {profileDropdownItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <span className="profileIcons">{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropdown;
