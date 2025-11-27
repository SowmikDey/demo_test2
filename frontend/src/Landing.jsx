import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GridSection from "./GridSection";
import StatsSection from "./StatsSection";
import TestimonialScroll from "./TestimonialScroll";
import Footer from "./Footer";

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
          
          {/* Stats Section */}
          <StatsSection />
          <TestimonialScroll />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;