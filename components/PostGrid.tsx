import React from 'react';
import styles from './PostGrid.module.scss';
import PostItem from './PostItem';
import { posts as postData } from '@/data/posts';

const PostGrid = () => {
    const posts = postData;

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
