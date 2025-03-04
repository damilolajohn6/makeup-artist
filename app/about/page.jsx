import { AboutSection } from "@/components/AboutSection"
import FAQ from "@/components/Faq"
import GalleryCarousel from "@/components/Gallery"
import HomeHeroSection from "@/components/HomeHeroSection"
import Testimonial from "@/components/Testimonial"


const AboutPage = () => {
  return (
    <div>
      <HomeHeroSection />
      <AboutSection />
      <Testimonial />
      <FAQ />
      <GalleryCarousel />
    </div>
  )
}

export default AboutPage
