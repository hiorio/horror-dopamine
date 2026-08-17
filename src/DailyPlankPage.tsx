import type { ReactNode } from "react";
import type { Locale } from "./i18n";
import "./daily-plank.css";

type DailyPlankCopy = {
  pageTitle: string;
  pageDescription: string;
  kicker: string;
  signal: string;
  eyebrow: string;
  title: [string, string];
  heroLine: string;
  heroDescription: string;
  openDemo: string;
  status: string;
  backToApps: string;
  timerLabel: string;
  currentStep: string;
  nextStep: string;
  pause: string;
  routineKicker: string;
  routineTitle: string;
  routines: Array<{ minutes: string; level: string; title: string; description: string }>;
  coachKicker: string;
  coachTitle: string;
  coachDescription: string;
  cueTitle: string;
  cues: Array<{ time: string; label: string; text: string }>;
  recordKicker: string;
  recordTitle: string;
  recordDescription: string;
  weekDays: string[];
  weekLabel: string;
  streakLabel: string;
  streakValue: string;
  totalLabel: string;
  totalValue: string;
  mascotMessage: string;
  finalKicker: string;
  finalTitle: string;
  footer: string;
};

export const dailyPlankCopy: Record<Locale, DailyPlankCopy> = {
  ko: {
    pageTitle: "매일 플랭크 | 5분부터 시작하는 플랭크 가이드",
    pageDescription: "5·7·10분 루틴과 음성·진동 안내, 운동 기록으로 매일의 플랭크를 이어 주는 운동 가이드 앱",
    kicker: "APP NODE 01-D",
    signal: "GUIDED WORKOUT / DAILY STREAK",
    eyebrow: "버티는 동안 화면의 숫자까지 셀 필요는 없으니까.",
    title: ["매일", "플랭크"],
    heroLine: "5분만 정하면, 다음은 앱이 챙깁니다.",
    heroDescription: "준비부터 운동과 휴식, 마지막 카운트다운까지. 음성과 진동을 따라 오늘의 루틴을 끝내세요.",
    openDemo: "웹 데모 열기",
    status: "iOS 테스트앱 준비 중",
    backToApps: "앱 목록",
    timerLabel: "전체 0:47 / 5:00",
    currentStep: "니 플랭크",
    nextStep: "다음 · 기본 포어암 플랭크",
    pause: "일시정지",
    routineKicker: "오늘의 강도를 고르는 가장 짧은 방법",
    routineTitle: "시간 하나만 고르면 바로 시작합니다.",
    routines: [
      { minutes: "05", level: "초급", title: "처음 버티는 날", description: "기본 자세와 넉넉한 휴식으로 시작하는 8개 동작" },
      { minutes: "07", level: "중급", title: "조금 더 움직이는 날", description: "정적 플랭크와 동작을 섞은 11개 동작" },
      { minutes: "10", level: "고급", title: "끝까지 밀어붙이는 날", description: "고강도 동작과 회복을 균형 있게 둔 14개 동작" },
    ],
    coachKicker: "화면을 계속 보지 않아도 되는 코치",
    coachTitle: "남은 초보다 다음 자세를 먼저 알려줍니다.",
    coachDescription: "동작이 바뀔 때는 음성으로, 마지막 몇 초는 효과음과 진동으로 알립니다. 휴식도 자동으로 넘어가 운동의 흐름이 끊기지 않습니다.",
    cueTitle: "5분 초급 플랭크 · LIVE CUES",
    cues: [
      { time: "00:10", label: "VOICE", text: "10초 뒤, 니 플랭크를 시작합니다." },
      { time: "00:40", label: "REST", text: "15초 휴식. 다음 자세를 미리 확인하세요." },
      { time: "00:52", label: "HAPTIC", text: "3 · 2 · 1, 진동과 함께 다음 동작으로." },
    ],
    recordKicker: "한 번의 운동을 내일로 연결하는 기록",
    recordTitle: "하루의 5분이 끊기지 않게.",
    recordDescription: "완료한 루틴과 누적 시간, 연속 운동일을 기기에 남깁니다. 함께 버티는 마스코트는 운동할수록 자랍니다.",
    weekDays: ["월", "화", "수", "목", "금", "토", "일"],
    weekLabel: "이번 주",
    streakLabel: "연속 운동",
    streakValue: "4일",
    totalLabel: "주간 누적",
    totalValue: "27분",
    mascotMessage: "오늘까지 4일 연속! 같이 버텨볼까요?",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "오늘은 5분부터, 내일도 다시.",
    footer: "다음 동작을 챙기고 매일의 기록을 이어 주는 플랭크 가이드",
  },
  en: {
    pageTitle: "Daily Plank | Guided Plank Routines from 5 Minutes",
    pageDescription: "A guided workout app with 5, 7, and 10-minute routines, voice and haptic cues, and daily progress tracking.",
    kicker: "APP NODE 01-D",
    signal: "GUIDED WORKOUT / DAILY STREAK",
    eyebrow: "Because holding a plank is enough work without counting the screen.",
    title: ["Daily", "Plank"],
    heroLine: "Pick five minutes. The app handles what comes next.",
    heroDescription: "From warm-up to work, rest, and the final countdown, follow voice and haptic cues to finish today's routine.",
    openDemo: "Open web demo",
    status: "iOS test app in progress",
    backToApps: "App index",
    timerLabel: "TOTAL 0:47 / 5:00",
    currentStep: "Knee plank",
    nextStep: "Next · Forearm plank",
    pause: "Pause",
    routineKicker: "The shortest way to choose today's intensity",
    routineTitle: "Choose one duration and start.",
    routines: [
      { minutes: "05", level: "Beginner", title: "A day to begin", description: "Eight movements with fundamentals and generous recovery" },
      { minutes: "07", level: "Intermediate", title: "A day to move more", description: "Eleven movements mixing static holds and motion" },
      { minutes: "10", level: "Advanced", title: "A day to push through", description: "Fourteen intense movements balanced with recovery" },
    ],
    coachKicker: "A coach you do not have to keep watching",
    coachTitle: "Know the next pose before the last second.",
    coachDescription: "Voice announces every transition. Sound and haptics mark the final seconds. Rest advances automatically so the workout never loses its rhythm.",
    cueTitle: "5-MIN BEGINNER PLANK · LIVE CUES",
    cues: [
      { time: "00:10", label: "VOICE", text: "Knee plank begins in ten seconds." },
      { time: "00:40", label: "REST", text: "Rest for 15 seconds. Preview the next pose." },
      { time: "00:52", label: "HAPTIC", text: "3 · 2 · 1, move with the vibration." },
    ],
    recordKicker: "A record that carries one workout into tomorrow",
    recordTitle: "Keep five minutes a day unbroken.",
    recordDescription: "Completed routines, accumulated time, and streaks stay on your device. The mascot holding each plank with you grows along with your workout days.",
    weekDays: ["M", "T", "W", "T", "F", "S", "S"],
    weekLabel: "This week",
    streakLabel: "Current streak",
    streakValue: "4 days",
    totalLabel: "Weekly total",
    totalValue: "27 min",
    mascotMessage: "Four days in a row! Ready to hold one more?",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "Start with five today. Return tomorrow.",
    footer: "A plank guide that handles the next move and keeps every day connected",
  },
  ja: {
    pageTitle: "毎日プランク | 5分から始めるプランクガイド",
    pageDescription: "5・7・10分のルーティン、音声と振動の案内、運動記録で毎日のプランクを続けるガイドアプリ。",
    kicker: "APP NODE 01-D",
    signal: "GUIDED WORKOUT / DAILY STREAK",
    eyebrow: "耐えている間まで、画面の数字を数えなくていいように。",
    title: ["毎日", "プランク"],
    heroLine: "5分を選べば、次の動きはアプリにおまかせ。",
    heroDescription: "準備、運動、休憩、最後のカウントダウンまで。音声と振動に沿って今日のルーティンを終えましょう。",
    openDemo: "Webデモを開く",
    status: "iOSテストアプリ準備中",
    backToApps: "アプリ一覧",
    timerLabel: "全体 0:47 / 5:00",
    currentStep: "膝つきプランク",
    nextStep: "次 · フォアアームプランク",
    pause: "一時停止",
    routineKicker: "今日の強度を選ぶ、いちばん短い方法",
    routineTitle: "時間を一つ選べば、すぐ始められます。",
    routines: [
      { minutes: "05", level: "初級", title: "まず耐えてみる日", description: "基本姿勢と長めの休憩で始める8動作" },
      { minutes: "07", level: "中級", title: "少し多く動く日", description: "静止と動きを組み合わせた11動作" },
      { minutes: "10", level: "上級", title: "最後までやり切る日", description: "高強度の動きと回復を整えた14動作" },
    ],
    coachKicker: "画面を見続けなくてもいいコーチ",
    coachTitle: "残り秒数より先に、次の姿勢を知らせます。",
    coachDescription: "動作の切り替えは音声で、最後の数秒は効果音と振動で案内。休憩も自動で進むので、運動の流れが止まりません。",
    cueTitle: "5分 初級プランク · LIVE CUES",
    cues: [
      { time: "00:10", label: "VOICE", text: "10秒後、膝つきプランクを始めます。" },
      { time: "00:40", label: "REST", text: "15秒休憩。次の姿勢を確認しましょう。" },
      { time: "00:52", label: "HAPTIC", text: "3・2・1、振動と一緒に次の動作へ。" },
    ],
    recordKicker: "一回の運動を明日につなぐ記録",
    recordTitle: "一日5分を、途切れさせない。",
    recordDescription: "完了したルーティン、累積時間、連続運動日を端末に残します。一緒に耐えるマスコットも運動日とともに成長します。",
    weekDays: ["月", "火", "水", "木", "金", "土", "日"],
    weekLabel: "今週",
    streakLabel: "連続運動",
    streakValue: "4日",
    totalLabel: "週間累計",
    totalValue: "27分",
    mascotMessage: "今日で4日連続！もう一回、一緒に耐える？",
    finalKicker: "FIVE MINUTES. EVERY DAY.",
    finalTitle: "今日は5分から。明日もまた。",
    footer: "次の動作を案内し、毎日の記録をつなぐプランクガイド",
  },
};

