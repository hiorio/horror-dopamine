import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages 정적 빌드가 생성된다", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="ko">/);
  assert.match(html, /<title>공포도파민 \| Horror Dopamine<\/title>/);
  assert.match(html, /\/horror-dopamine\/assets\//);
  assert.doesNotMatch(html, /chatgpt-team|kaviodori|cloudflare/i);

  const assetsDirectory = new URL("../dist/assets/", import.meta.url);
  const javascriptFile = (await readdir(assetsDirectory)).find((file) => file.endsWith(".js"));
  assert.ok(javascriptFile, "JavaScript bundle should exist");

  const javascript = await readFile(new URL(javascriptFile, assetsDirectory), "utf8");
  assert.match(javascript, /Select language/);
  assert.match(javascript, /言語を選択/);
  assert.match(javascript, /horror-dopamine-locale/);
});
