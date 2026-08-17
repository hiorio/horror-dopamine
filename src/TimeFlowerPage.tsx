import type { ReactNode } from "react";
import type { Locale } from "./i18n";
import "./timeflower.css";

type TimeFlowerCopy = {
  pageTitle: string;
  pageDescription: string;
  kicker: string;
  signal: string;
  eyebrow: string;
  title: string;
  heroLine: string;
  heroDescription: string;
  status: string;
  backToApps: string;
  calendarLabel: string;
  month: string;
  weekdays: string[];
  calendarNames: string[];
  eventLabels: string[];
  premiseKicker: string;
  premiseTitle: string;
  premiseDescription: string;
  threadLabel: string;
  threadEvent: string;
  threadMeta: string;
  threadMessages: Array<{ name: string; text: string; time: string }>;
  proofKicker: string;
  proofTitle: string;
  proofs: Array<{ index: string; label: string; title: string; description: string }>;
  flowKicker: string;
  flowTitle: string;
  steps: Array<{ title: string; description: string }>;
  finalKicker: string;
  finalTitle: string;
  footer: string;
};

export const timeFlowerCopy: Record<Locale, TimeFlowerCopy> = {
  ko: {
    pageTitle: "TimeFlower | 함께 쓰는 공유 캘린더",
    pageDescription: "가족, 연인, 친구가 한 장의 달력을 공유하고 일정마다 대화를 이어 가는 TimeFlower",
    kicker: "APP NODE 01-C",
    signal: "SHARED CALENDAR / CONVERSATION",
    eyebrow: "함께 쓰는 일정은 약속에서 끝나지 않습니다.",
    title: "TimeFlower",
    heroLine: "각자의 시간을, 한 장의 달력에.",
    heroDescription: "가족, 연인, 친구와 캘린더를 나누고 일정 안에서 장소와 준비물, 다음 이야기를 함께 정리하세요.",
    status: "운영 중",
    backToApps: "앱 목록 보기",
    calendarLabel: "TimeFlower 공유 캘린더 예시",
    month: "8월",
    weekdays: ["일", "월", "화", "수", "목", "금", "토"],
    calendarNames: ["가족", "우리 둘", "여행 모임"],
    eventLabels: ["부모님 방문", "저녁 약속", "제주 준비", "할머니 생신"],
    premiseKicker: "한 일정에 남아야 하는 것",
    premiseTitle: "날짜를 맞춘 뒤에도 대화는 계속됩니다.",
    premiseDescription: "장소가 바뀌고, 준비물이 생기고, 누가 오는지 달라집니다. TimeFlower는 흩어진 메시지를 일정의 맥락 안에 남깁니다.",
    threadLabel: "일정 대화",
    threadEvent: "할머니 생신",
    threadMeta: "8월 15일 토요일 · 오전 11:00 · 본가",
    threadMessages: [
      { name: "민준", text: "케이크는 제가 찾아갈게요.", time: "10:24" },
      { name: "아영", text: "그럼 과일이랑 초 준비할게!", time: "10:31" },
      { name: "TimeFlower", text: "장소가 ‘본가’로 변경됐어요.", time: "10:42" },
    ],
    proofKicker: "제품의 세 가지 원칙",
    proofTitle: "캘린더보다 함께 쓰는 방식부터 설계했습니다.",
    proofs: [
      { index: "01", label: "START", title: "가입보다 먼저, 첫 일정", description: "앱을 열면 게스트로 바로 시작합니다. 공유가 필요한 순간에만 계정을 연결합니다." },
      { index: "02", label: "INVITE", title: "설명 대신 초대 링크", description: "캘린더마다 링크를 만들고, 미리보기를 확인한 뒤 원하는 사람만 참여합니다." },
      { index: "03", label: "THREAD", title: "일정마다 이어지는 대화", description: "댓글과 참여자, 변경 기록이 일정 안에 남아 단체 채팅을 다시 뒤지지 않아도 됩니다." },
    ],
    flowKicker: "달력이 피어나는 순서",
    flowTitle: "만들고, 초대하고, 함께 채웁니다.",
    steps: [
      { title: "캘린더를 만듭니다", description: "가족, 여행, 모임처럼 함께 보는 시간의 이름을 정합니다." },
      { title: "링크로 사람을 초대합니다", description: "참여할 캘린더를 먼저 확인하고 안전하게 합류합니다." },
      { title: "일정 안에서 이야기합니다", description: "변경과 댓글이 시간순으로 쌓여 약속의 전체 맥락이 남습니다." },
    ],
    finalKicker: "ONE CALENDAR. MANY LIVES.",
    finalTitle: "함께 보내는 시간이 흩어지지 않도록.",
    footer: "서로 다른 사람의 시간을 한 장에 모으는 공유 캘린더",
  },
  en: {
    pageTitle: "TimeFlower | A Calendar Shared Together",
    pageDescription: "TimeFlower is a shared calendar where families, couples, and friends keep a conversation inside every event.",
    kicker: "APP NODE 01-C",
    signal: "SHARED CALENDAR / CONVERSATION",
    eyebrow: "A shared event does not end when the date is set.",
    title: "TimeFlower",
    heroLine: "Different lives, one calendar.",
    heroDescription: "Share calendars with family, partners, and friends, then keep places, plans, and the next conversation inside each event.",
    status: "Live",
    backToApps: "View app index",
    calendarLabel: "Example TimeFlower shared calendar",
    month: "August",
    weekdays: ["S", "M", "T", "W", "T", "F", "S"],
    calendarNames: ["Family", "Us", "Jeju group"],
    eventLabels: ["Visit parents", "Dinner", "Jeju prep", "Grandma's birthday"],
    premiseKicker: "What belongs inside an event",
    premiseTitle: "The conversation continues after the date is set.",
    premiseDescription: "Places change, checklists grow, and attendance shifts. TimeFlower keeps those scattered messages in the context of the event.",
    threadLabel: "Event conversation",
    threadEvent: "Grandma's birthday",
    threadMeta: "Saturday, August 15 · 11:00 AM · Family home",
    threadMessages: [
      { name: "Minjun", text: "I'll pick up the cake.", time: "10:24" },
      { name: "Ayoung", text: "I'll bring fruit and candles!", time: "10:31" },
      { name: "TimeFlower", text: "Location changed to ‘Family home.’", time: "10:42" },
    ],
    proofKicker: "Three product principles",
    proofTitle: "We designed how people share before designing the calendar.",
    proofs: [
      { index: "01", label: "START", title: "First event before sign-up", description: "Start instantly as a guest. Connect an account only when sharing actually needs it." },
      { index: "02", label: "INVITE", title: "An invite link, not instructions", description: "Create a link for each calendar, preview it, and let only the right people join." },
      { index: "03", label: "THREAD", title: "A conversation for every event", description: "Comments, participants, and changes stay together so nobody has to search the group chat." },
    ],
    flowKicker: "How the calendar grows",
    flowTitle: "Create, invite, and fill it together.",
    steps: [
      { title: "Create a calendar", description: "Name the time you share: family, travel, a club, or something else." },
      { title: "Invite people by link", description: "Everyone previews the calendar before joining it safely." },
      { title: "Talk inside each event", description: "Changes and comments form a timeline that preserves the whole plan." },
    ],
    finalKicker: "ONE CALENDAR. MANY LIVES.",
    finalTitle: "Keep the time you share from scattering.",
    footer: "A shared calendar that brings different lives onto one page",
  },
  ja: {
    pageTitle: "TimeFlower | みんなで使う共有カレンダー",
    pageDescription: "家族、恋人、友人が一つのカレンダーを共有し、予定ごとに会話を続けられるTimeFlower。",
    kicker: "APP NODE 01-C",
    signal: "SHARED CALENDAR / CONVERSATION",
    eyebrow: "共有する予定は、日付を決めて終わりではありません。",
    title: "TimeFlower",
    heroLine: "それぞれの時間を、一つのカレンダーに。",
    heroDescription: "家族、恋人、友人とカレンダーを共有し、場所や持ち物、その先の会話まで予定の中でまとめましょう。",
    status: "運営中",
    backToApps: "アプリ一覧を見る",
    calendarLabel: "TimeFlower共有カレンダーの例",
    month: "8月",
    weekdays: ["日", "月", "火", "水", "木", "金", "土"],
    calendarNames: ["家族", "ふたり", "旅行仲間"],
    eventLabels: ["両親を訪問", "夕食の約束", "済州旅行の準備", "祖母の誕生日"],
    premiseKicker: "予定の中に残すもの",
    premiseTitle: "日付を決めたあとも、会話は続きます。",
    premiseDescription: "場所が変わり、持ち物が増え、参加者も変わります。TimeFlowerは散らばったメッセージを予定の文脈に残します。",
    threadLabel: "予定の会話",
    threadEvent: "祖母の誕生日",
    threadMeta: "8月15日 土曜日 · 午前11:00 · 実家",
    threadMessages: [
      { name: "ミンジュン", text: "ケーキは私が受け取ります。", time: "10:24" },
      { name: "アヨン", text: "果物とろうそくを準備するね！", time: "10:31" },
      { name: "TimeFlower", text: "場所が「実家」に変更されました。", time: "10:42" },
    ],
    proofKicker: "三つのプロダクト原則",
    proofTitle: "カレンダーより先に、みんなで使う方法を設計しました。",
    proofs: [
      { index: "01", label: "START", title: "登録より先に最初の予定", description: "ゲストとしてすぐに始め、共有が必要になった時だけアカウントをつなぎます。" },
      { index: "02", label: "INVITE", title: "説明の代わりに招待リンク", description: "カレンダーごとにリンクを作り、プレビューを確認してから参加できます。" },
      { index: "03", label: "THREAD", title: "予定ごとに続く会話", description: "コメント、参加者、変更履歴が予定に残り、グループチャットを探し直す必要がありません。" },
    ],
    flowKicker: "カレンダーが育つ順番",
    flowTitle: "作って、招待して、一緒に埋めていきます。",
    steps: [
      { title: "カレンダーを作る", description: "家族、旅行、集まりなど、一緒に見る時間に名前を付けます。" },
      { title: "リンクで招待する", description: "参加するカレンダーを先に確認し、安全に加わります。" },
      { title: "予定の中で話す", description: "変更とコメントが時系列に積み重なり、約束の文脈が残ります。" },
    ],
    finalKicker: "ONE CALENDAR. MANY LIVES.",
    finalTitle: "一緒に過ごす時間が、散らばらないように。",
    footer: "異なる人の時間を一つにまとめる共有カレンダー",
  },
};

