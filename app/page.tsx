import PostGrid from '@/components/PostGrid';

import styles from './page.module.scss';
import Search from '@/components/Search';

type Props = {
    searchParams: Promise<{ tag: string; search: string }>;
};

const HomePage = async ({ searchParams }: Props) => {
    const { tag, search } = await searchParams;

    return (
        <main className={styles.main}>
            <Search tag={tag} />
            <PostGrid tag={tag} search={search} />
        </main>
    );
};

export default HomePage;
