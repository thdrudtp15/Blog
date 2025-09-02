import Link from 'next/link';
import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

import TagItem from '@/compositions/TagItem';

import type { Post } from '@/types/post';

import styles from './PostItem.module.scss';

const PostItem = ({ post, children }: { post: Post; children: ReactNode }) => {
    return (
        <Link href={`/${post.slug}`}>
            <article className={styles.container}>{children}</article>
        </Link>
    );
};

export default PostItem;

const Title = ({ title }: { title: string }) => {
    return <h3 className={styles.title}>{title}</h3>;
};

const Date = ({ date }: { date: string }) => {
    return <time className={styles.date}>{date}</time>;
};

const Cover = ({ cover }: { cover: StaticImageData }) => {
    return (
        <div className={styles.cover}>
            <Image src={cover} alt="커버 이미지" fill />
        </div>
    );
};

const Description = ({ description }: { description: string }) => {
    return <p className={styles.description}>{description}</p>;
};

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <div className={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
                <React.Fragment key={tag}>
                    <TagItem tag={tag} />
                </React.Fragment>
            ))}
        </div>
    );
};

PostItem.Date = Date;
PostItem.Cover = Cover;
PostItem.Title = Title;
PostItem.Description = Description;
PostItem.Tags = Tags;
