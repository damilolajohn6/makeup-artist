"use client";
import { useRef } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sophia Martinez, Professional Makeup Artist",
    text: "Thanks to Danna Makeup Studio, my makeup skills have reached a whole new level! Their beauty academy provided me with hands-on training, expert guidance, and access to top-tier products. Now, I’m confidently working with high-profile clients and growing my business!",
  },
  {
    id: 2,
    name: "Lisa Thompson, Bridal Stylist",
    text: "Danna Makeup Studio transformed my career! Their makeup masterclass gave me the confidence and techniques to create flawless bridal looks. My clients love my work, and my bookings have doubled since taking their course!",
  },
  {
    id: 3,
    name: "Emma Davis, Beauty Influencer",
    text: "The product selection at Danna Makeup Studio is unmatched! I found the perfect foundation and skincare routine that keeps my skin glowing on and off camera. Their beauty experts truly know what works!",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const playerRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="bg-white px-6 md:px-12 py-16">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Section - Testimonials */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-[#1A1D23] text-center md:text-left mb-6">
            What Our Clients Are Saying
          </h2>
          <Slider ref={sliderRef} {...settings} className="w-full">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-4 px-4">
                <p className="italic text-gray-700">"{testimonial.text}"</p>
                <h3 className="text-base font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-3 bg-[#A28E66] text-white rounded-lg shadow hover:bg-[#433822] transition"
            >
              ←
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-3 bg-[#A28E66] text-white rounded-lg shadow hover:bg-[#433822] transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Section - Video Player */}
        <div className="w-full md:w-2/3 flex justify-center">
          <div className="relative w-full max-w-lg aspect-w-16 aspect-h-9">
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=LppMqvK4U08&pp=ygUTbWFrZXVwIGFydGlzdCB2aWRlbw%3D%3D"
              controls
              width="100%"
              height="100%"
              className="rounded-md"
              light={true} // Disabling lazy load for testing
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
