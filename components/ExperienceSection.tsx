export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-white">Professional Experience</h2>
        <p className="text-slate-400 text-sm mt-2">Commercial application of AI and engineering systems</p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
        <div className="relative">
          <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#020617]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">AI Developer</h3>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit mt-1 md:mt-0">
              March 2025 – November 2025
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium mb-4">Production AI Solutions & Systems Integration</p>
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside leading-relaxed">
            <li>Architected end-to-end RAG workflows utilizing LangChain and high-throughput Vector DBs.</li>
            <li>Integrated customized embedding search strategies to enhance context retrieval relevance and precision.</li>
            <li>Collaborated across engineering teams to deliver responsive React/Next.js interfaces backed by FastAPI.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}