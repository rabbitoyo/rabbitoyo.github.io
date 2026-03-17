export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-card/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-slate-500 text-center">
          <span className="text-primary">&lt;</span>
          <span className="text-slate-400">うさぎ兔</span>
          <span className="text-primary">/&gt;</span>
          <span className="ml-3">© 2026 · Built with React & TailwindCSS</span>
        </div>
        <div className="flex items-center gap-4">
          {[
            {
              href: 'https://github.com/rabbitoyo',
              icon: 'fab fa-github',
              label: 'GitHub',
            },
            {
              href: 'https://rabbitoyo.github.io/',
              icon: 'fas fa-globe',
              label: 'Portfolio',
            },
            {
              href: 'mailto:night31916@gmail.com',
              icon: 'fas fa-envelope',
              label: 'Email',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener"
              className="text-slate-500 hover:text-white transition-colors text-sm font-mono flex items-center gap-1.5"
            >
              <i className={s.icon} /> {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
