'use client';

import { useEffect, useState } from 'react';
import Markdown from './Markdown';
import styles from './Previewer.module.scss';
import { getMd } from '@/utils/getMd';

const Previewer = ({ content }: { content: string }) => {
    const [mdData, setMdData] = useState('');

    console.log(mdData);

    const getMdData = async () => {
        const data = await getMd(content);
        setMdData(data);
    };
    useEffect(() => {
        getMdData();
    }, [content]);

    return (
        <div className={styles.previewer}>
            <Markdown mdData={mdData} />
        </div>
    );
};

export default Previewer;
