import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const HomeHeroSection = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background image with full width and height */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/bb.png')" }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container flex relative pt-10 gap-10">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-white">
            Danna <span className="text-[#A28E66]">Makeup</span>
          </h1>
        </Link>

        <div className="z-10 mx-auto px-6 lg:px-12 flex flex-col justify-end w-[300px] h-full text-white">
          <h1 className="text-4xl font-bold w-full mb-4">
            Unleashing the Beauty Within Professional Makeup for Every Occasion
          </h1>

          <Link href="/booking">
            <Button className="bg-[#A28E66] hover:bg-[#5a4b2c] text-white font-semibold py-2 px-4 rounded-lg">
              Book a makeup session
            </Button>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden xl:flex gap-8">
          <Nav />
          <Link href="/form">
            <Button className="bg-white text-black font-semibold py-2 px-4 rounded-lg">
              Get a quote
            </Button>
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="block xl:hidden relative z-10 p-6">
          <MobileNav />
        </div>
      </div>

      {/* Footer div */}
      <div className="container absolute bottom-0  flex items-center  text-white pb-6 sm:pb-8 lg:pb-12">
        <div className="animate-bounce">
          <FaArrowUp size={24} />
        </div>
        <div className="py-4 max-w-md flex justify-start items-start px-4">
          <p className="">
            Your special day is more than just a moment; it's a cherished memory
            in the making.
          </p>
        </div>
        <div className="animate-bounce">
          <FaArrowDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