function PlankMascot({ small = false }: { small?: boolean }) {
  return (
    <span className={`dailyplank-mascot ${small ? "is-small" : ""}`} aria-hidden="true">
      <i className="dailyplank-mascot-tail" />
      <i className="dailyplank-mascot-body" />
      <i className="dailyplank-mascot-eye eye-left" />
      <i className="dailyplank-mascot-eye eye-right" />
      <i className="dailyplank-mascot-beak" />
      <i className="dailyplank-mascot-arm arm-left" />
      <i className="dailyplank-mascot-arm arm-right" />
      <i className="dailyplank-mascot-leg leg-left" />
      <i className="dailyplank-mascot-leg leg-right" />
      <i className="dailyplank-mascot-sweat" />
    </span>
  );
}

function WorkoutConsole({ copy }: { copy: DailyPlankCopy }) {
  return (
    <div className="dailyplank-console" role="img" aria-label={`${copy.currentStep}, ${copy.timerLabel}`}>
      <div className="dailyplank-phone">
        <div className="dailyplank-phone-head"><span>‹</span><b>{copy.timerLabel}</b><span>•••</span></div>
        <div className="dailyplank-progress"><i /></div>
        <div className="dailyplank-timer">
          <span>WORK</span><strong>0:30</strong><small>{copy.currentStep}</small>
        </div>
        <div className="dailyplank-mascot-stage"><PlankMascot /></div>
        <div className="dailyplank-next"><span>NEXT</span><b>{copy.nextStep}</b></div>
        <div className="dailyplank-controls" aria-hidden="true"><i>‹</i><b>{copy.pause}</b><i>›</i></div>
      </div>
      <div className="dailyplank-console-note note-voice"><span>VOICE</span><b>10</b><i /></div>
      <div className="dailyplank-console-note note-haptic"><span>HAPTIC</span><b>•••</b><i /></div>
    </div>
  );
}

