import React from "react";
import Link from "next/link";
import { ShieldCheck, GraduationCap, Award, CheckCircle } from "lucide-react";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const metadata = {
  title: "About Us | FutureX Digital Marketing Agency",
  description: "Learn about FutureX Digital Marketing. We are a team of expert developers, copywriters, and SEO specialists serving US, UK, UAE, and local Udaipur brands.",
};

export default function About() {
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
              <h2 className="text-2xl sm:text-3xl font-bold">Why E-E-A-T Matters To Us</h2>
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
              <div className="liquid-glass p-6 rounded-2xl border border-primary/10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">Trustworthiness</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  We use secure data practices, transparent reporting retainers, and sign strict NDAs before project briefings.
                </p>
              </div>

              <div className="liquid-glass p-6 rounded-2xl border border-primary/10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">Expertise</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Our team consists of Google-certified campaign managers, senior React engineers, and native copywriters.
                </p>
              </div>

              <div className="liquid-glass p-6 rounded-2xl border border-primary/10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">Experience</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Over 5+ years building software products and driving millions in ad spend across international channels.
                </p>
              </div>

              <div className="liquid-glass p-6 rounded-2xl border border-primary/10 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base">Authoritativeness</h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Proven keyword ranks, case studies, and published editorial articles on authority marketing forums.
                </p>
              </div>
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
                <div key={i} className="liquid-glass py-3.5 px-4 rounded-xl border border-primary/10 text-xs sm:text-sm font-semibold">
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
