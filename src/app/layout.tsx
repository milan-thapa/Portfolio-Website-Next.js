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
    "I’m Milan Thapa, a full-stack developer from Kathmandu, Nepal, with a Bachelor’s in Computer Science and Information Technology from Tribhuvan University. I specialize in both front-end and back-end development and have a strong background in web and graphic design. Passionate about creating user-friendly experiences, I enjoy tackling complex challenges and continuously enhancing my skills.",
  keywords:
    "Milan Thapa, Full-Stack Developer, Frontend Developer, React Developer, UI/UX Designer, Web Developer Nepal, CSIT Graduate, SEO expert, Next.js Portfolio",
  authors: [{ name: "Milan Thapa", url: "https://thapa-milan.com.np" }],
  creator: "Milan Thapa",
  publisher: "Milan Thapa",
  metadataBase: new URL("https://thapa-milan.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thapa-milan.com.np",
    siteName: "Milan Thapa Portfolio",
    title: "Milan Thapa | Full-Stack Developer",
    description:
      "Explore Milan Thapa's personal portfolio website featuring full-stack projects, creative UI/UX designs, and modern web technologies.",
    images: [
      {
        url: "/profile.jpg",
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
      "Visit the portfolio of Milan Thapa, a skilled full-stack developer from Nepal specializing in React, Next.js, and modern UI/UX.",
    images: ["/profile.jpg"],
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

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://thapa-milan.com.np" />

        {/* Favicon and Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
