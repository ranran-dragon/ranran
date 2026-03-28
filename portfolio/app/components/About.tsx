export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-5 font-light">
            About
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light leading-tight text-[#2a1508]">
            AI가 흉내 낼 수 없는
            <br />
            <span className="font-[family-name:var(--font-serif)] italic text-[#e07b5a]">
              경험의 언어.
            </span>
          </h2>
        </div>

        <div className="space-y-5 font-[family-name:var(--font-serif)] text-[#6a4030] leading-relaxed font-light">
          <p>
            저는 '감각'이라고 부르던 것들에 이름을 붙이는 일을 합니다.
            수백 번의 A/B 테스트를 통해 왜 이 문구가 저 문구보다 클릭을 만드는지,
            그 패턴을 찾아 원리로 정리합니다.
          </p>
          <p>
            AI는 방대한 글을 학습하지만, 실제로 틀리고 수정하며 쌓은
            <strong className="text-[#2a1508] font-normal"> 암묵지(暗默知)</strong>는 다릅니다.
            그걸 <strong className="text-[#2a1508] font-normal">명시지(明示知)</strong>로 꺼내
            사람들이 직접 쓸 수 있도록 만드는 것이 제 일의 본질입니다.
          </p>
          <p>
            글쓰기 실력은 전해줄 수 있다고 믿습니다.
            그 믿음으로 북플래터를 만들고, 강연을 하고, 1:1로 사람들을 만납니다.
          </p>

          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#e8d4c0]">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl italic text-[#e07b5a]">10x</p>
              <p className="text-xs text-[#a07060] mt-1 leading-snug font-light">문구 하나로 만든 CTR 변화</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl italic text-[#e07b5a]">매주</p>
              <p className="text-xs text-[#a07060] mt-1 leading-snug font-light">뉴스레터 발행 중</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-serif)] text-3xl italic text-[#e07b5a]">1:1</p>
              <p className="text-xs text-[#a07060] mt-1 leading-snug font-light">글쓰기 세션 운영</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
