# giscus로 블로그에 댓글 기능 추가하기

giscus는 [GitHub Discussions](https://docs.github.com/en/discussions)를 기반으로 하는 댓글 시스템입니다. 방문자들이 GitHub 계정을 사용해 블로그 포스트에 댓글과 반응을 남길 수 있게 해주며, 모든 데이터는 연동된 GitHub 저장소의 Discussions에 저장됩니다.

## giscus의 장점

-   **무료 및 오픈소스**: 광고나 추적 없이 무료로 사용할 수 있습니다.
-   **간편한 설정**: 별도의 데이터베이스나 백엔드 서버 없이 GitHub 저장소만 있으면 됩니다.
-   **익숙한 UI**: GitHub 유저에게 익숙한 댓글 환경을 제공합니다.
-   **다양한 테마**: 블로그 디자인에 맞춰 라이트/다크 모드 등 다양한 테마를 설정할 수 있습니다.
-   **높은 보안성**: 모든 인증 과정은 GitHub OAuth를 통해 이루어집니다.

---

## giscus 적용 방법

### 1. 사전 준비

1.  **Public GitHub 저장소 생성**: giscus와 연동할 공개(Public) 저장소가 필요합니다. Private 저장소는 지원하지 않습니다.
2.  **Discussions 활성화**: 연동할 저장소의 **Settings** 탭으로 이동하여 **General** 섹션 아래에 있는 **Discussions** 기능을 활성화합니다.
3.  **giscus 앱 설치**: [giscus GitHub App](https://github.com/apps/giscus) 페이지로 이동하여 연동할 저장소에 앱을 설치하고 권한을 부여합니다.

### 2. giscus 설정

1.  [giscus 공식 웹사이트](https://giscus.app/ko)로 이동하여 설정을 시작합니다.

2.  **저장소 경로 입력**: `username/repository` 형식으로 연동할 저장소의 경로를 입력합니다.

3.  **페이지 ↔️ Discussions 매핑 설정**: 블로그의 특정 페이지와 GitHub Discussions를 어떻게 연결할지 결정합니다. 일반적으로 `pathname`이나 `title`을 사용합니다.

    -   `pathname`을 사용하면 `https://example.com/posts/my-post`와 같은 주소 경로를 기준으로 Discussions를 생성합니다.

4.  **Discussions 카테고리 선택**: 댓글이 달릴 때 생성될 Discussions의 카테고리를 지정합니다. 미리 저장소의 Discussions 탭에서 카테고리를 생성해두는 것이 좋습니다. (예: "Comments", "General")

5.  **기능 및 테마 설정**:

    -   **Reactions**: 포스트에 대한 반응(👍, ❤️ 등)을 활성화합니다.
    -   **Theme**: 블로그 디자인에 맞는 테마를 선택합니다. `light`, `dark`, `preferred_color_scheme` (시스템 설정 따름) 등을 선택할 수 있습니다.

6.  **스크립트 생성 및 복사**: 모든 설정을 마치면 giscus가 `<script>` 코드를 생성해줍니다. 이 코드를 복사합니다.

### 3. Next.js (React) 프로젝트에 적용하기

생성된 스크립트를 React 컴포넌트로 만들어 블로그에 쉽게 적용할 수 있습니다.

```tsx
// components/Giscus.tsx

'use client';

import React from 'react';

export default function Giscus() {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!ref.current || ref.current.hasChildNodes()) return;

        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://giscus.app/client.js';
        scriptElem.async = true;
        scriptElem.crossOrigin = 'anonymous';

        // giscus.app에서 생성된 속성들을 여기에 추가합니다.
        scriptElem.setAttribute('data-repo', '[YOUR_USERNAME]/[YOUR_REPO]');
        scriptElem.setAttribute('data-repo-id', '[YOUR_REPO_ID]');
        scriptElem.setAttribute('data-category', '[YOUR_CATEGORY_NAME]');
        scriptElem.setAttribute('data-category-id', '[YOUR_CATEGORY_ID]');
        scriptElem.setAttribute('data-mapping', 'pathname');
        scriptElem.setAttribute('data-strict', '0');
        scriptElem.setAttribute('data-reactions-enabled', '1');
        scriptElem.setAttribute('data-emit-metadata', '0');
        scriptElem.setAttribute('data-input-position', 'bottom');
        scriptElem.setAttribute('data-theme', 'preferred_color_scheme');
        scriptElem.setAttribute('data-lang', 'ko');

        ref.current.appendChild(scriptElem);
    }, []);

    return <section ref={ref} />;
}
```

-   `[YOUR_USERNAME]/[YOUR_REPO]`, `[YOUR_REPO_ID]` 등 대괄호로 묶인 부분은 giscus 웹사이트에서 생성된 스크립트의 값으로 채워야 합니다.
-   위 컴포넌트를 댓글을 표시하고 싶은 페이지에 추가하면 됩니다.
