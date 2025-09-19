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
                <Banner.Title title={'De95he Dev blog'} />
                <Banner.Description description="프론트엔드 공부 일지🐜" />
            </Banner>
            <RecentPost />
            <PostList tag={tag} search={search} />
        </main>
    );
};

export default HomePage;
