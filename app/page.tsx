import PostGrid from '@/components/PostGrid';

import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <PostGrid />
        </main>
    );
}
