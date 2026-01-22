"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin,  FaInstagram, FaHeart } from "react-icons/fa";
import {
  HiArrowUp,
  HiMail,
  HiLocationMarker as HiMapPin,
  HiOutlineCode as HiCode,
} from "react-icons/hi";

import { useState } from "react";

const SOCIAL_LINKS = [
  { 
    href: "https://github.com/milan-thapa", 
    icon: FaGithub, 
    label: "GitHub",
    color: "hover:text-purple-400"
  },
  { 
    href: "https://www.linkedin.com/in/milanthapa1/", 
    icon: FaLinkedin, 
    label: "LinkedIn",
    color: "hover:text-blue-400"
  },
{
  href: "https://instagram.com/milanthapa.soul",
  icon: FaInstagram,
  label: "Instagram",
  color: "hover:text-pink-500" // Instagram-like hover color
},

  
];

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const RESOURCES = [
  { label: "Resume", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Uses", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus("idle"), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const offsetY = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offsetY;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-white/10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            rotate: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Column 1: Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-baseline gap-1 text-2xl md:text-3xl font-bold">
                  <span className="text-blue-400">&lt;</span>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Milan
                  </span>
                  <span className="text-cyan-400">/&gt;</span>
                </div>
              </div>
              
              <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                Full-stack developer crafting exceptional digital experiences. 
                Passionate about clean code, modern design, and solving complex problems.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/60">
                  <HiMapPin className="text-blue-400" />
                  <span className="text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <HiMail className="text-blue-400" />
                  <a href="mailto:thapamilan9762@gmail.com" className="text-sm hover:text-white transition-colors">
                  thapamilan9762@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-blue-400 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3">
                {RESOURCES.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-blue-400 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`group relative flex items-center justify-center w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/60 ${color} transition-all duration-300 hover:border-white/30 hover:bg-white/10`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-lg" />
                      
                      {/* Tooltip */}
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-lg">
                        {label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-12 border-y border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-white/60 mb-6">
              Get notified about new projects, articles, and opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <button
                onClick={handleSubscribe}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                {subscribeStatus === "success" ? "Subscribed! ✓" : "Subscribe"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/60 text-center sm:text-left"
            >
              © {new Date().getFullYear()}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Milan Thapa
              </span>
              . All rights reserved.
            </motion.p>

            {/* Made with love */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="text-red-400" />
              </motion.span>
              <span>using</span>
              <HiCode className="text-blue-400" />
              <span className="text-white/80 font-medium">Next.js & Tailwind</span>
            </motion.p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Back to top</span>
              <HiArrowUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </footer>
  );
}