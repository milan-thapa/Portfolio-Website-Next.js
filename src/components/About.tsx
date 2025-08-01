"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFutbol, FaGamepad } from "react-icons/fa";
import { GiMountainRoad, GiPaintBrush } from "react-icons/gi";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <motion.section
      id="about"
      role="region"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-black"
      initial="hidden"
      animate={animationStarted ? "visible" : "hidden"}
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl w-full space-y-10 text-gray-300 text-lg md:text-xl leading-relaxed">
        <motion.h2
          id="about-heading"
          className="text-4xl sm:text-5xl font-extrabold text-white mb-8 inline-block relative"
          variants={itemVariants}
          style={{ perspective: 600 }}
        >
          About Me
          <span className="block w-24 h-1 bg-blue-600 rounded-full mt-3 transition-transform duration-500 ease-in-out hover:scale-x-110 origin-left" />
        </motion.h2>

        <motion.p variants={itemVariants}>
          Hello everyone! I’m <strong className="text-blue-400">Milan Thapa</strong>, proudly hailing from the beautiful Pyuthan, Nepal.
        </motion.p>

        <motion.p variants={itemVariants}>
          I am proficient in frontend and backend development using technologies like React.js, Next.js, and Node.js. I also enjoy working with UI/UX design to create user-friendly experiences.
        </motion.p>

        <motion.p variants={itemVariants}>
          My passion for technology sparked early in childhood, driven by an insatiable curiosity and a fascination with discovering how things work. This eagerness to explore new tools and ideas has fueled my journey, inspiring me to constantly learn and evolve as a developer.
        </motion.p>

      

     


      </div>
    </motion.section>
  );
}
