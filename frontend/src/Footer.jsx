import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'translateY(0)' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const footerY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.footer
      ref={footerRef}
      style={{ y: footerY, opacity: footerOpacity }}
      className="bg-[#2c2416] text-[#faf8f5] relative overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #faf8f5 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <AnimatedSection delay={0}>
            <div>
              <h3 
                className="text-3xl font-bold mb-6 text-[#faf8f5]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Home Design
              </h3>
              <p 
                className="text-[#c9bfb3] leading-relaxed font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Creating timeless designs and exceptional experiences for forward-thinking brands.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-[#3d3228] flex items-center justify-center hover:bg-[#5a4a3a] transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3d3228] flex items-center justify-center hover:bg-[#5a4a3a] transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3d3228] flex items-center justify-center hover:bg-[#5a4a3a] transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#3d3228] flex items-center justify-center hover:bg-[#5a4a3a] transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.15}>
            <div>
              <h4 
                className="text-lg font-semibold mb-6 text-[#faf8f5]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Services
              </h4>
              <ul 
                className="space-y-3 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Brand Identity</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Web Design</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Digital Strategy</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Content Creation</a></li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div>
              <h4 
                className="text-lg font-semibold mb-6 text-[#faf8f5]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Company
              </h4>
              <ul 
                className="space-y-3 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Careers</a></li>
                <li><a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Blog</a></li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.45}>
            <div>
              <h4 
                className="text-lg font-semibold mb-6 text-[#faf8f5]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch
              </h4>
              <div 
                className="space-y-4 font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <div className="flex items-start gap-3 text-[#c9bfb3]">
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span>hello@studio.design</span>
                </div>
                <div className="flex items-start gap-3 text-[#c9bfb3]">
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3 text-[#c9bfb3]">
                  <MapPin size={20} className="mt-1 flex-shrink-0" />
                  <span>123 Design Street<br/>New York, NY 10001</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Bottom Bar */}
        <AnimatedSection delay={0.6}>
          <div className="border-t border-[#3d3228] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-[#c9bfb3] text-sm font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              © 2024 Studio. All rights reserved.
            </p>
            <div 
              className="flex gap-6 text-sm font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Terms of Service</a>
              <a href="#" className="text-[#c9bfb3] hover:text-[#faf8f5] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.footer>
  );
}