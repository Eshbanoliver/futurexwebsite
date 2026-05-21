import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { servicesData } from "@/data/services";

export default function Footer() {
  const currentYear = 2025; // Explicitly matching requested "© 2025" string
  
  return (
    <footer className="relative bg-[#120c1e] border-t border-primary/20 pt-16 pb-8 overflow-hidden text-white/80">
      {/* Decorative Neon Glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[80px]" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-accent-purple/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-white via-primary-hover to-accent-purple bg-clip-text text-transparent">
                FUTURE<span className="text-primary font-black">X</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              We specialize in custom web architectures, visual branding, creative assets, and performance-based marketing. Accelerate your pipeline in London, US, AUS, Dubai, and Udaipur.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/people/Futurex-DigitalMarketing/61582411168285/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/futurexdigitalmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-white" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/futurex-digital-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/Futurex2330751"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter/X"
              >
                <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Company Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-primary text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-primary text-sm transition-colors">Services Directory</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/70 hover:text-primary text-sm transition-colors">Client Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary text-sm transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 grid grid-cols-1 gap-1">
              {Object.values(servicesData).slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary hover:underline text-sm transition-colors font-bold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 leading-relaxed">
                  5th Floor Office No. 526, Arvana Mall Hathipole, Udaipur, Rajasthan - 313001
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+917733977227" className="text-white/70 hover:text-primary transition-colors">
                  +91 77339 77227
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:futurexdigitalmarketing@gmail.com"
                  className="text-white/70 hover:text-primary transition-colors break-all"
                >
                  futurexdigitalmarketing@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center md:text-left">
            © {currentYear} FutureX Digital Marketing. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-white/50">
            <Link href="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
