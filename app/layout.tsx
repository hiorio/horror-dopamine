import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "공포도파민 — Horror Dopamine",
    template: "%s | 공포도파민",
  },
  description: "유튜브, 인스타그램, 틱톡으로 이어지는 공포도파민 공식 채널 노드.",
  openGraph: {
    title: "공포도파민 — Horror Dopamine",
    description: "평범한 일상에 침투하는 이상한 기록들. 모든 공포도파민 채널을 한곳에서 만나보세요.",
    type: "website",
    locale: "ko_KR",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
