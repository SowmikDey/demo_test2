import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const TestimonialScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66%']);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Working with this team has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote: 'The level of professionalism and expertise they bring to every project is truly remarkable. Highly recommend to anyone looking for top-tier service.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'They transformed our vision into reality beyond our expectations. Every interaction was smooth, professional, and results-driven.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'An incredible experience from start to finish. Their innovative approach and dedication to quality sets them apart from the competition.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Jessica Martinez',
      role: 'Creative Director, DesignHub',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      quote: 'Outstanding work! They consistently deliver exceptional results and their customer service is second to none. A true pleasure to work with.',
      rating: 5,
    },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#faf8f5] py-32 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-[#2c2416] text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#5a4a3a] text-center font-light"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Trusted by industry leaders worldwide
        </motion.p>
      </div>

      {/* Scrolling Cards Container */}
      <div className="relative h-[500px]">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[400px] md:min-w-[500px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-[#2c2416] mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#2c2416]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#5a4a3a]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-sm text-[#5a4a3a] font-light">
          Scroll to see more testimonials →
        </p>
      </motion.div>
    </div>
  );
};

export default TestimonialScroll;