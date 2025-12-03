import { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

import Toc from '@/components/Toc';
import Banner from '@/containers/Banner';
import Mdx from '@/components/Mdx';
import Giscus from '@/components/Giscus';

import { posts, getPost } from '@/utils/getPosts';
import { formatDate } from '@/utils/formatDate';

import styles from './page.module.scss';

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const post = getPost({ slug });
    if (!post) notFound();

    return {
        title: post.title,
        description: post.description,
    };
};

export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPost({ slug });
    if (!post) notFound();

    const content = await serialize(post.content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeStringify],
            remarkPlugins: [remarkGfm],
        },
        scope: {},
    });

    return (
        <div>
            <Banner>
                <Banner.Title title={post.title} />
                <Banner.Date date={formatDate(post.date)} />
                <Banner.Tags tags={post.tags} />
            </Banner>

            <div className={styles.content_container}>
                <div className={styles.content}>
                    <div className={styles.cover}>
                        <Image src={post.cover} fill alt="게시글 커버 이미지" />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Mdx source={content} />
                    </div>
                    <Giscus />
                </div>
                <Toc source={post.content} />
            </div>
        </div>
    );
}
