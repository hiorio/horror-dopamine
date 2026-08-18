import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["../dist/index.html", "Hiorio — 앱과 콘텐츠를 만드는 사람"],
  ["../dist/channels/index.html", "콘텐츠 채널 | Link Flower"],
  ["../dist/apps/index.html", "만든 앱들 | Link Flower"],
  ["../dist/apps/dohwaji/index.html", "도화지 | 함께 만드는 모임 동선 지도"],
  ["../dist/apps/timeflower/index.html", "TimeFlower | 함께 쓰는 공유 캘린더"],
  ["../dist/apps/daily-plank/index.html", "매일 플랭크 | 5분부터 시작하는 플랭크 가이드"],
  ["../dist/horror/index.html", "공포도파민 | Horror Dopamine"],
];

const operatingIcons = [
  "../dist/app-icons/dohwaji.jpg",
  "../dist/app-icons/timeroots.jpg",
  "../dist/app-icons/timeflower.png",
  "../dist/app-icons/daily-plank.png",
  "../dist/app-icons/biondamae.png",
];

test("루트와 하위 노드의 정적 페이지가 생성된다", async () => {
  for (const [path, title] of pages) {
    const html = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(html, /<html lang="ko">/);
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(html, /\/assets\//);
    assert.doesNotMatch(html, /\/link-flower\//);
    assert.doesNotMatch(html, /chatgpt-team|kaviodori|cloudflare|#\/apps|#\/horror/i);
  }

  const assetsDirectory = new URL("../dist/assets/", import.meta.url);
  const javascriptFile = (await readdir(assetsDirectory)).find((file) => file.endsWith(".js"));
  assert.ok(javascriptFile, "JavaScript bundle should exist");

  const javascript = await readFile(new URL(javascriptFile, assetsDirectory), "utf8");
  assert.match(javascript, /Select language/);
  assert.match(javascript, /言語を選択/);
  assert.match(javascript, /link-flower-locale/);
  assert.match(javascript, /https:\/\/dohwaji\.app/);
  assert.doesNotMatch(javascript, /map-line-production\.up\.railway\.app/);
  assert.match(javascript, /TimeRoots/);
  assert.match(javascript, /TimeFlower/);
  assert.match(javascript, /매일 플랭크/);
  assert.match(javascript, /비온다매/);
  assert.match(javascript, /HIORIO \/ INDEPENDENT MAKER/);
  assert.match(javascript, /THINGS I MADE\./);
  assert.match(javascript, /다음 모임은 도화지 한 장으로 정리하세요/);
  assert.match(javascript, /apps\/dohwaji/);
  assert.match(javascript, /apps\/timeflower/);
  assert.match(javascript, /apps\/daily-plank/);

  for (const path of operatingIcons) {
    const icon = await stat(new URL(path, import.meta.url));
    assert.ok(icon.size > 1000, `${path} should contain the operating app artwork`);
  }

  assert.match(javascript, /app-icons\/dohwaji\.jpg/);
  assert.match(javascript, /app-icons\/timeroots\.jpg/);
  assert.match(javascript, /app-icons\/timeflower\.png/);
  assert.match(javascript, /app-icons\/daily-plank\.png/);
  assert.match(javascript, /app-icons\/biondamae\.png/);

  const rootHtml = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(rootHtml, /https:\/\/hiorio\.com\/og\.png/);
  assert.match(rootHtml, /rel="canonical" href="https:\/\/hiorio\.com\/"/);
  assert.match(rootHtml, /twitter:card/);
  assert.doesNotMatch(rootHtml, /Node Network|노드 선택/);

  const socialImage = await stat(new URL("../dist/og.png", import.meta.url));
  assert.ok(socialImage.size > 100000, "social preview should contain the finished Hiorio artwork");

  const timeFlowerIcon = await readFile(new URL("../dist/app-icons/timeflower.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(timeFlowerIcon).digest("hex"),
    "45b0dd9b95adbf6f0001837b8a230b917fe0773cd2e53c37e105c8bf17c6015a",
    "TimeFlower should use the iPhone build 6 operating icon",
  );

  const biondamaeIcon = await readFile(new URL("../dist/app-icons/biondamae.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(biondamaeIcon).digest("hex"),
    "b30c8eab930b18f2d2169f105b17c7ca925bdcc978fc9cf496965aecd9d0d1a8",
    "Biondamae should use the version 1.1.0 operating icon",
  );
});
