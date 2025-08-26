'use client';
import { useRef } from 'react';
import styles from './CodeMirror.module.scss';
import WidthController from './WidthController';

const CodeMirror = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div className={styles.codemirror} ref={ref}>
            <WidthController ref={ref} />
        </div>
    );
};

export default CodeMirror;
