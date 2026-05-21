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
          ? "py-3 bg-secondary/80 backdrop-blur-md border-b border-primary/20 shadow-[0_4px_30px_rgba(96,45,238,0.1)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-primary-hover to-accent-purple bg-clip-text text-transparent group-hover:glow-text transition-all duration-300">
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

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-72 rounded-xl border border-primary/20 bg-secondary/95 backdrop-blur-xl shadow-2xl p-4 grid grid-cols-1 gap-2"
                        >
                          <Link
                            href="/services"
                            className="block px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                          >
                            All Services Overview
                          </Link>
                          <hr className="border-primary/10" />
                          {Object.values(servicesData).map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className={`block px-3 py-1.5 rounded-lg text-[13.5px] hover:bg-primary/10 transition-colors ${
                                pathname === `/services/${service.slug}`
                                  ? "text-primary font-bold bg-primary/5"
                                  : "text-foreground/80 hover:text-white"
                              }`}
                            >
                              {service.name}
                            </Link>
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
              className="flex items-center space-x-2 text-[15px] font-semibold text-foreground/90 hover:text-primary transition-colors py-2 px-3 rounded-lg border border-white/5 bg-white/5 hover:bg-primary/10"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 77339 77227</span>
            </a>
            <Link
              href="/contact"
              className="glow-btn-primary px-5 py-2.5 rounded-xl text-sm font-bold text-white tracking-wide"
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
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
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
            className="lg:hidden bg-secondary/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => {
                if (link.name === "Services") {
                  return (
                    <div key={link.name} className="space-y-1">
                      <div className="font-semibold text-primary px-3 py-2 border-b border-primary/10">
                        Our Services
                      </div>
                      <div className="pl-4 grid grid-cols-1 sm:grid-cols-2 gap-1 pt-2">
                        <Link
                          href="/services"
                          className="px-3 py-1.5 rounded-lg text-sm font-bold text-foreground hover:bg-primary/10 transition-colors"
                        >
                          All Services
                        </Link>
                        {Object.values(servicesData).map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              pathname === `/services/${service.slug}`
                                ? "text-primary font-bold bg-primary/5"
                                : "text-foreground/70 hover:text-white hover:bg-primary/5"
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

              <hr className="border-white/5" />

              <div className="px-3 pt-2 space-y-3">
                <a
                  href="tel:+917733977227"
                  className="flex items-center space-x-3 w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-primary/10 text-base font-bold transition-all duration-300"
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
