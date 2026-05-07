import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import FullImageSection from "@/components/FullImageSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import StickyNavbar from "@/components/StickyNavbar";

export default function Home() {
  return (
    <>
      <StickyNavbar />
      <main>
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <FullImageSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
