import SkillCloud from '../components/SkillCloud';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      {/* Header / Hero */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-mono font-bold text-xl tracking-tighter text-white">GMT.SINGH</span>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
      </nav>

      <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-extrabold text-white leading-tight mb-6">
            Software for <br/>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              The Intelligence Era.
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-md mb-8 leading-relaxed">
            I'm a Computer Science Engineer in Victoria specializing in 
            <strong> Large Language Models</strong> and <strong>Interactive Data Systems</strong>. 
            Currently building <em>Sprache</em>.
          </p>
          <div className="flex gap-4">
            <a href="mailto:your-email@example.com" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-blue-400 transition-all">
              Get In Touch
            </a>
          </div>
        </div>

        {/* The D3 Skill Ecosystem */}
        <div className="relative">
          <SkillCloud />
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="bg-slate-900/30 py-32 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Engineering with Intent</h2>
          <p className="text-xl text-slate-400 leading-relaxed mb-12">
            "While most developers are building interfaces, I’m building systems that think. 
            By leveraging <strong>RAG</strong> architectures and <strong>Vector Databases</strong>, 
            I bridge the gap between static code and dynamic intelligence."
          </p>
        </div>
      </section>
    </main>
  );
}