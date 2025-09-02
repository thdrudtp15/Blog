import styles from './page.module.scss';
import RecentPost from '@/containers/RecentPost';
import PostList from '@/containers/PostList';
import Banner from '@/containers/Banner';

type Props = {
    searchParams: Promise<{ tag: string; search: string }>;
};

const HomePage = async ({ searchParams }: Props) => {
    const { tag, search } = await searchParams;

    return (
        <main className={styles.main}>
            <Banner>
                <Banner.Title title={'타이틀'} />
                <Banner.Description description="최적화를 좋아하는 개발자 송경세의 블로그입니다." />
            </Banner>
            <RecentPost />
            <PostList tag={tag} search={search} />
        </main>
    );
};

export default HomePage;
