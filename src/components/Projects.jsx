import React from "react";
import footerImage from "../assets/project1.png";

const projects = [
  {
    title: "Weather App",
    tags: ["React", "API", "Tailwind"],
    image: null, // Coming soon
  },
  {
    title: "MyPortfolio",
    tags: ["React", "Framer Motion", "Tailwind"],
    image: footerImage,
  },
  {
    title: "ToDo App",
    tags: ["React", "LocalStorage", "Tailwind"],
    image: null, // Coming soon
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        My Projects
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative rounded-3xl shadow-2xl overflow-hidden w-full md:w-96"
            style={{ height: 380 }} // shorter height
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-3xl">
                <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                  Coming Soon
                </span>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 rounded-b-2xl backdrop-blur-sm">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
