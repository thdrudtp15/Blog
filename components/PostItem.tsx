import Link from 'next/link';
import styles from './PostItem.module.scss';

const PostItem = () => {
    return (
        <article className={styles.item}>
            <header className={styles.item_header}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <h3 className={styles.title}>서버 퍼포먼스 캐싱 가이드</h3>
                    <time className={styles.create_at}>2024.01.01</time>
                </div>
            </header>
            <p className={styles.description}>CDN 조합으로 빠르게</p>
            <div className={styles.tags}>
                {['react', 'next'].map((item, idx) => (
                    <span key={idx} className={styles.tag_item}>
                        #{item}
                    </span>
                ))}
            </div>
            <div className={styles.read}>
                <p className={styles.read_time}>9 min read</p>
                <Link href="/" aria-label="읽기" className={styles.read_btn}>
                    Read
                </Link>
            </div>
        </article>
    );
};

export default PostItem;
