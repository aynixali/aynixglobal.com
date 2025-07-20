import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import VisionSection from "@/components/vision-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <title>Aynix - The Name of Legacy</title>
      <meta name="description" content="Aynix - Pakistan's most futuristic brand. Engineering elite laptops, smart devices, and tomorrow's technology from Islamabad." />
      
      {isLoading && <LoadingScreen />}
      <div className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
