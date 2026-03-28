const links = [
  {
    label: "토스 테크블로그",
    href: "https://toss.tech/article/Marketing_Writing",
    display: "toss.tech",
  },
  {
    label: "북플래터 뉴스레터",
    href: "https://bookplatter.stibee.com/",
    display: "bookplatter.stibee.com",
  },
  {
    label: "인스타그램",
    href: "https://www.instagram.com/workworklife_/reels/",
    display: "@workworklife_",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #f7e0ce 0%, #edcfb8 100%)" }}
    >
      <div className="px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] text-[#e07b5a] uppercase mb-5 font-light">
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-sans)] text-4xl md:text-5xl font-light leading-tight mb-2 text-[#2a1508]">
              함께 일해요
            </h2>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl italic leading-tight mb-6 text-[#e07b5a]">
              언제든지.
            </h2>
            <p className="font-[family-name:var(--font-sans)] text-[#6a4030] leading-relaxed mb-2 font-light">
              글이 행동을 만드는 방법에 관심 있다면,
              어떤 이야기든 환영합니다.
            </p>
            <p className="font-[family-name:var(--font-sans)] text-sm text-[#a07060] leading-relaxed mb-10 font-light">
              1:1 세션 문의, 강연 제안, 협업 아이디어 모두 좋습니다.
            </p>
            <a
              href="mailto:hello@yoaranyu.me"
              className="inline-block font-[family-name:var(--font-sans)] text-sm px-8 py-4 bg-[#2a1508] text-[#fbf8f3] hover:bg-[#e07b5a] transition-colors duration-300 tracking-wide font-light rounded-sm"
            >
              이메일 보내기 →
            </a>
          </div>

          <div>
            <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] text-[#a07060] uppercase mb-5 font-light">
              채널
            </p>
            <div>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 border-b border-[#d9c5b0] group"
                >
                  <span className="font-[family-name:var(--font-sans)] text-sm text-[#7a5040] font-light">
                    {link.label}
                  </span>
                  <span className="font-[family-name:var(--font-sans)] text-sm text-[#2a1508] group-hover:text-[#e07b5a] transition-colors">
                    {link.display} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
