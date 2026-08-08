export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-slate-900 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 text-base mb-8">
          Interested in collaborating on AI solutions, RAG pipelines, or Data Visualization platforms?
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all"
          >
            Send an Email
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold text-sm transition-all"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}