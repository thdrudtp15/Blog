'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Toc.module.scss';

const Toc = ({ mdData }: { mdData: string }) => {
    const [toc, setToc] = useState<{ level: number; text: string; id: string }[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const headings: { level: number; text: string; id: string }[] = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(mdData, 'text/html');
        doc.querySelectorAll('h1, h2, h3').forEach((h) => {
            headings.push({ level: Number(h.tagName[1]), text: h.textContent!, id: h.id });
        });
        setToc(headings);
        setLoading(false);
    }, []);

    return (
        <aside className={styles.toc_container}>
            <div className={styles.toc}>
                {!loading &&
                    toc &&
                    toc.map((content: { level: number; text: string; id: string }, index: number) => (
                        <a key={index} href={`#${content.id}`} className={styles[`heading${content.level}`]}>
                            {content.text}
                        </a>
                    ))}
                {loading && <div>로딩중</div>}
            </div>
        </aside>
    );
};

export default Toc;
