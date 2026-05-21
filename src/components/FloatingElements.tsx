"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Left-Side Sticky Widgets (WhatsApp & Call) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col space-y-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917733977227?text=Hi%20FutureX%20Digital,%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
          aria-label="Contact on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          
          {/* Label Tooltip */}
          <span className="absolute left-14 bg-secondary/90 border border-primary/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap shadow-xl backdrop-blur-md">
            Chat on WhatsApp
          </span>
        </motion.a>

        {/* Direct Call Button */}
        <motion.a
          href="tel:+917733977227"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_4px_15px_rgba(96,45,238,0.4)] hover:shadow-[0_4px_25px_rgba(96,45,238,0.6)] transition-all duration-300 group"
          aria-label="Call FutureX"
        >
          <Phone className="w-5 h-5 fill-current" />

          {/* Label Tooltip */}
          <span className="absolute left-14 bg-secondary/90 border border-primary/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap shadow-xl backdrop-blur-md">
            Call Support
          </span>
        </motion.a>
      </div>

      {/* Right-Side Scroll to Top Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/70 border border-primary/30 text-white shadow-[0_4px_15px_rgba(0,0,0,0.4)] hover:border-primary/70 hover:shadow-[0_0_15px_rgba(96,45,238,0.4)] backdrop-blur-md transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />

              {/* Label Tooltip */}
              <span className="absolute right-14 bg-secondary/90 border border-primary/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 whitespace-nowrap shadow-xl backdrop-blur-md">
                Scroll to Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
