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
  },
  en: {
    pageTitle: "Horror Dopamine | Channel Node",
    pageDescription: "The official Horror Dopamine channel node connecting YouTube, Instagram, and TikTok.",
    languageLabel: "Select language",
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
  },
  ja: {
    pageTitle: "ホラードーパミン | チャンネルノード",
    pageDescription: "YouTube、Instagram、TikTokをつなぐホラードーパミン公式チャンネルノード。",
    languageLabel: "言語を選択",
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
  },
} satisfies Record<Locale, object>;
