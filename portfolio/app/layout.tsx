import type { Metadata } from "next";
import { DM_Serif_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const notoSans = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "유아란 — UX Writer & 마케팅 문구 전문가",
  description:
    "경험에서 꺼낸 것을, 당신이 쓸 수 있는 언어로. 토스 UX Writer, 북플래터 운영자.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${dmSerif.variable} ${notoSans.variable}`}>
      <body className="bg-[#fbf8f3] text-[#2a1508] antialiased">{children}</body>
    </html>
  );
}
