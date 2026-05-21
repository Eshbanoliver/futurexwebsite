import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Contact Us | FutureX Digital Marketing Udaipur",
  description: "Get in touch with FutureX. Claim your free digital speed and SEO audit. Call +91 77339 77227 or visit us at Arvana Mall, Udaipur, Rajasthan.",
};

export default function Contact() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116102.17019985776!2d73.61657658919943!3d24.582540934053366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22448fd1900fd0d5%3A0xcd6778fe93753ef4!2sFuturex%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1779276049235!5m2!1sen!2sin";

  return (
    <>
      <JsonLd schema={localBusinessSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-white overflow-hidden">
        {/* Neon Glow Highlights */}
        <div className="absolute top-[15%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[15%] right-[-10%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Get In Touch</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-foreground to-primary-hover bg-clip-text text-transparent">
              Let's Accelerate Your Brand's Value
            </h1>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              Claim your free audit report or book a consultation call with our senior account manager.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="liquid-glass p-6 sm:p-8 rounded-2xl border border-primary/10 space-y-6">
                <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Have questions about custom Next.js configurations, SEO packages, or video campaigns? Reach out directly.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">Head Office</h4>
                      <p className="text-foreground/75 leading-relaxed mt-1">
                        5th Floor Office No. 526, Arvana Mall Hathipole, Udaipur, Rajasthan - 313001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">Phone Support</h4>
                      <a href="tel:+917733977227" className="text-foreground/75 hover:text-primary transition-colors block mt-1">
                        +91 77339 77227
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">Email Inquiries</h4>
                      <a
                        href="mailto:futurexdigitalmarketing@gmail.com"
                        className="text-foreground/75 hover:text-primary transition-colors block break-all mt-1"
                      >
                        futurexdigitalmarketing@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">Social Profiles</h4>
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
                  </div>
                </div>
              </div>

              {/* Targets SEO Regions widget */}
              <div className="bg-secondary/40 border border-white/5 p-6 rounded-2xl space-y-3">
                <h3 className="font-bold text-white text-sm">International Client Desk</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  We schedule calls across multiple timezones including GMT (London), EST (New York), AEDT (Sydney), GST (Dubai), and IST (India).
                </p>
              </div>
            </div>

            {/* Contact Form Element */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>

          {/* Embedded Google Maps Map Iframe */}
          <div className="w-full h-96 rounded-3xl overflow-hidden border border-primary/20 bg-secondary/50 shadow-2xl relative">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FutureX Digital Marketing Head Office Location Map"
            />
          </div>
        </div>
      </main>
    </>
  );
}