export function DailyPlankPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = dailyPlankCopy[locale];
  const demoUrl = "https://hiorio.github.io/Daily-Plank/";

  return (
    <main className="site-shell dailyplank-shell">
      <div className="dailyplank-field" aria-hidden="true" />
      {header}

      <section className="dailyplank-hero" aria-labelledby="dailyplank-page-title">
        <div className="dailyplank-hero-copy">
          <div className="dailyplank-kicker"><span>{copy.kicker}</span><span>{copy.signal}</span></div>
          <p className="dailyplank-eyebrow">{copy.eyebrow}</p>
          <h1 id="dailyplank-page-title"><span>{copy.title[0]}</span><strong>{copy.title[1]}</strong></h1>
          <h2>{copy.heroLine}</h2>
          <p className="dailyplank-description">{copy.heroDescription}</p>
          <div className="dailyplank-actions">
            <a className="dailyplank-primary" href={demoUrl} target="_blank" rel="noreferrer">{copy.openDemo}<span aria-hidden="true">↗</span></a>
            <span className="dailyplank-status"><i />{copy.status}</span>
            <a className="dailyplank-back" href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
          </div>
        </div>
        <WorkoutConsole copy={copy} />
      </section>

      <section className="dailyplank-routines" aria-labelledby="dailyplank-routines-title">
        <div className="dailyplank-section-intro">
          <span>01 / PICK A ROUTINE</span>
          <div><p>{copy.routineKicker}</p><h2 id="dailyplank-routines-title">{copy.routineTitle}</h2></div>
        </div>
        <div className="dailyplank-routine-rail">
          {copy.routines.map((routine, index) => (
            <article key={routine.minutes}>
              <div className="dailyplank-minute"><strong>{routine.minutes}</strong><span>MIN</span></div>
              <div><small>0{index + 1} · {routine.level}</small><h3>{routine.title}</h3><p>{routine.description}</p></div>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="dailyplank-coach" aria-labelledby="dailyplank-coach-title">
        <div className="dailyplank-coach-copy">
          <span>02 / EYES-FREE COACH</span>
          <p>{copy.coachKicker}</p>
          <h2 id="dailyplank-coach-title">{copy.coachTitle}</h2>
          <div className="dailyplank-coach-description"><i aria-hidden="true" /><p>{copy.coachDescription}</p></div>
        </div>
        <div className="dailyplank-cue-board">
          <div className="dailyplank-cue-head"><span>{copy.cueTitle}</span><i>LIVE</i></div>
          <div className="dailyplank-cue-timeline">
            {copy.cues.map((cue, index) => (
              <article key={cue.time}>
                <time>{cue.time}</time><i className={`cue-dot cue-${index + 1}`} /><div><small>{cue.label}</small><p>{cue.text}</p></div>
              </article>
            ))}
          </div>
          <div className="dailyplank-wave" aria-hidden="true">{Array.from({ length: 31 }, (_, index) => <i key={index} />)}</div>
        </div>
      </section>

      <section className="dailyplank-record" aria-labelledby="dailyplank-record-title">
        <div className="dailyplank-history-board">
          <div className="dailyplank-history-head"><span>{copy.weekLabel}</span><b>AUG / WEEK 34</b></div>
          <div className="dailyplank-week">
            {copy.weekDays.map((day, index) => <span className={index < 4 ? "is-done" : ""} key={`${day}-${index}`}><small>{day}</small><b>{18 + index}</b><i>{index < 4 ? "✓" : ""}</i></span>)}
          </div>
          <div className="dailyplank-stats">
            <div><span>{copy.streakLabel}</span><strong>{copy.streakValue}</strong></div>
            <div><span>{copy.totalLabel}</span><strong>{copy.totalValue}</strong></div>
          </div>
          <div className="dailyplank-mascot-message"><PlankMascot small /><p>{copy.mascotMessage}</p></div>
        </div>
        <div className="dailyplank-record-copy">
          <span>03 / KEEP THE STREAK</span>
          <p>{copy.recordKicker}</p>
          <h2 id="dailyplank-record-title">{copy.recordTitle}</h2>
          <div><i aria-hidden="true" /><p>{copy.recordDescription}</p></div>
        </div>
      </section>

      <section className="dailyplank-final">
        <p>{copy.finalKicker}</p>
        <h2>{copy.finalTitle}</h2>
        <div><a className="dailyplank-primary" href={demoUrl} target="_blank" rel="noreferrer">{copy.openDemo}<span aria-hidden="true">↗</span></a><a className="dailyplank-back" href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a></div>
      </section>

      <footer className="site-footer dailyplank-footer">
        <div><span className="footer-node">NODE_01-D</span><p>{copy.footer}</p></div><span>© 2026 DAILY PLANK</span>
      </footer>
    </main>
  );
}
