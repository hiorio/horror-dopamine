import { useEffect, useState } from "react";
import { productApps } from "./apps";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";

type RouteId = "root" | "channels" | "apps" | "horror";
type Copy = (typeof ui)[Locale];

const basePath = import.meta.env.BASE_URL;

function routeHref(route: RouteId) {
  return route === "root" ? basePath : `${basePath}${route}/`;
}

function getRoute(): RouteId {
  const relativePath = window.location.pathname.slice(basePath.length).replace(/^\/+|\/+$/g, "");
  if (relativePath === "channels" || relativePath === "apps" || relativePath === "horror") return relativePath;
  return "root";
}

const routeNumbers: Record<RouteId, string> = { root: "00", channels: "01", apps: "02", horror: "03" };

function SiteHeader({ activeRoute, copy, locale, setLocale }: {
  activeRoute: RouteId;
  copy: Copy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  const routes: Array<{ id: RouteId; label: string }> = [
    { id: "root", label: copy.mainNode },
    { id: "channels", label: copy.channelsNode },
    { id: "apps", label: copy.appsNode },
    { id: "horror", label: copy.horrorNode },
  ];

  return (
    <header className="network-bar">
      <a className="network-name" href={routeHref("root")}>
        <span className="record-dot" aria-hidden="true" />
        LINK FLOWER
      </a>
      <div className="network-controls">
        <nav className="node-switcher" aria-label={copy.nodeNetworkLabel}>
          {routes.map((route) => (
            <a className={activeRoute === route.id ? "is-active" : ""} href={routeHref(route.id)} key={route.id}>
              {routeNumbers[route.id]} <span>{route.label}</span>
            </a>
          ))}
        </nav>
        <div className="language-switcher" role="group" aria-label={copy.languageLabel}>
          {supportedLocales.map((item) => (
            <button className={item === locale ? "is-active" : ""} key={item} type="button"
              aria-pressed={item === locale} onClick={() => setLocale(item)}>
              {localeLabels[item]}
            </button>
          ))}
        </div>
        <div className="node-status">
          <span>NODE_{routeNumbers[activeRoute]}</span><span className="status-separator">/</span>
          <span>{copy.active.toUpperCase()}</span>
        </div>
      </div>
    </header>
  );
}

function RootPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const rootNodes = [
    { id: "channels" as const, order: "01", code: "CONTENT / OUTLETS", title: copy.channelsCardTitle, description: copy.channelsCardDescription },
    { id: "apps" as const, order: "02", code: "PRODUCT / BUILD", title: copy.appsCardTitle, description: copy.appsCardDescription },
    { id: "horror" as const, order: "03", code: "HORROR / BRAND", title: copy.horrorCardTitle, description: copy.horrorCardDescription },
  ];

  return (
    <main className="site-shell root-shell">
      <div className="root-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="root" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="root-hero" aria-labelledby="root-page-title">
        <div className="root-copy">
          <div className="root-kicker"><span>{copy.rootKicker}</span><span>PERSONAL NETWORK / KR</span></div>
          <h1 id="root-page-title" className="root-title">
            <span>{copy.rootTitle}</span><span>{copy.rootTitleAccent}</span>
          </h1>
          <p className="hero-description">
            {copy.rootDescription.map((line) => <span key={line}>{line}<br /></span>)}
          </p>
        </div>

        <div className="root-map" aria-hidden="true">
          <span className="root-core">00</span>
          <span className="root-branch branch-channels">01</span>
          <span className="root-branch branch-apps">02</span>
          <span className="root-branch branch-horror">03</span>
          <i className="root-stem stem-channels" /><i className="root-stem stem-apps" /><i className="root-stem stem-horror" />
          <small className="label-channels">CHANNELS</small><small className="label-apps">APP DEV</small><small className="label-horror">HORROR</small>
        </div>
      </section>

      <section className="root-nodes" aria-labelledby="root-nodes-title">
        <div className="section-heading root-heading">
          <div><span className="section-index">00</span><h2 id="root-nodes-title">{copy.rootSectionTitle}</h2></div>
          <p>{copy.rootSectionHint.toUpperCase()}</p>
        </div>
        <nav className="root-node-grid" aria-label={copy.rootSectionTitle}>
          {rootNodes.map((node) => (
            <a className={`root-node-card node-card-${node.id}`} href={routeHref(node.id)} key={node.id}>
              <div className="root-node-meta"><span>NODE_{node.order}</span><span>{node.code}</span></div>
              <strong>{node.title}</strong><p>{node.description}</p>
              <span className="root-node-cta">{copy.enterNode} <b aria-hidden="true">→</b></span>
            </a>
          ))}
        </nav>
      </section>

      <footer className="site-footer root-footer">
        <div><span className="footer-node">NODE_00</span><p>{copy.rootFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function ChannelsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const node = nodes[defaultNodeId];

  return (
    <main className="site-shell channels-shell">
      <div className="channels-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="channels" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="simple-node-hero" aria-labelledby="channels-page-title">
        <div className="simple-node-copy">
          <div className="simple-kicker"><span>{copy.channelsKicker}</span><span>SOCIAL / EXTERNAL</span></div>
          <h1 id="channels-page-title" className="simple-title">
            <span>{copy.channelsTitle}</span><span>{copy.channelsTitleAccent}</span>
          </h1>
          <p className="hero-description">{copy.channelsDescription.map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
        <div className="channel-signal" aria-hidden="true">
          <span className="signal-center">01</span><i /><i /><i />
          <b>YT</b><b>IG</b><b>TT</b>
        </div>
      </section>

      <section className="channels" aria-labelledby="channels-title">
        <div className="section-heading">
          <div><span className="section-index">01</span><h2 id="channels-title">{copy.channelsSectionTitle}</h2></div>
          <p>{copy.channelsSectionHint.toUpperCase()}</p>
        </div>
        <nav className="channel-grid" aria-label={copy.channelsLabel}>
          {node.channels.map((channel, index) => (
            <a className="channel-card" href={channel.href} key={channel.name} target="_blank" rel="noreferrer"
              aria-label={copy.channelLinkLabel(channel.name)}>
              <div className="channel-card-top"><span>CH_{channel.index}</span><span className="external-arrow">↗</span></div>
              <div className="channel-mark" aria-hidden="true">{channel.mark}</div>
              <div className="channel-info"><strong>{channel.name}</strong><span>{channel.handle}</span><small>{copy.channelDescriptions[index]}</small></div>
            </a>
          ))}
        </nav>
        <a className="internal-node-link" href={routeHref("horror")}>{copy.channelsToHorror}<span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer">
        <div><span className="footer-node">NODE_01</span><p>{copy.channelsFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function AppsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const linkLabel = (kind: "web" | "appStore" | "support") => ({ web: copy.appLinkWeb, appStore: copy.appLinkAppStore, support: copy.appLinkSupport })[kind];

  return (
    <main className="site-shell development-shell">
      <div className="development-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="apps" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="development-hero" aria-labelledby="apps-page-title">
        <div className="development-copy">
          <div className="development-kicker"><span>{copy.appsKicker}</span><span>DESIGN / BUILD / OPERATE</span></div>
          <h1 id="apps-page-title" className="development-title">{copy.appsTitle}</h1>
          <p className="hero-description">{copy.appsDescription.map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
        <div className="development-mark" aria-hidden="true"><span>&lt;/&gt;</span><small>NODE_02<br />PRODUCT DEVELOPMENT</small></div>
      </section>

      <section className="app-products development-products" aria-labelledby="app-products-title">
        <div className="section-heading development-heading">
          <div><span className="section-index">02</span><h2 id="app-products-title">{copy.appsSectionTitle}</h2></div>
          <p>{copy.appsSectionHint.toUpperCase()}</p>
        </div>
        <div className="product-list">
          {productApps.map((app) => {
            const content = app.content[locale];
            return (
              <article className={`product-card product-${app.accent}`} key={app.id}>
                <div className="product-visual" aria-hidden="true">
                  <span className="product-index">APP_{app.order}</span>
                  <div className="product-glyph">{app.id === "dohwaji" ? <><i /><i /><i /><b /></> : <><em>12</em><i /><i /><b /></>}</div>
                  <span className="product-code">{app.code}</span>
                </div>
                <div className="product-copy">
                  <div className="product-meta"><span>{app.platforms.join(" + ")}</span><span className="live-badge"><i />{copy.appStatus}</span></div>
                  <h3>{content.displayName}</h3><strong className="product-tagline">{content.tagline}</strong>
                  <p>{content.description}</p><ul>{content.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div className="product-links">
                    {app.links.map((link) => <a href={link.href} key={link.kind} target="_blank" rel="noreferrer"
                      aria-label={`${copy.appLinkLabel(content.displayName)} — ${linkLabel(link.kind)}`}>
                      {linkLabel(link.kind)} <span aria-hidden="true">↗</span>
                    </a>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer className="site-footer development-footer">
        <div><span className="footer-node">NODE_02</span><p>{copy.appsFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function HorrorPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const node = nodes[defaultNodeId];
  const content = node.content[locale];

  return (
    <main className="site-shell">
      <div className="scanlines" aria-hidden="true" />
      <SiteHeader activeRoute="horror" copy={copy} locale={locale} setLocale={setLocale} />
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <div className="node-kicker"><span>{copy.horrorKicker}</span><span>{node.category}</span></div>
          <h1 id="page-title" className="distressed-title"><span className="title-bone">{content.title}</span><span className="title-red">{content.titleAccent}</span></h1>
          <p className="hero-description">{content.description.map((line) => <span key={line}>{line}<br /></span>)}</p>
          <div className="genre-list" aria-label={copy.activeGenres}>{content.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
        </div>
        <div className="signal-panel" aria-hidden="true">
          <div className="signal-topline"><span>REC</span><span>00:00:13:07</span></div>
          <div className="signal-viewport"><span className="corner corner-tl" /><span className="corner corner-tr" /><span className="corner corner-bl" /><span className="corner corner-br" /><div className="corridor"><div className="corridor-door" /></div><div className="signal-wave wave-one" /><div className="signal-wave wave-two" /></div>
          <p>SIGNAL DETECTED / SEOUL 37.5665° N</p>
        </div>
      </section>

      <section className="featured" aria-labelledby="featured-title">
        <div className="section-heading"><div><span className="section-index">03</span><h2 id="featured-title">{copy.featuredTitle}</h2></div><p>{copy.featuredHint.toUpperCase()}</p></div>
        <a className="featured-card" href={node.archiveUrl} target="_blank" rel="noreferrer" aria-label={copy.featuredLinkLabel}>
          <div className="record-visual" aria-hidden="true"><span className="visual-label">MOST VIEWED</span><div className="play-symbol">▶</div><span className="visual-time">ARCHIVE_001</span></div>
          <div className="featured-copy"><span className="featured-kicker">{copy.featuredKicker.toUpperCase()}</span><h3>{copy.featuredHeading[0]}<br />{copy.featuredHeading[1]}</h3><p>{copy.featuredDescription}</p><span className="featured-cta">{copy.featuredCta} <b aria-hidden="true">↗</b></span></div>
        </a>
        <a className="internal-node-link horror-channel-link" href={routeHref("channels")}>{copy.channelsNode}<span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer"><div><span className="footer-node">NODE_03</span><p>{copy.horrorFooter}</p></div><span>© 2026 HORROR DOPAMINE</span></footer>
    </main>
  );
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const route = getRoute();
  const copy = ui[locale];

  useEffect(() => {
    const metadata = {
      root: [copy.rootPageTitle, copy.rootPageDescription], channels: [copy.channelsPageTitle, copy.channelsPageDescription],
      apps: [copy.appsPageTitle, copy.appsPageDescription], horror: [copy.horrorPageTitle, copy.horrorPageDescription],
    }[route];
    document.documentElement.lang = locale;
    document.title = metadata[0];
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", metadata[1]);
    try { window.localStorage.setItem("link-flower-locale", locale); } catch { /* selection still works */ }
  }, [copy, locale, route]);

  if (route === "channels") return <ChannelsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "apps") return <AppsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "horror") return <HorrorPage copy={copy} locale={locale} setLocale={setLocale} />;
  return <RootPage copy={copy} locale={locale} setLocale={setLocale} />;
}
