'use client';
import CodeMirror from '@/components/CodeMirror';
import styles from './page.module.scss';
import Previewer from '@/components/Previewer';

const HomePage = () => {
    return (
        <div className={styles.new}>
            <CodeMirror />
            <Previewer />
        </div>
    );
};

export default HomePage;
