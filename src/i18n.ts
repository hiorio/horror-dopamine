export type Locale = "ko" | "en" | "ja";

export const supportedLocales: Locale[] = ["ko", "en", "ja"];

export const localeLabels: Record<Locale, string> = {
  ko: "KO",
  en: "EN",
  ja: "JA",
};

export function detectLocale(): Locale {
  try {
    const saved = window.localStorage.getItem("horror-dopamine-locale");
    if (supportedLocales.includes(saved as Locale)) return saved as Locale;
  } catch {
    // Storage may be unavailable in a privacy-restricted browser.
  }

  for (const language of navigator.languages ?? [navigator.language]) {
    const locale = language.toLowerCase().split("-")[0];
    if (supportedLocales.includes(locale as Locale)) return locale as Locale;
  }

  return "ko";
}

export const ui = {
  ko: {
    pageTitle: "공포도파민 | Horror Dopamine",
    pageDescription: "유튜브, 인스타그램, 틱톡으로 이어지는 공포도파민 공식 채널 노드",
    languageLabel: "언어 선택",
    nodeNetworkLabel: "상위 노드 선택",
    horrorNode: "공포계",
    appsNode: "앱계",
    active: "활성",
    genreLabel: "콘텐츠 장르",
    channelsTitle: "채널 연결망",
    channelsHint: "주파수를 선택하세요",
    channelsLabel: "공포도파민 소셜 미디어 채널",
    channelLinkLabel: (name: string) => `${name} 공포도파민 채널 새 창에서 열기`,
    featuredTitle: "인기 기록",
    featuredHint: "유튜브 아카이브",
    featuredLinkLabel: "공포도파민 유튜브 동영상 보관함 새 창에서 열기",
    featuredKicker: "인기 기록",
    featuredHeading: ["가장 많이 본", "공포 기록부터"],
    featuredDescription: "공포도파민의 영상 보관함에서 새로운 기록과 시청자들이 오래 머문 이야기를 확인하세요.",
    featuredCta: "YOUTUBE 영상 보기",
    footer: "공포도파민 채널군을 연결하는 독립 콘텐츠 노드",
    appsPageTitle: "앱계 | App Universe",
    appsPageDescription: "직접 만든 앱과 서비스를 연결하는 독립 제품 노드",
    appsKicker: "PRODUCT NODE 02",
    appsTitle: "앱",
    appsTitleAccent: "계",
    appsHeroDescription: ["작은 불편에서 시작해 실제로 작동하는 도구까지.", "직접 만든 앱과 서비스를 하나의 제품계로 연결합니다."],
    appsCount: "운영 제품",
    appsPlatforms: "플랫폼",
    appsSectionTitle: "제품 노드",
    appsSectionHint: "제품을 선택하세요",
    appStatus: "운영 중",
    appLinkLabel: (name: string) => `${name} 외부 페이지 새 창에서 열기`,
    appLinkWeb: "웹에서 열기",
    appLinkAppStore: "App Store",
    appLinkSupport: "지원 페이지",
    appsFooter: "직접 만든 앱과 서비스가 이어지는 독립 제품 네트워크",
  },
  en: {
    pageTitle: "Horror Dopamine | Channel Node",
    pageDescription: "The official Horror Dopamine channel node connecting YouTube, Instagram, and TikTok.",
    languageLabel: "Select language",
    nodeNetworkLabel: "Select a top-level node",
    horrorNode: "Horror",
    appsNode: "Apps",
    active: "Active",
    genreLabel: "Content genres",
    channelsTitle: "Channel Network",
    channelsHint: "Select a frequency",
    channelsLabel: "Horror Dopamine social media channels",
    channelLinkLabel: (name: string) => `Open the Horror Dopamine ${name} channel in a new tab`,
    featuredTitle: "Popular Records",
    featuredHint: "YouTube archive",
    featuredLinkLabel: "Open the Horror Dopamine YouTube video archive in a new tab",
    featuredKicker: "Popular records",
    featuredHeading: ["Start with the", "most-viewed horrors"],
    featuredDescription: "Enter the Horror Dopamine archive to discover new records and the stories viewers could not leave behind.",
    featuredCta: "WATCH ON YOUTUBE",
    footer: "An independent content node connecting the Horror Dopamine channels",
    appsPageTitle: "App Universe | Product Network",
    appsPageDescription: "An independent product node connecting the apps and services I have built.",
    appsKicker: "PRODUCT NODE 02",
    appsTitle: "APP",
    appsTitleAccent: "UNIVERSE",
    appsHeroDescription: ["From small frictions to tools that work in the real world.", "Every app and service I build connects to this product universe."],
    appsCount: "Live products",
    appsPlatforms: "Platforms",
    appsSectionTitle: "Product Nodes",
    appsSectionHint: "Select a product",
    appStatus: "Live",
    appLinkLabel: (name: string) => `Open the ${name} external page in a new tab`,
    appLinkWeb: "Open web app",
    appLinkAppStore: "App Store",
    appLinkSupport: "Support",
    appsFooter: "An independent product network connecting the apps and services I build",
  },
  ja: {
    pageTitle: "ホラードーパミン | チャンネルノード",
    pageDescription: "YouTube、Instagram、TikTokをつなぐホラードーパミン公式チャンネルノード。",
    languageLabel: "言語を選択",
    nodeNetworkLabel: "上位ノードを選択",
    horrorNode: "ホラー界",
    appsNode: "アプリ界",
    active: "稼働中",
    genreLabel: "コンテンツジャンル",
    channelsTitle: "チャンネル接続網",
    channelsHint: "周波数を選択",
    channelsLabel: "ホラードーパミンのソーシャルメディアチャンネル",
    channelLinkLabel: (name: string) => `ホラードーパミンの${name}チャンネルを新しいタブで開く`,
    featuredTitle: "人気の記録",
    featuredHint: "YouTubeアーカイブ",
    featuredLinkLabel: "ホラードーパミンのYouTube動画アーカイブを新しいタブで開く",
    featuredKicker: "人気の記録",
    featuredHeading: ["最も見られた", "恐怖の記録から"],
    featuredDescription: "ホラードーパミンの映像保管庫で、新しい記録と視聴者が長く留まった物語を確認してください。",
    featuredCta: "YOUTUBEで見る",
    footer: "ホラードーパミンのチャンネル群をつなぐ独立コンテンツノード",
    appsPageTitle: "アプリ界 | プロダクトネットワーク",
    appsPageDescription: "自分で作ったアプリとサービスをつなぐ独立プロダクトノード。",
    appsKicker: "PRODUCT NODE 02",
    appsTitle: "アプリ",
    appsTitleAccent: "界",
    appsHeroDescription: ["小さな不便から、実際に動く道具へ。", "自分で作ったアプリとサービスをひとつのプロダクト界につなぎます。"],
    appsCount: "運用中の製品",
    appsPlatforms: "プラットフォーム",
    appsSectionTitle: "プロダクトノード",
    appsSectionHint: "製品を選択",
    appStatus: "運用中",
    appLinkLabel: (name: string) => `${name}の外部ページを新しいタブで開く`,
    appLinkWeb: "ウェブで開く",
    appLinkAppStore: "App Store",
    appLinkSupport: "サポート",
    appsFooter: "自分で作ったアプリとサービスがつながる独立プロダクトネットワーク",
  },
} satisfies Record<Locale, object>;
