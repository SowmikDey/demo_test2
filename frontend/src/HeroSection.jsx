import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 max-w-7xl mx-auto bg-[#faf8f5]">
      <div className="order-2 md:order-1 flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="block mb-6 text-xs md:text-sm text-[#8b7355] font-medium uppercase tracking-wider"
        >
          Timeless Elegance Since 2024
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#2c2416]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Welcome to{" "}
          <span className="font-bold bg-gradient-to-r from-[#8b7355] to-[#6b5744] bg-clip-text text-transparent">
            Home Design Furnitures
          </span>
          , where{" "}
          <span className="relative inline-block">
            reliable quality
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-4 -translate-x-1/2 -top-10 w-[110%] h-auto"
              style={{ transform: "scaleY(0.6)", transformOrigin: "center" }}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#d4a574"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          meets everyday comfort.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#5a4a3a] mb-8 leading-relaxed font-light"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Discover furniture that transforms your house into a home. Quality
          craftsmanship, timeless designs, and comfort you can count on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 text-[#8b7355] font-medium text-base sm:text-lg"
        >
          <motion.span
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="tracking-wide"
          >
            Scroll to explore our collection
          </motion.span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="order-1 md:order-2 w-full"
      >
        <ShuffleGrid />
      </motion.div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-lg shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[330px] sm:h-[380px] md:h-[430px] lg:h-[550px] gap-3 w-full">
      {squares}
    </div>
  );
};

export default HeroSection;
