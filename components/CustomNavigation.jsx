import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const CustomNavigation = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        className="swiper-button-prev bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        aria-label="Previous Slide"
      >
        <FaArrowLeft className="text-black" />
      </button>
      <button
        className="swiper-button-next bg-white p-3 rounded-full shadow-lg hover:bg-gray-200"
        aria-label="Next Slide"
      >
        <FaArrowRight className="text-black" />
      </button>
    </div>
  );
};