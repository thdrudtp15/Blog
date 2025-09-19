'use client';
import React from 'react';

import styles from './Markdown.module.scss';

const Markdown = ({ mdData }: { mdData: string }) => {
    return <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: mdData }} />;
};

export default Markdown;
