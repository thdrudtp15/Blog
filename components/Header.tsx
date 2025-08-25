import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.brand} href="/" aria-label="홈">
                    <span className={styles.logo}></span>
                    <strong className={styles.name}>Blog</strong>
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
