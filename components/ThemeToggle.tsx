'use client';
import useTheme from 'next-theme';
import styles from './ThemeToggle.module.scss';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    // 테마를 조작하는 컴포넌트입니다.
    // 다크, 라이트 모드를 지원하며, 테마 색상 설정은 app/globals.scss 에서 가능합니다.

    return (
        <button
            aria-label="테마"
            type="button"
            className={styles.toggle}
            onClick={() => {
                if (theme === 'light') setTheme('dark');
                else setTheme('light');
            }}
        >
            {theme === 'light' && (
                <>
                    <BsFillSunFill fontSize={'1rem'} color="orange" />
                    <p className={styles.text}>Light</p>
                </>
            )}
            {theme === 'dark' && (
                <>
                    <BsFillMoonStarsFill fontSize={'1rem'} color="orange" />
                    <p className={styles.text}>Dark</p>
                </>
            )}
        </button>
    );
};
export default ThemeToggle;
