import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const HomeHeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bb.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header & Navigation */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 lg:px-12 pt-6">
        <Link href="/">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">
            Danna <span className="text-[#A28E66]">Makeup</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-6">
          <Nav />
          <Link href="/form">
            <Button className="bg-white text-black font-semibold py-2 px-4 rounded-lg">
              Get a Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="block xl:hidden z-10">
          <MobileNav />
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 lg:px-12 h-full text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-xl leading-tight mb-6">
          Unleashing the Beauty Within <br /> Professional Makeup for Every
          Occasion
        </h1>

        <Link href="/booking">
          <Button className="bg-[#A28E66] hover:bg-[#5a4b2c] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Book a Makeup Session
          </Button>
        </Link>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-center">
        <div className="animate-bounce mb-2">
          <FaArrowUp size={24} />
        </div>
        <p className="text-sm sm:text-base max-w-md px-4">
          Your special day is more than just a moment; it's a cherished memory
          in the making.
        </p>
        <div className="animate-bounce mt-2">
          <FaArrowDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
