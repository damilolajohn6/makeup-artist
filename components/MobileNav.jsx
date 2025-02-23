"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries} from "react-icons/ci"


const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/form",
    label: "Form",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-white" />
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col bg-white p-6">
        <div className="text-center text-2xl mb-8">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Danna <span className="text-accent">Makeup</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`capitalize font-medium text-lg transition-all ${
                link.href === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
