'use client';
import { useActionState, useState } from 'react';

import CodeMirror from '@/components/CodeMirror';
import styles from './page.module.scss';
import Previewer from '@/components/Previewer';
import { saveMarkdown } from '@/actions/saveMarkdown';

const HomePage = () => {
    const [content, setContent] = useState('');
    const [state, action, pending] = useActionState(saveMarkdown, { title: '', content: '', server: '' });

    return (
        <form action={action}>
            <div className={styles.setting}>
                <input name="filename" placeholder="파일명(영문)" />
                <button>작성</button>
            </div>
            <div className={styles.new}>
                <CodeMirror onChange={setContent} />
                <Previewer content={content} />
                <input value={content} type="hidden" name="content" />
            </div>
        </form>
    );
};

export default HomePage;
