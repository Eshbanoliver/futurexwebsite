export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  locationFocus: string;
  intro: string;
  keyPoints: string[];
  whyChooseUs: string[];
  faqs: ServiceFAQ[];
  iconName: string;
}

export const servicesData: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    name: "Website Development",
    title: "Premium Website Development Services",
    metaTitle: "Web Development Services US, UK, UAE | FutureX Digital",
    metaDescription: "Get modern, mobile-responsive, and high-converting websites. We build custom React/Next.js applications optimized for speed and SEO. Book a free audit!",
    locationFocus: "US, UK, UAE, Dubai, London, Udaipur",
    intro: "Transform your digital footprint with high-performance, responsive web experiences. At FutureX Digital Marketing, we design and develop next-generation websites that load in milliseconds, prioritize user experience, and drive conversions.",
    keyPoints: [
      "Custom React, Next.js & WordPress Development built for scale.",
      "100% Mobile-First Responsive layouts with fluid UI interactions.",
      "SEO-ready clean code architecture safeguarding Core Web Vitals.",
      "High-speed performance tuning with CDN caching and image optimization.",
      "E-commerce storefronts with secure, seamless payment gateways."
    ],
    whyChooseUs: [
      "Experienced developers specializing in modern headless web architectures.",
      "Stunning custom-crafted UI designs—absolutely zero templated layouts.",
      "E-E-A-T and SEO best practices embedded directly in the design hierarchy.",
      "Round-the-clock technical maintenance and dedicated server support."
    ],
    faqs: [
      {
        question: "What technologies do you use for website development?",
        answer: "We specialize in Next.js, React, TypeScript, Tailwind CSS, Node.js, and headless CMS integrations. We also build custom WordPress sites tailored to specific business needs."
      },
      {
        question: "How long does it take to build a custom website?",
        answer: "Typically, a standard landing page takes 1-2 weeks, while complex web applications or custom E-commerce sites can take 4-8 weeks depending on the requirements."
      },
      {
        question: "Do you design websites to be mobile-friendly and SEO-optimized?",
        answer: "Absolutely. All our websites are built mobile-first, load in under 2 seconds, and conform to the latest Google SEO standards and Core Web Vitals requirements."
      }
    ],
    iconName: "Globe"
  },
  "video-editing": {
    slug: "video-editing",
    name: "Video Editing",
    title: "Professional Video Editing & Motion Graphics",
    metaTitle: "Video Editing Services London, US & Dubai | FutureX",
    metaDescription: "Professional video editing and motion graphics for TikTok, Instagram Reels, YouTube, and Ads. Drive high engagement with FutureX. Order a free sample!",
    locationFocus: "London, US, Dubai, Australia",
    intro: "Stop users mid-scroll with cinema-grade video editing and motion graphics. FutureX Digital Marketing crafts high-impact short-form Reels, TikToks, YouTube content, and corporate marketing videos that elevate brand storytelling and retention.",
    keyPoints: [
      "High-retention editing for TikTok, Instagram Reels, and YouTube Shorts.",
      "Custom motion graphics, visual effects (VFX), and dynamic typography.",
      "Professional color grading, audio engineering, and sound design.",
      "High-converting video ads optimized for social media ad platforms.",
      "Fast turnaround times without compromising visual storytelling quality."
    ],
    whyChooseUs: [
      "Dedicated editors who understand algorithms, watch times, and hooks.",
      "Professional grading and sound effects that make videos feel cinematic.",
      "End-to-end services, from conceptual storyboarding to final export.",
      "Tailored formatting for desktop, tablet, and mobile feeds."
    ],
    faqs: [
      {
        question: "What is your typical turnaround time for video editing?",
        answer: "For short-form videos (Reels/TikToks), the turnaround is 24-48 hours. For longer corporate videos or YouTube edits, it takes 3-5 business days."
      },
      {
        question: "Can you provide captions and custom animations?",
        answer: "Yes, we create highly engaging, stylized subtitles, custom motion templates, sound effects, and transitions tailored to your brand style."
      }
    ],
    iconName: "Video"
  },
  "social-media-management": {
    slug: "social-media-management",
    name: "Social Media Management",
    title: "Result-Driven Social Media Management",
    metaTitle: "Social Media Management Dubai, US & UK | FutureX",
    metaDescription: "Grow your online community. FutureX manages Instagram, LinkedIn, TikTok, and Facebook campaigns. Drive traffic & conversions. Request a consultation!",
    locationFocus: "Dubai, US, UK, Australia, Udaipur",
    intro: "Build a loyal community and drive consistent revenue through organic social channels. Our team manages every aspect of your social presence: from content strategy and eye-catchy design to writing hooks and scheduling posts.",
    keyPoints: [
      "Data-driven social media content calendar and distribution plans.",
      "Stunning, high-end graphic design and aesthetic visual layouts.",
      "Engaging copy, hash-tag research, and community-building responses.",
      "Active analytics reporting tracking engagement rates, reach, and leads.",
      "Brand monitoring and multi-channel synchronization (Insta, FB, LI, TikTok)."
    ],
    whyChooseUs: [
      "Niche content writers and designers who align perfectly with your brand tone.",
      "Focus on ROI, converting followers into active brand advocates.",
      "Consistent, high-frequency posting schedules optimized by platform timezone.",
      "Bi-weekly performance reviews to continuously refine strategies."
    ],
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer: "We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), and Pinterest, customizing the content format for each platform."
      },
      {
        question: "Do you create the posts and graphics yourself?",
        answer: "Yes, we handle everything including copywriting, visual design, custom illustration, and caption writing. You just review and approve."
      }
    ],
    iconName: "Share2"
  },
  "graphic-design": {
    slug: "graphic-design",
    name: "Graphic Design",
    title: "High-End Corporate Graphic Design",
    metaTitle: "Graphic Design Services USA, Australia & Udaipur | FutureX",
    metaDescription: "Premium branding, social media creatives, brochures, and banners. Stand out with professional graphic design from FutureX. Book a design audit today!",
    locationFocus: "USA, Australia, UK, Udaipur, Dubai",
    intro: "First impressions are everything. We design high-end, premium visual branding, corporate identities, social media creatives, and marketing banners that resonate with luxury and modern tech aesthetics.",
    keyPoints: [
      "Complete Brand Identity: Logo design, typography, and brand books.",
      "Social media post templates, stories, banners, and digital ads.",
      "Print assets including brochures, flyers, banners, and trade show items.",
      "Custom vector illustrations and premium presentation deck designs.",
      "High-resolution deliverables in multiple web-optimized formats."
    ],
    whyChooseUs: [
      "Vibrant modern UI design styling matching sleek minimalist or neon aesthetics.",
      "Unlimited revisions until your vision is fully actualized.",
      "WebP and SVG exports ensuring zero impact on your website loading speeds.",
      "Fast, open communication channels directly with dedicated designers."
    ],
    faqs: [
      {
        question: "Will I get the source files of the designs?",
        answer: "Yes, we provide all final designs with complete ownership, including vector source files (AI, PSD, Figma) and ready-to-use PNG/SVG versions."
      },
      {
        question: "What is your revision policy?",
        answer: "We offer unlimited revisions within the project scope because we want to ensure you are 100% satisfied with your final brand assets."
      }
    ],
    iconName: "Palette"
  },
  "content-writing": {
    slug: "content-writing",
    name: "Content Writing",
    title: "SEO-Driven High-Quality Content Writing",
    metaTitle: "SEO Content Writing UK, US & Australia | FutureX",
    metaDescription: "Rank higher on Google. We write high-quality blog posts, copy, and website content optimized for search engines. Drive organic traffic. Contact us!",
    locationFocus: "UK, US, Australia, London, Dubai",
    intro: "Engage your audience and satisfy Google's E-E-A-T guidelines. FutureX produces research-backed, engaging, and SEO-optimized copy, blog posts, sales pages, and white papers that build authority and rank.",
    keyPoints: [
      "SEO blogs, articles, and landing pages written by industry experts.",
      "Sales copywriting optimized for conversions and call-to-actions.",
      "Deep keyword integration without compromising readability or tone.",
      "Thorough proofreading, plagiarism checks, and readability optimizations.",
      "Niche expertise across SaaS, tech, marketing, hospitality, and finance."
    ],
    whyChooseUs: [
      "Native English writers with strict adherence to local phrasing (UK, US, AUS).",
      "Content mapped to user search intent (informational, transactional).",
      "100% human-written, factual, and deeply researched contents.",
      "SEO formatting (H2/H3 structure, schema integration ready)."
    ],
    faqs: [
      {
        question: "Do you perform keyword research before writing?",
        answer: "Yes, we use professional tools like SEMrush and Ahrefs to identify low-competition, high-value keywords to ensure your articles rank."
      },
      {
        question: "Is your content free from AI generation?",
        answer: "Absolutely. We write everything by hand to ensure original insights, E-E-A-T compliance, and highly engaging human-to-human communication."
      }
    ],
    iconName: "PenTool"
  },
  "business-card-design": {
    slug: "business-card-design",
    name: "Business Card Design",
    title: "Premium & Luxury Business Card Design",
    metaTitle: "Luxury Business Card Design US, UK & UAE | FutureX",
    metaDescription: "Make a powerful first impression. Standard, matte, gold foil, and digital NFC business card designs by FutureX Digital. Order custom card design!",
    locationFocus: "US, UK, UAE, Dubai, London, Udaipur",
    intro: "Hand over a card that speaks volumes before you even say a word. We craft bespoke, modern, and luxury business card layouts—including NFC digital cards—optimized for premium print materials.",
    keyPoints: [
      "Custom premium designs matched to your corporate identity system.",
      "Print-ready vectors with correct bleeds, margins, and CMYK colors.",
      "Expert layouts for spot UV, gold foil, embossing, and matte cards.",
      "NFC digital business card designs with scan-to-save QR integrations.",
      "Double-sided modern layouts featuring minimalist high-end designs."
    ],
    whyChooseUs: [
      "Impeccable attention to detail ensuring zero print alignment mistakes.",
      "Support and advice on selecting paper stock, weights, and finishes.",
      "Fast turnarounds with multiple design concepts provided.",
      "Files formatted for easy upload to premium print services like Moo or VistaPrint."
    ],
    faqs: [
      {
        question: "Do you print the business cards?",
        answer: "We specialize in premium graphic design. We provide print-ready, high-resolution vector PDF files which you can send to any local or online printer."
      },
      {
        question: "Can you design QR code or NFC business cards?",
        answer: "Yes! We can integrate custom QR codes that link directly to your website, vCard contact information, or social links for instant networking."
      }
    ],
    iconName: "CreditCard"
  },
  "business-plan": {
    slug: "business-plan",
    name: "Business Plan",
    title: "Investor-Grade Business Plan Writing",
    metaTitle: "Business Plan Writers UK, USA & Dubai | FutureX",
    metaDescription: "Raise capital with investor-grade business plans, financial projections, and pitch decks. Written by experts. Secure your funding. Book a consultation!",
    locationFocus: "UK, USA, Dubai, Australia, London",
    intro: "Secure funding, bank loans, and partnerships with premium business plans. FutureX drafts comprehensive, investor-grade plans containing market analysis, competitor mapping, and 5-year financial models.",
    keyPoints: [
      "Executive summary and clear company description built for investors.",
      "In-depth market research, industry trends, and competitor analysis.",
      "Comprehensive marketing, sales, and operational methodologies.",
      "Professional 5-year financial projections (P&L, cash flow, balance sheets).",
      "Executive slide decks and pitch designs accompanying the plan."
    ],
    whyChooseUs: [
      "Experienced business consultants who understand investor checklist priorities.",
      "Highly customized data points, strictly avoiding generic online generators.",
      "Visually stunning report formatting matching corporate premium branding.",
      "Direct consultation sessions to map your ideas into standard structures."
    ],
    faqs: [
      {
        question: "What is included in the financial projections?",
        answer: "We provide comprehensive 3 to 5 year projections including startup cost analysis, break-even analysis, profit and loss statements, and cash flow forecasts."
      },
      {
        question: "Do you sign Non-Disclosure Agreements (NDAs)?",
        answer: "Yes, we take confidentiality very seriously. We sign an NDA before you share any sensitive business concept or proprietary data."
      }
    ],
    iconName: "FileText"
  },
  "search-engine-optimization": {
    slug: "search-engine-optimization",
    name: "Search Engine Optimization (SEO)",
    title: "Technical & On-Page Search Engine Optimization",
    metaTitle: "SEO Services US, London, UAE & Udaipur | FutureX",
    metaDescription: "Dominate Google search results. Technical SEO audits, keyword research, on-page optimization, and premium link building. Start ranking. Book a free audit!",
    locationFocus: "US, London, UAE, Dubai, Australia, Udaipur",
    intro: "Stop paying for clicks and start generating automated, compounding organic traffic. Our technical SEO services optimize every component of your search visibility, ensuring your brand ranks first on Google.",
    keyPoints: [
      "Technical audits resolving indexation, schema, and crawl budget issues.",
      "On-page optimization: Title tags, headings, dynamic meta, and content structures.",
      "Competitor keyword gap analysis capturing transactional search queries.",
      "Local SEO setups capturing 'near me' queries and Google Business Profile growth.",
      "White-hat authority link building driving domain rating improvements."
    ],
    whyChooseUs: [
      "Proven track record ranking sites in highly competitive global niches.",
      "Transparent reporting dashboards tracking keyword positions and traffic.",
      "Strict compliance with Google spam updates—zero shortcut methods.",
      "Next.js and headless React technical SEO specialists on staff."
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "Typically, organic improvements and ranking lifts begin appearing in 3-6 months, depending on keyword competition and starting site authority."
      },
      {
        question: "Do you specialize in local SEO for regional locations?",
        answer: "Yes, we specialize in hyper-localized campaigns targeting regions like London, Dubai, New York, Sydney, and local markets like Udaipur."
      }
    ],
    iconName: "Search"
  },
  "meta-ads": {
    slug: "meta-ads",
    name: "Meta Ads",
    title: "High-ROI Meta Ads (Facebook & Instagram)",
    metaTitle: "Facebook & Instagram Ads US, UK & UAE | FutureX",
    metaDescription: "Scale your revenue with high-ROI Meta Ads. We handle video hooks, pixel setup, audience retargeting, and copy. Boost your sales. Get a free audit!",
    locationFocus: "US, UK, UAE, Dubai, Australia, Udaipur",
    intro: "Turn social feeds into automated sales pipelines. We design, launch, and optimize high-converting Facebook and Instagram ad campaigns that match your target audiences, lowering customer acquisition costs (CAC).",
    keyPoints: [
      "Creative ad designs, video hooks, and persuasive landing page copies.",
      "Advanced pixel, conversion API (CAPI), and tracking setup for clean data.",
      "Lookalike & custom audience segmentation targeting warm buying intent.",
      "Continuous A/B split-testing of creative concepts, headings, and offers.",
      "Detailed weekly dashboards tracking ROAS, CPC, and conversion metrics."
    ],
    whyChooseUs: [
      "Deep understanding of the Meta bidding algorithm to maximize budgets.",
      "Stunning liquid glass aesthetic ad graphics that jump out of social feeds.",
      "Specialized in scaling e-commerce brands, local services, and B2B SaaS.",
      "Direct collaboration with creative video editors for native-style ads."
    ],
    faqs: [
      {
        question: "What ad budget do we need to start with?",
        answer: "We recommend starting with at least $10-$20 per day per campaign to gather enough learning data before scaling up budgets."
      },
      {
        question: "Do you handle custom ad creatives and video hooks?",
        answer: "Yes, we handle all copywriting, graphics, and video formatting in-house to ensure they are optimized for higher click-through rates."
      }
    ],
    iconName: "Facebook"
  },
  "google-ads": {
    slug: "google-ads",
    name: "Google Ads",
    title: "High-Converting Google Ads Campaigns",
    metaTitle: "Google Search & Shopping Ads US, UK & Dubai | FutureX",
    metaDescription: "Capture active search intent. High-performing Google Search, Display, and Shopping ads managed by certified specialists. Build pipeline. Book a call!",
    locationFocus: "US, UK, Dubai, London, Australia, Udaipur",
    intro: "Get in front of customers the exact second they are searching for your service. FutureX designs and manages hyper-targeted Google Search, Shopping, and Display campaigns that capture high-intent leads.",
    keyPoints: [
      "Comprehensive keyword match type setups protecting your ad spend budget.",
      "Negative keyword lists to filter out non-converting, low-value clicks.",
      "Optimized search ads writing compelling, high CTR headlines and copies.",
      "Performance Max (PMax) and Shopping feed optimizations for retail brands.",
      "Conversion tracking setups verifying exact lead paths and customer purchases."
    ],
    whyChooseUs: [
      "Google Ads certified campaign managers with years of budget experience.",
      "Continuous bid optimization using target CPA and max conversion options.",
      "High-performing landing page development built directly in Next.js.",
      "Clear monthly reporting mapping every dollar spent directly to customer actions."
    ],
    faqs: [
      {
        question: "What is the difference between Search and Display ads?",
        answer: "Search ads target users searching specific queries on Google. Display ads show visual banners across millions of partner sites to build brand awareness."
      },
      {
        question: "How do you prevent wasting budget on irrelevant clicks?",
        answer: "We set up strict negative keyword lists, refine location target boundaries, and continuously monitor search terms daily to pause low-performing queries."
      }
    ],
    iconName: "TrendingUp"
  },
  "menu-design": {
    slug: "menu-design",
    name: "Menu Design",
    title: "Creative & Modern Menu Design",
    metaTitle: "Restaurant Menu Design Services Dubai & UK | FutureX",
    metaDescription: "Boost restaurant sales. Modern, premium, and clean menu card designs, digital QR menus, and boards. Designed by FutureX. Book a menu audit!",
    locationFocus: "Dubai, UK, US, Australia, Udaipur",
    intro: "A menu is your silent salesperson. We design modern, high-end restaurant menu cards, digital QR menus, and wall boards engineered using menu engineering principles to highlight high-margin dishes and boost sales.",
    keyPoints: [
      "Custom themes matched to restaurant interiors and culinary brand concept.",
      "High-readability layouts using menu engineering to boost averages.",
      "Print-ready CMYK vector PDFs with proper bleeds and format setups.",
      "Dynamic digital QR code menu integrations easily updated on the fly.",
      "Premium typography and color matching for luxury dining aesthetics."
    ],
    whyChooseUs: [
      "Understanding of menu layouts, gaze patterns, and psychological triggers.",
      "Stunning layouts optimized for dark mode digital screens or textured paper.",
      "Fast content updates when items, descriptions, or prices change.",
      "Includes optimized files for website menus to safeguard local SEO scores."
    ],
    faqs: [
      {
        question: "Do you design digital QR menus?",
        answer: "Yes, we design responsive PDF/web layouts that customers access by scanning a QR code on their tables, perfect for modern dining setups."
      },
      {
        question: "Can you design menus in multiple languages?",
        answer: "Yes, we routinely build bilingual or multilingual menu designs (e.g. English & Arabic for Dubai, or Spanish & English for the US)."
      }
    ],
    iconName: "FileSpreadsheet"
  },
  "pay-per-click": {
    slug: "pay-per-click",
    name: "Pay Per Click (PPC)",
    title: "ROI-Focused Pay Per Click Marketing",
    metaTitle: "PPC Management Services USA, UK & Dubai | FutureX",
    metaDescription: "Accelerate your lead acquisition. Expert PPC services on Google, Bing, LinkedIn, and Meta. Maximize your digital advertising ROAS. Get a free proposal!",
    locationFocus: "USA, UK, Dubai, London, Australia, Udaipur",
    intro: "Stop wasting ad spend. FutureX runs end-to-end PPC campaigns across Google Search, Bing Ads, and LinkedIn, securing high-quality conversions for your sales pipelines through hyper-targeted audience segments.",
    keyPoints: [
      "Multi-channel PPC strategy (Search, Display, Social, Retargeting).",
      "Rigorous competitor keyword research and ad bid optimization.",
      "A/B landing page testing ensuring high conversion rate optimization (CRO).",
      "Dynamic conversion attribution reporting with clear customer match data.",
      "Continuous optimization of Quality Scores to reduce average cost-per-click."
    ],
    whyChooseUs: [
      "Focus on customer lifetime value (LTV) and lead quality, not just clicks.",
      "Cross-channel advertising funnels retargeting users on multiple networks.",
      "Transparent dashboards linking directly into CRM databases.",
      "Certified paid search experts managing campaigns with proactive setups."
    ],
    faqs: [
      {
        question: "Which platforms perform best for B2B vs B2C?",
        answer: "For B2B, LinkedIn Ads and Google Search yield the highest quality corporate leads. For B2C, Google Shopping, Meta, and TikTok drive the highest sales volume."
      },
      {
        question: "Do you optimize existing campaigns?",
        answer: "Yes! We run a full audit on your current account, clean up match types, add negative lists, and restructure campaigns to immediately stop budget waste."
      }
    ],
    iconName: "MousePointer"
  },
  "app-development": {
    slug: "app-development",
    name: "App Development",
    title: "Premium Mobile App Development Services",
    metaTitle: "Mobile App Development Services US, UK, UAE | FutureX Digital",
    metaDescription: "Get high-performance iOS and Android mobile applications. We build custom React Native, Flutter, and Swift apps optimized for speed, UX, and conversions.",
    locationFocus: "US, UK, UAE, Dubai, London, Udaipur",
    intro: "Scale your business with custom iOS and Android applications. At FutureX, we engineer responsive, high-performance mobile apps built with React Native, Flutter, and native Swift/Kotlin. We turn your product ideas into elegant, secure, and top-rated mobile experiences.",
    keyPoints: [
      "Custom iOS & Android development built with React Native & Flutter.",
      "Stunning UI/UX designs crafted specifically for mobile ergonomics.",
      "Seamless API integration, backend synchronization, and offline support.",
      "App Store (iOS) & Google Play Store (Android) launch management.",
      "High-security standards, user authentication, and secure payment processing."
    ],
    whyChooseUs: [
      "Experienced mobile developers specializing in cross-platform frameworks.",
      "Aesthetic, liquid glass UI designs that captivate and retain users.",
      "Full-lifecycle support from wireframing to store optimization (ASO).",
      "Robust testing across dozens of physical devices to ensure stability."
    ],
    faqs: [
      {
        question: "Which platforms do you build mobile apps for?",
        answer: "We build apps for both iOS and Android platforms. We use cross-platform frameworks like React Native and Flutter for cost-effective, high-performance apps, as well as native Swift and Kotlin where required."
      },
      {
        question: "How long does it take to develop a mobile application?",
        answer: "A standard MVP app takes about 4-6 weeks to design and develop. More complex applications with custom databases, third-party integrations, and advanced features can take 8-12 weeks."
      },
      {
        question: "Do you assist with publishing apps to the App Store and Google Play?",
        answer: "Yes, we handle the entire deployment process, including preparing metadata, store assets, resolving policy requirements, and submitting the apps for approval."
      }
    ],
    iconName: "Smartphone"
  }
};
