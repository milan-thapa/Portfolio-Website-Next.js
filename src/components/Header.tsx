"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

let isClickScrolling = false; // 🔐 used to prevent flicker

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const updateHighlight = () => {
    if (!navRef.current) return;
    const navLinks = navRef.current.querySelectorAll("button");
    const activeIndex = navItems.findIndex((item) => item.id === active);
    if (activeIndex === -1 || !navLinks[activeIndex]) {
      setHighlightStyle({ left: 0, width: 0 });
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const activeRect = (navLinks[activeIndex] as HTMLElement).getBoundingClientRect();
    setHighlightStyle({
      left: activeRect.left - navRect.left,
      width: activeRect.width,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling) return;

      const scrollY = window.scrollY + 200;
      let currentSection = "home";
      for (const item of navItems) {
        if (item.id === "home") continue;
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollY) {
          currentSection = item.id;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHighlight);

    handleScroll();
    updateHighlight();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHighlight);
    };
  }, []);

  useEffect(() => {
    updateHighlight();
  }, [active]);

  const scrollToSection = (id: string) => {
    const offsetY = 100;
    const duration = 1.2;
    const ease = "power3.inOut";

    isClickScrolling = true;
    setActive(id);
    setMenuOpen(false);

    const target = id === "home" ? 0 : document.getElementById(id);
    gsap.to(window, {
      duration,
      scrollTo: { y: target, offsetY: id === "home" ? 0 : offsetY },
      ease,
      onComplete: () => {
        isClickScrolling = false;
      },
    });

    if (id !== "home" && target instanceof HTMLElement) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
        <div className="text-3xl font-extrabold text-blue-600 cursor-pointer tracking-wide">
          <a href="/">Milan</a>
        </div>

        {/* Desktop Nav */}
        <ul
          ref={navRef}
          className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium relative"
        >
          {/* Underline Highlight */}
          <div
            className="absolute bottom-0 h-[2.5px] bg-blue-600 dark:bg-blue-400 rounded transition-all duration-300"
            style={{
              width: highlightStyle.width,
              transform: `translateX(${highlightStyle.left}px)`,
            }}
          />
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  active === id
                    ? "text-blue-700 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-600 dark:hover:text-blue-300"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          type="button"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md absolute top-full left-0 w-full transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6 text-center text-gray-700 dark:text-gray-300 font-semibold">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="w-full"
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
