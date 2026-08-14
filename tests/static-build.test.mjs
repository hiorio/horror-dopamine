import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["../dist/index.html", "Link Flower | Node Network"],
  ["../dist/channels/index.html", "콘텐츠 채널 | Link Flower"],
  ["../dist/apps/index.html", "앱 개발. | Link Flower"],
  ["../dist/apps/dohwaji/index.html", "도화지 | 함께 만드는 모임 동선 지도"],
  ["../dist/horror/index.html", "공포도파민 | Horror Dopamine"],
];

test("루트와 세 하위 노드의 정적 페이지가 생성된다", async () => {
  for (const [path, title] of pages) {
    const html = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(html, /<html lang="ko">/);
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(html, /\/link-flower\/assets\//);
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
  assert.match(javascript, /ROOT NODE 00/);
  assert.match(javascript, /APP DEVELOPMENT\./);
  assert.match(javascript, /다음 모임은 도화지 한 장으로 정리하세요/);
  assert.match(javascript, /apps\/dohwaji/);
});
