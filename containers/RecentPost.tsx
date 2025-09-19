import PostItem from '@/components/PostItem';
import Link from 'next/link';

import styles from './RecentPost.module.scss';
import Container from '@/components/Container';

import { getPosts } from '@/utils/getPosts';

const RecentPost = () => {
    const posts = getPosts({});

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
                    <PostItem slug={posts[0].slug}>
                        <PostItem.Cover cover={posts[0].cover} />
                        <PostItem.Date date={posts[0].date} />
                        <PostItem.Title title={posts[0].title} />
                        <PostItem.Description description={posts[0].description} />
                        <PostItem.Tags tags={posts[0].tags} />
                    </PostItem>
                </div>

                <div className={styles.grid}>
                    {posts.length > 1 && (
                        <PostItem slug={posts[1].slug}>
                            <PostItem.Cover cover={posts[1].cover} />
                            <PostItem.Date date={posts[1].date} />
                            <PostItem.Title title={posts[1].title} />
                        </PostItem>
                    )}
                    {posts.length > 2 && (
                        <PostItem slug={posts[2].slug}>
                            <PostItem.Cover cover={posts[2].cover} />
                            <PostItem.Date date={posts[2].date} />
                            <PostItem.Title title={posts[2].title} />
                        </PostItem>
                    )}
                </div>
            </main>
        </Container>
    );
};

export default RecentPost;
