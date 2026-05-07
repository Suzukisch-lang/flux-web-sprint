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
        {/* light = dark-bg section → white navbar text */}
        {/* dark  = light-bg section → black navbar text */}
        <div data-nav-theme="light"><HeroSection /></div>
        <div data-nav-theme="dark"><IntroSection /></div>
        <div data-nav-theme="dark"><AboutSection /></div>
        <div data-nav-theme="light"><FullImageSection /></div>
        <div data-nav-theme="light"><ServicesSection /></div>
        <div data-nav-theme="dark"><PortfolioSection /></div>
        <div data-nav-theme="dark"><TestimonialsSection /></div>
        <div data-nav-theme="dark"><NewsSection /></div>
      </main>
      <div data-nav-theme="light"><Footer /></div>
    </>
  );
}
