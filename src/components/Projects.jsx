const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team chat, and advanced analytics features.",
    tags: ["TypeScript", "Next.js", "MongoDB", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Interactive weather application with detailed forecasts, historical data visualization, and location-based alerts.",
    tags: ["React", "D3.js", "Weather API", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Comprehensive analytics platform for tracking social media metrics, engagement rates, and audience insights.",
    tags: ["Vue.js", "Python", "Flask", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "Mobile-first fitness application with workout plans, progress tracking, and personalized recommendations.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Portfolio CMS",
    description:
      "Content management system designed for creative professionals to showcase their work with customizable themes.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "S3"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="Projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-center text-2xl text-black font-bold">
          Featured Projects
        </h2>
        <p className="text-center text-lg text-[#757575] mb-12 max-w-2xl mx-auto">
          A selection of projects I've worked on, showcasing my skills in
          full-stack development, UI/UX design, and problem-solving.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-[#e0e0e0] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#fff1df] transition-shadow"
            >
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#e0e0e0] text-secondary-foreground rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
