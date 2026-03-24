import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: 'fa-home' },
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'skills', label: 'Skills', icon: 'fa-code' },
  { id: 'experience', label: 'Experience', icon: 'fa-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'fa-rocket' },
];

export default function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-md border-dark-border'
          : 'bg-dark/60 backdrop-blur-md border-dark-border/40'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-lg font-semibold">
          <span className="text-primary">&lt;</span>
          <span className="text-white">うさぎ兔</span>
          <span className="text-primary">/&gt;</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all duration-200 ${
                activeSection === item.id ? 'text-primary' : 'text-slate-300 hover:text-white'
              }`}
            >
              <i className={`fas ${item.icon} text-xs`} />
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-dark/90 backdrop-blur-md border-t border-dark-border px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md font-mono text-sm transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <i className={`fas ${item.icon} text-xs w-4`} />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
