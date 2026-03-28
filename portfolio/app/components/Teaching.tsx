const offerings = [
  {
    title: "마케팅 문구 1:1 세션",
    description:
      "내가 쓴 카피가 왜 안 클릭되는지 모르겠을 때. 실제 문구를 가져오시면 함께 분석하고, 어떻게 바꾸면 좋을지 원리와 함께 설명드립니다.",
    target: "스타트업 창업자, 마케터, 1인 브랜드",
  },
  {
    title: "UX 라이팅 리뷰",
    description:
      "앱·서비스의 온보딩, 오류 메시지, 버튼 텍스트 등 제품 문구를 검토합니다. 사용자가 자연스럽게 행동할 수 있는 언어로 다듬는 방법을 알려드립니다.",
    target: "프로덕트 디자이너, PM, 스타트업 팀",
  },
  {
    title: "글쓰기 근육 만들기",
    description:
      "꾸준히 쓰고 싶은데 방법을 모르겠을 때. 글쓰기를 습관으로 만드는 구조와 루틴, 내 목소리를 찾는 방법을 함께 탐구합니다.",
    target: "뉴스레터 시작하고 싶은 분, 퍼스널 브랜딩 준비 중인 분",
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">

        <div className="md:sticky md:top-28">
          <p className="font-[family-name:var(--font-serif)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-5 font-light">
            함께 배우기
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light leading-tight text-[#2a1508] mb-2">
            제가 아는 것을
          </h2>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl italic leading-tight text-[#e07b5a] mb-6">
            당신의 것으로.
          </h2>
          <p className="font-[family-name:var(--font-serif)] text-sm text-[#7a5040] leading-relaxed font-light">
            AI 시대에 진짜 차이를 만드는 건
            누군가의 살아있는 경험입니다.
            데이터로 검증하고 실패하며 쌓은 것들을,
            1:1로 직접 전달합니다.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 font-[family-name:var(--font-serif)] text-sm px-7 py-3.5 bg-[#e07b5a] text-[#fbf8f3] hover:bg-[#2a1508] transition-colors duration-300 tracking-wide font-light rounded-sm"
          >
            세션 문의하기
          </a>
        </div>

        <div className="space-y-4">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="border border-[#e8d4c0] p-7 rounded-sm hover:border-[#e07b5a] hover:bg-[#fdf5ef] transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="font-[family-name:var(--font-serif)] text-[#e07b5a] text-xl italic mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-base font-medium text-[#2a1508]">
                  {item.title}
                </h3>
              </div>
              <p className="font-[family-name:var(--font-serif)] text-sm text-[#6a4030] leading-relaxed mb-3 font-light pl-8">
                {item.description}
              </p>
              <p className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] font-light pl-8">
                → {item.target}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
