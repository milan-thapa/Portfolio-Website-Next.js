"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navItems = [
  { id: "home", label: "Home", icon: "◆" },
  { id: "about", label: "About", icon: "◇" },
  { id: "projects", label: "Projects", icon: "◆" },
  { id: "skills", label: "Skills", icon: "◇" },
  { id: "contact", label: "Contact", icon: "◆" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for header background
  const headerOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 50);
        
        if (!isClickScrolling.current) {
          const scrollY = scrollPosition + 150;
          let currentSection = "home";
          
          for (const item of navItems) {
            if (item.id === "home") continue;
            const section = document.getElementById(item.id);
            if (section && section.offsetTop <= scrollY) {
              currentSection = item.id;
            }
          }
          
          setActive(currentSection);
        }
        
        ticking = false;
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    isClickScrolling.current = true;

    const target = id === "home" ? null : document.getElementById(id);
    const offsetY = 80;
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target) {
      const targetPosition = target.offsetTop - offsetY;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <motion.header
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/95 shadow-2xl shadow-blue-500/10 border-b border-white/5" 
          : "bg-slate-950/70"
      }`}
    >
      {/* Animated gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
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

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20 relative">
        {/* Logo with enhanced animations */}
        <motion.div
          className="relative cursor-pointer select-none group z-50"
          onClick={() => scrollToSection("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2">
            {/* Accent dot with pulse */}
            <motion.div
              className="w-2 h-2 rounded-full bg-blue-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Logo text */}
            <div className="flex items-baseline gap-1 text-2xl md:text-3xl font-bold">
              <motion.span
                className="font-mono text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                whileHover={{ rotate: [-5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                &lt;
              </motion.span>

              <span className="bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-500">
                Milan
              </span>

              <motion.span
                className="font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                whileHover={{ rotate: [5, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                /&gt;
              </motion.span>
            </div>
          </div>

          {/* Subtitle with fade effect */}
          <motion.div
            className="absolute -bottom-5 left-3 text-[10px] font-mono text-blue-400/60 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              
            </motion.span>
            developer.portfolio
          </motion.div>
        </motion.div>

        {/* Desktop Navigation - Glassmorphic pill */}
        <motion.ul
          className="hidden md:flex items-center gap-1 p-1.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl shadow-black/20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map(({ id, label, icon }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            >
              <button
                onClick={() => scrollToSection(id)}
                className="relative px-5 py-2.5 rounded-full font-medium text-sm overflow-hidden transition-all duration-300 group"
              >
                {/* Active state background with gradient */}
                {active === id && (
                  <motion.div
                    layoutId="navBubble"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${active === id ? 'text-white' : 'text-blue-400'}`}>
                    {icon}
                  </span>
                  <span className={`transition-colors duration-300 ${
                    active === id 
                      ? "text-white font-semibold" 
                      : "text-white/70 group-hover:text-white"
                  }`}>
                    {label}
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Modern Hamburger Menu */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="block w-5 h-0.5 bg-blue-400 rounded-full"
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-blue-400 rounded-full"
            animate={{
              opacity: menuOpen ? 0 : 1,
              x: menuOpen ? -10 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-0.5 bg-blue-400 rounded-full"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </nav>

      {/* Mobile Menu - Full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-2xl z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="w-full max-w-md">
                <ul className="flex flex-col gap-3">
                  {navItems.map(({ id, label, icon }, index) => (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <button
                        onClick={() => scrollToSection(id)}
                        className="relative w-full group"
                      >
                        <div className={`relative overflow-hidden rounded-2xl p-5 transition-all duration-300 ${
                          active === id
                            ? "bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400"
                            : "bg-white/5 hover:bg-white/10 border border-white/10"
                        }`}>
                          {/* Shine effect on hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />

                          <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className={`text-xl ${active === id ? 'text-white' : 'text-blue-400'}`}>
                                {icon}
                              </span>
                              <span className={`text-2xl font-semibold transition-colors ${
                                active === id ? "text-white" : "text-white/90"
                              }`}>
                                {label}
                              </span>
                            </div>
                            
                            <motion.span
                              className={`text-sm font-mono ${active === id ? 'text-white/80' : 'text-white/40'}`}
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.span>
                          </div>
                        </div>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile menu footer */}
              <motion.div
                className="absolute bottom-10 left-0 right-0 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-xs font-mono text-white/50">
                  © 2024 Milan • Developer Portfolio
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}