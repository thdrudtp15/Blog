import { ReactNode } from 'react';

import styles from './Container.module.scss';

const Container = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <div>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    );
};

export default Container;
