const works = [
  {
    category: "UX Writing · 마케팅 문구",
    title: "클릭률을 올리는 마케팅 문구 6원칙",
    client: "토스 테크 블로그",
    description:
      "수백 건의 A/B 테스트에서 발견한 패턴을 6가지 원칙으로 정리했습니다. 속임수 없이 클릭을 만드는 방법, 데이터로 증명한 마케팅 언어의 원리.",
    result: {
      label: "문구 하나로 달성한 CTR 변화",
      value: "최대 10배",
    },
    tags: ["A/B 테스트", "마케팅 카피", "데이터 기반"],
    year: "2026",
    link: "https://toss.tech/article/Marketing_Writing",
    linkLabel: "아티클 읽기 →",
  },
  {
    category: "강연 · 지식 공유",
    title: "토스의 마케팅 문구 성공 공식",
    client: "Apps in Toss 웨비나",
    description:
      "미니앱 사업자와 마케터를 대상으로 한 웨비나에서 연사로 참여했습니다. 실제 카피 Before/After와 반직관적인 카피 전략을 실시간으로 공유했습니다.",
    result: {
      label: "웨비나 참여자",
      value: "000명", // 실제 수치로 교체해주세요
    },
    tags: ["웨비나", "연사", "실무 사례"],
    year: "2026",
    link: "https://toss.im/apps-in-toss/blog/marketing-webinar-2602",
    linkLabel: "웨비나 보기 →",
  },
  {
    category: "뉴스레터 · 큐레이션",
    title: "북플래터 — 매주 책 3권 큐레이션",
    client: "개인 프로젝트",
    description:
      "읽을 책이 너무 많아서 시작하지 못하는 사람들을 위해 만들었습니다. 매주 월요일 아침, 직접 읽고 고른 책 3권을 보내드립니다.",
    result: {
      label: "현재 구독자",
      value: "0,000명", // 실제 수치로 교체해주세요
    },
    tags: ["뉴스레터", "북 큐레이션", "개인 프로젝트"],
    year: "운영 중",
    link: "https://bookplatter.stibee.com/",
    linkLabel: "구독하기 →",
  },
  {
    category: "콘텐츠 크리에이션",
    title: "@workworklife_ — 일하는 사람의 이야기",
    client: "인스타그램",
    description:
      "일과 삶 사이에서 생각한 것들을 짧은 영상과 글로 공유합니다. 글 쓰는 사람으로서의 시선, 일하는 사람으로서의 고민을 담습니다.",
    result: {
      label: "팔로워",
      value: "0,000명", // 실제 수치로 교체해주세요
    },
    tags: ["콘텐츠 크리에이션", "숏폼", "브랜딩"],
    year: "운영 중",
    link: "https://www.instagram.com/workworklife_/reels/",
    linkLabel: "인스타그램 보기 →",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #f7e0ce 0%, #fbf8f3 100%)" }}
    >
      <div className="px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-4 font-light">
            Work
          </p>
          <h2 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-light leading-tight text-[#2a1508]">
            주요 작업물
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {works.map((work, i) => (
            <article
              key={i}
              className="bg-[#fbf8f3] border border-[#e8d4c0] p-8 flex flex-col rounded-sm hover:border-[#e07b5a] hover:shadow-[0_4px_32px_rgba(224,123,90,0.1)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.15em] text-[#e07b5a] uppercase font-light">
                  {work.category}
                </span>
                <span className="font-[family-name:var(--font-sans)] text-xs text-[#d4906a] shrink-0 ml-2 font-light">
                  {work.year}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-sans)] text-lg font-medium mb-1 leading-snug text-[#2a1508]">
                {work.title}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-xs text-[#a07060] mb-5 font-light">
                {work.client}
              </p>

              {/* Result highlight */}
              <div className="rounded-sm bg-[#f7e0ce] px-5 py-4 mb-5">
                <p className="font-[family-name:var(--font-sans)] text-xs text-[#7a5040] font-light mb-1">
                  {work.result.label}
                </p>
                <p className="font-[family-name:var(--font-display)] text-3xl italic text-[#e07b5a]">
                  {work.result.value}
                </p>
              </div>

              <p className="font-[family-name:var(--font-sans)] text-sm text-[#6a4030] leading-relaxed mb-6 flex-1 font-light">
                {work.description}
              </p>

              <div className="flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-sans)] text-xs px-3 py-1 bg-[#f2dfb8] text-[#7a5040] font-light rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-sans)] text-xs text-[#e07b5a] hover:text-[#2a1508] transition-colors shrink-0 ml-4 font-light"
                  >
                    {work.linkLabel}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
