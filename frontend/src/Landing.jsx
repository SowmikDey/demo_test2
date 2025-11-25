import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GridSection from "./GridSection";

const Landing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax effect
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="relative bg-[#faf8f5]">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content with top padding to account for fixed navbar */}
      <div ref={containerRef} className="">
        {/* Hero Section with Parallax Effect */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
          className="sticky top-5 z-10 bg-[#faf8f5]"
        >
          <HeroSection />
        </motion.div>

        {/* Grid Section that fades in */}
        <div className="relative z-20 bg-[#f5f1eb]">
          <GridSection />
          
          {/* Placeholder for future sections */}
          <div className="min-h-screen bg-[#faf8f5] py-20 px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#2c2416] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                More Sections Coming Soon
              </h2>
              <p 
                className="text-lg text-[#5a4a3a] font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Add your additional sections here by creating new component files
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;