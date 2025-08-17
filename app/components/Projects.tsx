"use client";

import { useMemo, useState } from "react";

const projects = [
  {
    name: "Quilly",
    year: "July 2025",
    description:
      "Modern content publishing platform with blockchain-powered copyright protection on Polygon.",
    href: "https://contentplatform.vercel.app/",
  },
  {
    name: "Devconnect",
    year: "April 2025",
    description:
      "Modern social platform for developers with GitHub OAuth, trending repos, and Dev.to integration.",
    href: "https://devconnect-social.vercel.app/",
  },
  {
    name: "Event Sphere",
    year: "October 2024",
    description:
      "Real-time event platform with dedicated chat channels and local event discovery using Google Maps.",
    href: "https://event-sphere-production.up.railway.app/",
  },
  {
    name: "Smart Shelf",
    year: "August 2024",
    description:
      "IoT-based inventory management system using RFID technology for automated stock monitoring.",
    href: "https://github.com/abhi-yo/smart-shelf",
  },
  {
    name: "Ecommerce",
    year: "February 2024",
    description:
      "Full-stack platform with authentication, product catalog, shopping cart, and admin dashboard.",
    href: "https://ecommerce-frontend-iota-three.vercel.app/",
  },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCount = 3; // number of projects to show by default

  const { visibleProjects, hiddenCount } = useMemo(() => {
    const list = isExpanded ? projects : projects.slice(0, visibleCount);
    return {
      visibleProjects: list,
      hiddenCount: Math.max(projects.length - visibleCount, 0),
    };
  }, [isExpanded]);

  return (
    <section id="projects" className="py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-[20px] font-[550] text-white tracking-[-0.01em]">
          Projects
        </h2>
        <span className="text-[11px] text-gray-500">
          {projects.length} total
        </span>
      </div>

      <div className="relative">
        <ul className="list-none divide-y divide-white/[0.06] rounded-xl border border-white/10 overflow-hidden">
          {visibleProjects.map((project) => (
            <li key={project.name} className="group">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="truncate text-white text-[15px] font-[520] tracking-[-0.005em] group-hover:text-cyan-300">
                      {project.name}
                    </h3>
                    <p className="shrink-0 text-[11px] text-gray-500">
                      {project.year}
                    </p>
                  </div>
                  <p className="mt-1 text-[13px] leading-[1.7] text-gray-300 line-clamp-2 group-hover:text-gray-200">
                    {project.description}
                  </p>
                </div>
                <span className="ml-auto text-[11px] text-gray-500 group-hover:text-cyan-300">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Gradient removed to avoid perceived empty space */}
      </div>

      {hiddenCount > 0 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setIsExpanded((v) => !v)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] text-white hover:bg-white/10 hover:border-white/25 active:bg-white/15 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400/60 transition-colors"
          >
            {isExpanded ? "Show less" : `Show ${hiddenCount} more`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
