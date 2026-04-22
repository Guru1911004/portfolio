import SkillCloud from '../components/SkillCloud';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Gurmeet Singh
        </h1>
        <p className="text-slate-400 text-lg max-w-xl text-center">
          Building the future of Language Learning with AI, RAG, and Interactive Data.
        </p>
      </section>

      {/* The "Fun" Part - D3 Skill Cloud */}
      <section className="max-w-5xl mx-auto w-full px-4 mb-20">
        <SkillCloud />
      </section>

      {/* Storytelling Section */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">The Problem I'm Solving</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Most AI applications fail because they lack <strong>context</strong>. 
          By combining <strong>LangChain</strong> with <strong>Vector Databases</strong>, 
          I build systems that don't just "chat"—they understand.
        </p>
        <p className="text-slate-300 text-lg leading-relaxed">
          Through <strong>Sprache</strong>, I am creating a modular architecture that helps 
          non-native speakers master English using real-time RAG-driven feedback.
        </p>
      </section>
    </main>
  );
}