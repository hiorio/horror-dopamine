import type { Metadata } from "next";

const channels = [
  {
    name: "YouTube",
    description: "긴 호흡으로 만나는 이야기",
    href: "https://www.youtube.com/",
    mark: "YT",
    tone: "red",
  },
  {
    name: "Instagram",
    description: "일상의 장면과 짧은 기록",
    href: "https://www.instagram.com/",
    mark: "IG",
    tone: "pink",
  },
  {
    name: "TikTok",
    description: "가볍고 빠르게 보는 숏폼",
    href: "https://www.tiktok.com/",
    mark: "TT",
    tone: "dark",
  },
] as const;

export const metadata: Metadata = {
  title: "Link Flower — 모든 채널을 한곳에",
  description: "유튜브, 인스타그램, 틱톡의 새로운 콘텐츠를 한곳에서 만나보세요.",
};

export default function Home() {
  return (
    <main className="page-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="orb orb-left" aria-hidden="true" />
      <div className="orb orb-right" aria-hidden="true" />

      <section className="link-card" aria-labelledby="profile-title">
        <header className="profile">
          <div className="avatar" aria-hidden="true">
            <span className="petal petal-one" />
            <span className="petal petal-two" />
            <span className="petal petal-three" />
            <span className="petal petal-four" />
            <span className="flower-center" />
          </div>

          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            NEW CONTENT WEEKLY
          </div>
          <h1 id="profile-title">LINK FLOWER</h1>
          <p className="intro">
            좋아하는 이야기를 만들고 기록합니다.
            <br />
            아래 채널에서 더 자주 만나요.
          </p>
        </header>

        <nav className="channel-list" aria-label="소셜 미디어 채널">
          {channels.map((channel) => (
            <a
              className="channel-link"
              href={channel.href}
              key={channel.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${channel.name} 채널 새 창에서 열기`}
            >
              <span className={`channel-mark channel-mark-${channel.tone}`} aria-hidden="true">
                {channel.mark}
              </span>
              <span className="channel-copy">
                <strong>{channel.name}</strong>
                <small>{channel.description}</small>
              </span>
              <span className="channel-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>

        <footer className="card-footer">
          <span>© 2026 LINK FLOWER</span>
          <span className="footer-flower" aria-hidden="true">✦</span>
          <span>SEOUL, KR</span>
        </footer>
      </section>

      <p className="page-note">ALL MY LINKS, IN FULL BLOOM.</p>
    </main>
  );
}
