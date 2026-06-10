"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Mail, MapPin, Phone, Send, MessageSquare, CheckCircle2 
} from "lucide-react";
import Swal from 'sweetalert2';

const Footer = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Reduced from 180vh to 150vh to make the reveal tighter and remove empty space
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 80, 
    damping: 30,
    restDelta: 0.001 
  });

  // Faster reveal: Slide up finishes at 0.8 instead of 1.0
  const footerY = useTransform(smoothProgress, [0, 0.8], ["0%", "-100%"]);
  const sheetScale = useTransform(smoothProgress, [0.4, 0.8], [0.92, 1]);
  const sheetOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({ 
        title: 'Success', 
        text: 'Message Sent!', 
        icon: 'success', 
        background: '#0a0a0b', 
        color: '#fff', 
        confirmButtonColor: '#2563eb',
        customClass: { popup: 'rounded-2xl border border-white/10' }
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    // Reduced height to remove extra scroll space
    <div ref={containerRef} className="relative h-[150vh] bg-[#050506] overflow-hidden">
      
      {/* LAYER 1: THE TOP FOOTER (Slides up) */}
      <motion.footer 
        style={{ y: footerY }}
        // Removed h-screen and added tighter padding
        className="sticky top-0 w-full bg-[#051628] text-white py-10 md:py-16 px-6 md:px-12 z-30 shadow-2xl border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand Section */}
            <div className="md:col-span-5">
              <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter uppercase">Arrow Head</h2>
              <div className="flex flex-col gap-3 text-slate-400">
                <p className="flex items-center gap-3 text-sm font-medium">
                  <MapPin size={18} className="text-blue-500 shrink-0" />
                  25 Tariq Block, Lahore
                </p>
                <p className="flex items-center gap-3 text-sm font-medium">
                  <Phone size={18} className="text-blue-500 shrink-0" />
                  +92 42 111 272 476
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="md:col-span-7 grid grid-cols-2 gap-6 md:gap-12">
              <div>
                <h4 className="text-[10px] font-black mb-4 text-blue-500 uppercase tracking-[0.2em]">Company</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-semibold">
                  {["About Us", "Our Team", "Careers", "Contact"].map(l => (
                    <li key={l} className="hover:text-white transition-colors cursor-pointer w-fit">{l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black mb-4 text-blue-500 uppercase tracking-[0.2em]">Services</h4>
                <ul className="space-y-3 text-slate-400 text-sm font-semibold">
                  {["Staff Augmentation", "Dedicated Teams", "Software Outsourcing"].map(l => (
                    <li key={l} className="hover:text-white transition-colors cursor-pointer w-fit">{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <p>© 2026 Arbisoft. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* LAYER 2: THE REVEALED CONTACT FORM */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 z-10 bg-[#080809]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
        
        <motion.div 
          style={{ scale: sheetScale, opacity: sheetOpacity }}
          // Reduced max-width for better md screen fit (max-w-4xl for LG, but smaller for MD)
          className="w-full max-w-lg lg:max-w-4xl bg-[#111114] rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Side - Hidden on MD to keep form compact, visible on LG */}
            <div className="hidden lg:block">
               <h2 className="text-white text-4xl font-black tracking-tighter leading-none mb-4 uppercase">
                READY TO <br/><span className="text-blue-600">SCALE?</span>
               </h2>
               <p className="text-gray-400 font-medium text-sm mb-6">
                Connect with our team to build your next big idea.
               </p>
               <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500">
                        <MessageSquare size={16} />
                    </div>
                    hello@arbisoft.com
                  </div>
               </div>
            </div>

            {/* Form Side - constrained size on MD screen */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
               <div className="lg:hidden mb-6 text-center">
                  <h2 className="text-white text-2xl font-black uppercase tracking-tighter">Get In Touch</h2>
               </div>
               <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <input 
                      required
                      className="form-input-footer"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                      required
                      type="email"
                      className="form-input-footer"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <textarea 
                      required
                      className="form-input-footer h-24 md:h-28 resize-none"
                      placeholder="Project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-black transition-all"
                  >
                    Send Inquiry <Send size={14} />
                  </button>
               </form>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .form-input-footer {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 0.8rem 1rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
          transition: all 0.3s;
        }
        .form-input-footer:focus {
          border-color: #2563eb;
          background-color: rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </div>
  );
};

export default Footer;