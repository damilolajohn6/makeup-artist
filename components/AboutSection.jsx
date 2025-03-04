"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { services } from "../data/services";
import { ServiceCard } from "./ServiceCard";
import { CustomNavigation } from "./CustomNavigation";

export const AboutSection = () => {
  return (
    <section className="bg-[#E9ECEF] px-6 md:px-12 py-16">
      <div className="max-w-[90rem] mx-auto flex flex-wrap md:flex-nowrap gap-6">
        {/* About Section - Hidden on mobile, visible on medium and larger screens */}
        <div className="hidden md:flex w-1/4 flex-col items-center">
          <h2 className="text-3xl font-bold text-[#1A1D23]">About</h2>
        </div>

        {/* Content Section - Takes full width on mobile, 75% width on larger screens */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              With Over 5 Years Of Experience, I Specialize In Crafting
              Personalized Looks That Celebrate Individuality.
            </h2>

            <div className="text-black md:pt-40 font-light">
              <h4 className="font-semibold">Seeking a decadent look?</h4>
              <p className="mt-2">
                Your special day is more than just a moment; it's a cherished
                memory in the making. From the vows to the laughter, from the
                twinkling lights to the stolen glances, every detail deserves to
                shine—including you.
              </p>
              <p className="mt-4">
                As you step into your spotlight, imagine feeling radiant and
                confident, knowing your makeup is tailored perfectly to enhance
                your natural beauty.
              </p>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div className="relative mt-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              lazyPreloadPrevNext={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
            <CustomNavigation />
          </div>
        </div>
      </div>
    </section>
  );
};
