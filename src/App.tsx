import { useEffect, useState } from "react";
import { productApps } from "./apps";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";

type RouteId = "horror-dopamine" | "apps";

function getRoute(): RouteId {
  const route = window.location.hash.replace(/^#\/?/, "");
  return route === "apps" ? "apps" : "horror-dopamine";
}

type Copy = (typeof ui)[Locale];

function NetworkHeader({ activeRoute, copy, locale, setLocale }: {
  activeRoute: RouteId;
  copy: Copy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  return (
    <header className="network-bar">
      <a className="network-name" href={`#/${defaultNodeId}`}>
        <span className="record-dot" aria-hidden="true" />
        NODE NETWORK
      </a>
      <div className="network-controls">
        <nav className="node-switcher" aria-label={copy.nodeNetworkLabel}>
          <a className={activeRoute === "horror-dopamine" ? "is-active" : ""} href="#/horror-dopamine">
            01 {copy.horrorNode}
          </a>
          <a className={activeRoute === "apps" ? "is-active" : ""} href="#/apps">
            02 {copy.appsNode}
          </a>
        </nav>
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
          <span>NODE_{activeRoute === "apps" ? "02" : "01"}</span>
          <span className="status-separator">/</span>
          <span>{copy.active.toUpperCase()}</span>
        </div>
      </div>
    </header>
  );
}

function HorrorPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const node = nodes[defaultNodeId];
  const content = node.content[locale];

  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />
      <NetworkHeader activeRoute="horror-dopamine" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="node-kicker"><span>CHANNEL NODE {node.order}</span><span>{node.category}</span></div>
          <h1 id="page-title" className="distressed-title">
            <span className="title-bone">{content.title}</span><span className="title-red">{content.titleAccent}</span>
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
        <a className="featured-card" href={node.archiveUrl} target="_blank" rel="noreferrer" aria-label={copy.featuredLinkLabel}>
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

function AppsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const platformCount = new Set(productApps.flatMap((app) => app.platforms)).size;
  const linkLabel = (kind: "web" | "appStore" | "support") => ({
    web: copy.appLinkWeb,
    appStore: copy.appLinkAppStore,
    support: copy.appLinkSupport,
  })[kind];

  return (
    <main className="site-shell apps-shell">
      <div className="app-grid-bg" aria-hidden="true" />
      <NetworkHeader activeRoute="apps" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="apps-hero" aria-labelledby="apps-page-title">
        <div className="apps-hero-copy">
          <div className="app-node-kicker"><span>{copy.appsKicker}</span><span>INDEPENDENT / KR</span></div>
          <h1 id="apps-page-title" className="app-title">
            <span>{copy.appsTitle}</span><span>{copy.appsTitleAccent}</span>
          </h1>
          <p className="hero-description">
            {copy.appsHeroDescription.map((line) => <span key={line}>{line}<br /></span>)}
          </p>
        </div>

        <div className="universe-map" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <span className="universe-core">APP<br />SYS</span>
          <span className="universe-node node-map">01</span><span className="universe-node node-time">02</span>
          <span className="universe-line line-map" /><span className="universe-line line-time" />
          <span className="map-caption">DOHWAJI</span><span className="time-caption">TIMEROOTS</span>
        </div>

        <dl className="apps-metrics">
          <div><dt>{copy.appsCount}</dt><dd>{String(productApps.length).padStart(2, "0")}</dd></div>
          <div><dt>{copy.appsPlatforms}</dt><dd>{String(platformCount).padStart(2, "0")}</dd></div>
          <div><dt>NETWORK</dt><dd>LIVE</dd></div>
        </dl>
      </section>

      <section className="app-products" aria-labelledby="app-products-title">
        <div className="section-heading apps-heading">
          <div><span className="section-index">01</span><h2 id="app-products-title">{copy.appsSectionTitle}</h2></div>
          <p>{copy.appsSectionHint.toUpperCase()}</p>
        </div>

        <div className="product-list">
          {productApps.map((app) => {
            const content = app.content[locale];
            return (
              <article className={`product-card product-${app.accent}`} key={app.id}>
                <div className="product-visual" aria-hidden="true">
                  <span className="product-index">APP_{app.order}</span>
                  <div className="product-glyph">
                    {app.id === "dohwaji" ? <><i /><i /><i /><b /></> : <><em>12</em><i /><i /><b /></>}
                  </div>
                  <span className="product-code">{app.code}</span>
                </div>
                <div className="product-copy">
                  <div className="product-meta">
                    <span>{app.platforms.join(" + ")}</span><span className="live-badge"><i />{copy.appStatus}</span>
                  </div>
                  <h3>{content.displayName}</h3>
                  <strong className="product-tagline">{content.tagline}</strong>
                  <p>{content.description}</p>
                  <ul>{content.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div className="product-links">
                    {app.links.map((link) => (
                      <a href={link.href} key={link.kind} target="_blank" rel="noreferrer"
                        aria-label={`${copy.appLinkLabel(content.displayName)} — ${linkLabel(link.kind)}`}>
                        {linkLabel(link.kind)} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer apps-footer">
        <div><span className="footer-node">NODE_02</span><p>{copy.appsFooter}</p></div>
        <span>© 2026 APP UNIVERSE</span>
      </footer>
    </main>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const [route, setRoute] = useState<RouteId>(getRoute);
  const copy = ui[locale];

  useEffect(() => {
    const handleRoute = () => setRoute(getRoute());
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);

  useEffect(() => {
    const isApps = route === "apps";
    document.documentElement.lang = locale;
    document.title = isApps ? copy.appsPageTitle : copy.pageTitle;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
      "content",
      isApps ? copy.appsPageDescription : copy.pageDescription,
    );
    try {
      window.localStorage.setItem("horror-dopamine-locale", locale);
    } catch {
      // The selected language still works when storage is unavailable.
    }
  }, [copy, locale, route]);

  return route === "apps"
    ? <AppsPage copy={copy} locale={locale} setLocale={setLocale} />
    : <HorrorPage copy={copy} locale={locale} setLocale={setLocale} />;
}
