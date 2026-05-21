import React from "react";
import Link from "next/link";
import { Star, MessageSquare, ArrowRight, ShieldCheck, Flame, Cpu, BarChart } from "lucide-react";
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

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Reviews</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-[#332a54] to-primary bg-clip-text text-transparent">
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

                <div className="pt-6 border-t border-primary/10 flex items-center justify-between mt-4">
                  <div>
                    <h4 className="text-foreground font-bold text-sm">{rev.client}</h4>
                    <p className="text-foreground/50 text-[11px] font-semibold mt-0.5">{rev.role} • {rev.region}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#25D366]/10 text-[#25D366] shrink-0">
                    {rev.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed SEO Case Studies Section */}
          <div className="space-y-10 pt-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">In-Depth Case Studies</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How We Deliver Measurable Outcomes</h2>
              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                Review the detailed strategic frameworks and technical executions behind our most successful campaigns.
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Case Study 1 */}
              <div className="liquid-glass p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-red-50 border border-red-200/50 flex items-center justify-center text-red-600">
                  <Flame className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-red-50 border border-red-200 text-red-600">Meta Ads Strategy</span>
                    <span className="text-xs text-foreground/50 font-semibold">Client: Bloom Botanicals (US)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">4.2x ROAS Scaling E-Commerce Storefronts</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    Prior to partnering with FutureX, Bloom Botanicals faced high customer acquisition costs (CAC) and rising ad spend waste due to inaccurate pixel attribution. Our campaign specialists initiated a technical server-side Conversions API integration to restore signal data. Next, we ran a creative assets sprint: replacing flat image banners with fast-paced, high-hook UGC video reels compiled by our video editing desk. Within 30 days, click-through rates (CTR) rose by 64%, leading to a stable 4.2x Return on Ad Spend (ROAS) and over $45k in monthly ad revenue scale.
                  </p>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="liquid-glass p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/50 flex items-center justify-center text-blue-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-600">Next.js Development</span>
                    <span className="text-xs text-foreground/50 font-semibold">Client: Zenith Property UK (London)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">98/100 Core Web Vitals Next.js Refactoring</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    Zenith Property’s legacy WordPress site suffered from severe layouts shifts, slow hosting times, and a 4.5-second load speed, resulting in high organic drop-offs in the London market. FutureX redesigned the site using modern Next.js 15, headless layouts, and pure tailwind styling. We optimized metadata headers, dynamically rendered property grids at the edge, and configured asset compression pipelines. The results were immediate: page load time dropped to 0.7 seconds, bounce rates fell by 45%, and target local real estate keywords climbed to the first page of Google.
                  </p>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="liquid-glass p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/50 flex items-center justify-center text-emerald-600">
                  <BarChart className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-600">Local SEO</span>
                    <span className="text-xs text-foreground/50 font-semibold">Client: Mewar Heritage Stays (Udaipur)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">+180% Organic Footfalls via Hyper-Local Search</h3>
                  <p className="text-foreground/75 text-sm leading-relaxed">
                    Mewar Heritage Stays wanted to capture physical hotel bookings from tourists searching Udaipur-centric travel keywords. FutureX executed a local SEO campaign: optimizing the Google Business Profile, correcting citation directories, and publishing keyword-focused travel guides. By implementing semantic schema markups, we enabled Udaipur local business rich snippet results in search queries. Within 90 days, organic calls and directional search clicks grew by 180% during peak tourism season.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/10 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground">Join Our Roster of Successful Brands</h2>
            <p className="text-foreground/70 max-w-lg mx-auto text-sm leading-relaxed">
              We focus on measurable pipeline metrics, transparent reporting, and high CTR creative hooks. Let's schedule an audit of your business setup.
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
