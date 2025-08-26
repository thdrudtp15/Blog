'use server';

import fs from 'fs';
import path from 'path';
import type { Post } from '@/types/post';

export async function getPosts(): Promise<Post[]> {
    const markdownDir = path.join(process.cwd(), 'markdown/post');
    const files = fs.readdirSync(markdownDir);

    const posts: Post[] = files.map((file) => {
        const slug = file.replace(/\.md$/, '');
        const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');

        return {
            slug,
            title: slug, // 필요하면 frontmatter 파싱해서 제목 넣기
            description: '',
            date: '2025-01-01',
            tags: [],
            cover: '/cover.svg',
            readingMinutes: Math.ceil(content.length / 200),
            content,
        };
    });

    return posts;
}
