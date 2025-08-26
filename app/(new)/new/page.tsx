'use client';
import CodeMirror from '@/components/CodeMirror';
import styles from './page.module.scss';
import Previewer from '@/components/Previewer';
import { useEffect, useState } from 'react';
import { getMd } from '@/utils/getMd';

const HomePage = () => {
    const [content, setContent] = useState('');

    console.log(content);

    return (
        <div className={styles.new}>
            <CodeMirror onChange={setContent} />
            <Previewer content={content} />
        </div>
    );
};

export default HomePage;
