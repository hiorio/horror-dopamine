import type { Metadata } from "next";

const channels = [
  {
    index: "01",
    name: "YouTube",
    handle: "@horrordopamine",
    description: "긴 호흡의 괴담 아카이브",
    href: "https://www.youtube.com/@horrordopamine",
    mark: "YT",
  },
  {
    index: "02",
    name: "Instagram",
    handle: "@horror_dopamine",
    description: "공포 이미지와 채널 기록",
    href: "https://www.instagram.com/horror_dopamine",
    mark: "IG",
  },
  {
    index: "03",
    name: "TikTok",
    handle: "@horror_dopamine",
    description: "짧고 강한 공포 숏폼",
    href: "https://www.tiktok.com/@horror_dopamine",
    mark: "TT",
  },
] as const;

export const metadata: Metadata = {
  title: "공포도파민 — Horror Dopamine",
  description: "유튜브, 인스타그램, 틱톡으로 이어지는 공포도파민 공식 채널 노드.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />

      <header className="network-bar">
        <div className="network-name">
          <span className="record-dot" aria-hidden="true" />
          CHANNEL NETWORK
        </div>
        <div className="node-status">
          <span>NODE_01</span>
          <span className="status-separator">/</span>
          <span>ACTIVE</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="node-kicker">
            <span>CHANNEL NODE 01</span>
            <span>HORROR / KR</span>
          </div>
          <h1 id="page-title">
            <span>공포</span>
            <span className="title-red">도파민</span>
          </h1>
          <p className="hero-description">
            평범한 일상에 침투하는 이상한 기록들.
            <br />
            짧고 긴 공포를 하나의 신호로 연결합니다.
          </p>
          <div className="genre-list" aria-label="콘텐츠 장르">
            <span>괴담</span>
            <span>미스터리</span>
            <span>숏폼</span>
          </div>
        </div>

        <div className="signal-panel" aria-hidden="true">
          <div className="signal-topline">
            <span>REC</span>
            <span>00:00:13:07</span>
          </div>
          <div className="signal-viewport">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
            <div className="corridor">
              <div className="corridor-door" />
            </div>
            <div className="signal-wave wave-one" />
            <div className="signal-wave wave-two" />
          </div>
          <p>SIGNAL DETECTED / SEOUL 37.5665° N</p>
        </div>
      </section>

      <section className="channels" aria-labelledby="channels-title">
        <div className="section-heading">
          <div>
            <span className="section-index">01</span>
            <h2 id="channels-title">채널 연결망</h2>
          </div>
          <p>SELECT A FREQUENCY</p>
        </div>

        <nav className="channel-grid" aria-label="공포도파민 소셜 미디어 채널">
          {channels.map((channel) => (
            <a
              className="channel-card"
              href={channel.href}
              key={channel.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${channel.name} 공포도파민 채널 새 창에서 열기`}
            >
              <div className="channel-card-top">
                <span className="channel-number">CH_{channel.index}</span>
                <span className="external-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="channel-mark" aria-hidden="true">{channel.mark}</div>
              <div className="channel-info">
                <strong>{channel.name}</strong>
                <span>{channel.handle}</span>
                <small>{channel.description}</small>
              </div>
            </a>
          ))}
        </nav>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <span className="section-index">02</span>
            <h2 id="featured-title">인기 기록</h2>
          </div>
          <p>YOUTUBE ARCHIVE</p>
        </div>

        <a
          className="featured-card"
          href="https://www.youtube.com/@horrordopamine/videos"
          target="_blank"
          rel="noreferrer"
          aria-label="공포도파민 유튜브 영상 보관함 새 창에서 열기"
        >
          <div className="record-visual" aria-hidden="true">
            <span className="visual-label">MOST VIEWED</span>
            <div className="play-symbol">▶</div>
            <span className="visual-time">ARCHIVE_001</span>
          </div>
          <div className="featured-copy">
            <span className="featured-kicker">POPULAR RECORDS</span>
            <h3>가장 많이 본 공포 기록부터</h3>
            <p>
              공포도파민의 영상 보관함에서 새로운 기록과 시청자들이 오래 머문 이야기를 확인하세요.
            </p>
            <span className="featured-cta">YOUTUBE 영상 보기 <b aria-hidden="true">↗</b></span>
          </div>
        </a>
      </section>

      <footer className="site-footer">
        <div>
          <span className="footer-node">NODE_01</span>
          <p>공포도파민 채널군을 연결하는 독립 콘텐츠 노드</p>
        </div>
        <span>© 2026 HORROR DOPAMINE</span>
      </footer>
    </main>
  );
}
