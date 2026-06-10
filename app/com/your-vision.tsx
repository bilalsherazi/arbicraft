"use client";
import React from "react";
import { motion } from "framer-motion";

const VisionExpertiseSection = () => {
  const techLogos = [
    { id: 1, name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { id: 2, name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { id: 3, name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { id: 4, name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { id: 5, name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { id: 6, name: "Kubernetes", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" },
    { id: 7, name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_logo.svg" },
  ];

  return (
    /* 1. Root Container: Background color set to a deep base to make white text pop */
    <section className="relative w-full py-10 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0a0a0c]">
      
      {/* 2. Multi-Color Mesh Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f6_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#6366f1_0%,transparent_50%),radial-gradient(circle_at_50%_10%,#2dd4bf_0%,transparent_40%)] opacity-40 blur-[100px]" />
      </div>

      {/* 3. The White Fading Overlay 
          Transitions from transparent at the top to white at the very bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#2E4361] to-white" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* ROW 1: HEADER TEXT */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-extrabold text-white mb-6 tracking-tight"
          >
            Your Vision, Our Expertise
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-blue-200/80"
          >
            If You Can Imagine It, We Can Build It
          </motion.h2>
        </div>

        {/* ROW 2: LOGO BOXES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" 
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              /* Added border and slight glass effect to the white boxes */
              className="bg-white/95 backdrop-blur-sm aspect-square rounded-[2rem] flex items-center justify-center p-7 group cursor-pointer shadow-xl border border-white/20"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="w-full h-full object-contain filter  transition-all duration-500 transform group-hover:scale-110"
                title={logo.name}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionExpertiseSection;