'use client';
import useTheme from 'next-theme';
import styles from './ThemeToggle.module.scss';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    console.log(theme);

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
