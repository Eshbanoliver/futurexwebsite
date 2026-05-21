import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { servicesData } from "@/data/services";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Our Services Directory | FutureX Digital Marketing",
  description: "Browse our 12 expert digital marketing services including Web Development, SEO, Meta Ads, Video Editing, Google Ads, SMM, and Graphic Design. Let's scale!",
};

export default function Services() {
  const vibrantBlobs = [
    "from-[#ef4444] to-[#f97316] shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    "from-[#3b82f6] to-[#06b6d4] shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    "from-[#10b981] to-[#14b8a6] shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    "from-[#ec4899] to-[#8b5cf6] shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    "from-[#f59e0b] to-[#eab308] shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    "from-[#8b5cf6] to-[#6366f1] shadow-[0_0_20px_rgba(139,92,246,0.3)]",
    "from-[#06b6d4] to-[#10b981] shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    "from-[#f43f5e] to-[#ec4899] shadow-[0_0_20px_rgba(244,63,94,0.3)]",
    "from-[#6366f1] to-[#3b82f6] shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    "from-[#f97316] to-[#f59e0b] shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    "from-[#a855f7] to-[#d946ef] shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    "from-[#14b8a6] to-[#3b82f6] shadow-[0_0_20px_rgba(20,184,166,0.3)]",
  ];

  const cardBorders = [
    "!border-red-500/40 hover:!border-red-500 hover:shadow-[0_8px_32px_rgba(239,68,68,0.12)]",
    "!border-blue-500/40 hover:!border-blue-500 hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)]",
    "!border-emerald-500/40 hover:!border-emerald-500 hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)]",
    "!border-pink-500/40 hover:!border-pink-500 hover:shadow-[0_8px_32px_rgba(236,72,153,0.12)]",
    "!border-amber-500/40 hover:!border-amber-500 hover:shadow-[0_8px_32px_rgba(245,158,11,0.12)]",
    "!border-violet-500/40 hover:!border-violet-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.12)]",
    "!border-cyan-500/40 hover:!border-cyan-500 hover:shadow-[0_8px_32px_rgba(6,182,212,0.12)]",
    "!border-rose-500/40 hover:!border-rose-500 hover:shadow-[0_8px_32px_rgba(244,63,94,0.12)]",
    "!border-indigo-500/40 hover:!border-indigo-500 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)]",
    "!border-orange-500/40 hover:!border-orange-500 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)]",
    "!border-fuchsia-500/40 hover:!border-fuchsia-500 hover:shadow-[0_8px_32px_rgba(168,85,247,0.12)]",
    "!border-teal-500/40 hover:!border-teal-500 hover:shadow-[0_8px_32px_rgba(20,184,166,0.12)]",
  ];

  const cardBadges = [
    "bg-red-50/80 text-red-600 border-red-200/50",
    "bg-blue-50/80 text-blue-600 border-blue-200/50",
    "bg-emerald-50/80 text-emerald-600 border-emerald-200/50",
    "bg-pink-50/80 text-pink-600 border-pink-200/50",
    "bg-amber-50/80 text-amber-600 border-amber-200/50",
    "bg-violet-50/80 text-violet-600 border-violet-200/50",
    "bg-cyan-50/80 text-cyan-600 border-cyan-200/50",
    "bg-rose-50/80 text-rose-600 border-rose-200/50",
    "bg-indigo-50/80 text-indigo-600 border-indigo-200/50",
    "bg-orange-50/80 text-orange-600 border-orange-200/50",
    "bg-fuchsia-50/80 text-fuchsia-600 border-fuchsia-200/50",
    "bg-teal-50/80 text-teal-600 border-teal-200/50",
  ];

  const cardTextHovers = [
    "group-hover:text-red-600",
    "group-hover:text-blue-600",
    "group-hover:text-emerald-600",
    "group-hover:text-pink-600",
    "group-hover:text-amber-600",
    "group-hover:text-violet-600",
    "group-hover:text-cyan-600",
    "group-hover:text-rose-600",
    "group-hover:text-indigo-600",
    "group-hover:text-orange-600",
    "group-hover:text-fuchsia-600",
    "group-hover:text-teal-600",
  ];

  return (
    <>
      <JsonLd schema={localBusinessSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Glowing background highlights */}
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Capabilities</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-[#332a54] to-primary bg-clip-text text-transparent">
              High-End Growth Services Built For Speed & Revenue
            </h1>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              We provide 12 specialized services designed to work together, accelerating your marketing pipeline across global hubs in London, New York, Dubai, Sydney, and local sectors.
            </p>
          </div>

          {/* 12 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(servicesData).map((svc, idx) => (
              <div
                key={svc.slug}
                className={`liquid-glass p-6 md:p-8 rounded-2xl !border-2 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden ${
                  cardBorders[idx % cardBorders.length]
                }`}
              >
                {/* Vibrant color blob at bottom-left corner */}
                <div
                  className={`absolute bottom-[-16px] left-[-16px] w-14 h-14 rounded-full bg-gradient-to-br ${
                    vibrantBlobs[idx % vibrantBlobs.length]
                  } blur-[12px] opacity-40 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500 pointer-events-none z-0`}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cardBadges[idx % cardBadges.length]}`}>
                      {svc.name === "Search Engine Optimization (SEO)" ? "SEO Focus" : "Premium"}
                    </span>
                    <span className="text-[11px] text-foreground/50 font-semibold tracking-wider uppercase">
                      Target: {svc.locationFocus.split(",")[0]} & More
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold text-foreground transition-colors ${cardTextHovers[idx % cardTextHovers.length]}`}>
                    {svc.name}
                  </h3>

                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                    {svc.metaDescription.substring(0, 110)}...
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-bold text-foreground/95 uppercase tracking-wider">Key Features:</div>
                    <ul className="space-y-1">
                      {svc.keyPoints.slice(0, 2).map((pt, i) => (
                        <li key={i} className="flex items-start space-x-2 text-[12px] text-foreground/60">
                          <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/10 mt-6 flex items-center justify-between relative z-10">
                  <span className="text-[11px] text-foreground/40 font-bold uppercase tracking-wider">
                    Ready-To-Rank
                  </span>
                  <Link
                    href={`/services/${svc.slug}`}
                    className={`text-sm font-bold flex items-center space-x-1.5 hover:underline text-primary transition-colors ${cardTextHovers[idx % cardTextHovers.length]}`}
                  >
                    <span>Analyze Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Performance Methodology (SEO-Boost) */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl border border-primary/10 space-y-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">Our Operations Framework</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">The FutureX Performance-Marketing & Technical SEO Methodology</h2>
              <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
                At FutureX Digital Marketing, we don't believe in generic content campaigns or simple templated setups. We merge advanced software engineering practices with digital advertising and search engine optimization. Here is how we guarantee search engine results and paid ads return on investment (ROAS):
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">01</div>
                <h4 className="font-bold text-foreground">Core Web Vitals & Loading Speed Optimization</h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  Google prioritizes websites that load instantly and offer flawless UX. We eliminate bloated CSS frameworks, lazy load dynamic media files, and host static structures on lightning-fast CDNs. This technical base ensures pages load in under 1 second, directly boosting your organic keywords ranking positions.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">02</div>
                <h4 className="font-bold text-foreground">Programmatic Indexation & Semantic Keywords Mapping</h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  We reverse-engineer what users are typing at each phase of their buying journey. By mapping informational, transactional, and navigational keywords, we ensure search crawl bots understand the hierarchy of your content directories. This structure maximizes organic search click-through rates.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">03</div>
                <h4 className="font-bold text-foreground">Multi-Channel Bidding & Campaign Synchronization</h4>
                <p className="text-foreground/70 text-xs leading-relaxed">
                  We synchronize your Facebook and Instagram paid ad funnels with high-intent search Google and Bing campaigns. This multi-touch attribution creates cohesive customer journeys, lowers client acquisition costs (CAC), and builds long-term organic brand authority.
                </p>
              </div>
            </div>
          </div>

          {/* Above Footer Audit Promo */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/10 shadow-xl max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary Audit Session</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Let Us Audit Your Search and Ad Funnels</h2>
            <p className="text-foreground/70 max-w-lg mx-auto text-sm leading-relaxed">
              We'll pinpoint exactly why your website might be losing speed marks or ranking positions. We'll present the audit results in a customized document.
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
