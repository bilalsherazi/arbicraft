"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Monitor, Shield, Cpu } from "lucide-react";

// --- DATA ---
const MEGA_MENU_DATA = {
  categories: [
    {
      title: "Software Solutions",
      icon: <Monitor className="w-5 h-5 text-blue-600" />,
      sublinks: [
        { name: "SaaS Platforms", href: "#", desc: "Build scalable cloud apps" },
        { name: "Mobile Apps", href: "#", desc: "iOS and Android experts" },
        { name: "Custom CRM", href: "#", desc: "Manage your growth" },
      ],
    },
    {
      title: "Infrastructure",
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      sublinks: [
        { name: "Cloud Hosting", href: "#", desc: "AWS & Azure Managed" },
        { name: "DevOps", href: "#", desc: "CI/CD Pipeline setup" },
        { name: "Microservices", href: "#", desc: "Scalable architecture" },
      ],
    },
    {
      title: "Security",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      sublinks: [
        { name: "Cyber Security", href: "#", desc: "Threat protection" },
        { name: "Data Privacy", href: "#", desc: "GDPR & Compliance" },
        { name: "Security Audit", href: "#", desc: "24/7 Monitoring" },
      ],
    },
  ],
  featured: {
    title: "New 2024 Tech Report",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    buttonText: "Download Now",
  }
};

const NAV_CONFIG = {
  logo: "SOLUTIONS",
  links: [
    { label: "Home", href: "/" },
    { label: "Products", href: "#", hasMegaMenu: true },
    { label: "Services", href: "#" },
    { label: "About", href: "/about" }
  ],
  cta: "Start a Project"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <nav 
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm" 
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-black text-blue-600 italic tracking-tighter">
            {NAV_CONFIG.logo}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2 h-full">
            {NAV_CONFIG.links.map((link) => (
              <div 
                key={link.label} 
                className="h-full flex items-center"
                onMouseEnter={() => link.hasMegaMenu ? setIsMegaMenuOpen(true) : setIsMegaMenuOpen(false)}
              >
                <Link href={link.href} className="px-4 py-2 text-slate-700 hover:text-blue-600 font-bold text-sm uppercase flex items-center transition-colors">
                  {link.label}
                  {link.hasMegaMenu && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`} />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-100 flex items-center gap-2 group">
              {NAV_CONFIG.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-blue-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MEGA MENU --- */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-0">
              
              {/* Left Side: Sublinks Columns (8 cols) */}
              <div className="col-span-12 lg:col-span-8 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {MEGA_MENU_DATA.categories.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-blue-50 rounded-lg">{cat.icon}</div>
                      <h4 className="font-black text-gray-900 uppercase text-xs tracking-widest">{cat.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.sublinks.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link href={sub.href} className="group block p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{sub.name}</p>
                            <p className="text-xs text-slate-400 font-medium mt-0.5">{sub.desc}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Side: Image/Featured (4 cols) */}
              <div className="hidden lg:flex col-span-4 bg-slate-50 p-8 flex flex-col justify-center border-l border-gray-100">
                <div className="relative group overflow-hidden rounded-2xl aspect-video mb-6 shadow-xl">
                  <img 
                    src={MEGA_MENU_DATA.featured.image} 
                    alt="Featured" 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-[10px] text-white px-2 py-1 rounded font-bold uppercase tracking-tighter">Featured</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-800 leading-tight mb-2">
                  {MEGA_MENU_DATA.featured.title}
                </h3>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">
                  Explore how AI and Cloud are reshaping the landscape this year.
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all w-fit">
                  {MEGA_MENU_DATA.featured.buttonText} <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black text-blue-600 italic">SOLUTIONS</span>
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {NAV_CONFIG.links.map(link => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-gray-800 uppercase tracking-tighter border-b border-gray-100 pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-blue-600 text-white py-5 rounded-2xl text-lg font-black uppercase mt-10">
                {NAV_CONFIG.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;