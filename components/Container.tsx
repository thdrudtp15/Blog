import { ReactNode } from 'react';

import styles from './Container.module.scss';
import Link from 'next/link';

const Container = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>;
};

export default Container;

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
    return <div className={styles.container_header}>{children}</div>;
};

const Title = ({ title, id }: { title: string; id?: string }) => {
    return (
        <h2 className={styles.title} id={id}>
            {title}
        </h2>
    );
};

const Cta = ({ children }: { children: ReactNode }) => {
    return <span>{children}</span>;
};

Container.HeaderWrapper = HeaderWrapper;
Container.Title = Title;
Container.Cta = Cta;
