"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      Swal.fire({
        title: "Subscribed!",
        text: "Thank you for joining our newsletter.",
        icon: "success",
        confirmButtonColor: "#2563eb",
        iconColor: "#2563eb",
        customClass: {
          popup: "rounded-[2rem]",
        },
      });
      setEmail("");
    }
  };

  return (
    <section className="w-full px-4 py-8 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-[#2E4361] border border-slate-100/10 shadow-xl shadow-blue-900/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
      >
        
        {/* LEFT SIDE: CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">
            Newsletter
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Join us to stay connected with the global trends and technologies.
          </p>
        </div>

        {/* RIGHT SIDE: INPUT FIELD */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <form 
            onSubmit={handleSubscribe}
            className="relative flex items-center p-1.5 bg-white rounded-full border border-transparent focus-within:border-blue-400 transition-all duration-300 shadow-inner"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent pl-4 pr-2 py-2 md:py-3 outline-none text-slate-700 placeholder:text-slate-400 text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 md:px-8 md:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#1e3a5f] transition-all active:scale-95 shadow-md"
              aria-label="Subscribe"
            >
              <span className="hidden md:block">Subscribe</span>
              <Send size={18} className="shrink-0" />
            </button>
          </form>
          
          <p className="mt-4 text-[10px] md:text-xs text-slate-300 text-center lg:text-left px-2">
            We care about your data in our{" "}
            <span className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors">
              privacy policy
            </span>.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default Newsletter;