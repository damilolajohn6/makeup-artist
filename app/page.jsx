import {AboutSection} from "@/components/AboutSection";
import Header from "@/components/Header";
import HomeHeroSection from "@/components/HomeHeroSection";

export default function Home() {
  return (
    <div className="font-black">
      <HomeHeroSection />
      <AboutSection />
    </div>
  );
}
