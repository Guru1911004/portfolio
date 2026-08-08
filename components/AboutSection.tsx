export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-5 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl h-fit">
          <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-4">At a Glance</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl mt-1">
                🎓
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Computer Science Engineer</h4>
                <p className="text-slate-400 text-xs mt-1">Rigorous foundation in algorithms, systems design, and mathematical computation.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mt-1">
                ⚡
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Full Stack Architecture</h4>
                <p className="text-slate-400 text-xs mt-1">Designing modular client-server architectures with modern React frameworks and robust APIs.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl mt-1">
                🧠
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">AI & RAG Knowledge</h4>
                <p className="text-slate-400 text-xs mt-1">Specialized in vector embeddings, contextual document retrieval, and LLM orchestration.</p>
              </div>
            </li>
          </ul>
        </aside>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">About Me</h2>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            I am a Software Engineer focused on constructing intelligence systems that bridge high-dimensional machine outputs with intuitive user interfaces. My expertise spans vector databases, custom RAG pipelines, and interactive visual data representations.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Whether building resilient backend APIs or crafting high-performance D3 charts for complex graphs, I focus on clean maintainable code and performance-driven solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
              <span className="text-2xl font-bold text-white block">10+</span>
              <span className="text-xs text-slate-400">AI Pipelines Built</span>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
              <span className="text-2xl font-bold text-white block">100%</span>
              <span className="text-xs text-slate-400">TypeScript / Clean Code</span>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
              <span className="text-2xl font-bold text-white block">RAG</span>
              <span className="text-xs text-slate-400">Context Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}