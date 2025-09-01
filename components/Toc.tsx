'use client';

import { useEffect } from 'react';

import styles from './Toc.module.scss';

const Toc = () => {
    return (
        <aside className={styles.toc_container}>
            <div style={{ position: 'relative' }}>
                <div className={styles.toc}>TOC</div>
            </div>
        </aside>
    );
};

export default Toc;
