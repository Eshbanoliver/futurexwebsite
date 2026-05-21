import React from "react";

interface JsonLdProps {
  schema: Record<string, any>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Global Constant Schema Templates
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FutureX Digital Marketing",
  "url": "https://futurexdigitalmarketing.com", // Fallback URL, adjust as needed
  "logo": "https://futurexdigitalmarketing.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/people/Futurex-DigitalMarketing/61582411168285/",
    "https://www.instagram.com/futurexdigitalmarketing/",
    "https://www.linkedin.com/company/futurex-digital-marketing",
    "https://x.com/Futurex2330751"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-77339-77227",
    "contactType": "customer service",
    "areaServed": ["US", "GB", "AU", "AE", "IN"],
    "availableLanguage": ["en", "hi"]
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FutureX Digital Marketing",
  "image": "https://futurexdigitalmarketing.com/office-front.jpg", // Fallback placeholder
  "@id": "https://futurexdigitalmarketing.com/#localbusiness",
  "url": "https://futurexdigitalmarketing.com",
  "telephone": "+917733977227",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5th Floor Office No. 526 Arvana Mall Hathipole",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "313001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.5901,  // Coordinates for Hathipole, Udaipur approx.
    "longitude": 73.6876
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/people/Futurex-DigitalMarketing/61582411168285/",
    "https://www.instagram.com/futurexdigitalmarketing/",
    "https://www.linkedin.com/company/futurex-digital-marketing",
    "https://x.com/Futurex2330751"
  ]
};
