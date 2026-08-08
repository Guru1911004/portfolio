export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-white">Technical Skills</h2>
        <p className="text-slate-400 text-sm mt-2">Detailed domain categorization</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
          <h3 className="text-blue-400 font-mono text-xs uppercase font-bold mb-4">Frontend & Viz</h3>
          <ul className="space-y-2 text-sm text-slate-300 font-medium">
            <li>Next.js / React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>D3.js</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
          <h3 className="text-emerald-400 font-mono text-xs uppercase font-bold mb-4">AI & Machine Learning</h3>
          <ul className="space-y-2 text-sm text-slate-300 font-medium">
            <li>LangChain / LlamaIndex</li>
            <li>RAG Architecture</li>
            <li>Vector Databases (Pinecone, Chroma)</li>
            <li>TensorFlow / PyTorch</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
          <h3 className="text-amber-400 font-mono text-xs uppercase font-bold mb-4">Backend & Architecture</h3>
          <ul className="space-y-2 text-sm text-slate-300 font-medium">
            <li>FastAPI / Node.js</li>
            <li>PostgreSQL / MongoDB</li>
            <li>REST & WebSockets</li>
            <li>Microservices Design</li>
          </ul>
        </div>

        <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
          <h3 className="text-purple-400 font-mono text-xs uppercase font-bold mb-4">Tools & Practices</h3>
          <ul className="space-y-2 text-sm text-slate-300 font-medium">
            <li>Git / GitHub</li>
            <li>Docker / Containerization</li>
            <li>CI/CD Pipelines</li>
            <li>System Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}