function CalendarSpecimen({ copy }: { copy: TimeFlowerCopy }) {
  const dates = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  return (
    <div className="timeflower-calendar" role="img" aria-label={copy.calendarLabel}>
      <div className="timeflower-calendar-top">
        <div>
          <span>TIMEFLOWER / SHARED</span>
          <strong>{copy.month}</strong>
        </div>
        <div className="timeflower-people" aria-hidden="true"><i>민</i><i>아</i><i>+</i></div>
      </div>
      <div className="timeflower-weekdays" aria-hidden="true">
        {copy.weekdays.map((weekday, index) => <span className={index === 0 ? "is-sunday" : index === 6 ? "is-saturday" : ""} key={`${weekday}-${index}`}>{weekday}</span>)}
      </div>
      <div className="timeflower-days" aria-hidden="true">
        {dates.map((date, index) => (
          <span className={date === 15 ? "is-selected" : ""} key={date}>
            <b>{date}</b>
            {index === 1 && <i className="event event-family">{copy.eventLabels[0]}</i>}
            {index === 4 && <i className="event event-us">{copy.eventLabels[1]}</i>}
            {index === 6 && <i className="event event-trip">{copy.eventLabels[2]}</i>}
            {date === 15 && <i className="event event-birthday">{copy.eventLabels[3]}</i>}
          </span>
        ))}
      </div>
      <div className="timeflower-calendar-key" aria-hidden="true">
        {copy.calendarNames.map((name, index) => <span key={name}><i className={`key-${index + 1}`} />{name}</span>)}
      </div>
    </div>
  );
}

