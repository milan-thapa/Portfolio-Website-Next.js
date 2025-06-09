"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
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
    >
      <div className="max-w-5xl w-full space-y-12">
        <motion.div
          className="text-center md:text-left"
          variants={itemVariants}
          style={{ perspective: 600 }}
        >
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white relative inline-block"
          >
            About Me
            <span className="block w-24 h-1 bg-blue-600 rounded-full mt-3 mx-auto md:mx-0 transition-transform duration-500 ease-in-out hover:scale-x-110" />
          </h2>
        </motion.div>

        <motion.div
          className="space-y-8 text-center md:text-left"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hi, I’m{" "}
            <strong className="font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-600 cursor-default">
              Milan Thapa
            </strong>{" "}
            — a{" "}
            <strong className="font-semibold text-purple-400 transition-colors duration-300 hover:text-purple-600 cursor-default">
              Full-Stack Developer
            </strong>{" "}
            based in Kathmandu, Nepal. I hold a Bachelor's degree in Computer Science and Information Technology from Tribhuvan University.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            My expertise lies in crafting robust, scalable web applications, both on the{" "}
            <strong className="font-semibold text-green-400 transition-colors duration-300 hover:text-green-600 cursor-default">
              frontend
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-green-400 transition-colors duration-300 hover:text-green-600 cursor-default">
              backend
            </strong>
            . I’m also passionate about{" "}
            <strong className="font-semibold text-yellow-400 transition-colors duration-300 hover:text-yellow-500 cursor-default">
              UI/UX design
            </strong>{" "}
            — creating delightful and user-friendly experiences.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Outside of coding, you'll find me exploring new technologies, sharpening my skills, and contributing to open-source projects.
          </p>

          {/* 👉 Download CV Button */}
          <motion.div variants={itemVariants} className="pt-6">
            <a
              href="Milan-Thapa-cv.pdf" // Make sure your CV is placed inside the public folder as public/cv.pdf
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
