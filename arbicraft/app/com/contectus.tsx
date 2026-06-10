"use client";
import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { ChevronDown, Send, DollarSign } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: "Success!",
      text: "We have received your request.",
      icon: "success",
      confirmButtonColor: "#2563eb",
      customClass: { popup: "rounded-[2rem]" },
    });
  };

  const avatars = [
    { top: "6%", right: "64%", img: "https://i.pravatar.cc/150?u=a" },
    { top: "20%", right: "40%", img: "https://i.pravatar.cc/150?u=b" },
    { top: "42%", right: "29%", img: "https://i.pravatar.cc/150?u=c" },
    { top: "72%", right: "50%", img: "https://i.pravatar.cc/150?u=d" },
    { top: "27%", right: "70%", img: "https://i.pravatar.cc/150?u=e" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="w-full lg:w-[45%] bg-blue-600 h-full" />
        <div className="hidden lg:block lg:w-[55%] bg-white h-full" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
          
          {/* LEFT SIDE: ORBIT & TEXT */}
          <div className="w-full lg:w-[45%] bg-blue-600 lg:bg-transparent relative py-16 px-8 lg:px-10 flex flex-col justify-center overflow-hidden">
            
            <div className="absolute right-0 top-0 h-full w-full pointer-events-none">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-[1.5px] border-white/30 rounded-full translate-x-1/2" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[700px] md:h-[700px] border-[1.5px] border-white/10 rounded-full translate-x-1/2" />

              {avatars.map((avatar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="absolute z-20 hidden xl:block"
                  style={{ top: avatar.top, right: avatar.right }}
                >
                  <div className="w-14 h-14 rounded-full border-4 border-blue-800/50 bg-blue-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
                    <img src={avatar.img} alt="user" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative z-30">
              <h3 className="text-white text-3xl lg:text-4xl font-black mb-6 leading-[1.1] uppercase tracking-tighter">
                Work with the <br />
                <span className="text-blue-900">top 1%</span> of <br /> tech talent.
              </h3>
              <p className="text-blue-100/80 text-lg max-w-xs font-medium leading-relaxed">
                Our global network is ready to help you scale your next big idea.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="w-full lg:w-[55%] bg-white py-12 px-6 sm:px-10 lg:pl-16 lg:pr-10 flex items-center">
            <div className="w-full max-w-xl">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-black mb-4 leading-tight uppercase tracking-tighter text-[#2E4361]">
                  Have Questions? <br />
                  <span className="text-blue-600">Let's Talk.</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium">
                  We have got the answers to your questions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="form-input" required />
                  <input type="email" placeholder="Email Address" className="form-input" required />
                </div>
                
                {/* Row 2: Service & Budget (New Field Added) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <select className="form-input appearance-none text-slate-500 cursor-pointer w-full">
                      <option value="">What do you need?</option>
                      <option value="staff">Staff Augmentation</option>
                      <option value="dedicated">Dedicated Team</option>
                      <option value="custom">Custom Development</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                  </div>

                  <div className="relative">
                    <select className="form-input appearance-none text-slate-500 cursor-pointer w-full">
                      <option value="">What's your budget?</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Row 3: Phone Number (Now full width or could be paired) */}
                <input type="tel" placeholder="Phone Number" className="form-input" />

                <textarea rows={3} placeholder="Please describe your project" className="form-input resize-none"></textarea>
                
                <div className="mt-2">
                  <button type="submit" className="w-[60%] md:w-[45%] md:h-12 lg:h-16  btn-primary">
                    Submit Now <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          padding: 1.1rem 1.4rem;
          background-color: #f8fafc;
          border: 2px solid #f1f5f9;
          border-radius: 1.5rem;
          outline: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.3s;
          width: 100%;
        }
        .form-input:focus {
          background-color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 10px 25px -10px rgba(37, 99, 235, 0.2);
        }
        select.form-input {
          color: #64748b;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;