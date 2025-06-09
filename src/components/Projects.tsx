// components/Projects.tsx
"use client";

import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "MilanEdu College Website",
    description: "A handmade college website built using React.js showcasing courses, departments, and contact info.",
    tech: ["React.js", "CSS", "Netlify"],
    demo: "https://milanedu.netlify.app/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 2,
    title: "Hamro CSIT Clone",
    description: "Clone of the Hamro CSIT educational website built with HTML, CSS, and JavaScript, fully responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://hamrocsit.netlify.app/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 3,
    title: "Kathmandu Bernhardt College Clone",
    description: "Clone of Kathmandu Bernhardt College website built using React.js, responsive and mobile-friendly.",
    tech: ["React.js", "CSS", "Netlify"],
    demo: "https://milankbc.netlify.app/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 4,
    title: "Chatbot Application",
    description: "An interactive chatbot built with React.js to answer FAQs and provide assistance.",
    tech: ["React.js", "JavaScript", "CSS"],
    demo: "https://thapa-milan.com.np/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Live weather app fetching real-time data from an API based on user location.",
    tech: ["React.js", "API", "CSS"],
    demo: "https://thapa-milan.com.np/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 6,
    title: "To-Do List",
    description: "Simple and clean to-do list app with add, edit, delete, and drag-drop functionality.",
    tech: ["React.js", "JavaScript", "CSS"],
    demo: "https://thapa-milan.com.np/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 7,
    title: "Personal Portfolio Website",
    description: "My personal portfolio showcasing projects, skills, and blogs with dark mode and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "https://thapa-milan.com.np/",
    code: "https://github.com/milanthapa2003/",
  },
  {
    id: 8,
    title: "E-Commerce Website",
    description: "Full-stack e-commerce app with product listings, shopping cart, and Stripe payment integration.",
    tech: ["React.js", "Next.js", "Stripe", "Tailwind CSS"],
    demo: "https://thapa-milan.com.np/",
    code: "https://github.com/milanthapa2003/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-black px-6 sm:px-12 lg:px-24"
      aria-label="Projects section"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-neutral-900 dark:text-white">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, tech, demo, code }) => (
          <div
            key={id}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex gap-4">
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Demo of ${title}`}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Demo
              </Link>
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Code repository of ${title}`}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
