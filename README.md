# 공포도파민 채널 노드

공포도파민의 YouTube, Instagram, TikTok 채널을 연결하는 정적 링크 허브입니다.
서버나 데이터베이스 없이 GitHub Pages에서 배포됩니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 노드 추가

`src/nodes.ts`의 `nodes` 객체에 새 노드를 추가합니다. 각 노드는 `parentId`와
`childIds`를 가지므로 상위·하위 구조를 확장할 수 있습니다. 주소는
`/#/노드-id` 형식을 사용합니다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 정적 파일을
빌드해 GitHub Pages에 배포합니다.
