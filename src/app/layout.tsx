import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Milan Thapa | Portfolio",
  description:
    "I’m Milan Thapa, a full-stack developer from Kathmandu, Nepal, with a Bachelor’s in CSIT from Tribhuvan University. I specialize in full-stack web development and UI/UX design.",
  keywords:
    "Milan Thapa, Full-Stack Developer, React Developer, Next.js Developer, UI/UX, Web Developer Nepal, CSIT Graduate, Portfolio Website",
  authors: [{ name: "Milan Thapa", url: "https://milanthapa1.com.np" }],
  creator: "Milan Thapa",
  publisher: "Milan Thapa",
  metadataBase: new URL("https://milanthapa1.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milanthapa1.com.np",
    siteName: "Milan Thapa Portfolio",
    title: "Milan Thapa | Full-Stack Developer",
    description:
      "Explore Milan Thapa's portfolio with modern web projects, UI/UX designs, and full-stack skills using React, Next.js, and more.",
    images: [
      {
        url: "https://milanthapa1.com.np/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Milan Thapa Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MilanThapa",
    title: "Milan Thapa | Full-Stack Developer",
    description:
      "Visit the portfolio of Milan Thapa, a full-stack developer from Nepal specializing in modern web and UI/UX.",
    images: ["https://milanthapa1.com.np/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://milanthapa1.com.np" />

        {/* Favicon and Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Milan Thapa",
              url: "https://milanthapa1.com.np",
              image: "https://milanthapa1.com.np/profile.jpg",
              sameAs: [
                "https://github.com/milan-thapa",
                "https://www.linkedin.com/in/milanthapa2003/",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-black dark:bg-neutral-950 dark:text-white">
        {children}

        {/* Toast messages */}
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
        />
      </body>
    </html>
  );
}
