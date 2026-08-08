"use client";
import SkillCloud from "./SkillCloud";
import BookGalaxy from "./BookGalaxy";

interface HeroSectionProps {
  activeTab: "skills" | "books";
  setActiveTab: (tab: "skills" | "books") => void;
}

export default function HeroSection({ activeTab, setActiveTab }: HeroSectionProps) {
  return (
    <section id="hero" className="px-6 pt-16 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)]">
      <div className="lg:col-span-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          AI Developer & CS Engineer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Architecting <br />
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
            Intelligence.
          </span>
        </h1>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          Computer Science Engineer specializing in <strong>RAG Architecture</strong> and <strong>Data Visualization</strong>. 
          I build systems that bridge raw data and human storytelling.
        </p>

        <div className="flex p-1 bg-slate-900/80 border border-slate-800 rounded-xl w-fit mb-8">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "skills" ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Technical Core
          </button>
          <button
            onClick={() => setActiveTab("books")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "books" ? "bg-amber-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            Intellectual DNA
          </button>
        </div>
      </div>

      <div className="lg:col-span-7 min-h-[500px] relative">
        {activeTab === "skills" ? <SkillCloud /> : <BookGalaxy />}
      </div>
    </section>
  );
}