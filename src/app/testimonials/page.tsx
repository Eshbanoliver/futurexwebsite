import React from "react";
import Link from "next/link";
import { Star, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const metadata = {
  title: "Client Testimonials & Success Stories | FutureX Digital",
  description: "Read real reviews from global clients in the US, London, Sydney, Dubai, and Udaipur. See how FutureX builds web apps and drives high-ROAS marketing campaigns.",
};

export default function Testimonials() {
  const reviews = [
    {
      quote: "FutureX rebuilt our slow WordPress site in Next.js. The speed lift was massive—our bounce rates plummeted by 45% and our Google ranking for technical keywords in London jumped to page 1.",
      client: "Julian Forrester",
      role: "Founder, Zenith Property UK",
      region: "London, UK",
      metric: "98/100 Core Web Vitals"
    },
    {
      quote: "Our Meta Ads campaigns had been bleeding money for months. FutureX audited our pixel tracking, re-recorded our hook assets, and built a custom landing page. Within 30 days, we hit a 4.2x ROAS in the US.",
      client: "Sarah Jenkins",
      role: "E-Commerce Director, Bloom Botanicals",
      region: "California, USA",
      metric: "4.2x Meta Ads ROAS"
    },
    {
      quote: "The team manages our entire social presence and designs custom menu panels for our restaurant hubs. They are quick, highly creative, and communicate using clear Slack workspaces daily.",
      client: "Faisal Al-Mansoori",
      role: "General Manager, Oasis Lounge Group",
      region: "Dubai, UAE",
      metric: "18k+ Organic Reach Growth"
    },
    {
      quote: "We hired FutureX for keyword copywriting and local SEO setups in Udaipur. Our physical footfalls and incoming calls increased by 180% during the peak season. Highly recommended local experts!",
      client: "Rajesh Mewara",
      role: "Operations Lead, Mewar Heritage Stays",
      region: "Udaipur, India",
      metric: "+180% Local Call Traffic"
    },
    {
      quote: "Their business plan writers helped us secure $150k in angel financing. The documents were formatted to perfection, featuring detailed 5-year financials and competitor research.",
      client: "Claire Thompson",
      role: "Co-Founder, SmartAI Logistics",
      region: "Sydney, Australia",
      metric: "Secured $150k Financing"
    },
    {
      quote: "Highly competent React developers. They built a custom dashboard for our local booking service, maintaining strict ADA compliance. Clean code and responsive UI architecture.",
      client: "Arnaud Dubois",
      role: "CTO, TravelSprints",
      region: "Paris, France (Targeting US)",
      metric: "0.8s Total Page Load"
    }
  ];

  return (
    <>
      <JsonLd schema={localBusinessSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Reviews</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-foreground to-primary-hover bg-clip-text text-transparent">
              Validated Success Across Global Frontiers
            </h1>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
              See how our custom technology implementations and advertising frameworks drive growth for brands in major regional and local markets.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="liquid-glass p-6 sm:p-8 rounded-2xl border border-primary/10 space-y-6 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual quote indicator */}
                <div className="absolute top-4 right-4 w-12 h-12 text-primary/5 select-none font-serif text-8xl shrink-0 pointer-events-none">
                  &ldquo;
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>

                  <p className="text-foreground/75 leading-relaxed text-sm italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-4">
                  <div>
                    <h4 className="text-white font-bold text-sm">{rev.client}</h4>
                    <p className="text-foreground/50 text-[11px] font-semibold mt-0.5">{rev.role} • {rev.region}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#25D366]/10 text-[#25D366] shrink-0">
                    {rev.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/20 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Join Our Roster of Successful Brands</h2>
            <p className="text-foreground/70 max-w-lg mx-auto text-sm leading-relaxed">
              We focus on measurable pipeline metrics, transparent reporting, and high CTR creative hooks. Let's schedule an audit of your business setup.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="glow-btn-primary px-8 py-4 rounded-xl text-base font-bold text-white inline-block">
                Claim My Free Audit (Value $499)
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
