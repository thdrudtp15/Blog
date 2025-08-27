# 1.정적 메타데이터 설정

정적 메타데이터는 파일 최상단(모듈 스코프)에 `metadata` 변수를 선언하여
설정할 수 있습니다.

```ts
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '메타 태그 제목',
    description: '메타 태그 설명',
    keywords: ['Next.js', '블로그', 'SEO'],
    openGraph: {
        title: '오픈 그래프 제목',
        description: '오픈 그래프 설명',
        url: 'https://~',
        siteName: 'My Blog',
        images: [
            {
                url: 'https://myblog.com/og-image.png',
                width: 800,
                height: 600,
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};
```

> ⚡ App Router에서는 메타데이터가 `레이아웃 단위`로 상속됩니다. 따라서
> 하위 페이지에서 별도로 설정하지 않으면 레이아웃에 정의된 메타데이터가
> 기본적으로 적용됩니다.

페이지마다 고유한 메타데이터가 필요한 경우, 페이지에서 동일한 방식으로
`metadata`를 선언하거나 `generateMetadata` 함수를 사용하여 상위
레이아웃의 메타데이터를 오버라이드 할 수 있습니다.

---

# 2. 동적 메타데이터 태그 설정

게시글 상세 페이지나 상품 페이지처럼 URL이나 API 데이터에 따라
메타데이터가 달라져야 하는 경우, Next.js에서는 `generateMetadata` 함수를
사용해 동적으로 메타데이터를 생성할 수 있습니다.

```ts
// app/posts/[slug]/page.tsx
import type { Metadata } from 'next';

type Props = {
    params: { slug: string };
};

// generateMetadata 함수에서 게시글 정보를 가져와 메타데이터를 동적으로 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await fetchPost(params.slug); // API나 DB에서 게시글 정보 가져오기

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            images: [
                {
                    url: post.thumbnail,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export default async function PostPage({ params }: Props) {
    const post = await fetchPost(params.slug);

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </article>
    );
}
```
