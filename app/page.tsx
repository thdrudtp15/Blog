import PostGrid from '@/components/PostGrid';

import styles from './page.module.scss';
import Search from '@/components/Search';

export default function Home() {
    return (
        <main className={styles.main}>
            <Search />
            <PostGrid />
        </main>
    );
}
