import Image from "next/image";

export default function Book() {
  return (
    <section id="book" className="py-28 px-6 max-w-5xl mx-auto">
      <p className="font-[family-name:var(--font-serif)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-14 font-light">
        Publication
      </p>

      <div className="grid md:grid-cols-[280px_1fr] gap-14 items-start">

        {/* Book cover */}
        <div className="shrink-0">
          <a
            href="https://www.yes24.com/product/goods/118335421"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative w-full aspect-[128/188] shadow-[6px_6px_0_#e07b5a] group-hover:shadow-[8px_8px_0_#e07b5a] group-hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
              <Image
                src="/book-cover.jpeg"
                alt="누군가의 성취가 나를 우울하게 할 때 — 유아란 지음"
                fill
                className="object-cover"
                sizes="280px"
                priority
              />
            </div>
          </a>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-[family-name:var(--font-serif)] text-sm italic text-[#e07b5a]">9.7</span>
            <span className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] font-light">/ 10 · Yes24 독자 리뷰</span>
          </div>
        </div>

        {/* Book info */}
        <div>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light leading-snug text-[#2a1508] mb-2">
            누군가의 성취가
            <br />나를 우울하게 할 때
          </h2>
          <p className="font-[family-name:var(--font-serif)] text-sm text-[#e07b5a] font-light mb-8">
            서스테인 · 2023년 4월 · 200쪽
          </p>

          <div className="space-y-4 font-[family-name:var(--font-serif)] text-[#6a4030] leading-relaxed font-light text-sm mb-10">
            <p>
              대학내일 매거진에 연재한 칼럼이 입소문을 타며 탄생한 첫 번째 에세이입니다.
              남의 성취를 보며 이유 없이 초라해지는 감정, 그 비교 문화의 실체를 들여다봤습니다.
            </p>
            <p>
              "특별함은 제로섬 게임이 아니다." 타인의 빛이 내 빛을 빼앗지 않는다는 것,
              그리고 비교가 아닌 나다움으로 살아가는 방법을 담았습니다.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-[#e8d4c0] pt-8 mb-10">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[#e07b5a]">1부</p>
              <p className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] mt-1 font-light leading-snug">예민함과의 화해</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[#e07b5a]">2부</p>
              <p className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] mt-1 font-light leading-snug">내향인의 관계법</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[#e07b5a]">3부</p>
              <p className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] mt-1 font-light leading-snug">나답게 행복하기</p>
            </div>
          </div>

          <a
            href="https://www.yes24.com/product/goods/118335421"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-[family-name:var(--font-serif)] text-sm px-7 py-3.5 border border-[#2a1508] text-[#2a1508] hover:bg-[#2a1508] hover:text-[#fbf8f3] transition-colors duration-300 font-light rounded-sm"
          >
            Yes24에서 구매하기 ↗
          </a>
        </div>

      </div>
    </section>
  );
}
