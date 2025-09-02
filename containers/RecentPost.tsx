import PostItem from '@/components/PostItem';

import styles from './RecentPost.module.scss';
import { posts } from '@/data/posts';
import Container from '@/components/Container';

const RecentPost = () => {
    const post = posts[posts.length - 1];

    return (
        <Container title="최신 게시글">
            <main className={styles.content_container}>
                <div className={styles.featured_post}>
                    <PostItem post={post}>
                        <PostItem.Cover cover={post.cover} />
                        <PostItem.Date date={post.date} />
                        <PostItem.Title title={post.title} />
                        <PostItem.Description description={post.description} />
                        <PostItem.Tags tags={post.tags} />
                    </PostItem>
                </div>
                {/* <div className={styles.grid}>
                    <PostItem post={post}>
                        <PostItem.Cover cover={post.cover} />
                        <PostItem.Date date={post.date} />
                        <PostItem.Title title={post.title} />
                    </PostItem>
                    <PostItem post={post}>
                        <PostItem.Cover cover={post.cover} />
                        <PostItem.Date date={post.date} />
                        <PostItem.Title title={post.title} />
                    </PostItem>
                </div> */}
            </main>
        </Container>
    );
};

export default RecentPost;
