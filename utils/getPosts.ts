import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

import type { Post } from '@/types/post';

const loadPosts = (): Post[] => {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename, idx) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContents);

        return {
            idx: idx,
            slug: filename.replace(/\.mdx$/, ''),
            title: data.title,
            description: data.description,
            date: data.date,
            tags: data.tags || [],
            cover: data.cover || '',
            content: content,
        };
    });
    return posts;
};

export const posts = loadPosts();

export const getPosts = ({ tag, search }: { tag?: string; search?: string }) => {
    let newPosts = [...posts];
    if (tag) {
        // 태그 필터링
        newPosts = newPosts.filter((post) => post.tags.includes(tag));
    }
    if (search) {
        // 검색어 필터링
        newPosts = newPosts.filter(
            (post) => post.title.includes(search) || post.description.includes(search) || post.tags.includes(search)
        );
    }
    return newPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPost = cache(({ slug }: { slug: string }) => {
    return posts.find((post) => post.slug === slug);
});

export const getTags = () => {
    const tagsArr = posts.map((post) => post.tags);
    const set = new Set(tagsArr.flatMap((tag) => tag));
    return Array.from(set);
};
