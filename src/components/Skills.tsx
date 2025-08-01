"use client";

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
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#38B2AC]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#181717]" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-12 lg:px-24 bg-white dark:bg-black"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-white"
      >
        Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
        {skills.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="group flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-600"
          >
            <Icon
              className={`text-5xl sm:text-6xl mb-3 transition-transform duration-300 group-hover:scale-110 ${color}`}
              role="img"
              aria-hidden="true"
            />
            <span className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 text-center">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
