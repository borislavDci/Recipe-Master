"use client";
import Link from "next/link";

interface NavItem {
  title: string;
  href: string;
}

interface NavItemsProps {
  items: NavItem[];
}

const renderNavItems = (items: NavItem[]) => {
  return items.map((item, index) => (
    <li key={index} className="my-2 md:my-0">
      <Link
        href={item.href}
        className="block rounded px-3 py-2 text-textColor hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
      >
        {item.title}
      </Link>
    </li>
  ));
};

const NavItems = ({ items }: NavItemsProps) => {
  return <>{renderNavItems(items)}</>;
};

export default NavItems;
