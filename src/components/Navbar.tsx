"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/services";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-primary/10 shadow-[0_4px_30px_rgba(96,45,238,0.04)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-[#140f26] via-primary to-accent-purple bg-clip-text text-transparent group-hover:glow-text transition-all duration-300">
              FUTURE<span className="text-primary font-black">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 text-[16px] font-medium transition-colors hover:text-primary ${
                        pathname.startsWith("/services") ? "text-primary font-bold" : "text-foreground/90"
                      }`}
                    >
                      <span>Services</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>

                    {/* Services Bubble Mega Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, x: "-50%" }}
                          animate={{ opacity: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, y: 15, x: "-50%" }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="absolute left-1/2 mt-3 w-[620px] rounded-3xl border border-primary/15 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(96,45,238,0.12)] p-6 grid grid-cols-2 gap-3 z-50"
                        >
                          <Link
                            href="/services"
                            className="col-span-2 text-center py-2.5 px-6 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white text-xs font-bold uppercase tracking-wider hover:from-primary-hover hover:to-accent-purple shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] inline-block mb-2"
                          >
                            Explore All Services Overview →
                          </Link>
                          {Object.values(servicesData).map((service, idx) => (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: idx * 0.02 }}
                            >
                              <Link
                                href={`/services/${service.slug}`}
                                className={`w-full h-11 px-4 rounded-full border transition-all duration-300 flex items-center justify-center text-xs font-semibold text-center hover:scale-105 ${
                                  pathname === `/services/${service.slug}`
                                    ? "bg-primary text-white border-primary shadow-[0_4px_12px_rgba(96,45,238,0.25)]"
                                    : "bg-primary/[0.03] border-primary/10 text-foreground/90 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_4px_12px_rgba(96,45,238,0.2)]"
                                }`}
                              >
                                {service.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-[16px] font-medium transition-colors hover:text-primary ${
                    pathname === link.path ? "text-primary font-bold" : "text-foreground/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+917733977227"
              className="flex items-center space-x-2 text-[15px] font-semibold text-foreground/90 hover:text-primary transition-colors py-2 px-3 rounded-lg border border-primary/10 bg-primary/5 hover:bg-primary/10"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 77339 77227</span>
            </a>
            <Link
              href="/contact"
              className="glow-btn-primary px-5 py-2.5 rounded-xl text-sm font-bold text-white tracking-wide hover:no-underline"
            >
              Book Free Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-foreground/90 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-primary/10 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="space-y-2">
                      <div className="font-bold text-primary px-3 py-1 text-sm tracking-wide border-b border-primary/10">
                        Our Services
                      </div>
                      <div className="px-2 flex flex-wrap gap-2 pt-2">
                        <Link
                          href="/services"
                          className="px-4 py-2 rounded-full text-xs font-extrabold bg-gradient-to-r from-primary to-accent-purple text-white hover:opacity-90 transition-opacity shadow-sm"
                        >
                          All Services Overview
                        </Link>
                        {Object.values(servicesData).map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                              pathname === `/services/${service.slug}`
                                ? "bg-primary text-white border-primary shadow-sm"
                                : "bg-primary/[0.04] border-primary/10 text-foreground/80 hover:bg-primary hover:text-white"
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors hover:bg-primary/10 ${
                      pathname === link.path ? "text-primary font-bold bg-primary/5" : "text-foreground/90"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <hr className="border-primary/10" />

              <div className="px-3 pt-2 space-y-3">
                <a
                  href="tel:+917733977227"
                  className="flex items-center space-x-3 w-full py-3 px-4 rounded-xl border border-primary/10 bg-primary/5 hover:bg-primary/10 text-base font-bold transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 77339 77227</span>
                </a>
                <Link
                  href="/contact"
                  className="block text-center glow-btn-primary py-3 px-4 rounded-xl text-base font-bold text-white tracking-wide"
                >
                  Book Free Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
