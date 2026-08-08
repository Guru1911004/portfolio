export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-white">Education</h2>
        <p className="text-slate-400 text-sm mt-2">Academic background & foundational studies</p>
      </div>

      <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="text-xs font-mono text-blue-400 uppercase font-bold tracking-wider">Bachelor of Technology / B.S.</span>
          <h3 className="text-2xl font-bold text-white mt-1">Computer Science Engineering</h3>
          <p className="text-slate-400 text-sm mt-2">Focus on Artificial Intelligence, Data Structures, Algorithms, and Software Engineering.</p>
        </div>
        <div className="px-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs font-mono text-slate-300">
          Graduated / Alumnus
        </div>
      </div>
    </section>
  );
}