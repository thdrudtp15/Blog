import { readMd } from '@/utils/readMd';

import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        slug: 'next-15-app-router-metadata',
        title: 'Next.js 15 App Router 메타데이터 설정',
        description: '정적, 동적 메타데이터 설정',
        category: 'next.js',
        date: '2025-08-27',
        tags: ['nextjs'],
        cover: '/cover1.svg',
        readingMinutes: 7,
        content: readMd('nextjs-metadata'),
    },
];

export const getPost = ({ tag, search, sort }: { tag: string; search: string; sort?: string }) => {
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
