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
      {/* Video + Badges */}
      <div ref={videoBlockRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <video ref={videoRef} muted loop playsInline preload="none" className="w-full h-full object-cover">
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-[48%] lg:hidden bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.62)_100%)]" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 w-full min-h-screen flex flex-col justify-end lg:justify-center pt-28 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row">
          <div ref={contentRef} className="flex-1 space-y-4 md:space-y-6">
            <div className="font-mono text-primary text-sm">Hello, I'm</div>

            <h1 className="font-mono text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-slate-400 text-2xl lg:text-3xl">const </span>
              <span className="text-gradient">うさぎ兔</span>
              <span className="text-slate-400 text-2xl lg:text-3xl"> =</span>
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

            <p className="hidden lg:block text-slate-400 text-base leading-relaxed max-w-lg">
              「用工程思維設計互動，將複雜系統轉化為流暢的數位體驗。」 <br />
              專精 React、Vue 框架與 AI Agent 協作研發。
            </p>

            <div className="flex flex-nowrap gap-4 pt-1 md:pt-2">
              <a
                href="#projects"
                className="rounded-md bg-gradient-to-r from-primary to-secondary text-dark px-5 lg:px-6 py-3 font-mono text-sm text-nowrap font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View Projects <i className="fas fa-arrow-right text-xs" />
              </a>
              <a
                href="mailto:night31916@gmail.com"
                className="rounded-md border border-primary/50 text-primary px-5 lg:px-6 py-3 font-mono text-sm text-nowrap font-semibold flex items-center gap-2 hover:border-primary hover:bg-primary/10 transition-all"
              >
                Contact Me <i className="fas fa-envelope text-xs" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-1 md:pt-2">
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
                  className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 hover:text-slate-300 hover:border-slate-400 hover:glow-white transition-all duration-300"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Badge Zone */}
          <div className="hidden lg:block flex-1 relative min-h-[360px]">
            {badges.map((badge, idx) => (
              <div
                key={badge.title}
                className={`absolute glass border border-dark-border rounded-lg px-3 py-2 flex items-center gap-2 text-xs font-mono hover:border-primary/50 transition-colors ${
                  idx === 0
                    ? 'top-20 right-24'
                    : idx === 1
                      ? 'bottom-10 right-6'
                      : 'top-1/2 right-0 -translate-y-1/2'
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
    </section>
  );
}
