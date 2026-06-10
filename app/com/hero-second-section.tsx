"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "Why Market Leaders Trust Us",
    title: "One of the Biggest <span class='text-blue-600'>Open Source Contributors</span> for Open edX",
    stats: [
      { label: "Pull Requests", value: "3000+" },
      { label: "Years Experience", value: "10+" },
    ],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    badge: "Innovative Tech Solutions",
    title: "We Create <span class='text-blue-600'>Value</span> Through Reliable Tech Ecosystems",
    stats: [
      { label: "Projects Delivered", value: "500+" },
      { label: "Global Clients", value: "150+" },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  }
];

const HeroSecondSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const current = Math.abs(page % slides.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 7000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-[750px] md:h-[70vh] min-h-[600px] overflow-hidden bg-[#FBFDFF] flex items-center justify-center">
      
      {/* 1. BUTTONS WRAPPER - Strictly constrained to max-w-7xl */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 md:px-6 flex justify-between items-center">
          
          {/* PREVIOUS BUTTON - Small on MD, Large on LG */}
          <button 
            onClick={() => paginate(-1)} 
            className="pointer-events-auto group p-2 md:p-3 lg:p-5 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            <ChevronLeft className="w-1 h-1 md:w-2 md:h-2 lg:w-4 lg:h-4  group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* NEXT BUTTON - Small on MD, Large on LG */}
          <button 
            onClick={() => paginate(1)} 
            className="pointer-events-auto group p-2 md:p-3 lg:p-5 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            <ChevronRight className="w-1 h-1 md:w-2 md:h-2 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {/* 2. CONTENT CONTAINER - High PX ensures text starts away from the buttons */}
          <div className="max-w-7xl mx-auto w-full px-16 sm:px-20 md:px-28 lg:px-32">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
              
              {/* TEXT SECTION - Shifted from left with md:pl-10 */}
              <div className="w-full md:w-[60%] order-2 md:order-1 text-center md:text-left md:pl-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-widest border border-blue-100 inline-block shadow-sm">
                      {slides[current].badge}
                    </span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-[#1E2E45] leading-[1.2] mb-8 uppercase tracking-tighter max-w-[18ch] mx-auto md:mx-0" 
                      dangerouslySetInnerHTML={{ __html: slides[current].title }} 
                  />

                  <div className="flex justify-center md:justify-start items-center space-x-10 md:space-x-14">
                    {slides[current].stats.map((stat, idx) => (
                      <div key={idx} className="relative pl-5">
                        <div className="text-xl md:text-2xl lg:text-4xl font-black text-blue-600 tabular-nums leading-none">{stat.value}</div>
                        <div className="text-[8px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-4">
                          {stat.label}
                        </div>
                        <div className="absolute left-0 top-1 bottom-1 w-1 bg-blue-600/20 rounded-full" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* IMAGE SECTION - Reduced size to prevent overcrowding */}
              <div className="w-full md:w-[40%] flex justify-center order-1 md:order-2">
                <div className="relative w-full max-w-[260px] md:max-w-[320px] lg:max-w-[360px] aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-[6px] md:border-[10px] border-white ring-1 ring-gray-100">
                  <motion.img
                    key={slides[current].image}
                    src={slides[current].image}
                    alt="Hero Visual"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 3. DOTS INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setPage([index, index > current ? 1 : -1])}>
            <motion.div
              animate={{ 
                width: current === index ? 32 : 10, 
                backgroundColor: current === index ? "#2563eb" : "#cbd5e1" 
              }}
              className="h-2 rounded-full transition-all duration-300"
            />
          </button>
        ))}
      </div>

    </section>
  );
};

export default HeroSecondSection;