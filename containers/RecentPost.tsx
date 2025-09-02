import PostItem from '@/components/PostItem';
import Link from 'next/link';

import { FaExternalLinkAlt } from 'react-icons/fa';

import styles from './RecentPost.module.scss';
import { posts } from '@/data/posts';
import Container from '@/components/Container';

const RecentPost = () => {
    return (
        <Container>
            <Container.HeaderWrapper>
                <Container.Title title="최신 게시글" />
                <Container.Cta>
                    <Link className={styles.cta} href="/#모든 게시글">
                        View All
                    </Link>
                </Container.Cta>
            </Container.HeaderWrapper>
            <main className={styles.content_container}>
                <div className={styles.featured_post}>
                    <PostItem post={posts[posts.length - 1]}>
                        <PostItem.Cover cover={posts[posts.length - 1].cover} />
                        <PostItem.Date date={posts[posts.length - 1].date} />
                        <PostItem.Title title={posts[posts.length - 1].title} />
                        <PostItem.Description description={posts[posts.length - 1].description} />
                        <PostItem.Tags tags={posts[posts.length - 1].tags} />
                    </PostItem>
                </div>
                {posts.length >= 3 && (
                    <div className={styles.grid}>
                        <PostItem post={posts[posts.length - 2]}>
                            <PostItem.Cover cover={posts[posts.length - 2].cover} />
                            <PostItem.Date date={posts[posts.length - 2].date} />
                            <PostItem.Title title={posts[posts.length - 2].title} />
                        </PostItem>
                        <PostItem post={posts[posts.length - 3]}>
                            <PostItem.Cover cover={posts[posts.length - 3].cover} />
                            <PostItem.Date date={posts[posts.length - 3].date} />
                            <PostItem.Title title={posts[posts.length - 3].title} />
                        </PostItem>
                    </div>
                )}
            </main>
        </Container>
    );
};

export default RecentPost;
