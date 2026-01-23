"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles, HiCheckCircle, HiArrowRight } from "react-icons/hi2";

const PURPOSE_OPTIONS = [
  { id: "hire", label: "Looking to hire", icon: "🎯" },
  { id: "explore", label: "Exploring projects", icon: "💼" },
  { id: "network", label: "Networking", icon: "🤝" },
  { id: "browse", label: "Just browsing", icon: "👀" },
];

const WELCOME_QUESTIONS = [
  "What brings you here today?",
  "How can I help you?",
  "What would you like to explore?",
];

interface WelcomeGateProps {
  onComplete?: () => void;
}

export default function WelcomeGate({ onComplete }: WelcomeGateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<"question" | "greeting" | "hidden">("question");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [greeting, setGreeting] = useState("");
  const [question] = useState(
    WELCOME_QUESTIONS[Math.floor(Math.random() * WELCOME_QUESTIONS.length)]
  );

  useEffect(() => {
    // Check if user has already visited this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsVisible(true);
    } else {
      // User has visited, call onComplete immediately
      onComplete?.();
    }
  }, [onComplete]);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 21) return "Good evening";
    return "Good night";
  };

  const handleSubmit = async () => {
    // Validation
    if (name.trim().length < 2) {
      setError("Please enter at least 2 characters");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Store in session
    sessionStorage.setItem("visitorName", name);
    sessionStorage.setItem("hasVisited", "true");
    if (purpose) {
      sessionStorage.setItem("visitorPurpose", purpose);
    }

    // Generate greeting
    const timeGreeting = getTimeBasedGreeting();
    setGreeting(`${timeGreeting}, ${name}!`);

    setIsSubmitting(false);
    setStage("greeting");

    // Hide after showing greeting and call onComplete
    setTimeout(() => {
      setIsVisible(false);
      setStage("hidden");
      onComplete?.();
    }, 2500);
  };

  const handleSkip = () => {
    sessionStorage.setItem("hasVisited", "true");
    setIsVisible(false);
    setStage("hidden");
    onComplete?.();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isSubmitting && name.length >= 2) {
      handleSubmit();
    }
    if (e.key === "Escape") {
      handleSkip();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/95 backdrop-blur-2xl"
        onKeyDown={handleKeyPress}
      >
        {/* Background animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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

        <AnimatePresence mode="wait">
          {stage === "question" && (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-2xl w-full"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
                {/* Brand mark */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center justify-center gap-2 mb-8"
                >
                  <div className="flex items-baseline gap-1 text-3xl font-bold">
                    <span className="text-blue-400">&lt;</span>
                    <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                      Milan
                    </span>
                    <span className="text-cyan-400">/&gt;</span>
                  </div>
                </motion.div>

                {/* Welcome badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                    <HiSparkles className="text-yellow-400" />
                    <span className="text-sm font-medium text-white/80">
                      Welcome
                    </span>
                  </div>
                </motion.div>

                {/* Main question */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                >
                  {question}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center text-white/60 mb-8"
                >
                  But first, let me know who I'm talking to
                </motion.p>

                {/* Name input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mb-6"
                >
                  <label
                    htmlFor="visitor-name"
                    className="block text-sm font-medium text-white/80 mb-3"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <input
                      id="visitor-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your name..."
                      autoFocus
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-lg placeholder-white/40 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 focus:scale-[1.02] transition-all duration-300"
                    />
                    {name.length >= 2 && !error && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <HiCheckCircle className="text-2xl text-green-400" />
                      </motion.div>
                    )}
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-2"
                    >
                      ⚠️ {error}
                    </motion.p>
                  )}
                </motion.div>

                {/* Purpose selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-sm font-medium text-white/80 mb-3">
                    I'm here to... (optional)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {PURPOSE_OPTIONS.map((option, index) => (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        onClick={() =>
                          setPurpose(purpose === option.id ? "" : option.id)
                        }
                        className={`relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          purpose === option.id
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent"
                            : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2 justify-center">
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Submit button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  onClick={handleSubmit}
                  disabled={isSubmitting || name.length < 2}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting || name.length < 2
                      ? "bg-white/10 text-white/40 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Let's Go</span>
                      <HiArrowRight className="text-xl" />
                    </>
                  )}
                </motion.button>

                {/* Skip link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="text-center mt-6"
                >
                  <button
                    onClick={handleSkip}
                    className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300 flex items-center gap-2 mx-auto group"
                  >
                    <span>Continue as Guest</span>
                    <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>

              {/* Keyboard hints */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-4 text-xs text-white/40 font-mono space-x-4"
              >
                <span>Press Enter ↵ to submit</span>
                <span>•</span>
                <span>Press Esc to skip</span>
              </motion.div>
            </motion.div>
          )}

          {stage === "greeting" && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl sm:text-7xl mb-6"
              >
                👋
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {greeting}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/70"
              >
                {purpose === "hire"
                  ? "Excited to discuss opportunities! 🚀"
                  : purpose === "explore"
                  ? "Let me show you what I've built! 💼"
                  : purpose === "network"
                  ? "Great to connect with you! 🤝"
                  : purpose === "browse"
                  ? "Feel free to explore around! 👀"
                  : "Welcome to my portfolio! ✨"}
              </motion.p>

              {/* Loading dots */}
              <div className="flex justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}