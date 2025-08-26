'use client';
import { useActionState, useState } from 'react';

import CodeMirror from '@/components/CodeMirror';
import styles from './page.module.scss';
import Previewer from '@/components/Previewer';

const HomePage = () => {
    const [content, setContent] = useState('');

    return (
        <form>
            <div className={styles.new}>
                <CodeMirror onChange={setContent} />
                <Previewer content={content} />
            </div>
        </form>
    );
};

export default HomePage;
