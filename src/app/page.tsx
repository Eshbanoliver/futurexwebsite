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
      description: "Custom React & Next.js applications engineered for high conversion rates and extreme speed.",
      icon: Zap
    },
    {
      slug: "search-engine-optimization",
      name: "Search Engine Optimization",
      description: "Dominate search ranks across Google UK, USA, UAE, and Aus with white-hat technical optimization.",
      icon: TrendingUp
    },
    {
      slug: "meta-ads",
      name: "Meta Ads (FB & Insta)",
      description: "Turn social feeds into automated sales pipelines with high-ROAS target campaigns.",
      icon: Target
    },
    {
      slug: "video-editing",
      name: "Video Editing",
      description: "Engaging short-form Reels, TikToks, and commercials designed to capture retention hooks.",
      icon: Sparkles
    },
    {
      slug: "social-media-management",
      name: "Social Media Management",
      description: "End-to-end community building, copywriting, graphic designs, and calendar scheduling.",
      icon: Users
    },
    {
      slug: "graphic-design",
      name: "Graphic Design",
      description: "Premium visual assets, luxury layout branding, and vector corporate identity systems.",
      icon: Globe
    }
  ];

  const mainServiceBlobs = [
    "from-[#3b82f6] to-[#06b6d4] shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    "from-[#10b981] to-[#14b8a6] shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    "from-[#ec4899] to-[#8b5cf6] shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    "from-[#ef4444] to-[#f97316] shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    "from-[#f59e0b] to-[#eab308] shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    "from-[#14b8a6] to-[#3b82f6] shadow-[0_0_20px_rgba(20,184,166,0.3)]",
  ];

  const mainServiceBorders = [
    "!border-blue-500/20 hover:!border-blue-500/80 hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)]",
    "!border-emerald-500/20 hover:!border-emerald-500/80 hover:shadow-[0_8px_32px_rgba(16,185,129,0.12)]",
    "!border-pink-500/20 hover:!border-pink-500/80 hover:shadow-[0_8px_32px_rgba(236,72,153,0.12)]",
    "!border-red-500/20 hover:!border-red-500/80 hover:shadow-[0_8px_32px_rgba(239,68,68,0.12)]",
    "!border-amber-500/20 hover:!border-amber-500/80 hover:shadow-[0_8px_32px_rgba(245,158,11,0.12)]",
    "!border-teal-500/20 hover:!border-teal-500/80 hover:shadow-[0_8px_32px_rgba(20,184,166,0.12)]",
  ];

  const mainServiceTextHovers = [
    "group-hover:text-blue-600",
    "group-hover:text-emerald-600",
    "group-hover:text-pink-600",
    "group-hover:text-red-600",
    "group-hover:text-amber-600",
    "group-hover:text-teal-600",
  ];

  const mainServiceIcons = [
    "bg-blue-50/80 text-blue-600 border border-blue-200/50",
    "bg-emerald-50/80 text-emerald-600 border border-emerald-200/50",
    "bg-pink-50/80 text-pink-600 border border-pink-200/50",
    "bg-red-50/80 text-red-600 border border-red-200/50",
    "bg-amber-50/80 text-amber-600 border border-amber-200/50",
    "bg-teal-50/80 text-teal-600 border border-teal-200/50",
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
          {/* Subtle abstract background paths */}
          <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] bg-accent-purple/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Animated Brand Message */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.12,
                    duration: 0.7,
                    ease: "easeOut"
                  }
                }
              }}
              className="space-y-6"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center space-x-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary border border-primary/10"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>About FutureX</span>
              </motion.div>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-3xl sm:text-4xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight"
              >
                Engineered to Convert.{" "}
                <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">
                  Designed to Stand Out.
                </span>
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-foreground/80 leading-relaxed text-sm sm:text-base"
              >
                At FutureX Digital Marketing, we reject boring templates and standard corporate jargon. We combine robust React/Next.js technology frameworks with aesthetic design and data-backed ad content to scale companies globally.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-foreground/80 leading-relaxed text-sm sm:text-base"
              >
                Whether you need high-speed website code, short-form reels that retain attention, or keyword architecture designed to dominate SEO in London, Dubai, or New York, we deliver transparency and growth.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="pt-2"
              >
                <Link
                  href="/about"
                  className="glow-btn-secondary px-6 py-3 rounded-xl text-sm font-bold text-foreground flex items-center justify-center space-x-2 w-fit hover:no-underline group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side: Eye-Catchy Overlapping Layer Showcase */}
            <div className="relative h-[420px] flex items-center justify-center md:px-8">
              {/* Central neon blur background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-[80px] animate-pulse pointer-events-none" />

              {/* Card 1: Underlay Card (Premium Quality Standards) */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40, rotate: 3 }}
                whileInView={{ opacity: 1, x: -30, y: -45, rotate: -4 }}
                viewport={{ once: true }}
                whileHover={{ y: -52, scale: 1.03, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
                className="absolute w-72 p-6 rounded-2xl border border-primary/10 bg-white/70 backdrop-blur-xl shadow-lg flex flex-col justify-between cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="w-5.5 h-5.5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground text-[14px] font-bold tracking-tight">Premium Standards</h4>
                    <p className="text-foreground/60 text-[11px] mt-0.5">E-E-A-T validated codebases.</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-[9px] text-foreground/40 font-bold uppercase tracking-wider">
                    Next.js / React 16
                  </span>
                  <span className="text-[9px] font-extrabold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50">
                    Enterprise
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Overlay Card (Global Agency Expertise) */}
              <motion.div
                initial={{ opacity: 0, x: -40, y: -40, rotate: -3 }}
                whileInView={{ opacity: 1, x: 20, y: 45, rotate: 4 }}
                viewport={{ once: true }}
                whileHover={{ y: 38, scale: 1.03, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 60 }}
                className="absolute w-72 p-6 rounded-2xl border border-accent-purple/15 bg-white/80 backdrop-blur-xl shadow-xl flex flex-col justify-between cursor-pointer z-10"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center shrink-0">
                    <Users className="w-5.5 h-5.5 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="text-foreground text-[14px] font-bold tracking-tight">Global Expertise</h4>
                    <p className="text-foreground/60 text-[11px] mt-0.5">UK, US, Dubai & Local sectors.</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-primary/5 flex items-center justify-between">
                  <span className="text-[9px] text-foreground/40 font-bold uppercase tracking-wider">
                    Conversion Rate Optimization
                  </span>
                  <span className="text-[9px] font-extrabold text-primary bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
                    +380% ROAS
                  </span>
                </div>
              </motion.div>

              {/* Floating Element 1: Custom Pulse Pill */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-6 bg-gradient-to-r from-primary to-accent-purple text-white px-3.5 py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-[0_10px_25px_rgba(96,45,238,0.25)] z-20 flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>100% Bespoke Code</span>
              </motion.div>

              {/* Floating Element 2: Performance Core Metric */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute bottom-8 left-6 bg-white border border-primary/15 text-foreground px-3.5 py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-md z-20 flex items-center space-x-2"
              >
                <span className="text-emerald-500 font-extrabold">99/100</span>
                <span className="text-foreground/50 text-[10px] font-semibold">Lighthouse Score</span>
              </motion.div>
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
            {mainServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={`/services/${svc.slug}`}
                    className={`liquid-glass p-6 rounded-2xl !border-2 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:no-underline h-full ${
                      mainServiceBorders[i % mainServiceBorders.length]
                    }`}
                  >
                    {/* Vibrant color blob at bottom-left corner */}
                    <div
                      className={`absolute bottom-[-16px] left-[-16px] w-14 h-14 rounded-full bg-gradient-to-br ${
                        mainServiceBlobs[i % mainServiceBlobs.length]
                      } blur-[12px] opacity-40 group-hover:opacity-75 group-hover:scale-125 transition-all duration-500 pointer-events-none z-0`}
                    />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${mainServiceIcons[i % mainServiceIcons.length]}`}>
                          <Icon className="w-5.5 h-5.5" />
                        </div>
                        <span className="text-[10px] text-foreground/45 font-bold uppercase tracking-wider">
                          Ready-to-Rank
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold text-foreground transition-colors ${mainServiceTextHovers[i % mainServiceTextHovers.length]}`}>
                        {svc.name}
                      </h3>
                      <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className={`text-xs font-bold flex items-center space-x-1 pt-4 border-t border-primary/5 mt-4 relative z-10 text-primary transition-colors ${mainServiceTextHovers[i % mainServiceTextHovers.length]}`}>
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
                    openFaq === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
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
