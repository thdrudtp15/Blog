import React from 'react';
import styles from './PostGrid.module.scss';
import PostItem from './PostItem';
import { searchPost } from '@/data/posts';

type Props = {
    tag: string;
    search: string;
};

const PostGrid = ({ tag, search }: Props) => {
    const posts = searchPost({ tag, search });

    if (!posts || posts.length === 0) {
        return <div className={styles.no_content}>게시글이 존재하지 않습니다.</div>;
    }

    return (
        <div className={styles.grid}>
            {posts.length > 0 &&
                posts.map((post) => (
                    <React.Fragment key={post.slug}>
                        <PostItem post={post} />
                    </React.Fragment>
                ))}
        </div>
    );
};

export default PostGrid;
