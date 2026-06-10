"use client";
import React from "react";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const steps = [
    {
      title: "IT Staff Augmentation",
      description: "Fill skills gaps fast by bringing in qualified professionals whenever you need them. Scale your team up or down based on project demands.",
      borderColor: "border-t-emerald-400",
      gif: "./01_Staff_Augmentation_1_223fc7d1df.gif",
    },
    {
      title: "Dedicated Teams",
      description: "You get a fully committed team that integrates into your organization and culture, focusing exclusively on your long-term goals.",
      borderColor: "border-t-blue-500",
      gif: "./02_Software_Outsourcing_9a723783c6.gif",
    },
    {
      title: "Software Development Outsourcing",
      description: "We build your software from start to finish, letting you focus on your core business while we handle the technical execution.",
      borderColor: "border-t-yellow-400",
      gif: "./02_Software_Outsourcing_9a723783c6.gif",
    },
  ];

  return (
    // py-20 provides a professional vertical rhythm
    <section className="w-full py-20 px-6 bg-white">
      {/* max-w-6xl is the professional standard for balanced content width */}
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E4361]">
            How we <span className="text-blue-600">work with you</span>
          </h2>
        </div>

        {/* WORK SECTIONS - gap-12 adds clear separation between the three grids */}
        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // h-full or min-h-[320px] ensures the cards have a substantial, professional feel
              className={`grid grid-cols-1 md:grid-cols-2 items-center rounded-[2rem] bg-slate-50/80 border-t-4 ${step.borderColor} shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[320px] overflow-hidden`}
            >
              
              {/* LEFT SIDE: CONTENT - Increased padding for better readability */}
              <div className="p-10 md:p-14 lg:p-16">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2E4361] mb-5 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
                  {step.description}
                </p>
                
                <div className="mt-8">
                  <button className="text-blue-600 font-bold flex items-center gap-2 group text-sm md:text-base">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: GIF */}
              <div className="flex items-center justify-center p-8 bg-slate-100/30 md:h-full">
                <div className="w-full max-w-[320px]">
                  <img 
                    src={step.gif} 
                    alt={step.title} 
                    // mix-blend-multiply blends white backgrounds perfectly
                    className="w-full h-auto max-h-[220px] object-contain mix-blend-multiply" 
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;