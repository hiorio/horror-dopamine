export type ChannelLink = {
  index: string;
  name: string;
  handle: string;
  description: string;
  href: string;
  mark: string;
};

export type ContentNode = {
  id: string;
  order: string;
  parentId: string | null;
  childIds: string[];
  title: string;
  titleAccent: string;
  category: string;
  description: string[];
  genres: string[];
  channels: ChannelLink[];
  archiveUrl: string;
};

export const nodes: Record<string, ContentNode> = {
  "horror-dopamine": {
    id: "horror-dopamine",
    order: "01",
    parentId: null,
    childIds: [],
    title: "공포",
    titleAccent: "도파민",
    category: "HORROR / KR",
    description: [
      "평범한 일상을 침투하는 이상한 기록들.",
      "짧고 깊은 공포를 하나의 신호로 연결합니다.",
    ],
    genres: ["괴담", "미스터리", "숏폼"],
    channels: [
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
    ],
    archiveUrl: "https://www.youtube.com/@horrordopamine/videos",
  },
};

export const defaultNodeId = "horror-dopamine";
