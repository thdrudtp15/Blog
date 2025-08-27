'use client';

import { ReactNode, useEffect, useState } from 'react';
import Markdown from './Markdown';
import styles from './Previewer.module.scss';
import { getMd } from '@/utils/getMd';

const Previewer = ({ content }: { content: string }) => {
    const [mdData, setMdData] = useState('');

    const getMdData = async () => {
        const data = await getMd(content);
        setMdData(data);
    };
    useEffect(() => {
        getMdData();
    }, [content]);

    return (
        <div className={styles.previewer}>
            <div className={styles.md_wrapper}>
                <Markdown mdData={mdData} />
            </div>
        </div>
    );
};

export default Previewer;
