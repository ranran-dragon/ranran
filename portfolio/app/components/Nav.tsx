"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "소개" },
  { href: "#work", label: "작업물" },
  { href: "#teaching", label: "함께 배우기" },
  { href: "#experience", label: "경력" },
  { href: "#contact", label: "연락하기" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fbf8f3]/96 backdrop-blur-sm border-b border-[#e8d4c0]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#" className="group flex items-baseline gap-1.5">
          <span className="font-[family-name:var(--font-serif)] text-xl italic text-[#e07b5a] group-hover:text-[#2a1508] transition-colors duration-300">
            아란
          </span>
          <span className="font-[family-name:var(--font-serif)] text-xs text-[#a07060] font-light tracking-widest group-hover:text-[#2a1508] transition-colors duration-300">
            YOO
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-[family-name:var(--font-serif)] text-sm font-light text-[#7a5040] hover:text-[#2a1508] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-5 h-px bg-[#2a1508] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#2a1508] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#2a1508] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#fbf8f3] border-b border-[#e8d4c0] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-[family-name:var(--font-serif)] text-sm font-light text-[#7a5040] hover:text-[#2a1508] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
