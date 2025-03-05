"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries} from "react-icons/ci"
import { Button } from "@/components/ui/button";



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
              Danna <span className="text-[#A28E66]">Makeup</span>
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
                  ? "text-black border-b-2 border-[#A28E66]"
                  : "hover:text-[#A28E66]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/form">
            <Button className="bg-[#A28E66] text-white font-bold py-2 px-4 rounded-lg">
              Get a Quote
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
