import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const badges = [
  {
    icon: 'fab fa-react',
    title: 'React',
    libs: 'Hooks / Router / Redux',
    color: '#61DAFB',
  },
  {
    icon: 'fab fa-vuejs',
    title: 'Vue.js',
    libs: 'Composition API / Pinia',
    color: '#42B883',
  },
  {
    icon: 'fab fa-js',
    title: 'JavaScript',
    libs: 'ES6+ / TypeScript',
    color: '#F7DF1E',
  },
];

const titles = ['UI/UX Designer', 'Game Interactive Developer', 'Frontend Engineer'];

export default function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const videoBlockRef = useRef(null);

  // Lazy load video on enter viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.load();
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter
  useEffect(() => {
    const target = titles[titleIdx];
    let i = 0;
    setDisplayed('');
    setTyping(true);
    const iv = setInterval(() => {
      i++;
      setDisplayed(target.slice(0, i));
      if (i === target.length) {
        clearInterval(iv);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => setTitleIdx((p) => (p + 1) % titles.length), 600);
        }, 2000);
      }
    }, 60);
    return () => clearInterval(iv);
  }, [titleIdx]);

  // GSAP parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      const trig = {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      };
      gsap.to(bgRef.current, { y: 180, ease: 'none', scrollTrigger: trig });
      gsap.to(contentRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: trig,
      });
      gsap.from([...contentRef.current.children], {
        opacity: 0,
        y: 28,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.15,
      });

      // Video block entrance: slide in from right + fade
      gsap.from(videoBlockRef.current, {
        opacity: 0,
        x: 80,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.4,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Parallax bg */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div ref={contentRef} className="flex-1 space-y-6">
            <div className="font-mono text-primary text-sm">Hello, I'm</div>

            <h1 className="font-mono text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-slate-400 text-2xl md:text-3xl">const </span>
              <span className="text-gradient">うさぎ兔</span>
              <span className="text-slate-400 text-2xl md:text-3xl"> =</span>
            </h1>

            <div className="font-mono text-lg md:text-2xl text-slate-100 h-8 flex items-center">
              <p>
                "<span>{displayed}</span>
                <span
                  className={`w-0.5 h-6 bg-primary inline-block align-middle ${typing ? 'animate-pulse' : 'opacity-0'}`}
                />
                "
              </p>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              「用工程思維設計互動，將複雜系統轉化為流暢的數位體驗。」 <br />
              專精 React、Vue 框架與 AI Agent 協作研發。
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="rounded-md bg-gradient-to-r from-primary to-secondary text-dark px-6 py-3 font-mono text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View Projects <i className="fas fa-arrow-right text-xs" />
              </a>
              <a
                href="mailto:night31916@gmail.com"
                className="rounded-md border border-primary/50 text-primary px-6 py-3 font-mono text-sm font-semibold flex items-center gap-2 hover:border-primary hover:bg-primary/10 transition-all"
              >
                Contact Me <i className="fas fa-envelope text-xs" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[
                { href: 'https://github.com/rabbitoyo', icon: 'fab fa-github' },
                { href: 'https://rabbitoyo.github.io/', icon: 'fas fa-globe' },
                {
                  href: 'mailto:night31916@gmail.com',
                  icon: 'fas fa-envelope',
                },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-slate-400 hover:text-white hover:border-primary hover:glow-teal transition-all duration-300"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Video + Badges */}
          <div ref={videoBlockRef} className="flex-1 flex items-center justify-center">
            <div className="relative w-[300px] md:w-[400px]">
              <div
                className="rounded-2xl overflow-hidden border border-dark-border shadow-lg"
                style={{ aspectRatio: '9/16' }}
              >
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                >
                  <source src="/video/video.mp4" type="video/mp4" />
                </video>
              </div>
              {badges.map((badge, idx) => (
                <div
                  key={badge.title}
                  className={`absolute glass border border-dark-border rounded-lg px-3 py-2 flex items-center gap-2 text-xs font-mono hover:border-primary/50 transition-colors ${
                    idx === 0
                      ? 'top-5 -left-10 md:top-10 md:-left-20'
                      : idx === 1
                        ? 'bottom-3 -left-5 md:bottom-10 md:-left-14'
                        : '-right-12 bottom-1/4 md:-right-10'
                  }`}
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: `${idx * 1.5}s`,
                  }}
                >
                  <i className={`${badge.icon} text-base`} style={{ color: badge.color }} />
                  <div>
                    <div className="text-white font-semibold">{badge.title}</div>
                    <div className="text-slate-500 text-[10px]">{badge.libs}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
