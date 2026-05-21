import React from "react";
import { notFound } from "next/navigation";
import { CheckCircle, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";
import ServiceSidebar from "@/components/ServiceSidebar";
import JsonLd, { organizationSchema } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Static Params for all 12 services (Build time pre-rendering)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export const viewport = {
  themeColor: "#602dee",
};

// Dynamic Meta Generation based on Next.js 15 Async params
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | FutureX Digital Marketing",
      description: "We could not find the requested service page.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      service.name,
      `${service.name} Services`,
      `Best ${service.name} Agency`,
      `${service.name} Udaipur`,
      `${service.name} ${service.locationFocus.split(',')[0].trim()}`
    ],
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://futurexdigitalmarketing.com/services/${slug}`,
      type: "article",
      images: [
        {
          url: "https://futurexdigitalmarketing.com/og-image.png",
          width: 1200,
          height: 630,
          alt: service.name,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["https://futurexdigitalmarketing.com/og-image.png"],
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Specific Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.metaDescription,
    "url": `https://futurexdigitalmarketing.com/services/${slug}`,
    "image": `https://futurexdigitalmarketing.com/images/services/${slug}.jpg`,
    "provider": organizationSchema,
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "United Kingdom" },
      { "@type": "AdministrativeArea", "name": "United States" },
      { "@type": "AdministrativeArea", "name": "Australia" },
      { "@type": "AdministrativeArea", "name": "United Arab Emirates" },
      { "@type": "AdministrativeArea", "name": "India" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Contact for Quote"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48"
    }
  };

  // Specific Service FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Inject Structured Schemas in page head */}
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />

      <main className="relative min-h-screen pt-32 pb-20 bg-background text-foreground overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-[10%] left-[-15%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[45%] h-[45%] bg-accent-purple/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Main Content (H1, Intro, Points, Niche Why Choose Us) */}
            <article className="lg:col-span-8 space-y-10">
              
              {/* Heading */}
              <div className="space-y-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Target SEO Regions: {service.locationFocus}
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-[#332a54] to-primary bg-clip-text text-transparent">
                  {service.title}
                </h1>
              </div>

              {/* Introduction */}
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                {service.intro}
              </p>

              {/* Key Deliverables Points */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">What We Deliver</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyPoints.map((pt, i) => (
                    <div key={i} className="liquid-glass p-4 rounded-xl border border-primary/10 flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-xs sm:text-sm leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us for Niche */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Why Choose Us for {service.name}
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We don't deploy junior coordinators to manage your campaign. Our specialists understand conversion funnels, pixel tracking API parameters, and localized keyword layouts.
                </p>
                <div className="space-y-3">
                  {service.whyChooseUs.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campaign Lifecycle Roadmap */}
              <div className="space-y-6 pt-6 border-t border-primary/10">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Our Strategic Campaign Lifecycle for {service.name}
                </h2>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  To guarantee long-term results and positive Return on Ad Spend (ROAS), our team implements a structured 4-phase optimization framework specifically tailored for {service.name}. Here is how we build, optimize, and scale your campaign:
                </p>
                <div className="relative border-l-2 border-primary/10 ml-4 pl-6 space-y-6">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">1</span>
                    <h4 className="font-bold text-foreground text-sm">Phase 1: Discovery & Technical Audit</h4>
                    <p className="text-foreground/75 text-xs leading-relaxed mt-1">
                      We start by scanning your current website architecture, analyzing organic search keywords visibility, and checking active event tags or ad conversions. This establishes a baseline of your speed score, page layouts, and competitor ranks.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">2</span>
                    <h4 className="font-bold text-foreground text-sm">Phase 2: Semantic Design & Funnel Mapping</h4>
                    <p className="text-foreground/75 text-xs leading-relaxed mt-1">
                      Our React engineers and copywriting specialists craft custom, high-converting layouts and landing pages matching the specific intent of your target regions ({service.locationFocus}). We embed schema markup protocols to ensure crawl bot compatibility.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">3</span>
                    <h4 className="font-bold text-foreground text-sm">Phase 3: Pixel Setup & Live Launch</h4>
                    <p className="text-foreground/75 text-xs leading-relaxed mt-1">
                      We deploy tracking frameworks using Server-Side API endpoints (Conversions API) to ensure clean reporting signals. Next, we push optimized media, templates, or ad copies live under strict version controls.
                    </p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-white font-bold">4</span>
                    <h4 className="font-bold text-foreground text-sm">Phase 4: Ongoing Optimization & Dashboard Sync</h4>
                    <p className="text-foreground/75 text-xs leading-relaxed mt-1">
                      Every campaign is synced to a custom, real-time Looker Studio reporting dashboard. We run bi-weekly bid updates, adjust keyword match parameters, and design fresh creative assets to prevent ad fatigue and scale your revenue.
                    </p>
                  </div>
                </div>
              </div>

            </article>

            {/* Right Sidebar Sticky Contact/FAQ widget */}
            <div className="lg:col-span-4">
              <ServiceSidebar faqs={service.faqs} />
            </div>

          </div>

          {/* Above Footer Full-Width CTA Card */}
          <div className="liquid-glass p-8 md:p-12 rounded-3xl text-center space-y-6 border border-primary/10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-purple/5 pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold text-foreground leading-tight">
              Ready to Accelerate Your Leads with {service.name}?
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto text-sm leading-relaxed">
              We analyze your web performance metrics, competitor search positions, and current ad conversions. We deliver a custom roadmap with zero obligation.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="glow-btn-primary px-8 py-4 rounded-xl text-base font-bold text-white inline-block hover:no-underline"
              >
                Book Free Audit
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
