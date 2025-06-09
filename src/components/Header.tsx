"use client";
import { useEffect, useState, useRef } from "react";

const navItems = [
  { id: "home", label: "Home" },       // <-- added Home here
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("home"); // default active is home
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const updateHighlight = () => {
    if (!navRef.current) return;
    const activeIndex = navItems.findIndex((item) => item.id === active);
    if (activeIndex === -1) {
      setHighlightStyle({ left: 0, width: 0 });
      return;
    }
    const navLinks = navRef.current.querySelectorAll("button");
    const activeLink = navLinks[activeIndex] as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();
      setHighlightStyle({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = "home"; // default to home when at top
      for (const item of navItems) {
        if (item.id === "home") continue; // skip home in this loop
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    updateHighlight();
  }, [active]);

  useEffect(() => {
    const handleResize = () => {
      updateHighlight();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      // Scroll smoothly to top when Home is clicked
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
      setActive("home");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      el.setAttribute("tabindex", "-1");
      el.focus();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-md">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative"
        aria-label="Primary Navigation"
      >
        <div className="text-3xl font-extrabold text-blue-600 cursor-pointer select-none tracking-wide drop-shadow-md">
          <a href="/">Milan</a>
        </div>

        {/* Desktop nav */}
        <ul
          ref={navRef}
          className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium relative"
        >
          {/* Modern underline highlight */}
          <div
            className="absolute bottom-0 h-[2.5px] bg-blue-600 dark:bg-blue-400 rounded transition-transform duration-150 ease-linear"
            style={{
              width: highlightStyle.width,
              transform: `translateX(${highlightStyle.left}px)`,
            }}
          />

          {navItems.map(({ id, label }) => (
            <li key={id} className="relative z-10">
              <button
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  active === id
                    ? "text-blue-700 dark:text-blue-400 font-semibold"
                    : "hover:text-blue-600 dark:hover:text-blue-300"
                }`}
                onClick={() => scrollToSection(id)}
                style={{ margin: 0 }}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
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

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!menuOpen}
        className={`md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md absolute top-full left-0 w-full transition-max-height duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6 text-center text-gray-700 dark:text-gray-300 font-semibold">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                role="menuitem"
                type="button"
                className="w-full"
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
