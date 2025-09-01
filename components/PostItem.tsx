import styles from './PostItem.module.scss';
import TagItem from './TagItem';
import React from 'react';
import type { Post } from '@/types/post';
import { getIcon } from '@/utils/getIcon';
import Link from 'next/link';

const PostItem = ({ post }: { post: Post }) => {
    return (
        <Link href={`/${post.slug}`} className={styles.item}>
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
            <div className={styles.read}>
                <ul className={styles.tags}>
                    {post.tags.map((tag: string, idx: number) => (
                        <React.Fragment key={idx}>
                            <TagItem>{tag}</TagItem>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </Link>
    );
};

export default PostItem;
