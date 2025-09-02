import Link from 'next/link';
import styles from './Header.module.scss';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Link className={styles.brand} href="/" aria-label="홈">
                    {/*헤더 로고를 설정합니다. */}
                    {/* <span className={styles.logo}></span> */}
                    <strong className={styles.name}>De35he</strong>
                </Link>
                {/* 테마 설정 토글 (다크모드, 라이트 모드 */}
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
