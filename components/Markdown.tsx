import { renderMd } from '@/utils/renderMd';
import React from 'react';

import styles from './Markdown.module.scss';

const Markdown = async ({ content }: { content: string }) => {
    const data = await renderMd(content);
    return <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />;
};

export default Markdown;
