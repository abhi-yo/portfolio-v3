"use client";

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
	return (
		<section id="projects" className="py-8">
			<h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
			<div className="space-y-6">
				{projects.map((project) => (
					<a
						key={project.name}
						href={project.href}
						className="block group"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex justify-between items-baseline">
							<span className="group-hover:text-cyan-400 transition-colors">
								<h3 className="text-lg font-medium text-white">{project.name}</h3>
							</span>
							<p className="text-sm text-gray-400">{project.year}</p>
						</div>
						<p className="mt-2 text-base text-gray-300">{project.description}</p>
					</a>
				))}
			</div>
		</section>
	);
};

export default Projects;