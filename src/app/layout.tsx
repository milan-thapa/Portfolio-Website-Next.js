// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Analytics from "../components/Analytics";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// Load Poppins font with optimized settings
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Milan Thapa | Full-Stack Developer & UI/UX Designer",
    template: "%s | Milan Thapa Portfolio",
  },
  description:
    "Milan Thapa is a full-stack developer from Kathmandu, Nepal, specializing in React, Next.js, TypeScript, and modern web development. CSIT graduate from Tribhuvan University with 3+ years of experience building scalable web applications.",
  keywords: [
    "Milan Thapa",
    "Full-Stack Developer Nepal",
    "React Developer Kathmandu",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Nepal",
    "UI/UX Designer",
    "CSIT Graduate",
    "Tribhuvan University",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Portfolio Website",
    "Web Development Nepal",
    "Software Engineer Nepal",
    "Freelance Developer",
  ],
  authors: [{ name: "Milan Thapa", url: "https://www.milanthapa1.com.np" }],
  creator: "Milan Thapa",
  publisher: "Milan Thapa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.milanthapa1.com.np"),
  alternates: {
    canonical: "https://www.milanthapa1.com.np",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.milanthapa1.com.np",
    siteName: "Milan Thapa Portfolio",
    title: "Milan Thapa | Full-Stack Developer & UI/UX Designer",
    description:
      "Explore Milan Thapa's portfolio featuring modern web applications, responsive designs, and full-stack projects built with React, Next.js, TypeScript, Node.js, and MongoDB.",
    images: [
      {
        url: "https://www.milanthapa1.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Milan Thapa - Full-Stack Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: "https://www.milanthapa1.com.np/profile.jpg",
        width: 800,
        height: 800,
        alt: "Milan Thapa Profile Picture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MilanThapa",
    creator: "@MilanThapa",
    title: "Milan Thapa | Full-Stack Developer & UI/UX Designer",
    description:
      "Full-stack developer from Nepal specializing in React, Next.js, and modern web technologies. View my portfolio and projects.",
    images: ["https://www.milanthapa1.com.np/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/site.webmanifest",

  category: "technology",
  classification: "Portfolio Website",
};

// Enhanced Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Enhanced JSON-LD Structured Data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milan Thapa",
    url: "https://www.milanthapa1.com.np",
    image: {
      "@type": "ImageObject",
      url: "https://www.milanthapa1.com.np/profile.jpg",
      width: 800,
      height: 800,
    },
   sameAs: [
  "https://github.com/milan-thapa",
  "https://www.linkedin.com/in/milanthapa1/",
  "https://www.instagram.com/milanthapa.soul",
],

    jobTitle: "Full-Stack Developer",
    description: "Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Web Development",
      "UI/UX Design",
      "Full-Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Tribhuvan University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "Nepal",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "Nepal",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milan Thapa Portfolio",
    url: "https://www.milanthapa1.com.np",
    description: "Professional portfolio of Milan Thapa, a full-stack developer from Nepal",
    author: {
      "@type": "Person",
      name: "Milan Thapa",
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: "Milan Thapa",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Milan Thapa - Web Development Services",
    description: "Full-stack web development services including React, Next.js, and modern web applications",
    url: "https://www.milanthapa1.com.np",
    telephone: "+977-9762415657", // Add your phone number
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "Nepal",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.milanthapa1.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.milanthapa1.com.np#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://www.milanthapa1.com.np#projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skills",
        item: "https://www.milanthapa1.com.np#skills",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.milanthapa1.com.np#contact",
      },
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.milanthapa1.com.np" />

        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Milan Thapa Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Milan Thapa" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Favicon and Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3b82f6" />

        {/* Enhanced JSON-LD Structured Data - Multiple Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        {/* Google Analytics with Privacy-First Configuration */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7WTRNVMGF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X7WTRNVMGF', {
              send_page_view: false,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `}
        </Script>

        {/* Performance Hints */}
        <link rel="preload" as="image" href="/profile.jpg" />
      </head>

      <body 
        className="font-sans antialiased bg-white text-black dark:bg-neutral-950 dark:text-white"
        itemScope 
        itemType="https://schema.org/WebPage"
      >
        {/* Accessibility: Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-500 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* SPA Pageview Tracking */}
        <Analytics />

        {/* Main content with semantic HTML and microdata */}
        <div id="main-content" role="main">
          {children}
        </div>

        {/* Toast notifications */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          aria-live="polite"
        />

        {/* Accessibility: Announcement region for screen readers */}
        <div 
          role="status" 
          aria-live="polite" 
          aria-atomic="true" 
          className="sr-only"
        />
      </body>
    </html>
  );
}