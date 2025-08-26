import React from 'react';
import styles from './PostGrid.module.scss';
import PostItem from './PostItem';
import { getPost } from '@/data/posts';

type Props = {
    tag: string;
    search: string;
};

const PostGrid = ({ tag, search }: Props) => {
    const posts = getPost({ tag, search });

    return (
        <div className={styles.grid}>
            {posts.map((post) => (
                <React.Fragment key={post.slug}>
                    <PostItem post={post} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default PostGrid;
