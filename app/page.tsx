"use client";
import { useState } from 'react';
import SkillCloud from '../components/SkillCloud';
import BookGalaxy from '../components/BookGalaxy';

export default function Home() {
const [activeTab, setActiveTab] = useState<'skills' | 'books'>('skills');

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-mono font-bold text-xl tracking-tighter text-white">GMT.SINGH</span>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="https://github.com/your-username" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:your-email@example.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <section className="px-6 pt-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Bio & Intent */}
        <div className="lg:col-span-5">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Architecting <br/>
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
              Intelligence.
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Computer Science Engineer specializing in <strong>RAG Architecture</strong> and <strong>Data Visualization</strong>. 
            I build systems that bridge the gap between raw data and human storytelling.
          </p>

          {/* Toggle Buttons */}
          <div className="flex p-1 bg-slate-900/80 border border-slate-800 rounded-xl w-fit mb-8">
            <button 
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'skills' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Technical Core
            </button>
            <button 
              onClick={() => setActiveTab('books')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'books' ? 'bg-amber-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Intellectual DNA
            </button>
          </div>
        </div>

        {/* Right Side: Interactive D3 Visuals */}
        <div className="lg:col-span-7 min-h-[550px] relative">
          {activeTab === 'skills' ? (
            <div className="animate-in fade-in zoom-in duration-500">
              <SkillCloud />
            </div>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <BookGalaxy />
            </div>
          )}
        </div>
      </section>

      {/* Quick Proof Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-900/20 rounded-3xl border border-slate-800/50">
            <h4 className="text-blue-400 font-mono text-xs uppercase mb-2">Primary Stack</h4>
            <p className="text-white font-bold">Next.js, TS, Tailwind, FastAPI</p>
          </div>
          <div className="p-8 bg-slate-900/20 rounded-3xl border border-slate-800/50">
            <h4 className="text-emerald-400 font-mono text-xs uppercase mb-2">AI Focus</h4>
            <p className="text-white font-bold">LangChain, RAG, Vector DBs</p>
          </div>
          <div className="p-8 bg-slate-900/20 rounded-3xl border border-slate-800/50">
            <h4 className="text-amber-400 font-mono text-xs uppercase mb-2">Data Viz</h4>
            <p className="text-white font-bold">D3.js Storytelling & Interactive UX</p>
          </div>
        </div>
      </section>
    </main>
  );
}