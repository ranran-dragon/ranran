const experiences = [
  {
    period: "현재",
    role: "UX Writer — 마케팅 문구 전문가",
    company: "토스 (Viva Republica)",
    description:
      "토스 앱의 마케팅 문구를 전담합니다. 푸시 알림, 인앱 배너, 혜택 문구 등 사용자의 행동을 유도하는 언어를 설계합니다. 수백 건의 A/B 테스트를 통해 데이터로 검증된 카피 원칙을 만들고, 이를 테크 블로그와 웨비나를 통해 외부에 공유합니다.",
  },
  {
    period: "운영 중",
    role: "운영자 · 에디터",
    company: "북플래터 뉴스레터",
    description:
      "매주 월요일 아침 책 3권을 큐레이션해 발행하는 개인 뉴스레터입니다. '읽을 책이 너무 많아서 오히려 시작하지 못하는 사람'을 위해 시작했습니다. 직접 읽고, 고르고, 씁니다.",
  },
  {
    period: "운영 중",
    role: "콘텐츠 크리에이터",
    company: "@workworklife_ 인스타그램",
    description:
      "일하는 사람의 시선에서 글쓰기, 커리어, 일상의 생각을 짧은 영상과 글로 공유합니다.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-5xl mx-auto">
      <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-4 font-light">
        Experience
      </p>
      <h2 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-light leading-tight mb-14 text-[#2a1508]">
        경력 & 활동
      </h2>

      <div>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-12 py-8 border-t border-[#e8d4c0] first:border-t-0"
          >
            <div className="pt-0.5">
              <p className="font-[family-name:var(--font-sans)] text-sm text-[#a07060] font-light">
                {exp.period}
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-sans)] text-lg font-medium mb-0.5 text-[#2a1508]">
                {exp.role}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-sm text-[#e07b5a] mb-3 font-light">
                {exp.company}
              </p>
              <p className="font-[family-name:var(--font-sans)] text-sm text-[#6a4030] leading-relaxed font-light">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-20 bg-[#f7e0ce] rounded-sm px-10 py-10">
        <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl italic text-[#3d1e0e] leading-relaxed">
          "AI가 쓴 글과 내가 쓴 글의 차이는,
          <br />
          얼마나 많이 틀려봤느냐에서 납니다."
        </p>
        <footer className="font-[family-name:var(--font-sans)] text-sm text-[#a07060] mt-5 font-light">
          — 유아란
        </footer>
      </div>
    </section>
  );
}
