import { readMd } from '@/utils/readMd';
import metadataCover from '@/public/images/metadata_cover.png';

import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        slug: 'next-15-app-router-metadata',
        title: 'Next.js 15 App Router 메타데이터 설정',
        description: '정적, 동적 메타데이터 설정 방법과 중요성에 대한 내용을 담고 있습니다.',
        category: 'react',
        date: '2025년 8월 27일',
        tags: ['nextjs'],
        cover: metadataCover,
        content: readMd('nextjs-metadata'),
    },
    // {
    //     slug: 'blog-experience',
    //     title: '개인 블로그를 만들며..',
    //     description: '해당 블로그를 만들며 느낀점',
    //     category: null,
    //     date: '2025-08-27',
    //     tags: ['project'],
    //     cover: dummyImg,
    //     content: readMd('blog-exp'),
    // },
];

export const getPost = ({ tag, search }: { tag: string; search: string }) => {
    let arr = [...posts];
    if (tag) {
        // 태그 필터링
        arr = arr.filter((post) => post.tags.includes(tag));
    }
    if (search) {
        // 검색어 필터링
        arr = arr.filter(
            (post) => post.title.includes(search) || post.description.includes(search) || post.tags.includes(search)
        );
    }

    return arr;
};

// 게시글 인덱스가 필요한 경우 사용합니다.
// 인덱스를 일일히 설정할 필요가 없습니다.
export const postsWithIndex = posts.map((post, index) => ({ ...post, idx: index }));

// 현재 모든 게시글의 태그를 반환하는 함수입니다.
export const getTags = () => {
    const tagsArr = posts.map((post) => post.tags);
    const set = new Set(tagsArr.flatMap((tag) => tag));
    return Array.from(set);
};
