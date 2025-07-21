"use client";

const projects = [
  {
    name: "react-email",
    year: "2024",
    description: "Beautiful Email Templates with React Email in Tailwind CSS",
    href: "#"
  },
  {
    name: "response",
    year: "2024",
    description: "A dynamic feedback system supporting video and text feedback with embedded script functionality.",
    href: "#"
  },
  {
    name: "myna-ui",
    year: "2023",
    description: "Maintainer of Myna UI, a modern and minimal UI component library focused on accessibility and DX.",
    href: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <a key={project.name} href={project.href} className="block group">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
              <p className="text-sm">{project.year}</p>
            </div>
            <p className="mt-2 text-base">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects; 