"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ChevronUp } from "lucide-react";

const testimonialsData = [
  { id: 1, category: "Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", content: "The engineering team delivered beyond our expectations. Their architectural decisions for our Open edX platform were world-class.", author: "James Wilson", role: "CTO, TechFlow", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: 2, category: "Health", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Pfizer_logo.svg", content: "Reliability is key in healthcare. Their tech stack ensured 99.9% uptime for our patient portal, making them a trusted partner.", author: "Dr. Sarah Chen", role: "Head of Digital, Pfizer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 3, category: "Travel", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Belo.svg", content: "An incredible experience from start to finish. They handled our complex booking engine migration with absolute precision.", author: "Marcus Brown", role: "Product Lead, Airbnb", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { id: 4, category: "Technology", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", content: "Strategic thinking and clean code. They are not just developers; they are consultants who care about the business logic.", author: "Elena Rodriguez", role: "Engineering Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
  { id: 5, category: "Health", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", content: "The AI implementation provided by the team revolutionized how we process medical data securely across all our global branches.", author: "Robert Fox", role: "COO, HealthSync", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { id: 6, category: "Travel", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png", content: "Their ability to integrate complex API systems into a seamless user interface is unmatched in the current market.", author: "Sophie Turner", role: "VP Ops, Tesla", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
];

const AboutUsPage = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);

  const categories = ["All", "Technology", "Health", "Travel"];

  const handleFilterClick = (cat) => {
    setFilter(cat);
    setVisibleCount(3);
  };

  const filteredItems = testimonialsData.filter(
    (item) => filter === "All" || item.category === filter
  );

  const handleShowLess = () => {
    setVisibleCount(3);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#F8FAFC] py-16 md:py-24 overflow-hidden">
      {/* 
        MAIN WRAPPER 
        Using max-w-7xl to prevent content from spreading too wide on 4K monitors 
      */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            What our <span className="text-blue-600">clients</span> say
          </h2>
        </div>

        {/* FILTERS - Cleaner design */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-12 border-b border-slate-200 pb-8">
          {categories.map((cat, index) => (
            <React.Fragment key={cat}>
              <button
                onClick={() => handleFilterClick(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-400"
                }`}
              >
                {cat}
                {filter === cat && cat !== "All" && <X size={14} />}
              </button>
              {index === 0 && <div className="hidden md:block w-[1px] h-6 bg-slate-200 mx-2" />}
            </React.Fragment>
          ))}
        </div>

        {/* GRID LAYOUT - Adjusted gap and item sizing */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-slate-900 transition-all duration-500 flex flex-col h-full"
              >
                {/* Logo Area */}
                <div className="h-8 md:h-10 mb-8">
                  <img 
                    src={item.logo} 
                    alt="brand" 
                    className="h-full w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-slate-600 group-hover:text-slate-200 text-base md:text-[17px] leading-relaxed mb-8 font-medium transition-colors duration-500">
                    "{item.content}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50 group-hover:border-slate-800 transition-colors duration-500">
                  <img 
                    src={item.image} 
                    alt={item.author} 
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 ring-2 ring-transparent group-hover:ring-blue-500 transition-all" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-white text-sm">
                      {item.author}
                    </h4>
                    <p className="text-xs text-blue-600 group-hover:text-blue-400 font-bold uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BUTTONS */}
        <div className="mt-16 flex justify-center">
          {filteredItems.length > 3 && (
            <button 
              onClick={visibleCount < filteredItems.length ? () => setVisibleCount(v => v + 3) : handleShowLess}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all active:scale-95 text-sm md:text-base ${
                visibleCount < filteredItems.length 
                ? "bg-[#1E293B] text-white hover:bg-blue-600 shadow-lg" 
                : "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {visibleCount < filteredItems.length ? (
                <>Read More Articles <Plus size={18} /></>
              ) : (
                <>Show Less <ChevronUp size={18} /></>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;