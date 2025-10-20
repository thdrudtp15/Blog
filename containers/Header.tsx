import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../components/ThemeToggle';

import { LINKS } from '@/constants/links';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.brand} href="/" aria-label="홈">
                    <strong className={styles.name}>De95he</strong>
                </Link>
                <nav className="">
                    <ul>
                        {LINKS.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
