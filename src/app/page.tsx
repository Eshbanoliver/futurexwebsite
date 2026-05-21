"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  Users,
  CheckCircle,
  ChevronDown,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Sparkles
} from "lucide-react";
import { servicesData } from "@/data/services";
import JsonLd, { organizationSchema, localBusinessSchema } from "@/components/JsonLd";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { label: "Client Ad Revenue Generated", value: "$45M+" },
    { label: "Average Client ROAS Growth", value: "380%+" },
    { label: "Target Global Markets Ranked", value: "12+" },
    { label: "Client Retention Rate", value: "98.2%" }
  ];

  const mainServices = [
    {
      slug: "website-development",
      name: "Website Development",
      description: "Custom React & Next.js applications engineered for high conversion rates and extreme speed."
    },
    {
      slug: "search-engine-optimization",
      name: "Search Engine Optimization",
      description: "Dominate search ranks across Google UK, USA, UAE, and Aus with white-hat technical optimization."
    },
    {
      slug: "meta-ads",
      name: "Meta Ads (FB & Insta)",
      description: "Turn social feeds into automated sales pipelines with high-ROAS target campaigns."
    },
    {
      slug: "video-editing",
      name: "Video Editing",
      description: "Engaging short-form Reels, TikToks, and commercials designed to capture retention hooks."
    },
    {
      slug: "social-media-management",
      name: "Social Media Management",
      description: "End-to-end community building, copywriting, graphic designs, and calendar scheduling."
    },
    {
      slug: "graphic-design",
      name: "Graphic Design",
      description: "Premium visual assets, luxury layout branding, and vector corporate identity systems."
    }
  ];

  const coreValues = [
    {
      title: "Radical Transparency",
      desc: "Live marketing dashboards, clear budgets, and direct access to actual executors. Zero hidden markups.",
      icon: ShieldCheck
    },
    {
      title: "Data Over Opinions",
      desc: "Every creative hook, landing page layout, and ad budget bid is driven by rigorous conversion experiments.",
      icon: TrendingUp
    },
    {
      title: "Hyper Localization",
      desc: "Specific landing copy and SEO mapping designed for US, UK, Australia, Dubai, and Udaipur contexts.",
      icon: Globe
    },
    {
      title: "Extreme Speed",
      desc: "Fast responses, agile development sprints, and rapid deployment of ad content hooks.",
      icon: Zap
    }
  ];

  const faqs = [
    {
      q: "Where is FutureX Digital Marketing located?",
      a: "Our head office is located at 5th Floor, Office No. 526, Arvana Mall Hathipole, Udaipur, Rajasthan, India - 313001. We serve clients locally in Udaipur and globally in the US, UK, UAE (Dubai), and Australia."
    },
    {
      q: "How does the Free Digital Audit work?",
      a: "Our audit analyses your current website speed, SEO position gap, and social/ad performance. We provide a custom video breakdown with three actionable growth strategies. No catch, no obligations."
    },
    {
      q: "Do you offer contract-free digital marketing?",
      a: "Yes. We work on monthly retainers. We earn your business every month by delivering transparent conversions and clear traffic reporting, not by locking you into long contracts."
    },
    {
      q: "Can you target specific international regions (like London, Dubai, or the US)?",
      a: "Absolutely. We specialize in international technical SEO and location-based PPC, setting up custom local landing pages and targeting rules matching specific search trends in each target market."
    }
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      {/* SEO Schema Injection */}
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={faqSchema} />

      <main className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-background text-foreground">
        {/* Animated Background Mesh */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[55%] h-[55%] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center space-x-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Full-Stack Digital Marketing</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              We Scale Brands Across The{" "}
              <span className="bg-gradient-to-r from-primary via-accent-purple to-accent-cyan bg-clip-text text-transparent glow-text">
                Global Edge
              </span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              FutureX engineering builds premium web applications and deploys high-ROAS marketing campaigns targeted to rank in USA, UK, Australia, Dubai, and local markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="glow-btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-white text-center shadow-lg hover:no-underline">
                Book Free Audit
              </Link>
              <Link href="/services" className="glow-btn-secondary w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold text-foreground text-center flex items-center justify-center space-x-2 hover:no-underline">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </Link>
            </div>
          </div>
        </section>

        {/* PERFORMANCE METRICS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass p-6 rounded-2xl text-center space-y-2 border border-primary/10 shadow-lg relative overflow-hidden"
              >
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-foreground to-primary-hover bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-foreground/75 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT US SNIPPET SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">About FutureX</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                Engineered to Convert. Designed to Stand Out.
              </h2>
              <p className="text-foreground/75 leading-relaxed">
                At FutureX Digital Marketing, we reject boring templates and standard corporate jargon. We combine robust React/Next.js technology frameworks with aesthetic design and data-backed ad content to scale companies globally.
              </p>
              <p className="text-foreground/75 leading-relaxed">
                Whether you need high-speed website code, short-form reels that retain attention, or keyword architecture designed to dominate SEO in London, Dubai, or New York, we deliver transparency and growth.
              </p>
              <div className="pt-2">
                <Link href="/about" className="glow-btn-secondary px-6 py-3 rounded-xl text-sm font-bold text-foreground flex items-center justify-center space-x-2 w-fit hover:no-underline">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              </div>
            </div>
            
            <div className="liquid-glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center space-y-6 border border-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold">Premium Quality Standards</h4>
                  <p className="text-foreground/60 text-xs mt-1">E-E-A-T validated frameworks and codebases.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-bold">Global Agency Expertise</h4>
                  <p className="text-foreground/60 text-xs mt-1">Campaign managers representing UK, US, & Dubai experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="liquid-glass p-8 rounded-2xl border border-primary/10 relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-foreground/75 leading-relaxed text-sm">
                To build high-performance web applications and design custom content hooks that allow brands to bypass expensive intermediary agencies and earn organic authority.
              </p>
            </div>
            <div className="liquid-glass p-8 rounded-2xl border border-primary/10 relative overflow-hidden space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              <p className="text-foreground/75 leading-relaxed text-sm">
                To establish FutureX Digital Marketing as the world’s leading boutique agency combining software engineering practices with conversion-rate marketing expertise.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center space-y-3 mb-16">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Core Expertise</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">High-Impact Growth Solutions</h2>
            <p className="text-foreground/75 text-sm max-w-xl mx-auto">
              Click on any specialized service below to view custom schemas, niche features, and localized targeting guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="liquid-glass liquid-glass-hover p-6 rounded-2xl space-y-4 flex flex-col justify-between group hover:no-underline"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {svc.name}
                  </h3>
                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>
                <div className="text-primary text-xs font-bold flex items-center space-x-1 pt-2">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/services" className="glow-btn-secondary px-8 py-3.5 rounded-xl text-sm font-bold text-foreground hover:no-underline">
              View All 12 Services
            </Link>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-secondary/35 rounded-3xl border border-primary/10 my-12">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-foreground">Our Core Values</h2>
            <p className="text-foreground/70 text-sm max-w-md mx-auto">
              Our engineering and marketing ethics keep our clients ranking at the top.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-foreground font-bold">{val.title}</h4>
                  <p className="text-foreground/70 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold uppercase tracking-wider text-primary">Strategic Advantage</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Why Modern Brands Choose FutureX</h2>
              <p className="text-foreground/75 leading-relaxed">
                Traditional digital agencies operate like black boxes, hiding behind complex spreadsheets. FutureX was founded by web engineers who understand how algorithms read website performance, and writers who understand conversion hooks.
              </p>
              
              <ul className="space-y-3.5 pt-2">
                {[
                  "Optimized metadata tailored for London, Dubai, Udaipur, US, and Aus.",
                  "Zero boilerplate code configurations—maximizing Core Web Vitals LCP/CLS.",
                  "24/7 communications with full access to Slack workspaces.",
                  "Detailed Google Maps and local business listings structures.",
                  "Dedicated creative directors for video color grading and formatting."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              <div className="liquid-glass p-8 rounded-2xl max-w-md w-full relative z-10 border border-primary/10 space-y-6">
                <h4 className="text-foreground font-bold text-center border-b border-primary/10 pb-4">
                  Target SEO Regions Ranked
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  {["United States", "United Kingdom", "Australia", "UAE (Dubai)", "London Focus", "Udaipur Local"].map((loc, idx) => (
                    <div key={idx} className="bg-primary/5 border border-primary/10 rounded-lg p-2.5 text-xs text-foreground/80 font-semibold">
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SNIPPET */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center space-y-3 mb-16">
            <div className="text-sm font-bold uppercase tracking-wider text-primary">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Trusted Globally</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="liquid-glass p-8 rounded-2xl border border-primary/10 relative overflow-hidden space-y-4">
              <p className="text-foreground/75 leading-relaxed text-sm italic">
                &ldquo;FutureX redesigned our Shopify storefront inside Next.js and optimized our local SEO parameters. Within three months, our organic inquiries in London and Dubai surged by 140%. Excellent communication!&rdquo;
              </p>
              <div>
                <div className="text-foreground font-bold text-sm">Marcus Vance</div>
                <div className="text-foreground/50 text-xs">Director of E-Commerce, London</div>
              </div>
            </div>
            <div className="liquid-glass p-8 rounded-2xl border border-primary/10 relative overflow-hidden space-y-4">
              <p className="text-foreground/75 leading-relaxed text-sm italic">
                &ldquo;We hired them to manage our Meta campaigns and write SEO articles. The copywriting is pristine and perfectly conforms to E-E-A-T. We saw a 4.2x ROAS in the United States target market.&rdquo;
              </p>
              <div>
                <div className="text-foreground font-bold text-sm">Sarah Jenkins</div>
                <div className="text-foreground/50 text-xs">Growth Marketing Lead, California</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/testimonials" className="glow-btn-secondary px-6 py-3 rounded-xl text-sm font-bold text-foreground hover:no-underline">
              Read More Client Stories
            </Link>
          </div>
        </section>

        {/* HIGH CONVERTING MAIN CTA SECTION (Dark Themed Accent Card) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#120c1e] p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/30 shadow-[0_10px_35px_rgba(96,45,238,0.2)] relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-purple/5 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Secure Your Free Audit?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We analyze your web performance metrics, competitor search positions, and current ad conversions. We deliver a custom roadmap with zero obligation.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="glow-btn-primary px-8 py-4 rounded-xl text-base font-bold text-white inline-block hover:no-underline">
                Claim My Free Audit (Value $499)
              </Link>
            </div>
          </div>
        </section>

        {/* COLLAPSIBLE ACCORDION FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            <p className="text-foreground/75 text-sm">
              Quick answers about our workflow, service locations, and optimization techniques.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-xl border border-primary/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-foreground font-bold text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 pb-5 pt-1 text-foreground/75 text-xs sm:text-sm leading-relaxed border-t border-primary/10">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
