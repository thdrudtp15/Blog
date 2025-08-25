import { ReactNode } from 'react';
import styles from './ContentWrap.module.scss';

const ContentWrap = ({ children }: { children: ReactNode }) => {
    return <article className={styles.content_wrap}>{children}</article>;
};

export default ContentWrap;
