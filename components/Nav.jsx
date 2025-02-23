"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col text-white gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all text-white ${
            link.href === pathname
              ? "text-accent border-b-2 border-accent"
              : "hover:text-accent"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
