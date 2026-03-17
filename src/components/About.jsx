import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { count: 8, label: '年開發經歷', suffix: '+' },
  { count: 2, label: '精選專案', suffix: '' },
  { count: 10, label: '技術技能', suffix: '+' },
];

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const codeRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            if (counted) return;
            setCounted(true);
            stats.forEach((stat, i) => {
              let cur = 0;
              const step = Math.ceil(stat.count / 30);
              const iv = setInterval(() => {
                cur = Math.min(cur + step, stat.count);
                setCounts((prev) => {
                  const n = [...prev];
                  n[i] = cur;
                  return n;
                });
                if (cur >= stat.count) clearInterval(iv);
              }, 50);
            });
          },
        },
      });
      gsap.from(codeRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 bg-dark-card/50 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-2xl md:text-3xl font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-white">About Me</span>
            <span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Text */}
          <div ref={textRef} className="space-y-6">
            <p className="text-slate-300 leading-relaxed">
              嗨！我是 <span className="text-gradient font-semibold">うさぎ兔</span>
              ，一位 UI/UX 整合型前端工程師。
              具備遊戲互動與前端開發雙重背景，擅長將複雜的系統需求轉化為流暢、直覺的數位互動體驗。
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              專精 <span className="text-primary">React</span>、<span className="text-primary">Vue</span>{' '}
              框架開發， 善用 SCSS / TailwindCSS 建構可維護的樣式架構， 並積極探索{' '}
              <span className="text-primary">AI Agent</span> 協作研發的新可能。
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              重視元件化擴充與效能優化，從設計稿落地到使用者互動，每個細節都是精心設計的體驗。
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="border-gradient rounded-lg p-4 text-center">
                  <div className="font-mono text-2xl font-bold text-gradient">
                    {counts[i]}
                    {stat.suffix}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code block */}
          <div
            ref={codeRef}
            className="bg-dark-card rounded-xl overflow-hidden border border-dark-border h-full flex flex-col"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-border bg-dark">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">profile.ts</span>
            </div>
            <div className="p-5 font-mono text-sm flex flex-col gap-1 flex-1">
              <div>
                <span className="text-primary">const </span>
                <span className="text-secondary">developer</span>
                <span className="text-slate-300"> = </span>
                <span className="text-slate-400">&#123;</span>
              </div>
              {[
                ['name', '"うさぎ兔"', 'text-accent'],
                ['role', '"Frontend Engineer"', 'text-accent'],
                ['skills', '["React","Vue","AI Agent"]', 'text-accent'],
                ['style', '"Game Interactive"', 'text-accent'],
                ['available', 'true', 'text-secondary'],
              ].map(([k, v, c]) => (
                <div key={k} className="ml-4">
                  <span className="text-teal-300">{k}</span>
                  <span className="text-slate-300">: </span>
                  <span className={c}>{v}</span>
                  <span className="text-slate-600">,</span>
                </div>
              ))}
              <div>
                <span className="text-slate-400">&#125;</span>
                <span className="text-slate-600">;</span>
              </div>
              <div className="flex-1" />
              <div className="pt-3 border-t border-dark-border">
                <span className="text-slate-600">// </span>
                <span className="text-secondary">available for new opportunities ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
