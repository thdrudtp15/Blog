import Link from 'next/link';
import styles from './PostItem.module.scss';
import ContentWrap from './ContentWrap';
import TagItem from './TagItem';
import React from 'react';

import type { Post } from '@/types/post';
import { getIcon } from '@/utils/getIcon';

const PostItem = ({ post }: { post: Post }) => {
    return (
        <ContentWrap>
            <header className={styles.item_header}>
                <div className={styles.image}>{getIcon(post.category)}</div>
                <div className={styles.info}>
                    <div className={styles.title_wrap}>
                        <h3 className={styles.title}>{post.title}</h3>
                    </div>
                    <time className={styles.create_at}>{post.date}</time>
                </div>
            </header>
            <p className={styles.description}>{post.description}</p>
            <ul className={styles.tags}>
                {post.tags.map((tag: string, idx: number) => (
                    <React.Fragment key={idx}>
                        <TagItem>{tag}</TagItem>
                    </React.Fragment>
                ))}
            </ul>
            <div className={styles.read}>
                <p className={styles.read_time}>{post.readingMinutes} min read</p>
                <Link href={`/${post.slug}`} aria-label="읽기" className={styles.read_btn}>
                    읽기
                </Link>
            </div>
        </ContentWrap>
    );
};

export default PostItem;
