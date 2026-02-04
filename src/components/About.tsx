"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { 
  HiCodeBracket, 
  HiSparkles, 
  HiRocketLaunch, 
  HiCpuChip 
} from "react-icons/hi2";

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    icon: HiCodeBracket,
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: HiCpuChip,
    color: "from-purple-500 to-pink-500",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools",
    icon: HiRocketLaunch,
    color: "from-orange-500 to-red-500",
    technologies: ["Git", "Docker", "Vercel", "AWS", "Figma"],
  },
];

const HIGHLIGHTS = [
  {
    icon: HiSparkles,
    title: "Clean Code",
    description: "Maintainable, scalable, and well-documented code that teams love to work with.",
  },
  {
    icon: HiRocketLaunch,
    title: "Performance",
    description: "Obsessed with speed, optimization, and delivering buttery-smooth experiences.",
  },
  {
    icon: HiCodeBracket,
    title: "Best Practices",
    description: "Modern patterns, accessibility standards, and production-ready solutions.",
  },
];

const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies", value: "15+" },
  { label: "Coffee Consumed", value: "∞" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    shouldReduceMotion ? [1, 1, 1, 1] : [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    shouldReduceMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 0.95]
  );

  // Animation variants with reduced motion support
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={!shouldReduceMotion ? {
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={!shouldReduceMotion ? {
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.2, 1, 1.2],
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
          >
            <HiSparkles className="text-yellow-400" />
            <span className="text-sm font-medium text-white/80">About Me</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Building Digital Experiences
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Turning complex problems into elegant, user-friendly solutions
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Story Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-white/80">
                Hey there! I'm{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Milan Thapa
                </span>
                , a full-stack developer based in the beautiful mountains of{" "}
                <span className="text-white/90 font-medium">Kathmandu, Nepal</span>.
              </p>

              <p className="text-white/70">
                I specialize in building fast, accessible, and maintainable web applications 
                using modern technologies. My journey started with a curiosity about how 
                websites work, and that curiosity has grown into a passion for creating 
                exceptional digital experiences.
              </p>

              <p className="text-white/70">
                Whether it's a sleek product landing page, a complex dashboard, or a 
                full-scale web application, I bring the same level of care and attention 
                to detail. I believe that great software isn't just about making things 
                work—it's about making them work <span className="italic text-white/90">beautifully</span>.
              </p>

              <div className="pt-4">
                <div className="flex items-center gap-3 text-white/60">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="text-sm font-mono">Currently seeking new opportunities</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="text-2xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={scaleIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">
              Technologies I Work With
            </h3>
            <p className="text-white/60">
              A curated selection of tools I use to build amazing things
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Hover gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl`} />
                  </div>

                  <div className="relative">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="text-xl text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white">
                        {category.category}
                      </h4>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-100px" }}
                          variants={scaleIn}
                          transition={{ 
                            duration: 0.3, 
                            delay: categoryIndex * 0.15 + techIndex * 0.05 
                          }}
                          whileHover={!shouldReduceMotion ? { scale: 1.05, y: -2 } : {}}
                          className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}