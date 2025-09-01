import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from './ThemeToggle';
import { ReactNode } from 'react';

const Header = ({ children }: { children?: ReactNode }) => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.brand} href="/" aria-label="홈">
                    <span className={styles.logo}></span>
                    <strong className={styles.name}>송경세 블로그</strong>
                </Link>
                {children}
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
