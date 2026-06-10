"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const TrustBuildSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const stats = [
    { value: "3000+", label: "Open edX Pull Requests" },
    { value: "10+", label: "Years of Tech Contribution" },
    { value: "500+", label: "Projects Delivered" },
    { value: "150+", label: "Global Clients" },
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_black.svg",
  ];

  // We only need to double the array for a perfect infinite loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden">
      {/* 
        CENTRAL WRAPPER 
        This keeps everything (Header, Stats, Logos) aligned to the same width
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        
        {/* ROW 1: HEADER */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
            Providing high-end <span className="text-blue-600">technology solutions</span> to build trust.
          </h2>
        </div>

        {/* ROW 2: STATS GRID - Constrained width so it doesn't look too thin/stretched */}
        <div className="max-w-5xl mx-auto bg-[#1E293B] rounded-2xl lg:rounded-[2.5rem] shadow-xl overflow-hidden mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="py-10 px-4 flex flex-col items-center text-center"
              >
                <span className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-slate-400 text-[10px] lg:text-xs font-semibold uppercase tracking-widest leading-tight max-w-[120px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: LOGO SECTION */}
        <div className="text-center mb-8">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* 
          LOGO SLIDER CONTAINER 
          Strictly contained within the max-w-7xl width 
        */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays for smooth entry/exit within the container */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex w-max"
            animate={{ 
              x: isPaused ? undefined : ["0%", "-50%"] 
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, 
                ease: "linear",
              }
            }}
          >
            {duplicatedLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center px-8 md:px-12 lg:px-16"
              >
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-6 md:h-8 w-auto object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuildSection;