const skillGroups = [
  {
    title: "마케팅 문구 & 카피",
    skills: [
      "푸시 알림 카피라이팅",
      "CTA & 버튼 텍스트",
      "랜딩 페이지 문구",
      "이메일 캠페인",
      "A/B 테스트 설계",
      "CTR 데이터 분석",
    ],
  },
  {
    title: "UX Writing",
    skills: [
      "마이크로카피",
      "온보딩 플로우",
      "오류 & 빈 상태 메시지",
      "접근성 텍스트",
      "콘텐츠 스펙 작성",
      "디자이너·PM 협업",
    ],
  },
  {
    title: "지식 전달 & 교육",
    skills: [
      "1:1 글쓰기 세션",
      "웨비나 강연",
      "테크 블로그 기고",
      "뉴스레터 기획·운영",
      "암묵지 → 명시지 변환",
      "북 큐레이션",
    ],
  },
  {
    title: "툴 & 방법론",
    skills: [
      "Figma",
      "Notion",
      "Stibee",
      "Google Analytics",
      "데이터 기반 의사결정",
      "사용자 리서치",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #fbf8f3 0%, #f7e0ce 100%)" }}
    >
      <div className="px-6 max-w-5xl mx-auto">
        <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-4 font-light">
          Skills
        </p>
        <h2 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-light leading-tight mb-14 text-[#2a1508]">
          무엇을 할 수 있나요
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-[family-name:var(--font-sans)] text-sm font-medium text-[#2a1508] mb-4 pb-3 border-b border-[#e8d4c0]">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-[family-name:var(--font-sans)] text-sm text-[#6a4030] flex items-center gap-2.5 font-light"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#e07b5a] shrink-0" />
                    {skill}
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
