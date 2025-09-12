# Next.js 메타데이터

Next.js의 메타데이터 API를 활용하면 웹사이트의 **SEO(검색 엔진 최적화)**와 소셜 미디어 공유 기능을 쉽게 개선할 수 있습니다. 다음 세 가지 방법을 통해 메타데이터를 정의할 수 있습니다.

-   정적 **`metadata`** 객체
-   동적 **`generateMetadata`** 함수
-   특별한 **파일 규칙** (파비콘, OG 이미지 등)

이러한 방법을 사용하면 Next.js가 자동으로 `<head>` 태그를 생성해 줍니다. 모든 메타데이터 정의는 서버 컴포넌트에서만 지원됩니다.

---

### 기본 메타 태그

Next.js는 메타데이터를 정의하지 않아도 모든 페이지에 두 가지 기본 `meta` 태그를 자동으로 추가합니다.

-   **`<meta charset="utf-8" />`**: 웹사이트의 문자 인코딩을 설정합니다.
-   **`<meta name="viewport" ... />`**: 다양한 기기에 맞춰 뷰포트 너비와 배율을 조정합니다.

---

## 정적 메타데이터

정적 메타데이터는 빌드 시점에 결정되는, 변하지 않는 정보에 사용합니다. `layout.js` 또는 `page.js` 파일에서 **`Metadata`** 객체를 내보내면 됩니다.

```typescript
// app/blog/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'My Blog',
    description: '블로그에 대한 설명...',
};

export default function Page() {}
```

---

## 동적 메타데이터

동적 메타데이터는 데이터에 따라 내용이 달라지는 정보에 사용합니다. 예를 들어, 블로그 게시물 제목처럼 페이지를 렌더링할 때 데이터를 가져와야 할 경우 **`generateMetadata`** 함수를 사용합니다.

```typescript
// app/blog/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const post = await fetch(`https://.../blog/${params.slug}`).then((res) => res.json());

    return {
        title: post.title,
        description: post.description,
    };
}

export default function Page({ params }: Props) {}
```

### 스트리밍 메타데이터

동적 페이지의 경우, `generateMetadata`가 렌더링을 차단할 수 있다면 Next.js는 메타데이터를 별도로 스트리밍하여 준비가 되는 즉시 HTML에 주입합니다. 정적 페이지는 빌드 시점에 메타데이터가 해결되므로 이 동작을 사용하지 않습니다.

### 데이터 요청 메모이제이션 (Memoizing)

메타데이터와 페이지 컴포넌트에서 동일한 데이터를 가져와야 할 때, 중복 요청을 피하기 위해 React의 **`cache`** 함수를 사용해 데이터 요청을 한 번만 실행하도록 할 수 있습니다.

```typescript
// app/lib/data.ts
import { cache } from 'react';
import { db } from '@/app/lib/db';

export const getPost = cache(async (slug: string) => {
    const res = await db.query.posts.findFirst({ where: eq(posts.slug, slug) });
    return res;
});
```

```typescript
// app/blog/[slug]/page.tsx
import { getPost } from '@/app/lib/data';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    return {
        title: post.title,
        description: post.description,
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    return <div>{post.title}</div>;
}
```

---

## 파일 기반 메타데이터

특정 파일명을 사용하여 메타데이터를 정의할 수도 있습니다.

-   `favicon.ico`, `apple-icon.jpg`, `icon.jpg`
-   `opengraph-image.jpg`, `twitter-image.jpg`
-   `robots.txt`
-   `sitemap.xml`

이 파일들은 정적으로 제공되거나, 코드를 통해 동적으로 생성될 수 있습니다.

### 파비콘

애플리케이션의 루트 (`app` 폴더)에 **`favicon.ico`** 파일을 추가하면 자동으로 파비콘이 적용됩니다.

### Open Graph (OG) 이미지

소셜 미디어에 공유될 때 미리보기 이미지 역할을 하는 OG 이미지는 다음 두 가지 방법으로 정의할 수 있습니다.

#### 정적 OG 이미지

`app` 폴더 루트에 **`opengraph-image.png`** 파일을 추가하여 정적 이미지를 설정합니다. 특정 라우트(`app/blog/opengraph-image.png`)에 파일을 추가하면 더 구체적인 OG 이미지를 적용할 수 있으며, 이는 상위 폴더의 이미지보다 우선순위가 높습니다. `jpeg`, `png`, `gif` 등 다양한 형식을 지원합니다.

#### 동적 OG 이미지

**`ImageResponse`** 생성자를 사용해 JSX와 CSS로 동적 OG 이미지를 생성할 수 있습니다. 예를 들어, 블로그 게시물 제목을 이미지에 포함하는 경우에 유용합니다. `next/og`에서 `ImageResponse`를 가져와 사용합니다.

```typescript
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { getPost } from '@/app/lib/data';

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {post.title}
            </div>
        )
    );
}
```

-   `ImageResponse`는 Flexbox와 CSS 속성의 일부만 지원합니다. (`display: grid`와 같은 고급 레이아웃은 지원하지 않습니다.)

## Reference

[next.js 공식문서](https://nextjs.org/docs/app/getting-started/metadata-and-og-images#generated-metadata)

---
