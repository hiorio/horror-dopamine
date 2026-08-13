import type { Locale } from "./i18n";

type LocalizedNodeCopy = {
  title: string;
  titleAccent: string;
  description: string[];
  genres: string[];
};

export type ChannelLink = {
  index: string;
  name: string;
  handle: string;
  description: Record<Locale, string>;
  href: string;
  mark: string;
};

export type ContentNode = {
  id: string;
  order: string;
  parentId: string | null;
  childIds: string[];
  category: string;
  content: Record<Locale, LocalizedNodeCopy>;
  channels: ChannelLink[];
  archiveUrl: string;
};

export const nodes: Record<string, ContentNode> = {
  "horror-dopamine": {
    id: "horror-dopamine",
    order: "03",
    parentId: null,
    childIds: [],
    category: "HORROR / KR",
    content: {
      ko: {
        title: "공포",
        titleAccent: "도파민",
        description: ["평범한 일상을 침투하는 이상한 기록들.", "짧고 깊은 공포를 하나의 신호로 연결합니다."],
        genres: ["괴담", "미스터리", "숏폼"],
      },
      en: {
        title: "HORROR",
        titleAccent: "DOPAMINE",
        description: ["Strange records invading ordinary life.", "Short, deep bursts of horror connected as one signal."],
        genres: ["Urban legends", "Mystery", "Short-form"],
      },
      ja: {
        title: "ホラー",
        titleAccent: "ドーパミン",
        description: ["平凡な日常に侵入する奇妙な記録。", "短く深い恐怖を、ひとつの信号につなぎます。"],
        genres: ["怪談", "ミステリー", "ショート動画"],
      },
    },
    channels: [
      {
        index: "01",
        name: "YouTube",
        handle: "@horrordopamine",
        description: {
          ko: "긴 호흡의 괴담 아카이브",
          en: "Long-form horror archive",
          ja: "長編怪談アーカイブ",
        },
        href: "https://www.youtube.com/@horrordopamine",
        mark: "YT",
      },
      {
        index: "02",
        name: "Instagram",
        handle: "@horror_dopamine",
        description: {
          ko: "공포 이미지와 채널 기록",
          en: "Horror images and channel records",
          ja: "恐怖のイメージとチャンネル記録",
        },
        href: "https://www.instagram.com/horror_dopamine",
        mark: "IG",
      },
      {
        index: "03",
        name: "TikTok",
        handle: "@horror_dopamine",
        description: {
          ko: "짧고 강한 공포 숏폼",
          en: "Short, intense horror clips",
          ja: "短く強烈なホラー動画",
        },
        href: "https://www.tiktok.com/@horror_dopamine",
        mark: "TT",
      },
    ],
    archiveUrl: "https://www.youtube.com/@horrordopamine/videos",
  },
};

export const defaultNodeId = "horror-dopamine";
