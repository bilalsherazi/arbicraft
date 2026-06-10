"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    /* Changed flex-col to flex-row and space-y to space-x */
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-row items-center space-x-3 md:space-x-4">
      
      {/* Back to Top Button - Standard static button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#283a53] border-blue-100 p-3 rounded-full shadow-xl text-white hover:bg-black transition-colors"
          title="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Message / Chat Icon - Standard static button */}
      <button 
        className="bg-blue-600 p-4 rounded-full text-white shadow-2xl hover:bg-blue-700 transition-colors relative"
      >
        <MessageCircle size={28} fill="currentColor" />
        {/* Online indicator dot */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </button>
      
    </div>
  );
};

export default FloatingActions;