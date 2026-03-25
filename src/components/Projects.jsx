import { useEffect, useRef, useState } from 'react';
import preview01 from '../assets/images/projects/preview01.webp';
import preview02 from '../assets/images/projects/preview02.webp';

const projects = [
  {
    title: 'YeStep 每一步，找回生活的呼吸',
    subtitle: '步道檢索平台',
    description: '從微小的 Step 開始，探索山稜的光影。精準檢索每一條森林步道，重新連結自然與自己。',
    tags: ['React', 'SCSS', 'Bootstrap5', 'Swiper', 'Axios', 'JSON Server'],
    rarity: 'RARE',
    rarityColor: 'border-primary/50 hover:border-primary',
    rarityText: 'text-primary',
    rarityGlow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]',
    rarityBadge: 'bg-primary/10 border-primary/30 text-primary',
    icon: 'fa-mountain',
    iconColor: 'text-primary',
    image: preview01,
    demo: 'https://malrichsu.github.io/yestep/',
    github: 'https://github.com/MalricHsu/yestep',
  },
  {
    title: 'TravNote 旅途',
    subtitle: '旅遊電商平台',
    description: '專為旅遊愛好者打造的線上購票平台，從城市街角到自然秘境，提供精選的旅遊套票與體驗行程。',
    tags: ['React', 'Redux Toolkit', 'SCSS', 'Bootstrap5', 'React Hook Form', 'Swiper'],
    rarity: 'EPIC',
    rarityColor: 'border-primary/50 hover:border-primary',
    rarityText: 'text-primary',
    rarityGlow: 'hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]',
    rarityBadge: 'bg-primary/10 border-primary/30 text-primary',
    icon: 'fa-plane',
    iconColor: 'text-primary',
    image: preview02,
    demo: 'https://rabbitoyo.github.io/travnote/',
    github: 'https://github.com/rabbitoyo/travnote',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 bg-dark overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-2xl md:text-3xl font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Projects</span>
            <span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group relative bg-dark-card border ${project.rarityColor} ${project.rarityGlow} rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease, transform 0.7s ease`,
                transitionDelay: visible ? `${idx * 0.15}s` : '0s',
              }}
            >
              {/* Rarity badge */}
              <div
                className={`absolute top-4 right-4 font-mono text-xs px-2 py-1 rounded-md border ${project.rarityBadge}`}
              >
                ◆ {project.rarity}
              </div>

              {/* Image area */}
              <div className="relative overflow-hidden bg-dark-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="font-bold text-white text-lg">{project.title}</h3>
                  <p className={`font-mono text-xs ${project.rarityText} mt-0.5`}>{project.subtitle}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 bg-dark border border-dark-border text-slate-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 font-mono text-xs ${project.rarityText} hover:underline`}
                  >
                    <i className="fas fa-external-link-alt text-xs" /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white"
                  >
                    <i className="fab fa-github text-xs" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
