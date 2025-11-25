import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Model3DViewer from "./Model3DViewer";

const GridSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const categories = [
    {
      id: 1,
      title: "Chairs",
      category: "SEATING",
      model: "/Model/base_basic_shaded.glb",
      description: "Discover our collection of comfortable and stylish chairs for every space.",
      itemCount: "24+ Items"
    },
    {
      id: 2,
      title: "Beds",
      category: "BEDROOM",
      model: "/Model/bed.glb",
      description: "Explore premium beds designed for ultimate comfort and elegant bedroom aesthetics.",
      itemCount: "18+ Items"
    },
    {
      id: 3,
      title: "Dining Tables",
      category: "DINING",
      model: "/Model/dining.glb",
      description: "Browse our dining tables perfect for family gatherings and special occasions.",
      itemCount: "15+ Items"
    },
    {
      id: 4,
      title: "Sofas",
      category: "LIVING ROOM",
      model: "/Model/sofa.glb",
      description: "Find the perfect sofa that combines luxury, comfort, and contemporary design.",
      itemCount: "20+ Items"
    },
    {
      id: 5,
      title: "Storage",
      category: "ORGANIZATION",
      model: "/Model/storage.glb",
      description: "Smart storage solutions including wardrobes, cabinets, and shelving units.",
      itemCount: "30+ Items"
    },
    {
      id: 6,
      title: "Tables",
      category: "FURNITURE",
      model: "/Model/table.glb",
      description: "Versatile tables for coffee, study, and work - designed for modern living.",
      itemCount: "22+ Items"
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f1eb] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 text-xs md:text-sm text-[#8b7355] font-medium uppercase tracking-wider"
          >
            Curated Collections
          </motion.span>
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2c2416] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Furniture Collection
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-[#5a4a3a] max-w-3xl mx-auto px-4 leading-relaxed font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore our 3D furniture models. Rotate, zoom, and view every detail in stunning clarity.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-[#e8dfd4]"
            >
              {/* 3D Model Viewer Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-gradient-to-br from-[#faf8f5] to-[#f5f1eb]">
                <Model3DViewer 
                  modelPath={category.model}
                  alt={category.title}
                  className="w-full h-full"
                />
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-[#2c2416] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-10 tracking-wide">
                  {category.category}
                </div>
                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-white/95 backdrop-blur-sm text-[#2c2416] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold z-10 shadow-sm">
                  {category.itemCount}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-[#2c2416] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {category.title}
                </h3>
                <p 
                  className="text-sm sm:text-base text-[#5a4a3a] mb-6 leading-relaxed font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category.description}
                </p>
                <button className="w-full bg-[#2c2416] text-white font-medium py-3 sm:py-4 px-6 rounded-xl hover:bg-[#3d3123] transition-all duration-300 active:scale-98 group-hover:shadow-lg text-sm sm:text-base tracking-wide flex items-center justify-center gap-2">
                  <span>Explore {category.title}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GridSection;