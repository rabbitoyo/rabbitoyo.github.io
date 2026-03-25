import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const columns = [
  {
    heading: '## UI / UX',
    icon: 'fa-palette',
    color: 'text-primary',
    dot: 'bg-primary',
    badges: [
      {
        label: 'Figma',
        style: 'bg-red-500/10    text-red-300    border-red-500/25',
      },
      {
        label: 'Photoshop',
        style: 'bg-blue-500/10   text-blue-300   border-blue-500/25',
      },
      {
        label: 'Illustrator',
        style: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
      },
      {
        label: 'SCSS / Sass',
        style: 'bg-pink-500/10   text-pink-300   border-pink-500/25',
      },
      {
        label: 'Bootstrap 5',
        style: 'bg-blue-400/10   text-blue-300   border-blue-400/25',
      },
      {
        label: 'TailwindCSS',
        style: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/25',
      },
      {
        label: 'Swiper',
        style: 'bg-sky-500/10    text-sky-300    border-sky-500/25',
      },
      {
        label: 'GSAP',
        style: 'bg-green-500/10  text-green-300  border-green-500/25',
      },
    ],
    items: [
      {
        key: 'Design Handoff',
        desc: '熟悉 Figma 檢視流程，能與設計師順暢溝通並精準落地設計稿。',
      },
      {
        key: 'Visual Design',
        desc: '具備 Photoshop / Illustrator 基礎設計能力。',
      },
      { key: 'OOCSS', desc: '能以容器與內容分離思維建立可擴充樣式架構。' },
      {
        key: 'SCSS / Mixin',
        desc: '善用 Mixin 與變數管理，降低重複碼與維護成本。',
      },
      { key: 'RWD', desc: '可依不同裝置尺寸規劃版面與互動體驗。' },
      {
        key: 'Styling System',
        desc: '建立可重用 UI 元件並維持一致的設計語彙與樣式架構。',
      },
      {
        key: 'Swiper',
        desc: '建構高效能輪播與觸控互動介面，支援多種展示情境。',
      },
    ],
  },
  {
    heading: '## Frontend',
    icon: 'fa-laptop-code',
    color: 'text-primary',
    dot: 'bg-primary',
    badges: [
      {
        label: 'JavaScript',
        style: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
      },
      {
        label: 'TypeScript',
        style: 'bg-blue-500/10   text-blue-300   border-blue-500/25',
      },
      {
        label: 'React',
        style: 'bg-cyan-500/10   text-cyan-300   border-cyan-500/25',
      },
      {
        label: 'Vue.js',
        style: 'bg-green-500/10  text-green-300  border-green-500/25',
      },
      {
        label: 'HTML5',
        style: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
      },
      {
        label: 'CSS3',
        style: 'bg-sky-400/10    text-sky-300    border-sky-400/25',
      },
    ],
    items: [
      {
        key: 'JavaScript / TypeScript',
        desc: '熟悉 ES6+ 語法與型別系統，開發具可讀性的前端應用。',
      },
      {
        key: 'React / Vue SPA',
        desc: '具備 SPA 架構開發經驗，透過元件化思維建立可重用 UI 模組。',
      },
      {
        key: '程式碼品質',
        desc: '使用 ESLint 建立一致的程式碼風格與團隊協作規範。',
      },
      {
        key: 'RESTful API',
        desc: '可使用 Axios 串接 API，完成資料請求、錯誤處理與狀態回饋。',
      },
      {
        key: 'Mock API 流程',
        desc: '具備使用 JSON Server 建立前後端分離開發流程的經驗。',
      },
      {
        key: 'Git / GitHub',
        desc: '熟悉 Git Flow、分支管理與 Pull Request 協作流程。',
      },
    ],
  },
  {
    heading: '## Tools',
    icon: 'fa-tools',
    color: 'text-primary',
    dot: 'bg-primary',
    badges: [
      {
        label: 'Vite',
        style: 'bg-blue-500/10    text-blue-300    border-blue-500/25',
      },
      {
        label: 'Git',
        style: 'bg-orange-500/10  text-orange-300  border-orange-500/25',
      },
      {
        label: 'ESLint',
        style: 'bg-blue-400/10    text-blue-300    border-blue-400/25',
      },
      {
        label: 'Axios',
        style: 'bg-sky-500/10     text-sky-300     border-sky-500/25',
      },
      {
        label: 'Redux Toolkit',
        style: 'bg-blue-500/10    text-blue-300    border-blue-500/25',
      },
      {
        label: 'React Hook Form',
        style: 'bg-cyan-500/10    text-cyan-300    border-cyan-500/25',
      },
      {
        label: 'JSON Server',
        style: 'bg-slate-500/10   text-slate-300   border-slate-500/25',
      },
      {
        label: 'AI Agent',
        style: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
      },
    ],
    items: [
      {
        key: 'Vite',
        desc: '熟悉現代化前端建構工具，快速配置開發環境與優化打包流程。',
      },
      {
        key: 'Redux Toolkit',
        desc: '具備大型應用狀態管理經驗，有效管理複雜 UI 資料流。',
      },
      {
        key: 'React Hook Form',
        desc: '建構高效能表單驗證機制，提升表單操作體驗。',
      },
      { key: 'Lottie', desc: '整合動態向量動畫，提升頁面視覺表現力。' },
      {
        key: 'JSON Server',
        desc: '建立 Mock API 環境，實現前後端分離開發流程。',
      },
      {
        key: 'AI Agent 協作',
        desc: '積極探索 AI Agent 協作研發流程，加速開發與迭代效率。',
      },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const colsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(colsRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 68%',
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 bg-dark overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-2xl md:text-3xl font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Skills</span>
            <span className="text-primary">/&gt;</span>
          </h2>
        </div>

        <div ref={colsRef} className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.heading}
              className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col hover:border-primary/25 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`font-mono text-base font-bold ${col.color}`}>{col.heading}</span>
              </div>

              {/* Individual-colored badges */}
              <div className="flex flex-wrap gap-1.5 mt-2 mb-5 min-h-[96px] content-start">
                {col.badges.map((b) => (
                  <span
                    key={b.label}
                    className={`font-mono text-[11px] px-2 py-0.5 rounded border ${b.style}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 ml-1">
                {col.items.map((item) => (
                  <li key={item.key} className="flex items-start gap-2 text-sm">
                    <span className={`font-mono text-xs mt-0.5 flex-shrink-0 ${col.color}`}>▸</span>
                    <div>
                      <span className="text-slate-200 font-medium">{item.key}</span>
                      <span className="text-slate-500">　{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
