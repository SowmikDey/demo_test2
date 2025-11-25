import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#d4c5b0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-serif text-2xl md:text-3xl font-bold text-[#2c2416] tracking-tight">
          Home Design
        </div>
        
        {/* Navigation Tabs */}
        <SlideTabs />
      </div>
    </nav>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative hidden md:flex w-fit rounded-full border border-[#2c2416]/20 bg-white/50 backdrop-blur-sm p-1 shadow-sm"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Collection</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium text-[#2c2416] hover:text-[#ffffff] transition-colors"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="absolute top-0 left-0 z-0 h-full rounded-full bg-[#6d573b]"
    />
  );
};

export default Navbar;