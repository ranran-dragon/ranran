export default function Footer() {
  return (
    <footer className="bg-[#2a1508] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-serif)] italic text-[#e07b5a] text-base">
          경험에서 꺼낸 것을, 당신이 쓸 수 있는 언어로.
        </p>
        <p className="font-[family-name:var(--font-serif)] text-xs text-[#6a4030] font-light">
          © 2026 유아란
        </p>
      </div>
    </footer>
  );
}
