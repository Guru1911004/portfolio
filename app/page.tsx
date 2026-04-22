export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-950 text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Hi, I'm Gurmant Singh
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl text-center">
          Computer Science Graduate specializing in Software Development and AI. 
          Building scalable solutions with a focus on performance and clean code.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition">
            View My Work
          </button>
          <button className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-full font-bold transition">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}