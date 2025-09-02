import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <span>© {new Date().getFullYear()} Tech Blog</span>
            </div>
        </footer>
    );
};

export default Footer;
