import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.brand_container}>
                    <Link className={styles.brand} href="/" aria-label="홈">
                        <strong className={styles.name}>HOME</strong>
                    </Link>
                    <Link
                        className={styles.brand}
                        href="/about"
                        aria-label="소개"
                    >
                        <strong className={styles.name}>ABOUT</strong>
                    </Link>
                </div>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
