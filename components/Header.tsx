// components/Header.tsx
"use client";

export interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Header({ navItems, activeSection, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-slate-800/80 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <button 
          onClick={() => onNavigate("hero")} 
          className="font-mono font-bold text-xl tracking-tighter text-white hover:text-blue-400 transition-colors"
        >
          GMT.SINGH
        </button>

        <div className="hidden md:flex gap-1 p-1.5 bg-slate-900/90 border border-slate-800 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}