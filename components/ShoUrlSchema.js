// components/ShoUrlSchema.js
// Structured data: SoftwareApp + WebSite + Organization + FAQ
export default function ShoUrlSchema() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ShoURL",
    url: "https://shourl-alpha.vercel.app",
    operatingSystem: "All",
    applicationCategory: "UtilitiesApplication",
    description:
      "ShoURL is a free, fast URL shortener. Create custom branded short links, track click analytics, and share cleaner URLs instantly — no account required.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1024",
    },
    featureList: [
      "Custom URL aliases",
      "Instant redirect",
      "No account required",
      "100% free",
      "Unlimited short links",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ShoURL — Free URL Shortener",
    url: "https://shourl-alpha.vercel.app",
    description:
      "The fastest free URL shortener online. Shorten any link in seconds with a custom alias. No sign-up needed.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://shourl-alpha.vercel.app/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShoURL",
    url: "https://shourl-alpha.vercel.app",
    logo: "https://shourl-alpha.vercel.app/logo.png",
    description: "ShoURL provides a free, fast URL shortening service. We help users create clean short links with custom aliases — no account required.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Sagar Maurya",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "sagar.code81@gmail.com",
      contactType: "customer support",
    },
    sameAs: [],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ShoURL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ShoURL is a free online URL shortener that converts long, complex links into short, clean URLs. It is fast, free, and requires no account or sign-up.",
        },
      },
      {
        "@type": "Question",
        name: "Is ShoURL completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ShoURL is 100% free forever. There are no subscription plans, premium tiers, or hidden costs. You can shorten as many URLs as you want at no charge.",
        },
      },
      {
        "@type": "Question",
        name: "How do I shorten a URL with ShoURL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Simply paste your long URL into the input box, type a custom alias, and click "Generate Short Link". Your shortened URL is ready to share in seconds.',
        },
      },
      {
        "@type": "Question",
        name: "Is ShoURL a good alternative to Bitly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! ShoURL is one of the best free Bitly alternatives. Unlike Bitly, ShoURL requires no account, has no monthly link limits, and is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use ShoURL to shorten any URL?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ShoURL works with any valid URL — YouTube links, Instagram posts, Google Drive files, long e-commerce URLs, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a limit on how many URLs I can shorten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ShoURL has no limit on the number of URLs you can shorten. Create as many short links as you need, completely free.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
