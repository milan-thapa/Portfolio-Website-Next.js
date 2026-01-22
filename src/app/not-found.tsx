'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiHome, HiArrowLeft, HiMagnifyingGlass } from "react-icons/hi2";

// Client-only component for dynamic time
function CurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <div>{"// " + time}</div>;
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8"
        >
          <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] font-black leading-none mb-4 select-none">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block">
              404
            </span>
          </h1>

          {/* Floating emoji */}
          <motion.div
            className="text-6xl sm:text-7xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🤔
          </motion.div>
        </motion.div>

        {/* Error messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void.
            Don't worry, even the best developers get lost sometimes.
          </p>
        </motion.div>

        {/* Glitch effect box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="inline-block relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-3 text-white/60">
              <HiMagnifyingGlass className="text-2xl text-blue-400" />
              <code className="text-sm font-mono">
                Error: <span className="text-red-400">ROUTE_NOT_FOUND</span>
              </code>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <HiHome className="text-xl" />
            <span>Back to Home</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <HiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Helpful suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16"
        >
          <p className="text-sm text-white/40 mb-4">Suggested pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "About", href: "/#about" },
              { label: "Projects", href: "/#projects" },
              { label: "Skills", href: "/#skills" },
              { label: "Contact", href: "/#contact" },
            ].map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative code snippets */}
      <motion.div
        className="absolute bottom-8 left-8 text-xs font-mono text-white/20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2 }}
      >
        <div>{"// Error occurred at:"}</div>
        <CurrentTime />
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-xs font-mono text-white/20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.4 }}
      >
        <div>{"<404 />"}</div>
      </motion.div>
    </div>
  );
}
