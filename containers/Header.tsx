import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.brand} href="/" aria-label="홈">
                    <strong className={styles.name}>De95he</strong>
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
