import React from "react";
import Link from "next/link";
import { ShieldCheck, GraduationCap, Award, CheckCircle } from "lucide-react";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const metadata = {
  title: "About Us | FutureX Digital Marketing Agency",
  description: "Learn about FutureX Digital Marketing. We are a team of expert developers, copywriters, and SEO specialists serving US, UK, UAE, and local Udaipur brands.",
};

export default function About() {
  const eeatValues = [
    {
      letter: "E",
      title: "Experience",
      desc: "Over 5+ years building software products and driving millions in ad spend across international channels.",
      icon: Award,
      bg: "bg-gradient-to-br from-[#6366f1] to-[#3730a3]",
      shadow: "shadow-[0_15px_30px_rgba(99,102,241,0.15)]",
    },
    {
      letter: "E",
      title: "Expertise",
      desc: "Our team consists of Google-certified campaign managers, senior React engineers, and native copywriters.",
      icon: GraduationCap,
      bg: "bg-gradient-to-br from-[#10b981] to-[#047857]",
      shadow: "shadow-[0_15px_30px_rgba(16,185,129,0.15)]",
    },
    {
      letter: "A",
      title: "Authoritativeness",
      desc: "Proven keyword ranks, case studies, and published editorial articles on authority marketing forums.",
      icon: CheckCircle,
      bg: "bg-gradient-to-br from-[#f59e0b] to-[#c2410c]",
      shadow: "shadow-[0_15px_30px_rgba(245,158,11,0.15)]",
    },
    {
      letter: "T",
      title: "Trustworthiness",
      desc: "We use secure data practices, transparent reporting retainers, and sign strict NDAs before project briefings.",
      icon: ShieldCheck,
      bg: "bg-gradient-to-br from-[#ec4899] to-[#a855f7]",
      shadow: "shadow-[0_15px_30px_rgba(236,72,153,0.15)]",
    }
  ];

  return (
    <>
      <JsonLd schema={localBusinessSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Neon decorative glow */}
        <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Our Story</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-[#332a54] to-primary bg-clip-text text-transparent">
              Empowering Brands Through Advanced Technical Marketing
            </h1>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              FutureX Digital Marketing was founded to bridge the gap between heavy, slow website frameworks and traditional high-spend advertising. We deliver fast Next.js applications and search engine authority.
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight">Why E-E-A-T Matters To Us</h2>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Google ranks sites based on **Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)**. We embed these guidelines directly into our client campaigns.
              </p>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Our writers research topics exhaustively, referencing credible data, avoiding generic AI rehashes. Our developers structure layouts to ensure access for disabled users and pass Core Web Vitals audits.
              </p>
              <p className="text-foreground/75 leading-relaxed text-sm">
                We manage campaigns for local service companies in Rajasthan and scale e-commerce brands targeting buyers in New York, London, Sydney, and Dubai.
              </p>
            </div>

            {/* E-E-A-T Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eeatValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-[2rem] p-6 sm:p-8 flex flex-col justify-start min-h-[220px] ${val.bg} ${val.shadow} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] cursor-default`}
                  >
                    {/* Organic curved shape overlays to mimic reference design */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2rem]">
                      {/* Top right circle wave */}
                      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/[0.07] mix-blend-overlay" />
                      {/* Top right smaller circle accent */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/[0.05] mix-blend-overlay" />
                      {/* Bottom left sweeping wave */}
                      <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/[0.06] mix-blend-overlay" />
                      {/* Bottom left darker depth shape */}
                      <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-black/[0.04] mix-blend-overlay" />
                    </div>

                    {/* Translucent Serif Capital Letter */}
                    <div className="absolute top-2 right-4 text-[7rem] sm:text-[8rem] font-serif font-black text-white/10 select-none pointer-events-none leading-none">
                      {val.letter}
                    </div>

                    {/* Icon container */}
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center border border-white/10 mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-start space-y-2">
                      <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                        {val.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Focus Regions Map Section */}
          <div className="bg-secondary/35 rounded-3xl border border-primary/10 p-8 md:p-12 space-y-6 text-center">
            <h2 className="text-2xl font-bold">Serving Global and Regional Markets</h2>
            <p className="text-foreground/75 max-w-2xl mx-auto text-sm">
              We leverage data centers and localized optimization to scale businesses in international search engines. Our main target regions include:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
              {["United States Focus", "United Kingdom (London)", "Australia Focus", "UAE (Dubai/Abu Dhabi)", "India (Udaipur Local)", "Canada Market", "Singapore Focus", "Europe Core"].map((region, i) => (
                <div key={i} className="liquid-glass py-2.5 px-2 sm:py-3.5 sm:px-4 rounded-xl border border-primary/10 text-[11px] sm:text-xs md:text-sm font-semibold text-center flex items-center justify-center min-h-[50px]">
                  {region}
                </div>
              ))}
            </div>
          </div>

          {/* Above Footer CTA */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/10 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Want to See How We Can Help Your Brand?</h2>
            <p className="text-foreground/70 max-w-lg mx-auto text-sm">
              We'll prepare a custom technical checklist identifying exact speed bugs and search gaps. Free of cost.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="glow-btn-primary px-8 py-4 rounded-xl text-base font-bold text-white inline-block hover:no-underline">
                Claim My Free Audit (Value $499)
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
