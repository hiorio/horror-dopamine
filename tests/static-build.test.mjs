import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("GitHub Pages 정적 빌드가 생성된다", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="ko">/);
  assert.match(html, /<title>공포도파민 \| Horror Dopamine<\/title>/);
  assert.match(html, /\/horror-dopamine\/assets\//);
  assert.doesNotMatch(html, /chatgpt-team|kaviodori|cloudflare/i);
});
