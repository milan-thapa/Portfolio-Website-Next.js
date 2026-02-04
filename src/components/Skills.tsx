"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import {
  HiSparkles,
  HiOutlineCode as HiCode,
  HiChip as HiCpuChip,
  HiOutlineTerminal as HiCommandLine,
  HiCog as HiWrench,
} from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend",
    icon: HiCode,
    gradient: "from-blue-500 to-cyan-500",
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    title: "Backend & Database",
    icon: HiCpuChip,
    gradient: "from-purple-500 to-pink-500",
    description: "Building scalable server-side solutions",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#fff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: HiWrench,
    gradient: "from-orange-500 to-red-500",
    description: "Version control and deployment pipelines",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#fff" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

interface SkillCardProps {
  skill: {
    name: string;
    icon: any;
    color: string;
  };
  categoryGradient: string;
  index: number;
}

const SkillCard = ({ skill, categoryGradient, index }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={!shouldReduceMotion ? {
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } : {}}
      className="group relative"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
        {/* Hover gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${categoryGradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
          aria-hidden="true"
        />

        {/* Icon */}
        <motion.div
          className="relative w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4"
          style={!shouldReduceMotion && isHovered ? {
            transform: "translateZ(30px)",
          } : {}}
          aria-hidden="true"
        >
          <skill.icon 
            className="text-3xl" 
            style={{ color: skill.color }}
          />
        </motion.div>

        {/* Name */}
        <h4 className="relative text-lg font-semibold text-white">
          {skill.name}
        </h4>
      </div>

      {/* Glow effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${categoryGradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
        aria-hidden="true"
      />
    </motion.div>
  );
};

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUpLarge = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToContact = () => {
    const target = document.getElementById("contact");
    if (target) {
      const offsetY = 80;
      const targetPosition = target.offsetTop - offsetY;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={!shouldReduceMotion ? {
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={!shouldReduceMotion ? {
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          } : {}}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16 sm:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
          >
            <HiSparkles className="text-yellow-400" />
            <span className="text-sm font-medium text-white/80">Technical Skills</span>
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
              My Tech Stack
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
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </header>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpLarge}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <category.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div 
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
                role="list"
                aria-label={`${category.title} skills`}
              >
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} role="listitem">
                    <SkillCard
                      skill={skill}
                      categoryGradient={category.gradient}
                      index={skillIndex}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpLarge}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HiCommandLine className="text-3xl text-blue-400" aria-hidden="true" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    15+
                  </div>
                </div>
                <div className="text-white/60 text-sm font-medium">
                  Technologies Mastered
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HiCode className="text-3xl text-purple-400" aria-hidden="true" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    3+
                  </div>
                </div>
                <div className="text-white/60 text-sm font-medium">
                  Years of Experience
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <HiSparkles className="text-3xl text-orange-400" aria-hidden="true" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    ∞
                  </div>
                </div>
                <div className="text-white/60 text-sm font-medium">
                  Learning & Growing
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpLarge}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            Interested in working together?
          </p>
          <motion.button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.98 }}
          >
            <span>Let's Build Something</span>
            <motion.span
              animate={!shouldReduceMotion ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}