import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  Zap, 
  Globe, 
  TrendingUp, 
  Sparkles, 
  ChevronDown, 
  HelpCircle 
} from "lucide-react";
import JsonLd, { localBusinessSchema } from "@/components/JsonLd";

export const viewport = {
  themeColor: "#602dee",
};

export const metadata = {
  title: "About Us | FutureX Digital Marketing Agency",
  description: "Learn about FutureX Digital Marketing. We are a team of expert developers, copywriters, and SEO specialists serving US, UK, UAE, and local Udaipur brands.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "About FutureX",
    "FutureX Digital Marketing Team",
    "E-E-A-T SEO Strategy Udaipur",
    "Technical SEO Experts Udaipur",
    "Best Digital Marketing Agency Udaipur"
  ],
};

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

const whyChooseUs = [
  {
    title: "Performance-First Tech Stack",
    desc: "We construct blazing-fast Next.js apps rather than relying on bloated legacy builders. A 1-second load speed means higher Google rankings and better conversion rates.",
    icon: Zap,
    colorClass: "from-[#ef4444] to-[#f97316]",
    borderClass: "!border-red-500/20 hover:!border-red-500/50",
    textClass: "group-hover:text-red-600",
    badgeClass: "bg-red-50/80 text-red-600 border-red-200/50"
  },
  {
    title: "Global Reach, Local Scale",
    desc: "Based in Udaipur, India, but scaling brands internationally in the US, UK, Australia, and UAE. We match localized search intent with high-level international execution.",
    icon: Globe,
    colorClass: "from-[#3b82f6] to-[#06b6d4]",
    borderClass: "!border-blue-500/20 hover:!border-blue-500/50",
    textClass: "group-hover:text-blue-600",
    badgeClass: "bg-blue-50/80 text-blue-600 border-blue-200/50"
  },
  {
    title: "Data-Driven ROI Metrics",
    desc: "No vanity metrics or guesswork. Every keyword optimization and paid ad budget is tracked using live conversion dashboards, ensuring positive return on ad spend.",
    icon: TrendingUp,
    colorClass: "from-[#10b981] to-[#059669]",
    borderClass: "!border-emerald-500/20 hover:!border-emerald-500/50",
    textClass: "group-hover:text-emerald-600",
    badgeClass: "bg-emerald-50/80 text-emerald-600 border-emerald-200/50"
  },
  {
    title: "100% Transparent Retainers",
    desc: "No long-term lock-in retainers. We work on milestone-based deliverables with real-time project reporting, so you always know exactly what you are paying for.",
    icon: Sparkles,
    colorClass: "from-[#a855f7] to-[#ec4899]",
    borderClass: "!border-purple-500/20 hover:!border-purple-500/50",
    textClass: "group-hover:text-purple-600",
    badgeClass: "bg-purple-50/80 text-purple-600 border-purple-200/50"
  }
];

