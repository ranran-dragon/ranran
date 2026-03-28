export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto relative overflow-hidden">

      {/* Soft peach glow */}
      <div
        aria-hidden
        className="absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f7e0ce88, #f2dfb800)",
          transform: "translate(30%, -20%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -left-24 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f2dfb844, transparent)",
        }}
      />

      <div className="pt-24 pb-16 relative">
        <p className="font-[family-name:var(--font-serif)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-8 font-light">
          UX Writer · 마케팅 문구 전문가 · 지식 나눔
        </p>

        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-[80px] font-light leading-[1.1] text-[#2a1508] mb-3">
          경험에서 꺼낸 것을,
        </h1>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-[80px] italic leading-[1.1] text-[#e07b5a] mb-3">
          당신이 쓸 수 있는
        </h1>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-[80px] font-light leading-[1.1] text-[#2a1508] mb-10">
          언어로.
        </h1>

        <p className="font-[family-name:var(--font-serif)] text-lg text-[#7a5040] max-w-md leading-relaxed mb-2 font-light">
          토스에서 마케팅 언어를 설계하는 UX Writer입니다.
        </p>
        <p className="font-[family-name:var(--font-serif)] text-lg text-[#7a5040] max-w-md leading-relaxed mb-12 font-light">
          몸으로 익힌 것들을 누구나 쓸 수 있는 원리로 만들고,
          사람들에게 직접 전달하는 일을 좋아합니다.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="font-[family-name:var(--font-serif)] text-sm px-7 py-3.5 bg-[#2a1508] text-[#fbf8f3] hover:bg-[#e07b5a] transition-colors duration-300 tracking-wide font-light rounded-sm"
          >
            작업물 보기
          </a>
          <a
            href="#teaching"
            className="font-[family-name:var(--font-serif)] text-sm px-7 py-3.5 border border-[#d4906a] text-[#7a5040] hover:border-[#2a1508] hover:text-[#2a1508] transition-colors duration-300 tracking-wide font-light rounded-sm"
          >
            함께 배우기
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-auto mb-12">
        <div className="w-6 h-px bg-[#e07b5a]" />
        <span className="font-[family-name:var(--font-serif)] text-xs text-[#d4906a] tracking-widest uppercase font-light">
          Scroll
        </span>
      </div>
    </section>
  );
}
