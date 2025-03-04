import {AboutSection} from "@/components/AboutSection";
import Header from "@/components/Header";
import HomeHeroSection from "@/components/HomeHeroSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="font-black">
      <HomeHeroSection />
      <AboutSection />
      <Testimonial />
    </div>
  );
}
