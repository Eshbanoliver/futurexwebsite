"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, MessageSquare } from "lucide-react";
import { ServiceFAQ } from "@/data/services";

interface ServiceSidebarProps {
  faqs: ServiceFAQ[];
}

export default function ServiceSidebar({ faqs }: ServiceSidebarProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      {/* Contact Widget */}
      <div className="liquid-glass p-6 rounded-2xl border border-primary/20 space-y-5 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
        
        <h3 className="text-lg font-bold text-white border-b border-white/5 pb-3">
          Quick Consultation
        </h3>

        <p className="text-foreground/70 text-xs leading-relaxed">
          Need immediate support? Speak directly to our campaign engineers.
        </p>

        <ul className="space-y-3.5 text-xs">
          <li className="flex items-start space-x-2.5">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/75 leading-relaxed">
              Arvana Mall Hathipole, Udaipur, IN
            </span>
          </li>
          <li className="flex items-center space-x-2.5">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+917733977227" className="text-foreground/75 hover:text-primary transition-colors">
              +91 77339 77227
            </a>
          </li>
          <li className="flex items-center space-x-2.5">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href="mailto:futurexdigitalmarketing@gmail.com" className="text-foreground/75 hover:text-primary transition-colors break-all">
              futurexdigitalmarketing@gmail.com
            </a>
          </li>
        </ul>

        {/* Call to actions */}
        <div className="space-y-2 pt-2">
          <a
            href="tel:+917733977227"
            className="flex items-center justify-center space-x-2 w-full glow-btn-primary py-3 rounded-xl text-xs font-bold text-white tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call +91 77339 77227</span>
          </a>
          <a
            href="https://wa.me/917733977227"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full glow-btn-secondary py-3 rounded-xl text-xs font-bold text-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>WhatsApp Chat</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider">Social Feed</span>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/people/Futurex-DigitalMarketing/61582411168285/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-foreground/60 fill-current hover:text-primary transition-colors" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/futurexdigitalmarketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-foreground/60 hover:text-primary transition-colors" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/futurex-digital-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-foreground/60 fill-current hover:text-primary transition-colors" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Accordions specific to this service */}
      {faqs && faqs.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-primary px-1">
            Service FAQs
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-xl border border-primary/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-white font-bold text-xs">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-4 pb-4 pt-1 text-foreground/75 text-xs leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