const faqs = [
  {
    question: "What does a digital marketing agency do, and why should we hire one?",
    answer: "A digital marketing agency helps businesses grow their online presence, attract high-quality leads, and increase sales. By hiring an agency like FutureX, you gain access to a dedicated team of SEO specialists, senior Next.js engineers, and certified Google Ad managers without the overhead of building an in-house team. We handle technical website optimization, search engine visibility, paid ad management, and conversion rate optimization (CRO) to maximize your return on investment."
  },
  {
    question: "How long does it take to see organic rankings and traffic grow with SEO?",
    answer: "SEO is a long-term strategic investment. Generally, campaigns start demonstrating noticeable improvements in search rankings and organic keyword impressions within 3 to 6 months. Achieving first-page rankings for highly competitive industry keywords typically takes 6 to 12 months. This timeline depends on your website's initial technical health, page loading speed, content depth, backlink authority, and competitor activity."
  },
  {
    question: "Why does website loading speed impact Google search rankings?",
    answer: "Google uses page speed and user experience metrics, known as Core Web Vitals (LCP, FID, CLS), as direct ranking signals. A slow-loading website frustrates users, leading to higher bounce rates and fewer conversions. At FutureX, we build blazing-fast websites using modern Next.js architecture and light liquid-glass styling, ensuring pages load in under 1 second to improve search engine rankings and increase visitor engagement."
  },
  {
    question: "What is E-E-A-T and why is it important for my website's Google rankings?",
    answer: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these quality rater guidelines to assess the credibility of your content. By demonstrating real-world experience, showcasing professional certifications, citing authoritative sources, and maintaining secure site features, you prove to Google that your brand is a trustworthy source of information. This is especially critical for competitive industries like finance, healthcare, and e-commerce."
  },
  {
    question: "Can FutureX handle international SEO campaigns for US, UK, and UAE audiences?",
    answer: "Yes, we specialize in multi-region international SEO. We configure hreflang tags, set up localized XML sitemaps, optimize content matching native dialects, and deploy content via globally distributed content delivery networks (CDNs). We currently scale search visibility and manage advertising campaigns for clients targeting buyers across the United States, United Kingdom, Australia, India, and the United Arab Emirates."
  },
  {
    question: "How do you track, measure, and report the performance of our marketing campaigns?",
    answer: "We believe in 100% transparency. We set up comprehensive analytics integrations using Google Analytics 4 (GA4), Google Search Console, and conversion tracking. Clients receive access to live, custom Looker Studio reporting dashboards that index key metrics like organic traffic, keyword positions, lead form submissions, cost-per-click (CPC), and return on ad spend (ROAS) in real-time."
  }
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function About() {
  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Neon decorative glow */}
        <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
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

          {/* Why Choose Us Section */}
          <div className="space-y-10 pt-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">The FutureX Advantage</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why Brands Choose Us</h2>
              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                We replace cookie-cutter strategies with engineering precision, globally scaled campaigns, and complete retainer clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`group relative overflow-hidden rounded-3xl p-8 liquid-glass transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl ${item.borderClass}`}
                  >
                    {/* Card decorative gradient line on left edge */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.colorClass}`} />

                    <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                      {/* Icon wrapper with capsule theme styling */}
                      <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${item.badgeClass} transition-transform duration-300 group-hover:scale-115`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="space-y-2">
                        <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${item.textClass}`}>
                          {item.title}
                        </h3>
                        <p className="text-foreground/75 leading-relaxed text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Focus Regions Map Section */}
          <div className="relative rounded-3xl border border-primary/15 p-8 md:p-12 space-y-6 text-center bg-white/60 backdrop-blur-xl shadow-lg overflow-hidden group">
            {/* Ambient background glows */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="text-2xl font-extrabold tracking-tight text-foreground font-serif relative z-10">Serving Global and Regional Markets</h2>
            <p className="text-foreground/75 max-w-2xl mx-auto text-sm relative z-10">
              We leverage data centers and localized optimization to scale businesses in international search engines. Our main target regions include:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 relative z-10">
              {[
                { name: "United States Focus", color: "bg-blue-50/70 border-blue-300/40 text-blue-700 hover:border-blue-500 hover:bg-blue-50/90", tag: "US" },
                { name: "United Kingdom (London)", color: "bg-red-50/70 border-red-300/40 text-red-700 hover:border-red-500 hover:bg-red-50/90", tag: "UK" },
                { name: "Australia Focus", color: "bg-emerald-50/70 border-emerald-300/40 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50/90", tag: "AU" },
                { name: "UAE (Dubai/Abu Dhabi)", color: "bg-amber-50/70 border-amber-300/40 text-amber-700 hover:border-amber-500 hover:bg-amber-50/90", tag: "UAE" },
                { name: "India (Udaipur Local)", color: "bg-cyan-50/70 border-cyan-300/40 text-cyan-700 hover:border-cyan-500 hover:bg-cyan-50/90", tag: "IN" },
                { name: "Canada Market", color: "bg-rose-50/70 border-rose-300/40 text-rose-700 hover:border-rose-500 hover:bg-rose-50/90", tag: "CA" },
                { name: "Singapore Focus", color: "bg-purple-50/70 border-purple-300/40 text-purple-700 hover:border-purple-500 hover:bg-purple-50/90", tag: "SG" },
                { name: "Europe Core", color: "bg-indigo-50/70 border-indigo-300/40 text-indigo-700 hover:border-indigo-500 hover:bg-indigo-50/90", tag: "EU" }
              ].map((region, i) => (
                <div key={i} className={`backdrop-blur-md py-3 px-3 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-[11px] sm:text-xs md:text-sm font-bold text-center flex flex-col items-center justify-center min-h-[64px] ${region.color}`}>
                  <span className="text-[9px] uppercase tracking-wider opacity-70 mb-0.5">{region.tag}</span>
                  <span>{region.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-10 pt-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">Got Questions?</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">Frequently Asked Questions</h2>
              <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                Find clear answers to general digital marketing, SEO implementation, and development queries.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-primary/10 rounded-2xl bg-white/50 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden hover:border-primary/30"
                >
                  <summary className="flex items-center justify-between cursor-pointer focus:outline-none select-none list-none">
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug tracking-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 bg-secondary/80 rounded-full p-1.5 border border-primary/5">
                      <ChevronDown className="w-4 h-4 text-primary" />
                    </span>
                  </summary>
                  <div className="mt-4 pl-8 border-t border-primary/5 pt-4 text-foreground/75 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
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
