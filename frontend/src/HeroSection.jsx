import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 max-w-6xl mx-auto">
      <div className="order-2 md:order-1 flex flex-col">
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
          Welcome to{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Home Design Furnitures
          </span>
          , where{" "}
          <span className="relative inline-block">
            reliable quality
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 w-full h-auto"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
          meets everyday comfort.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-6 md:mb-8">
          Discover furniture that transforms your house into a home. Quality craftsmanship, timeless designs, and comfort you can count on.
        </p>
        <motion.div
          className="flex items-center gap-2 text-indigo-500 font-medium text-base sm:text-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll to check our collection</span>
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
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </motion.svg>
        </motion.div>
      </div>
      <div className="order-1 md:order-2 w-full">
        <ShuffleGrid />
      </div>
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
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
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
    <div className="grid grid-cols-4 grid-rows-4 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] gap-1 w-full">
      {squares}
    </div>
  );
};

export default HeroSection;