"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ServicesSection = () => {
  // Top Level Tabs
  const [activeTab, setActiveTab] = useState("services");
  // Sidebar Links
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const data = {
    services: [
      {
        id: "it-ops",
        label: "IT Operations",
        title: "Managed IT Operations",
        description: "Streamline your business with our 24/7 managed IT infrastructure, ensuring 99.9% uptime and proactive monitoring.Streamline your business with our 24/7 managed IT infrastructure, ensuring 99.9% uptime and proactive monitoring.",
        buttonText: "Explore IT Ops"
      },
      {
        id: "mobility",
        label: "Mobility & Apps",
        title: "Enterprise Mobility Solutions",
        description: "Custom mobile applications built for iOS and Android that integrate seamlessly with your existing enterprise software.Streamline your business with our 24/7 managed IT infrastructure, ensuring 99.9% uptime and proactive monitoring.",
        buttonText: "View Mobility"
      },
      {
        id: "dev-qa",
        label: "Development & QA",
        title: "Agile Development & Automated QA",
        description: "Full-stack development coupled with rigorous automated testing to deliver bug-free, scalable software solutions.Streamline your business with our 24/7 managed IT infrastructure, ensuring 99.9% uptime and proactive monitoring.",
        buttonText: "Check QA Process"
      }
    ],
    solutions: [
      {
        id: "cloud",
        label: "Cloud Migration",
        title: "Azure & AWS Cloud Solutions",
        description: "Moving your legacy data to the cloud with zero downtime and optimized cost structures. lorem gjhchhkdghkgcgdgcfhdgfcfkjhgdhcfgjhgchjg hjjggcgdjkhdgjhgjhgds",
        buttonText: "Cloud Solutions"
      },
      {
        id: "security",
        label: "Cybersecurity",
        title: "End-to-End Encryption",
        description: "Protecting your digital assets with advanced threat detection and multi-layer security protocols.",
        buttonText: "Secure Assets"
      }
    ]
  };

  const currentItems = activeTab === "services" ? data.services : data.solutions;
  const currentContent = currentItems[activeLinkIndex] || currentItems[0];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ROW 1: CENTERED HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            <span className="text-[#2E4361]">OUR</span>{" "}
            <span className="text-blue-600">OFFERING</span>
          </h2>
        </div>

        {/* ROW 2: CENTERED TABS WITH BOTTOM LINE */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative flex gap-8 md:gap-16 pb-4">
            <button
              onClick={() => { setActiveTab("services"); setActiveLinkIndex(0); }}
              className={`text-sm md:text-base font-bold tracking-[0.2em] transition-colors duration-300 ${
                activeTab === "services" ? "text-blue-600" : "text-slate-400"
              }`}
            >
              OUR SERVICES
            </button>
            <button
              onClick={() => { setActiveTab("solutions"); setActiveLinkIndex(0); }}
              className={`text-sm md:text-base font-bold tracking-[0.2em] transition-colors duration-300 ${
                activeTab === "solutions" ? "text-blue-600" : "text-slate-400"
              }`}
            >
              OUR SOLUTIONS
            </button>

            {/* Sliding Underline */}
            <motion.div
              layoutId="topTabUnderline"
              className="absolute bottom-0 h-[3px] bg-blue-600"
              initial={false}
              animate={{
                left: activeTab === "services" ? "0%" : "55%", // Approximate position
                width: activeTab === "services" ? "40%" : "45%"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* ROW 3: TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-12 gap-0 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          
          {/* LEFT SIDE: Vertical Links (4 Columns) */}
          <div className="col-span-12 md:col-span-4 bg-white p-8 md:p-12 relative">
            <div className="flex flex-col gap-6 relative">
              
              {/* The Vertical Line Background */}
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-slate-100" />

              {/* The Blue Indicator Line */}
              <motion.div
                animate={{ y: activeLinkIndex * 64 }} // 64px is height + gap
                className="absolute right-0 w-[3px] h-10 bg-blue-600 z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {currentItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveLinkIndex(index)}
                  className={`flex items-center justify-between text-left h-10 pr-6 transition-all duration-300 ${
                    activeLinkIndex === index 
                    ? "text-blue-600 font-bold" 
                    : "text-slate-500 font-medium hover:text-[#2E4361]"
                  }`}
                >
                  <span className="text-lg">{item.label}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeLinkIndex === index ? "translate-x-1 opacity-100" : "opacity-0"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Content (8 Columns) */}
          <div className="col-span-12 md:col-span-8 bg-gray-50/30 p-8 md:p-16 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-xl"
              >
                <h3 className="text-3xl font-bold text-[#2E4361] mb-6">
                  {currentContent.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {currentContent.description}
                </p>
                
                {/* Link Button */}
                <button className="group flex items-center gap-3 bg-[#2E4361] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/10">
                  {currentContent.buttonText}
                  <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;