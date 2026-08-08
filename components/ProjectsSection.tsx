interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    title: "Enterprise RAG Pipeline",
    description: "Multi-document conversational retrieval agent with hybrid vector search, context reranking, and citation tracking.",
    tags: ["LangChain", "Vector DB", "FastAPI", "Next.js"],
    github: "https://github.com/your-username/enterprise-rag",
  },
  {
    title: "D3 Knowledge Graph Visualizer",
    description: "Interactive force-directed graph system rendering complex relational software architectures and dependencies.",
    tags: ["D3.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/your-username/knowledge-graph-viz",
  },
  {
    title: "Real-time AI Document Assistant",
    description: "PDF query system with dynamic page highlight, OCR extraction, and multi-turn contextual memory.",
    tags: ["Python", "PyTorch", "Next.js", "Pinecone"],
    github: "https://github.com/your-username/ai-doc-assistant",
  },
  {
    title: "Distributed Full Stack Portal",
    description: "Microservice-backed dashboard featuring JWT authentication, real-time WebSockets, and dynamic metrics analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    github: "https://github.com/your-username/distributed-portal",
  },
  {
    title: "Autonomous Code Refactoring Agent",
    description: "LLM-powered CLI tool analyzing static AST trees to automatically convert legacy ES5 JavaScript to TypeScript.",
    tags: ["Python", "AST Parsing", "OpenAI API"],
    github: "https://github.com/your-username/code-refactor-agent",
  },
  {
    title: "Neural Vision Classification Suite",
    description: "Computer vision application for real-time edge detection and automated object tagging in streaming camera feeds.",
    tags: ["TensorFlow", "OpenCV", "React", "Python"],
    github: "https://github.com/your-username/neural-vision-suite",
  },
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
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/60 rounded-xl hover:bg-blue-600 hover:text-white text-slate-400 transition-all"
                  aria-label="GitHub Repository"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
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