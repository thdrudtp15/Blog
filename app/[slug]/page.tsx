import { notFound } from 'next/navigation';
import Link from 'next/link';

import Markdown from '../../components/Markdown';
import { posts } from '@/data/posts';
import ContentWrap from '@/components/ContentWrap';
import React from 'react';
import TagItem from '@/components/TagItem';

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = posts[0];
    if (!post) return notFound();
    return (
        <ContentWrap>
            <div
                style={{
                    padding: 0,
                    borderBottom: '1px solid var(--border)',
                }}
            >
                <div style={{ padding: '24px 24px 8px' }}>
                    <h1 style={{ fontSize: 28, lineHeight: 1.2 }}>{post.title}</h1>
                    <p style={{ color: 'var(--muted)', marginTop: 6 }}>
                        {new Date(post.date).toLocaleDateString()} • {post.readingMinutes} min read
                    </p>
                    <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                        {post.tags.map((item, index) => (
                            <React.Fragment key={index}>
                                <TagItem>#{item}</TagItem>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ padding: 24 }}>
                <Markdown content={post.content} />
            </div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px 24px' }}>
                <Link href="/" className="btn">
                    ← 목록으로
                </Link>
                <Link href="/" className="btn">
                    다음 글 탐색 →
                </Link>
            </nav>
        </ContentWrap>
    );
}
