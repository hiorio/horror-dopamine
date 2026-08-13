# Link Flower

앱 개발과 공포도파민을 연결하는 최상위 개인 노드 네트워크입니다.
서버나 데이터베이스 없이 GitHub Pages에서 배포됩니다.

## 노드 구조

- `/link-flower/`: 최상위 메인 노드
- `/link-flower/apps/`: NODE_01 앱 개발. — 도화지, TimeRoots
- `/link-flower/apps/dohwaji/`: NODE_01-A 도화지 제품 소개
- `/link-flower/horror/`: NODE_02 공포도파민 브랜드
- `/link-flower/channels/`: NODE_02-A 공포도파민의 외부 채널 연결 페이지

해시 라우팅을 사용하지 않습니다. 각 경로는 독립 HTML 진입점을 가지므로 직접 접근과
새로고침이 모두 동작합니다.

브라우저 언어를 기준으로 한국어, 영어, 일본어를 자동 선택하며 헤더에서 직접 변경할 수
있습니다. 지원하지 않는 언어의 기본값은 한국어입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

앱 개발 노드의 제품은 `src/apps.ts`의 `productApps` 배열에서 관리합니다.
공포도파민 브랜드와 채널 데이터는 `src/nodes.ts`에서 관리합니다.

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy-pages.yml`이 정적 파일을 빌드해
GitHub Pages에 배포합니다.
