import { Metadata } from 'next';
import React, { cache } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { postsWithIndex } from '@/data/posts';

import Markdown from '@/components/Markdown';
import Giscus from '@/components/Giscus';

import { getMd } from '@/utils/getMd';

import styles from './page.module.scss';
import Toc from '@/components/Toc';
import Banner from '@/containers/Banner';

const getPost = cache((slug: string) => {
    const post = postsWithIndex.find((post) => post.slug === slug);
    if (!post) notFound();

    const nextPost = postsWithIndex[post.idx + 1];
    return {
        post,
        nextPost,
    };
});

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
    const { slug } = await params;
    const { post } = getPost(slug);
    if (!post) notFound();

    return {
        title: post.title,
        description: post.description,
    };
};

export async function generateStaticParams() {
    return postsWithIndex.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { post, nextPost } = getPost(slug);

    const mdData = await getMd(post.content);

    return (
        <div>
            <Banner>
                <Banner.Title title={post.title} />
                <Banner.Date date={post.date} />
                <Banner.Tags tags={post.tags} />
            </Banner>

            <div className={styles.content_container}>
                <div className={styles.content}>
                    <div className={styles.cover}>
                        <Image src={post.cover} fill alt="게시글 커버 이미지" />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Markdown mdData={mdData} />
                    </div>
                    <nav></nav>
                    <Giscus />
                </div>
                <Toc mdData={mdData} />
            </div>
        </div>
    );
}
