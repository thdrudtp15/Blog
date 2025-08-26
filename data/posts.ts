import { markdownSample } from '@/markdown/post';

import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        slug: 'next-15-app-router-best-practices',
        title: 'Next.js 15 App Router 베스트 프랙티스Next.js 15 App Router 베스트 프랙티스',
        description: '레이아웃, 스트리밍, 서버액션을 활용한 구조 설계 노트',
        date: '2025-01-10',
        tags: ['nextjs', 'react', 'architecture'],
        cover: '/cover1.svg',
        readingMinutes: 7,
        content: markdownSample,
    },
    {
        slug: 'next-152-app-router-best-practices',
        title: 'Next.js 15.5 App Router 베스트 프랙티스Next.js 15 App Router 베스트 프랙티스',
        description: '레이아웃, 스트리밍, 서버액션을 활용한 구조 설계 노트',
        date: '2025-01-10',
        tags: ['nextjs', 'react'],
        cover: '/cover1.svg',
        readingMinutes: 7,
        content: markdownSample,
    },
];

export const getPost = ({ tag, search, sort }: { tag: string; search: string; sort: string }) => {
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
