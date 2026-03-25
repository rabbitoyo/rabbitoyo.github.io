import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: '2020/06 - 2025/03',
    badge: 'Latest',
    title: '資深網頁設計',
    company: '艾玩天地互動娛樂科技股份有限公司',
    description:
      '負責遊戲官網與活動頁開發，整合 UI/UX 與互動動線，應用 AI 圖像生成強化主視覺，推動模組化高效開發流程，並擔任團隊 Mentor 提升整體協作效率。',
    achievements: [
      '應用 Stable Diffusion 與 Midjourney 進行圖像生成，強化遊戲主視覺表現',
      '開發遊戲官網與活動頁，整合 UI/UX 與互動動線以增強操作體驗',
      '實踐 Vibe Coding 理念，推動模組化與高效開發流程，提升團隊協作與前端彈性',
      '製作線上廣告投放（Banner、EDM）及社群活動素材，配合行銷策略提升推廣效益',
      '擔任團隊 Mentor，傳承實務經驗並提升整體產能與協作效率',
      '跨部門協作，確保專案效率與品質一致',
    ],
    projects: [
      {
        name: '乖離性百萬亞瑟王：環 - 事前預約活動頁',
        desc: '以純 CSS Animation 製作卡牌動畫取代影片，結合 JSON 與隨機邏輯實作角色對話，提升互動性與效能，支援多裝置瀏覽體驗，活動最終達成率高達 151%。',
      },
      {
        name: '女神異聞錄：夜幕魅影 - 官網重構專案',
        desc: '將原 AWD 架構重構為 RWD 響應式網頁，同時調整 SEO 結構（heading、meta、ALT），全面提升跨裝置體驗與搜尋能見度。',
      },
      {
        name: '一拳超人：世界 - 情境式互動網頁',
        desc: '透過 Vibe Coding 跨越靜態頁框架限制，打造遊戲感強烈的互動式情境體驗，成功引發玩家共鳴並帶動巴哈姆特論壇討論熱潮。',
      },
      {
        name: '幻塔 - 改版活動頁專案',
        desc: '大量結合影音與品牌視覺元素，針對每次改版製作專屬視覺風格主題頁強化品牌識別度，助力月營收破億、雙平台榜首佳績。',
      },
      {
        name: 'Vue 架構應用與內容模組化實作',
        desc: '導入 Vue 框架概念，運用 JSON 動態文本管理與模組化結構設計，大幅提升頁面維護效率與擴充彈性。',
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Vue3', '使用者體驗'],
  },
  {
    period: '2017/05 - 2020/06',
    title: '網頁美術設計',
    company: '普雷威股份有限公司',
    description:
      '負責手機遊戲雙平台應用商店視覺設計及官網活動頁開發，整合 UI/UX 與互動動線，配合行銷策略製作廣告素材，並主動帶領新進同仁傳承技能。',
    achievements: [
      '負責手機遊戲雙平台應用商店形象視覺設計，強化品牌辨識度',
      '開發遊戲官網與活動頁，整合 UI/UX 與互動動線以增強操作體驗',
      '製作線上廣告投放（Banner、EDM）與遊戲商城 UI，配合行銷策略及產品營運',
      '主動帶領新進同仁，協助團隊技能傳承與產能提升',
      '跨部門協作，確保專案效率與品質一致',
    ],
    projects: [
      { name: '龍族 M 品牌視覺設計', desc: '負責遊戲主 ICON 與雙平台商店視覺，強化品牌形象與市場曝光率。' },
      {
        name: '上古世紀 ArcheAge CB 封測與改版活動頁',
        desc: '整合 UI/UX 設計與互動網頁開發，以強化活動氛圍並達成推廣效果。',
      },
      {
        name: '洛汗 M 品牌視覺設計與網頁開發',
        desc: '負責遊戲主 ICON 與商店視覺設計到事前預約與官網開發，全面提升品牌一致性與專案品質，助力首月營收破億、雙平台榜首佳績。',
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', '視覺識別設計', '使用者介面設計'],
  },
  {
    period: '2015/07 - 2017/03',
    title: '行銷美術（網頁平面美術設計）',
    company: '宇峻奧汀科技股份有限公司',
    sections: [
      {
        heading: '行銷企劃與數據分析',
        items: [
          '規劃手機遊戲市場定位，執行競品分析與行銷策略制定',
          '主導宣傳活動企劃與數據追蹤，優化成效提升轉換',
          '經營 Facebook 專頁內容規劃，提升品牌互動與曝光',
          '跨部門協作，確保行銷與產品策略一致，提升執行效率',
        ],
        projects: [
          {
            name: '拉斯維加斯娛樂城 Facebook 廣告優化',
            desc: '優化廣告素材，將 eCPA 降至 3 美金，以最低成本價格達成安裝數目標。',
          },
          { name: '超級群英傳行銷策略', desc: '負責策略執行，月營收成功突破千萬。' },
        ],
      },
      {
        heading: '視覺設計與品牌整合',
        items: [
          '負責手機遊戲雙平台應用商店形象視覺設計，強化品牌辨識度',
          '製作線上廣告投放（Banner、EDM）與活動平面宣傳品（海報、刊物、印刷品），配合行銷策略提升推廣效益',
          '設計與維護官網與活動頁，專注視覺宣傳與行銷傳達',
          '協助遊戲 UI 設計與流程優化，提升操作直覺性',
        ],
        projects: [
          {
            name: '宇峻奧汀 2017 台北國際電玩展',
            desc: '製作時光隧道遊戲樂園展覽宣傳印刷物，配合媒體同步釋出。',
          },
          { name: '拉斯維加斯娛樂城 3D 主視覺提案', desc: '提案並延伸 3D 主視覺至多平台品牌應用。' },
        ],
      },
    ],
    tags: [
      '整合行銷',
      '廣告創意發想與提案',
      '廣告預算控管',
      '視覺識別設計',
      'Adobe Photoshop',
      'Illustrator',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      listRef.current.querySelectorAll('.exp-item').forEach((item) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 82%', once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 bg-dark-card/50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-2xl md:text-3xl font-bold">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
        </div>

        {/* Full-width stacked cards */}
        <div ref={listRef} className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <span className="font-mono text-sm text-primary">{exp.period}</span>
                {exp.badge && (
                  <span className="font-mono text-xs px-2 py-1 bg-accent/10 text-accent border border-accent/30 rounded">
                    {exp.badge}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-white text-lg mb-1">{exp.title}</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <i className="fas fa-building text-xs" />
                <span>{exp.company}</span>
              </div>

              {exp.description && (
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
              )}

              {exp.achievements && (
                <div className="space-y-1.5 mb-4">
                  {exp.achievements.map((a, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <i className="fas fa-check-circle text-accent text-xs mt-0.5 flex-shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              )}
              {exp.projects && (
                <div className="space-y-2 mb-4">
                  {exp.projects.map((p, j) => (
                    <div key={j} className="text-sm text-slate-400 pl-3 border-l border-primary/30">
                      <span className="text-slate-200 font-semibold">{p.name}</span>
                      {' — '}
                      {p.desc}
                    </div>
                  ))}
                </div>
              )}

              {exp.sections && (
                <div className="space-y-5 mb-4">
                  {exp.sections.map((sec, si) => (
                    <div key={si}>
                      <div className="font-mono text-xs text-primary mb-2"># {sec.heading}</div>
                      <div className="space-y-1.5 mb-3">
                        {sec.items.map((a, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-slate-300">
                            <i className="fas fa-check-circle text-accent text-xs mt-0.5 flex-shrink-0" />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                      {sec.projects && (
                        <div className="space-y-2">
                          {sec.projects.map((p, j) => (
                            <div key={j} className="text-sm text-slate-400 pl-3 border-l border-primary/30">
                              <span className="text-slate-200 font-semibold">{p.name}</span>
                              {' — '}
                              {p.desc}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 bg-dark border border-dark-border text-slate-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
