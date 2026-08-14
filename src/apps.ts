import type { Locale } from "./i18n";

type LocalizedAppCopy = {
  displayName: string;
  tagline: string;
  description: string;
  features: string[];
};

export type ProductApp = {
  id: string;
  order: string;
  code: string;
  platforms: string[];
  accent: "cyan" | "amber";
  content: Record<Locale, LocalizedAppCopy>;
  links: Array<{
    kind: "web" | "appStore" | "support";
    href: string;
  }>;
};

export const productApps: ProductApp[] = [
  {
    id: "dohwaji",
    order: "01",
    code: "MAP / DRAW / SHARE",
    platforms: ["WEB", "iOS"],
    accent: "cyan",
    content: {
      ko: {
        displayName: "도화지",
        tagline: "함께 만드는 모임 동선 지도",
        description: "핀과 메모, 손그림, 실제 이동 경로를 한 장의 지도에 담아 링크로 공유하는 지도 서비스입니다.",
        features: ["지도 위 손그림", "모임 동선 설계", "설치 없는 링크 공유"],
      },
      en: {
        displayName: "Dohwaji",
        tagline: "A shared route map for every meetup",
        description: "Build one map with pins, notes, freehand drawings, and real routes, then share it with a single link.",
        features: ["Draw on the map", "Plan group routes", "Share without installation"],
      },
      ja: {
        displayName: "ドファジ",
        tagline: "みんなで作る集合ルートマップ",
        description: "ピン、メモ、手描き、実際の移動経路を一枚の地図にまとめ、リンクひとつで共有する地図サービスです。",
        features: ["地図に手描き", "集合ルート設計", "インストール不要の共有"],
      },
    },
    links: [
      { kind: "web", href: "https://dohwaji.app" },
      { kind: "appStore", href: "https://apps.apple.com/app/id6797682561" },
    ],
  },
  {
    id: "timeroots",
    order: "02",
    code: "TIME / TRACK / REFLECT",
    platforms: ["iOS", "WIDGET"],
    accent: "amber",
    content: {
      ko: {
        displayName: "TimeRoots",
        tagline: "기록이 쌓여 삶이 보이는 시간",
        description: "한 번의 탭으로 실제 활동을 기록하고, 타임라인과 통계로 하루의 뿌리를 확인하는 로컬 우선 타임트래커입니다.",
        features: ["빠른 활동 기록", "iOS 홈 화면 위젯", "타임라인과 주간 분석"],
      },
      en: {
        displayName: "TimeRoots",
        tagline: "See your life take shape through time",
        description: "A local-first time tracker that captures real activity in one tap and reveals your day through timelines and analytics.",
        features: ["One-tap tracking", "iOS home-screen widgets", "Timeline and weekly insights"],
      },
      ja: {
        displayName: "TimeRoots",
        tagline: "記録が積み重なり、暮らしが見える時間",
        description: "ワンタップで実際の活動を記録し、タイムラインと統計から一日の輪郭を確認できるローカル優先のタイムトラッカーです。",
        features: ["素早い活動記録", "iOSホーム画面ウィジェット", "タイムラインと週間分析"],
      },
    },
    links: [
      { kind: "appStore", href: "https://apps.apple.com/app/id6798457487" },
      { kind: "support", href: "https://hiorio.github.io/timeroots-support/" },
    ],
  },
];
