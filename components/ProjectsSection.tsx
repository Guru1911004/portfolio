interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: "Road Fines Visualization",
    description: "Used D3.js to create a dynamic, interactive visualization of road fines data, enabling users to explore trends and patterns effectively.",
    tags: ["D3.js", "HTML", "CSS"],
    link: "https://road-viz.vercel.app",
  },
  {
    title: "Sprache",
    description: "Large Language Model-powered Software to grade IELTS English Essays",
    tags: ["Node.js", "TypeScript", "OpenAI", "Groq"],
    link: "https://sprache-nine.vercel.app",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-white">Featured Projects</h2>
        <p className="text-slate-400 text-sm mt-2">Production deployments, open-source work, and specialized architectures</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/60 rounded-xl hover:bg-blue-600 hover:text-white text-slate-400 transition-all"
                  aria-label="Live Demo Website"
                >
                  {/* Globe / Live Web Icon */}
                  <svg
                    className="w-4 h-4 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}