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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const categories = [
    {
      id: 1,
      title: "Chairs",
      category: "SEATING",
      model: "/Model/base_basic_shaded.glb", // Update with your actual model filename
      description: "Crafted using premium materials and precision German technology. Designed for long-lasting comfort with sturdy, stylish construction. Perfect for enhancing any living, study, or dining space beautifully.",
      itemCount: "24+ Items"
    },
    {
      id: 2,
      title: "Beds",
      category: "BEDROOM",
      model: "/Model/base_basic_shaded_bed.glb", // Update with your actual model filename
      description: "Built with eco-friendly, durable materials for a premium bedroom experience. Designed using advanced German machinery for precision and strength. Provides a modern, cozy, and long-lasting sleep environment.",
      itemCount: "18+ Items"
    },
    {
      id: 3,
      title: "Dining Tables",
      category: "DINING",
      model: "/Model/base_basic_shaded_dinning.glb", // Update with your actual model filename
      description: "Made from high-quality engineered wood and crafted with CNC German technology. Strong, elegant, and built to last with superior finishing. Perfect for creating a warm, welcoming dining space.",
      itemCount: "15+ Items"
    },
    {
      id: 4,
      title: "Sofas",
      category: "LIVING ROOM",
      model: "/Model/base_basic_shaded_sofa.glb", // Update with your actual model filename
      description: "Constructed with teak/kapoor internal frame and white ash German wood. Features certified high-density foam for exceptional comfort and support. Designed for a stylish, durable, and modern living room look.",
      itemCount: "20+ Items"
    },
    {
      id: 5,
      title: "Storage",
      category: "ORGANIZATION",
      model: "/Model/base_basic_shaded_storage.glb", // Update with your actual model filename
      description: "Made with 18mm calibrated plywood and branded hardware fittings. Built using advanced German CNC technology for flawless finish and durability. Offers optimized space, smooth operation, and long-lasting performance.",
      itemCount: "30+ Items"
    },
    {
      id: 6,
      title: "Tables",
      category: "FURNITURE",
      model: "/Model/base_basic_shaded_table.glb", // Update with your actual model filename
      description: "Crafted with premium plywood and precision German CNC technology. Designed for durability, stability, and long hours of productive work. Features a clean, functional layout to keep your workspace organized and efficient.",
      itemCount: "22+ Items"
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Furniture Collection
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore our 3D furniture models. Rotate, zoom, and view every detail before you buy.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* 3D Model Viewer Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Model3DViewer 
                  modelPath={category.model}
                  alt={category.title}
                  className="w-full h-full"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-indigo-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10">
                  {category.category}
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium z-10">
                  {category.itemCount}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{category.description}</p>
                <button className="w-full bg-indigo-500 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-indigo-600 transition-all active:scale-95 group-hover:shadow-lg text-sm sm:text-base">
                  Explore {category.title} →
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