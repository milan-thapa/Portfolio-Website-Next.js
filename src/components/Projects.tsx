"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  HiArrowTopRightOnSquare, 
  HiCodeBracket,
  HiSparkles,
  HiRocketLaunch,
  HiGlobeAlt,
  HiChatBubbleLeftRight,
  HiCloudArrowDown,
  HiUser
} from "react-icons/hi2";

const projects = [
  {
    title: "MilanEdu College Website",
    description:
      "A comprehensive college website featuring dynamic course catalogs, department showcases, and integrated contact systems. Built with modern React patterns for optimal performance.",
    tech: ["React", "CSS", "Netlify"],
    demo: "https://milanedu.netlify.app/",
    code: "https://github.com/milan-thapa/",
    icon: HiGlobeAlt,
    color: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "Hamro CSIT Clone",
    description:
      "A pixel-perfect responsive clone of an educational platform, demonstrating mastery of vanilla web technologies and semantic HTML structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://hamrocsit.netlify.app/",
    code: "https://github.com/milan-thapa/",
    icon: HiCodeBracket,
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    title: "Kathmandu Bernhardt College Clone",
    description:
      "A modern React implementation showcasing component architecture, responsive design principles, and smooth user interactions.",
    tech: ["React", "CSS"],
    demo: "https://milankbc.netlify.app/",
    code: "https://github.com/milan-thapa/",
    icon: HiRocketLaunch,
    color: "from-orange-500 to-red-500",
    featured: true,
  },
  {
    title: "Chatbot Application",
    description:
      "An intelligent conversational interface with natural language processing, FAQ handling, and context-aware responses for enhanced user engagement.",
    tech: ["React", "JavaScript", "NLP"],
    demo: "",
    code: "https://github.com/milan-thapa/",
    icon: HiChatBubbleLeftRight,
    color: "from-green-500 to-emerald-500",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "Real-time weather tracking application with geolocation integration, API data fetching, and beautiful weather visualizations.",
    tech: ["React", "Weather API", "Geolocation"],
    demo: "",
    code: "https://github.com/milan-thapa/",
    icon: HiCloudArrowDown,
    color: "from-sky-500 to-blue-500",
    featured: false,
  },
  {
    title: "Personal Portfolio",
    description:
      "A cutting-edge portfolio showcasing modern UI patterns, advanced animations, and best practices in Next.js development with TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    demo: "https://www.milanthapa1.com.np/",
    code: "https://github.com/milan-thapa/",
    icon: HiUser,
    color: "from-indigo-500 to-purple-500",
    featured: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section 
      id="projects" 
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
          >
            <HiSparkles className="text-yellow-400" />
            <span className="text-sm font-medium text-white/80">My Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Selected Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-8"
          >
            A collection of projects showcasing my skills in modern web development
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex gap-2 p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
          >
            <button
              onClick={() => setFilter("all")}
              className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === "all" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {filter === "all" && (
                <motion.div
                  layoutId="filterBubble"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">All Projects</span>
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                filter === "featured" ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {filter === "featured" && (
                <motion.div
                  layoutId="filterBubble"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Featured</span>
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-xs font-semibold text-yellow-400 flex items-center gap-1">
                      <HiSparkles className="text-sm" />
                      Featured
                    </div>
                  </div>
                )}

                {/* Icon header */}
                <div className="relative p-6 pb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="text-2xl text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-sm mb-4 line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-white/70 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links footer */}
                <div className="relative p-6 pt-0 flex gap-3">
                  {project.demo ? (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="relative px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg font-medium text-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Live Demo</span>
                        <HiArrowTopRightOnSquare className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </Link>
                  ) : (
                    <div className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg font-medium text-sm text-white/40 flex items-center justify-center gap-2 cursor-not-allowed">
                      <span>Coming Soon</span>
                    </div>
                  )}
                  
                  <Link
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative overflow-hidden"
                  >
                    <div className="relative px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg font-medium text-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <HiCodeBracket className="text-base group-hover/btn:rotate-12 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/milan-thapa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            <span>View All Projects on GitHub</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiArrowTopRightOnSquare className="text-xl" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}