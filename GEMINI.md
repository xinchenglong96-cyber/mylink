# 프로젝트 개요: 마이링크 (MyLink)

마이링크는 사용자가 자신의 다양한 소셜 미디어, 포트폴리오, 웹사이트 링크를 하나의 통합된 프로필 페이지로 모아서 공유할 수 있는 서비스입니다.

## 🛠 기술 스택
- **프레임워크:** Next.js (App Router)
- **언어:** TypeScript
- **스타일링:** Tailwind CSS, shadcn/ui
- **백엔드/DB:** Firebase (Authentication, Firestore, Storage)
- **상태 관리:** React Context API (AuthContext)
- **아이콘:** Phosphor Icons

## 📂 프로젝트 구조
- `app/`: Next.js App Router 기반의 페이지 및 레이아웃
- `components/`: UI 컴포넌트 (shadcn/ui 및 커스텀 컴포넌트)
- `lib/`: Firebase 설정, Auth Context, 유틸리티 함수
- `docs/`: PRD(요구사항 정의서), 사용자 시나리오, 와이어프레임 등 설계 문서
- `public/`: 정적 자원 (이미지, 파비콘 등)

## 🚀 주요 명령어
- `npm run dev`: 개발 서버 실행 (Turbopack 사용)
- `npm run build`: 프로덕션 빌드 생성
- `npm run start`: 빌드된 프로덕션 서버 실행
- `npm run lint`: ESLint를 사용한 코드 린팅
- `npm run format`: Prettier를 사용한 코드 포맷팅
- `npm run typecheck`: TypeScript 타입 체크

## 📏 개발 규칙 및 컨벤션
1. **언어 설정:** 계획(Plan), 태스크(Task), 워크스루(Walkthrough)는 반드시 **한글**로 작성합니다. 모든 응답은 **한국어**를 기본으로 합니다.
2. **UI/UX 디자인:** 
    - **퍼블릭 뷰:** 모바일 우선(Mobile-First) 디자인을 적용하며, `docs/wireframes.md`의 레이아웃을 준수합니다.
    - **대시보드:** 관리자 대시보드는 데스크톱에서 실시간 미리보기를 포함한 2컬럼 레이아웃으로 구현합니다.
    - **컴포넌트:** Tailwind CSS와 shadcn/ui를 사용하며, 인터렉티브한 요소(드래그 앤 드롭 등)를 고려합니다.
3. **Firebase 활용:** `lib/firebase.ts`에 정의된 인스턴스를 사용하며, 인증 상태는 `lib/auth-context.tsx`의 `useAuth` 훅을 통해 접근합니다.
4. **검증 절차:** 개발 작업이 완료된 후에는 반드시 `npm run build` 명령어를 실행하여 빌드 오류가 없는지 확인합니다.
5. **설계 우선:** 새로운 기능을 구현하기 전에는 `docs/` 내의 설계 문서(PRD, 와이어프레임 등)를 먼저 참조하여 요구사항을 파악합니다.

---
*이 파일은 Gemini CLI의 지침 컨텍스트로 사용됩니다.*
