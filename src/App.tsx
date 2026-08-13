import { useEffect, useState } from "react";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";

function getRequestedNodeId() {
  return window.location.hash.replace(/^#\/?/, "") || defaultNodeId;
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const node = nodes[getRequestedNodeId()] ?? nodes[defaultNodeId];
  const content = node.content[locale];
  const copy = ui[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", copy.pageDescription);

    try {
      window.localStorage.setItem("horror-dopamine-locale", locale);
    } catch {
      // The selected language still works when storage is unavailable.
    }
  }, [copy.pageDescription, copy.pageTitle, locale]);

  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />

      <header className="network-bar">
        <a className="network-name" href={`#/${defaultNodeId}`}>
          <span className="record-dot" aria-hidden="true" />
          CHANNEL NETWORK
        </a>
        <div className="network-controls">
          <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
            {supportedLocales.map((item) => (
              <button
                className={item === locale ? "is-active" : ""}
                key={item}
                type="button"
                aria-pressed={item === locale}
                onClick={() => setLocale(item)}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>
          <div className="node-status">
            <span>NODE_{node.order}</span>
            <span className="status-separator">/</span>
            <span>{copy.active.toUpperCase()}</span>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="node-kicker">
            <span>CHANNEL NODE {node.order}</span>
            <span>{node.category}</span>
          </div>
          <h1 id="page-title" className="distressed-title">
            <span className="title-bone">{content.title}</span>
            <span className="title-red">{content.titleAccent}</span>
          </h1>
          <p className="hero-description">
            {content.description.map((line) => <span key={line}>{line}<br /></span>)}
          </p>
          <div className="genre-list" aria-label={copy.genreLabel}>
            {content.genres.map((genre) => <span key={genre}>{genre}</span>)}
          </div>
        </div>

        <div className="signal-panel" aria-hidden="true">
          <div className="signal-topline"><span>REC</span><span>00:00:13:07</span></div>
          <div className="signal-viewport">
            <span className="corner corner-tl" /><span className="corner corner-tr" />
            <span className="corner corner-bl" /><span className="corner corner-br" />
            <div className="corridor"><div className="corridor-door" /></div>
            <div className="signal-wave wave-one" /><div className="signal-wave wave-two" />
          </div>
          <p>SIGNAL DETECTED / SEOUL 37.5665° N</p>
        </div>
      </section>

      <section className="channels" aria-labelledby="channels-title">
        <div className="section-heading">
          <div><span className="section-index">01</span><h2 id="channels-title">{copy.channelsTitle}</h2></div>
          <p>{copy.channelsHint.toUpperCase()}</p>
        </div>
        <nav className="channel-grid" aria-label={copy.channelsLabel}>
          {node.channels.map((channel) => (
            <a className="channel-card" href={channel.href} key={channel.name} target="_blank" rel="noreferrer"
              aria-label={copy.channelLinkLabel(channel.name)}>
              <div className="channel-card-top"><span>CH_{channel.index}</span><span className="external-arrow">↗</span></div>
              <div className="channel-mark" aria-hidden="true">{channel.mark}</div>
              <div className="channel-info">
                <strong>{channel.name}</strong><span>{channel.handle}</span><small>{channel.description[locale]}</small>
              </div>
            </a>
          ))}
        </nav>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading">
          <div><span className="section-index">02</span><h2 id="featured-title">{copy.featuredTitle}</h2></div>
          <p>{copy.featuredHint.toUpperCase()}</p>
        </div>
        <a className="featured-card" href={node.archiveUrl} target="_blank" rel="noreferrer"
          aria-label={copy.featuredLinkLabel}>
          <div className="record-visual" aria-hidden="true">
            <span className="visual-label">MOST VIEWED</span><div className="play-symbol">▶</div>
            <span className="visual-time">ARCHIVE_001</span>
          </div>
          <div className="featured-copy">
            <span className="featured-kicker">{copy.featuredKicker.toUpperCase()}</span>
            <h3>{copy.featuredHeading[0]}<br />{copy.featuredHeading[1]}</h3>
            <p>{copy.featuredDescription}</p>
            <span className="featured-cta">{copy.featuredCta} <b aria-hidden="true">↗</b></span>
          </div>
        </a>
      </section>

      <footer className="site-footer">
        <div><span className="footer-node">NODE_{node.order}</span><p>{copy.footer}</p></div>
        <span>© 2026 HORROR DOPAMINE</span>
      </footer>
    </main>
  );
}