export function TimeFlowerPage({ header, locale, appsHref }: { header: ReactNode; locale: Locale; appsHref: string }) {
  const copy = timeFlowerCopy[locale];

  return (
    <main className="site-shell timeflower-shell">
      <div className="timeflower-paper" aria-hidden="true" />
      {header}

      <section className="timeflower-hero" aria-labelledby="timeflower-page-title">
        <div className="timeflower-hero-copy">
          <div className="timeflower-kicker"><span>{copy.kicker}</span><span>{copy.signal}</span></div>
          <p className="timeflower-eyebrow">{copy.eyebrow}</p>
          <h1 id="timeflower-page-title">{copy.title}</h1>
          <strong>{copy.heroLine}</strong>
          <p>{copy.heroDescription}</p>
          <div className="timeflower-actions">
            <span className="timeflower-status"><i />{copy.status}</span>
            <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
          </div>
        </div>
        <CalendarSpecimen copy={copy} />
      </section>

      <section className="timeflower-premise" aria-labelledby="timeflower-premise-title">
        <div className="timeflower-premise-copy">
          <span>01 / CONTEXT</span>
          <p>{copy.premiseKicker}</p>
          <h2 id="timeflower-premise-title">{copy.premiseTitle}</h2>
          <div className="timeflower-premise-description"><i aria-hidden="true" /><p>{copy.premiseDescription}</p></div>
        </div>
        <article className="timeflower-thread">
          <div className="timeflower-thread-head"><span>{copy.threadLabel}</span><b>•••</b></div>
          <div className="timeflower-thread-event"><i /><div><strong>{copy.threadEvent}</strong><span>{copy.threadMeta}</span></div></div>
          <div className="timeflower-messages">
            {copy.threadMessages.map((message, index) => (
              <div className={index === 2 ? "is-system" : ""} key={`${message.name}-${message.time}`}>
                <i aria-hidden="true">{index === 2 ? "TF" : message.name.slice(0, 1)}</i>
                <p><b>{message.name}</b><span>{message.text}</span></p>
                <time>{message.time}</time>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="timeflower-proof" aria-labelledby="timeflower-proof-title">
        <div className="timeflower-section-heading">
          <span>02 / PRODUCT PRINCIPLES</span>
          <div><p>{copy.proofKicker}</p><h2 id="timeflower-proof-title">{copy.proofTitle}</h2></div>
        </div>
        <div className="timeflower-proof-list">
          {copy.proofs.map((proof, index) => (
            <article key={proof.index}>
              <span>{proof.index}</span>
              <i className={`timeflower-proof-mark mark-${index + 1}`} aria-hidden="true"><b /><b /><b /></i>
              <div><small>{proof.label}</small><h3>{proof.title}</h3><p>{proof.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeflower-flow" aria-labelledby="timeflower-flow-title">
        <div className="timeflower-section-heading">
          <span>03 / SHARED FLOW</span>
          <div><p>{copy.flowKicker}</p><h2 id="timeflower-flow-title">{copy.flowTitle}</h2></div>
        </div>
        <ol>
          {copy.steps.map((step, index) => (
            <li key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="timeflower-final">
        <p>{copy.finalKicker}</p>
        <h2>{copy.finalTitle}</h2>
        <a href={appsHref}>{copy.backToApps}<span aria-hidden="true">←</span></a>
      </section>

      <footer className="site-footer timeflower-footer">
        <div><span className="footer-node">NODE_01-C</span><p>{copy.footer}</p></div><span>© 2026 TIMEFLOWER</span>
      </footer>
    </main>
  );
}
