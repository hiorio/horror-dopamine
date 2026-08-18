import { useEffect, useState } from "react";
import { productApps } from "./apps";
import { detectLocale, localeLabels, supportedLocales, ui, type Locale } from "./i18n";
import { defaultNodeId, nodes } from "./nodes";
import { DailyPlankPage, dailyPlankCopy } from "./DailyPlankPage";
import { TimeFlowerPage, timeFlowerCopy } from "./TimeFlowerPage";

type RouteId = "root" | "channels" | "apps" | "dohwaji" | "timeflower" | "dailyplank" | "horror";
type Copy = (typeof ui)[Locale];

const basePath = import.meta.env.BASE_URL;

function routeHref(route: RouteId) {
  if (route === "root") return basePath;
  if (route === "dohwaji") return `${basePath}apps/dohwaji/`;
  if (route === "timeflower") return `${basePath}apps/timeflower/`;
  if (route === "dailyplank") return `${basePath}apps/daily-plank/`;
  return `${basePath}${route}/`;
}

function getRoute(): RouteId {
  const relativePath = window.location.pathname.slice(basePath.length).replace(/^\/+|\/+$/g, "");
  if (relativePath === "apps/dohwaji") return "dohwaji";
  if (relativePath === "apps/timeflower") return "timeflower";
  if (relativePath === "apps/daily-plank") return "dailyplank";
  if (relativePath === "channels" || relativePath === "apps" || relativePath === "horror") return relativePath;
  return "root";
}

