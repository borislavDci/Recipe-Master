"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  title: string;
  href: string;
}

const NavItems = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const navItems = [
    // Define navItems array here
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const generateLinkClass = (isActive: boolean) => {
    return `block px-3 py-2 hover:bg-info md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent ${
      isActive
        ? "font-bold text-primary border-b-2 border-primary"
        : "text-white"
    }`;
  };

  const renderNavItems = (navItems: NavItem[]) => {
    return navItems.map((item, index) => {
      const isActive = activePath === item.href;
      const linkClass = generateLinkClass(isActive);

      return (
        <li key={index} className="my-2 md:my-0">
          <Link href={item.href} className={linkClass}>
            {item.title}
          </Link>
        </li>
      );
    });
  };

  return <>{renderNavItems(navItems)}</>;
};

export default NavItems;
