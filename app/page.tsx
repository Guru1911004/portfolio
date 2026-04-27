import SkillCloud from '../components/SkillCloud';
import BookGalaxy from '../components/BookGalaxy'; // Add this import

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      {/* ... previous Hero and Story sections ... */}

      {/* New Book Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-6">Unconventional <br/> Influences</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              My engineering philosophy is shaped by more than just documentation. 
              From the Stoicism of <em>Marcus Aurelius</em> to the relentless 
              drive in <em>Shoe Dog</em>, these works inform how I build systems: 
              with resilience, purpose, and clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Business", "Memoirs", "Philosophy", "Tech"].map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <BookGalaxy />
          </div>
        </div>
      </section>
    </main>
  );
}