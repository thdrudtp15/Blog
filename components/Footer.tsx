import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <span>© {new Date().getFullYear()} Tech Blog</span>
                <span>Built with Next.js • Styled with CSS vars</span>
            </div>
        </footer>
    );
};

export default Footer;
