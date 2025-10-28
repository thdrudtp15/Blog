# 📝 블로그 프로젝트

학습 내용 기록을 위한 개인 기술 블로그입니다.
MDX 기반 서버리스 아키텍처로 구현하였습니다.

---

## 🔗 배포 링크

-   [링크](https://blog-eight-rho-53.vercel.app/)

---

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인 가능합니다.

### 빌드

```bash
npm run build
npm run start
```

---

## ✍️ 게시글 작성 방법

1. `posts/` 디렉토리에 `.mdx` 파일 생성
2. Frontmatter 작성:

```mdx
---
title: '게시글 제목'
description: '게시글 설명'
date: '2025-10-21'
tags: ['Next.js', 'React']
cover: /covers/image.webp
---

# 내용 작성
```

3. 파일 저장 시 자동으로 블로그에
   반영됩니다.

---

## ✨ 주요 기능

-   📖 MDX 기반 포스트 작성 및 관리
-   🔍 검색 기능
-   📱 반응형 디자인
-   🌙 다크 모드 지원
-   📜 TOC(목차) 자동 생성

---

## 🛠️ 기술 스택

| Category  | Tech                                                   |
| --------- | ------------------------------------------------------ |
| Frontend  | Next.js, React, TypeScript                             |
| Libraries | next/mdx, highlight.js, remark, rehype, gray-matter 등 |

---

## 📝 구현 기능

### 📖 콘텐츠 관리

-   MDX 파일 기반 자동 게시글 생성
-   gray-matter를 통한 메타데이터 파싱
-   파일 추가만으로 즉시 반영

### 🔍 검색 및 필터

-   제목/설명/태그 기반 통합 검색
-   태그별 게시글 필터링
-   날짜순 자동 정렬

### 📝 게시글 기능

-   코드 하이라이팅 (highlight.js)
-   자동 목차(TOC) 생성
-   GitHub Discussions 기반 댓글 (Giscus)
-   반응형 이미지 최적화

### 🎨 UI/UX

-   다크/라이트 모드 토글
-   반응형 디자인 (모바일/태블릿/PC)
-   SCSS Modules 기반 스타일링

---

## 📚 문제 해결

### **next-mdx-remote의 버전 호환 불가로 인한 빌드 오류 발생** :

Next.js의 최신 버전에서 next-mdx-remote의 호환으로 인해
빌드가 불가능 하던 문제가 발생하였습니다, next.config.ts의 설정을 변경하여 next-mdx-remote 패키지를 명시적으로 트랜스파일 하도록 설정하여 빌드 오류를 해결 할 수 있었습니다.

---
