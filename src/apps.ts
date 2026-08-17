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
  icon: string;
  version: string;
  platforms: string[];
  accent: "cyan" | "amber" | "apricot" | "cobalt" | "sky";
  status: "live";
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
    icon: "app-icons/dohwaji.jpg",
    version: "1.2",
    platforms: ["WEB", "iOS"],
    accent: "cyan",
    status: "live",
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
    icon: "app-icons/timeroots.jpg",
    version: "1.1",
    platforms: ["iOS", "WIDGET"],
    accent: "amber",
    status: "live",
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
  {
    id: "timeflower",
    order: "03",
    code: "SHARE / PLAN / TALK",
    icon: "app-icons/timeflower.png",
    version: "1.0.0",
    platforms: ["iOS", "ANDROID"],
    accent: "apricot",
    status: "live",
    content: {
      ko: {
        displayName: "TimeFlower",
        tagline: "함께 쓰는 일정이 피어나는 캘린더",
        description: "가족, 연인, 친구가 한 장의 달력을 공유하고 일정마다 장소와 준비물, 대화를 함께 쌓는 공유 캘린더입니다.",
        features: ["게스트로 바로 시작", "초대 링크로 참여", "일정별 대화와 변경 기록"],
      },
      en: {
        displayName: "TimeFlower",
        tagline: "A calendar where shared plans grow",
        description: "A shared calendar where families, couples, and friends plan together and keep places, checklists, and conversations inside every event.",
        features: ["Start instantly as a guest", "Join with an invite link", "Event threads and change history"],
      },
      ja: {
        displayName: "TimeFlower",
        tagline: "一緒に使う予定が育つカレンダー",
        description: "家族、恋人、友人が一つのカレンダーを共有し、予定ごとに場所や持ち物、会話を積み重ねる共有カレンダーです。",
        features: ["ゲストですぐ開始", "招待リンクで参加", "予定ごとの会話と変更履歴"],
      },
    },
    links: [],
  },
  {
    id: "dailyplank",
    order: "04",
    code: "HOLD / GUIDE / REPEAT",
    icon: "app-icons/daily-plank.png",
    version: "0.2.1",
    platforms: ["iOS", "ANDROID", "WEB DEMO"],
    accent: "cobalt",
    status: "live",
    content: {
      ko: {
        displayName: "매일 플랭크",
        tagline: "5분부터 이어 가는 매일의 코어 루틴",
        description: "5·7·10분 루틴을 고르면 음성, 효과음, 진동과 자동 휴식이 다음 자세를 안내하고 운동 기록까지 남기는 플랭크 가이드입니다.",
        features: ["5·7·10분 가이드 루틴", "음성·진동과 자동 휴식", "연속 기록과 성장 마스코트"],
      },
      en: {
        displayName: "Daily Plank",
        tagline: "A daily core routine starting at five minutes",
        description: "Choose a 5, 7, or 10-minute routine and follow voice, sound, haptic, and automatic rest cues while the app keeps your workout history.",
        features: ["5, 7, and 10-minute routines", "Voice, haptics, and automatic rest", "Streaks and a growing mascot"],
      },
      ja: {
        displayName: "毎日プランク",
        tagline: "5分から続ける毎日のコアルーティン",
        description: "5・7・10分のルーティンを選ぶと、音声、効果音、振動、自動休憩が次の姿勢を案内し、運動記録も残すプランクガイドです。",
        features: ["5・7・10分のガイド", "音声・振動と自動休憩", "連続記録と成長するマスコット"],
      },
    },
    links: [{ kind: "web", href: "https://hiorio.github.io/Daily-Plank/" }],
  },
  {
    id: "biondamae",
    order: "05",
    code: "OBSERVE / COMPARE / JUDGE",
    icon: "app-icons/biondamae.png",
    version: "1.1.0",
    platforms: ["WEB", "iOS", "ANDROID"],
    accent: "sky",
    status: "live",
    content: {
      ko: {
        displayName: "비온다매",
        tagline: "예보가 맞았는지 끝까지 보는 날씨 앱",
        description: "현재 관측과 7일 날씨를 보고, 과거 예보와 6개 예보사를 같은 시간 기준으로 맞대어 실제로 얼마나 맞았는지 기록하는 날씨 앱입니다.",
        features: ["현재 관측과 7일 예보", "6개 예보사 맞비교", "과거 예보와 정확도 기록"],
      },
      en: {
        displayName: "Biondamae",
        tagline: "A weather app that checks how the forecast actually did",
        description: "See current observations and the seven-day outlook, then compare six providers and past forecasts at the same point in time to learn what really held up.",
        features: ["Current conditions and 7-day outlook", "Six-provider comparison", "Past forecasts and accuracy history"],
      },
      ja: {
        displayName: "ビオンダメ",
        tagline: "予報が本当に当たったか、最後まで見る天気アプリ",
        description: "現在の観測と7日間予報を確認し、過去の予報と6つの予報元を同じ時刻基準で比較して、実際にどれだけ当たったかを記録する天気アプリです。",
        features: ["現在の観測と7日間予報", "6つの予報元を比較", "過去予報と精度の記録"],
      },
    },
    links: [{ kind: "web", href: "https://weather-forecast-production-0aac.up.railway.app/" }],
  },
];
