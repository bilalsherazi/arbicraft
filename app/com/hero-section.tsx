"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Match your other icons

const slides = [
  {
    id: 1,
    title: "We Create <span class='text-blue-600'>Value</span> Through Innovative and Reliable <span class='text-blue-600'>Tech Solutions</span>",
    description: "Trusted by top platforms like <b>edX</b>, <b>KAYAK</b>, and <b>Careem</b> for our transformative solutions and exceptional results.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: 2,
    title: "Empowering <span class='text-blue-600'>Global</span> Brands with Scalable Digital <span class='text-blue-600'>Ecosystems</span>",
    description: "We help businesses scale their operations through cutting-edge architecture and expert consulting.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2000",
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative  h-[90vh] min-h-5xl overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* BACKGROUND IMAGE - Always full width */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            {/* GRADIENT OVERLAY - Adjusted to fade out as content reaches the center */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-[40%] to-transparent" />
          </div>

          {/* WRAPPER LAYER - This aligns the content with the Navbar */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-full mt-3">
              <motion.div 
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-[#2E4361] leading-[1.1] mb-6 tracking-tighter uppercase "
                  dangerouslySetInnerHTML={{ __html: slides[current].title }}
                />
                
                <p 
                  className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
                  dangerouslySetInnerHTML={{ __html: slides[current].description }}
                />

                <div className="flex flex-col items-start space-y-12">
                  <button className="bg-blue-600 text-white px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl flex items-center gap-2 group">
                    Start a Project 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* DOTS: Progress Indicators */}
                  <div className="flex items-center space-x-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="focus:outline-none"
                      >
                        <motion.div
                          animate={{
                            width: current === index ? 60 : 12,
                            backgroundColor: current === index ? "#2563eb" : "#d1d5db"
                          }}
                          className="h-2 rounded-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Hero;