function SiteHeader({ activeRoute, copy, locale, setLocale }: {
  activeRoute: RouteId;
  copy: Copy;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}) {
  const routes: Array<{ id: RouteId; label: string }> = [
    { id: "root", label: copy.mainNode },
    { id: "apps", label: copy.appsNode },
    { id: "channels", label: copy.channelsNode },
  ];

  return (
    <header className="network-bar">
      <a className="network-name" href={routeHref("root")}>
        <span className="record-dot" aria-hidden="true" />
        HIORIO
      </a>
      <div className="network-controls">
        <nav className="node-switcher" aria-label={copy.nodeNetworkLabel}>
          {routes.map((route) => (
            <a className={activeRoute === route.id
              || ((activeRoute === "dohwaji" || activeRoute === "timeflower" || activeRoute === "dailyplank") && route.id === "apps")
              || (activeRoute === "horror" && route.id === "channels") ? "is-active" : ""} href={routeHref(route.id)} key={route.id}>
              <span>{route.label}</span>
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
      </div>
    </header>
  );
}

function RootPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  return (
    <main className="site-shell root-shell garden-root">
      <div className="root-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="root" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="garden-hero" aria-labelledby="root-page-title">
        <div className="garden-hero-copy">
          <div className="garden-eyebrow"><span>{copy.rootKicker}</span><i aria-hidden="true" /></div>
          <h1 id="root-page-title">{copy.rootTitle}</h1>
          <p className="garden-promise">{copy.rootTitleAccent}</p>
          <p className="garden-intro">
            {copy.rootDescription.map((line) => <span key={line}>{line}</span>)}
          </p>
          <a className="garden-scroll-link" href="#work-index">
            <span>01</span>{copy.rootSectionTitle}<b aria-hidden="true">↓</b>
          </a>
        </div>

        <div className="garden-hero-flower" aria-hidden="true">
          <svg viewBox="0 0 520 620" role="presentation">
            <defs>
              <linearGradient id="petalIvory" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#fffdf7" />
                <stop offset="0.56" stopColor="#f3eadb" />
                <stop offset="1" stopColor="#dfd0bd" />
              </linearGradient>
              <linearGradient id="petalBlush" x1="0" x2="0.7" y1="0" y2="1">
                <stop offset="0" stopColor="#f8f0e3" />
                <stop offset="1" stopColor="#d9c0aa" />
              </linearGradient>
              <linearGradient id="leafDeep" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#82947a" />
                <stop offset="0.52" stopColor="#59745b" />
                <stop offset="1" stopColor="#304e3b" />
              </linearGradient>
              <linearGradient id="leafLight" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#a2aa8b" />
                <stop offset="1" stopColor="#5e7659" />
              </linearGradient>
            </defs>

            <g className="botanical-stems">
              <path d="M304 612C303 542 307 473 300 407C292 330 281 251 267 184" />
              <path d="M298 416C252 388 207 378 153 382" />
              <path d="M302 478C349 438 392 424 450 428" />
              <path d="M287 328C330 294 370 282 419 291" />
              <path d="M279 278C238 255 204 225 183 190" />
              <path d="M239 249C207 278 170 296 126 296" />
            </g>

            <g className="botanical-leaves">
              <path fill="url(#leafDeep)" d="M257 389C220 350 169 347 128 377C163 409 211 414 257 389Z" />
              <path fill="url(#leafLight)" d="M344 444C375 402 426 396 467 420C441 456 394 468 344 444Z" />
              <path fill="url(#leafDeep)" d="M329 309C357 274 402 267 438 286C416 320 372 331 329 309Z" />
              <path fill="url(#leafLight)" d="M253 263C219 225 174 222 140 248C168 280 210 286 253 263Z" />
              <path fill="url(#leafDeep)" d="M210 278C182 284 151 307 109 296C132 269 169 255 210 278Z" />
            </g>

            <g className="leaf-veins">
              <path d="M250 385C207 380 168 381 132 378" />
              <path d="M347 442C389 431 427 424 462 421" />
              <path d="M332 307C369 298 402 291 434 287" />
              <path d="M248 260C209 252 175 250 144 249" />
              <path d="M204 279C169 286 139 292 113 296" />
            </g>

            <g className="magnolia-petals">
              <path fill="url(#petalIvory)" d="M266 183C232 151 222 100 250 55C285 77 296 127 266 183Z" />
              <path fill="url(#petalBlush)" d="M274 181C276 128 307 86 350 83C359 126 327 165 274 181Z" />
              <path fill="url(#petalIvory)" d="M278 188C320 149 371 150 400 181C376 218 328 219 278 188Z" />
              <path fill="url(#petalBlush)" d="M276 194C329 190 365 218 360 255C318 263 286 240 276 194Z" />
              <path fill="url(#petalIvory)" d="M267 197C302 237 296 280 263 297C232 269 236 228 267 197Z" />
              <path fill="url(#petalBlush)" d="M259 194C244 244 204 266 168 248C173 210 207 187 259 194Z" />
              <path fill="url(#petalIvory)" d="M258 186C208 207 166 188 158 150C192 128 232 143 258 186Z" />
              <path fill="url(#petalBlush)" d="M262 181C220 155 211 112 238 83C270 100 280 139 262 181Z" />
            </g>

            <g className="petal-veins">
              <path d="M268 184C260 137 257 99 251 62" />
              <path d="M275 184C302 145 326 112 347 88" />
              <path d="M279 189C322 181 362 181 394 181" />
              <path d="M275 195C309 215 337 235 355 252" />
              <path d="M267 198C266 234 264 265 263 291" />
              <path d="M258 195C226 215 197 231 173 246" />
              <path d="M257 188C222 175 189 162 162 152" />
            </g>

            <ellipse className="magnolia-center" cx="268" cy="190" rx="24" ry="20" />
            <g className="magnolia-stamens">
              {Array.from({ length: 18 }, (_, index) => {
                const angle = (index / 18) * Math.PI * 2;
                const innerX = 268 + Math.cos(angle) * 22;
                const innerY = 190 + Math.sin(angle) * 18;
                const outerX = 268 + Math.cos(angle) * 36;
                const outerY = 190 + Math.sin(angle) * 31;
                return <g key={index}><path d={`M${innerX} ${innerY}L${outerX} ${outerY}`} /><circle cx={outerX} cy={outerY} r="2.8" /></g>;
              })}
            </g>

            <g className="magnolia-bud">
              <path d="M183 192C164 178 157 154 171 137C192 145 200 167 183 192Z" />
              <path d="M180 193C197 172 214 172 223 185C213 202 196 205 180 193Z" />
              <path className="bud-sepal" d="M183 194C171 188 163 188 156 192C163 201 172 204 183 194Z" />
            </g>
          </svg>
          <span className="flower-caption">IDEAS → FORMS → LIFE</span>
        </div>
      </section>

      <section className="garden-index" id="work-index" aria-labelledby="root-work-title">
        <header className="garden-index-heading">
          <span className="garden-section-number">01</span>
          <div><p>SELECTED WORK / GROWING INDEX</p><h2 id="root-work-title">{copy.rootSectionTitle}</h2></div>
          <p>{copy.rootSectionHint}</p>
        </header>

        <div className="garden-work-tree">
          <div className="garden-trunk" aria-hidden="true"><i /><i /><i /><i /></div>

          <article className="garden-branch garden-branch-apps">
            <span className="branch-number">01</span>
            <div className="branch-content">
              <header>
                <div><p>APPS / SERVICES</p><h3>{copy.appsCardTitle}</h3></div>
                <a href={routeHref("apps")} aria-label={`${copy.appsCardTitle} ${copy.enterNode}`}>{copy.enterNode}<span aria-hidden="true">↗</span></a>
              </header>
              <p className="branch-description">{copy.appsCardDescription}</p>
              <ul className="garden-app-list">
                {productApps.map((app) => {
                  const content = app.content[locale];
                  return (
                    <li key={app.id}>
                      <a href={`${routeHref("apps")}#${app.id}`}>
                        <span className="garden-app-icon"><img src={`${basePath}${app.icon}`} alt="" /></span>
                        <strong>{content.displayName}</strong>
                        <small>{content.tagline}</small>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>

          <article className="garden-branch garden-branch-content">
            <span className="branch-number">02</span>
            <div className="branch-content">
              <header>
                <div><p>CONTENT / CHANNELS</p><h3>{copy.channelsCardTitle}</h3></div>
                <a href={routeHref("channels")} aria-label={`${copy.channelsCardTitle} ${copy.enterNode}`}>{copy.enterNode}<span aria-hidden="true">↗</span></a>
              </header>
              <p className="branch-description">{copy.channelsCardDescription}</p>
              <a className="garden-content-entry" href={routeHref("horror")}>
                <span className="content-entry-mark" aria-hidden="true"><i />REC</span>
                <span><strong>{copy.horrorCardTitle}</strong><small>{copy.horrorCardDescription}</small></span>
                <b aria-hidden="true">→</b>
              </a>
            </div>
          </article>

          <article className="garden-branch garden-branch-future">
            <span className="branch-number">03</span>
            <div className="branch-content">
              <header><div><p>OPEN BRANCH</p><h3>{copy.rootFutureTitle}</h3></div></header>
              <p className="branch-description">{copy.rootFutureDescription}</p>
              <div className="future-buds" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </article>
        </div>
      </section>

      <footer className="site-footer root-footer">
        <div><span className="footer-node">HIORIO</span><p>{copy.rootFooter}</p></div><span>LINK FLOWER · © 2026</span>
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
          <div><span className="section-index">02-A</span><h2 id="channels-title">{copy.channelsSectionTitle}</h2></div>
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
        <div><span className="footer-node">NODE_02-A</span><p>{copy.channelsFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function AppsPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const linkLabel = (kind: "web" | "appStore" | "support") => ({ web: copy.appLinkWeb, appStore: copy.appLinkAppStore, support: copy.appLinkSupport })[kind];
  const liveCount = productApps.filter((app) => app.status === "live").length;
  const detailHref = (id: string) => id === "dohwaji" ? routeHref("dohwaji") : id === "timeflower" ? routeHref("timeflower") : id === "dailyplank" ? routeHref("dailyplank") : undefined;

  return (
    <main className="site-shell development-shell">
      <div className="development-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="apps" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="development-hero" aria-labelledby="apps-page-title">
        <div className="development-copy">
          <div className="development-kicker"><span>{copy.appsKicker}</span><span>DESIGN / GROW / OPERATE</span></div>
          <h1 id="apps-page-title" className="development-title">{copy.appsTitle}</h1>
          <p className="hero-description">{copy.appsDescription.map((line) => <span key={line}>{line}<br /></span>)}</p>
        </div>
        <aside className="development-garden" aria-label={copy.appsSectionTitle}>
          <div className="garden-head"><span>LINK FLOWER / PRODUCTS</span><b>{String(productApps.length).padStart(2, "0")}</b></div>
          <div className="garden-plot">
            <i className="garden-stem" aria-hidden="true" />
            {productApps.map((app) => {
              const content = app.content[locale];
              return <div className={`garden-bloom bloom-${app.order} garden-${app.accent}`} key={app.id}><span>{app.order}</span><img alt="" src={`${basePath}${app.icon}`} /><div><strong>{content.displayName}</strong><small>{copy.appStatus}</small></div></div>;
            })}
          </div>
          <div className="garden-foot"><span>{copy.appStatus} {String(liveCount).padStart(2, "0")}</span></div>
        </aside>
      </section>

      <section className="app-products development-products" aria-labelledby="app-products-title">
        <div className="section-heading development-heading">
          <div><span className="section-index">01</span><h2 id="app-products-title">{copy.appsSectionTitle}</h2></div>
          <p>{copy.appsSectionHint.toUpperCase()}</p>
        </div>
        <div className="product-catalog">
          {productApps.map((app) => {
            const content = app.content[locale];
            const internalHref = detailHref(app.id);
            return (
              <article className={`catalog-entry catalog-${app.accent}`} id={app.id} key={app.id}>
                <div className="catalog-sequence">
                  <span>APP_{app.order}</span>
                  <i />
                </div>
                <div className="catalog-identity">
                  <img className="catalog-icon" src={`${basePath}${app.icon}`} alt="" />
                  <div>
                    <span className="catalog-code">{app.code}</span>
                    <h3>{content.displayName}</h3>
                    <strong>{content.tagline}</strong>
                  </div>
                </div>
                <div className="catalog-details">
                  <div className="catalog-meta">
                    <div>{app.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
                    <div><span>v{app.version}</span><span className="catalog-status"><i />{copy.appStatus}</span></div>
                  </div>
                  <p>{content.description}</p>
                  <ul>{content.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <div className="catalog-links">
                    {internalHref && <a className="catalog-detail-link" href={internalHref}>{copy.appDetail} <span aria-hidden="true">→</span></a>}
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
        <div><span className="footer-node">NODE_01</span><p>{copy.appsFooter}</p></div><span>© 2026 LINK FLOWER</span>
      </footer>
    </main>
  );
}

function DohwajiPage({ copy, locale, setLocale }: { copy: Copy; locale: Locale; setLocale: (locale: Locale) => void }) {
  const app = productApps.find((item) => item.id === "dohwaji")!;
  const content = app.content[locale];
  const webUrl = app.links.find((link) => link.kind === "web")!.href;
  const appStoreUrl = app.links.find((link) => link.kind === "appStore")!.href;

  return (
    <main className="site-shell dohwaji-shell">
      <div className="dohwaji-grid-bg" aria-hidden="true" />
      <SiteHeader activeRoute="dohwaji" copy={copy} locale={locale} setLocale={setLocale} />

      <section className="dohwaji-hero" aria-labelledby="dohwaji-page-title">
        <div className="dohwaji-copy">
          <div className="dohwaji-kicker"><span>APP NODE 01-A</span><span>MAP / DRAW / SHARE</span></div>
          <p className="dohwaji-eyebrow">{copy.dohwajiEyebrow}</p>
          <h1 id="dohwaji-page-title">{content.displayName}</h1>
          <strong>{copy.dohwajiHeroLine}</strong>
          <p>{copy.dohwajiHeroDescription}</p>
          <div className="dohwaji-actions">
            <a className="dohwaji-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.dohwajiTryWeb}<span aria-hidden="true">↗</span></a>
            <a className="dohwaji-secondary" href={appStoreUrl} target="_blank" rel="noreferrer">App Store<span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="dohwaji-map-demo" aria-label={copy.dohwajiMapPreview}>
          <div className="map-toolbar"><span>DOHWAJI / SEOUL</span><b>SHARED MAP</b></div>
          <div className="map-canvas" aria-hidden="true">
            <i className="road road-one" /><i className="road road-two" /><i className="road road-three" /><i className="road road-four" />
            <span className="map-block block-one" /><span className="map-block block-two" /><span className="map-block block-three" /><span className="map-block block-four" />
            <span className="map-pin pin-one">A</span><span className="map-pin pin-two">B</span><span className="map-pin pin-three">C</span>
            <span className="draw-line line-one" /><span className="draw-line line-two" /><span className="draw-line line-three" />
            <span className="map-note">{copy.dohwajiMapNote}</span>
          </div>
          <div className="map-sharebar"><span><i />3 {copy.dohwajiPeople}</span><button type="button" tabIndex={-1}>{copy.dohwajiShare}</button></div>
        </div>
      </section>

      <section className="dohwaji-problem" aria-labelledby="dohwaji-problem-title">
        <span className="dohwaji-section-no">01</span>
        <div><p>{copy.dohwajiProblemKicker}</p><h2 id="dohwaji-problem-title">{copy.dohwajiProblemTitle}</h2></div>
        <p>{copy.dohwajiProblemDescription}</p>
      </section>

      <section className="dohwaji-features" aria-labelledby="dohwaji-features-title">
        <div className="dohwaji-section-heading"><span>02 / CORE FEATURES</span><h2 id="dohwaji-features-title">{copy.dohwajiFeaturesTitle}</h2></div>
        <div className="dohwaji-feature-grid">
          {copy.dohwajiFeatures.map((feature, index) => (
            <article key={feature.title}>
              <span>0{index + 1}</span><div className={`feature-symbol symbol-${index + 1}`} aria-hidden="true"><i /><i /><b /></div>
              <h3>{feature.title}</h3><p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dohwaji-flow" aria-labelledby="dohwaji-flow-title">
        <div className="dohwaji-section-heading"><span>03 / HOW IT WORKS</span><h2 id="dohwaji-flow-title">{copy.dohwajiFlowTitle}</h2></div>
        <ol>{copy.dohwajiSteps.map((step, index) => <li key={step}><span>0{index + 1}</span><p>{step}</p></li>)}</ol>
      </section>

      <section className="dohwaji-final">
        <p>ONE MAP. ONE LINK.</p><h2>{copy.dohwajiFinalTitle}</h2>
        <div className="dohwaji-actions"><a className="dohwaji-primary" href={webUrl} target="_blank" rel="noreferrer">{copy.dohwajiTryWeb}<span aria-hidden="true">↗</span></a><a className="dohwaji-secondary" href={routeHref("apps")}>{copy.dohwajiBackApps}<span aria-hidden="true">←</span></a></div>
      </section>

      <footer className="site-footer dohwaji-footer"><div><span className="footer-node">NODE_01-A</span><p>{copy.dohwajiFooter}</p></div><span>© 2026 DOHWAJI</span></footer>
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
        <div className="section-heading"><div><span className="section-index">02</span><h2 id="featured-title">{copy.featuredTitle}</h2></div><p>{copy.featuredHint.toUpperCase()}</p></div>
        <a className="featured-card" href={node.archiveUrl} target="_blank" rel="noreferrer" aria-label={copy.featuredLinkLabel}>
          <div className="record-visual" aria-hidden="true"><span className="visual-label">MOST VIEWED</span><div className="play-symbol">▶</div><span className="visual-time">ARCHIVE_001</span></div>
          <div className="featured-copy"><span className="featured-kicker">{copy.featuredKicker.toUpperCase()}</span><h3>{copy.featuredHeading[0]}<br />{copy.featuredHeading[1]}</h3><p>{copy.featuredDescription}</p><span className="featured-cta">{copy.featuredCta} <b aria-hidden="true">↗</b></span></div>
        </a>
        <a className="internal-node-link horror-channel-link" href={routeHref("channels")}>{copy.channelsNode}<span aria-hidden="true">→</span></a>
      </section>

      <footer className="site-footer"><div><span className="footer-node">NODE_02</span><p>{copy.horrorFooter}</p></div><span>© 2026 HORROR DOPAMINE</span></footer>
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
      apps: [copy.appsPageTitle, copy.appsPageDescription], dohwaji: [copy.dohwajiPageTitle, copy.dohwajiPageDescription],
      timeflower: [timeFlowerCopy[locale].pageTitle, timeFlowerCopy[locale].pageDescription],
      dailyplank: [dailyPlankCopy[locale].pageTitle, dailyPlankCopy[locale].pageDescription], horror: [copy.horrorPageTitle, copy.horrorPageDescription],
    }[route];
    document.documentElement.lang = locale;
    document.title = metadata[0];
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", metadata[1]);
    try { window.localStorage.setItem("link-flower-locale", locale); } catch { /* selection still works */ }
  }, [copy, locale, route]);

  if (route === "channels") return <ChannelsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "apps") return <AppsPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "dohwaji") return <DohwajiPage copy={copy} locale={locale} setLocale={setLocale} />;
  if (route === "timeflower") return <TimeFlowerPage header={<SiteHeader activeRoute="timeflower" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "dailyplank") return <DailyPlankPage header={<SiteHeader activeRoute="dailyplank" copy={copy} locale={locale} setLocale={setLocale} />} locale={locale} appsHref={routeHref("apps")} />;
  if (route === "horror") return <HorrorPage copy={copy} locale={locale} setLocale={setLocale} />;
  return <RootPage copy={copy} locale={locale} setLocale={setLocale} />;
}
