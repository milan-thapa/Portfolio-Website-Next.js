"use client";

import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useCallback } from "react";

gsap.registerPlugin(ScrollToPlugin);

const SOCIAL_LINKS = [
  {
    href: "https://github.com/milan-thapa",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/milanthapa2003/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100089225822333",
    label: "Facebook",
    icon: FaFacebook,
  },
];

export default function Hero() {
  const smoothScrollTo = useCallback((id: string) => {
    const offsetY = 100; // Offset for fixed header
    const target = document.getElementById(id);
    if (!target) return;

    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY },
      ease: "power3.inOut",
    });

    // Accessibility: focus target after scroll
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }, []);

  return (
    <section
      aria-label="Hero section introducing Milan Thapa"
      className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <Image
            src="/profile.jpg"
            alt="Milan Thapa Profile"
            width={400}
            height={400}
            priority
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px]
                       rounded-2xl object-cover aspect-square border-2 border-blue-600
                       shadow-lg dark:shadow-blue-900 grayscale hover:grayscale-0 transition-all duration-300"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="space-y-6 order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-blue-600">Milan Thapa</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-md">
            Full-Stack Developer from Kathmandu, Nepal. I craft fast, scalable & clean web
            experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              {
                id: "projects",
                label: "View Projects",
                baseClasses:
                  "inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200",
              },
              {
                id: "contact",
                label: "Contact Me",
                baseClasses:
                  "inline-block border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-200",
              },
            ].map(({ id, label, baseClasses }) => (
              <button
                key={id}
                type="button"
                onClick={() => smoothScrollTo(id)}
                aria-label={`${label} Section`}
                className={baseClasses}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-5 pt-6 text-2xl text-gray-600 dark:text-gray-300">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-blue-600 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
