import PostGrid from '@/components/PostGrid';

import styles from './page.module.scss';
import SearchConsole from '@/components/SearchConsole';

type Props = {
    searchParams: Promise<{ tag: string; search: string; sort: string }>;
};

const HomePage = async ({ searchParams }: Props) => {
    const { tag, search, sort } = await searchParams;

    return (
        <main className={styles.main}>
            <SearchConsole selectedTag={tag} />
            <PostGrid tag={tag} search={search} />
        </main>
    );
};

export default HomePage;
