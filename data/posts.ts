import { readMd } from '@/utils/readMd';

import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        slug: 'next-15-app-router-metadata',
        title: 'Next.js 15 App Router 메타데이터 설정',
        description: '정적, 동적 메타데이터 설정',
        category: 'react',
        date: '2025-08-27',
        tags: ['nextjs'],
        cover: '/cover1.svg',
        content: readMd('nextjs-metadata'),
    },
    {
        slug: 'blog-experience',
        title: '개인 블로그를 만들며..',
        description: '해당 블로그를 만들며 느낀점',
        category: null,
        date: '2025-08-27',
        tags: ['project'],
        cover: '/cover1.svg',
        content: readMd('blog-exp'),
    },
];

export const searchPost = ({ tag, search, sort }: { tag: string; search: string; sort?: string }) => {
    let arr = [...posts];
    if (tag) {
        arr = arr.filter((post) => post.tags.includes(tag));
    }
    if (search) {
        arr = arr.filter(
            (post) => post.title.includes(search) || post.description.includes(search) || post.tags.includes(search)
        );
    }
    if (sort) {
        arr = arr.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    return arr;
};

export const getTags = () => {
    const tagsArr = posts.map((post) => post.tags);
    const set = new Set(tagsArr.flatMap((tag) => tag));
    return Array.from(set);
};
