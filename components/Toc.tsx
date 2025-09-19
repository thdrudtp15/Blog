'use client';

import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import styles from './Toc.module.scss';

import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

const Toc = ({ source }: { source: string }) => {
    const [toc, setToc] = useState<{ level: number; text: string; id: string }[] | null>(null);
    const [ast, setAst] = useState('');
    const [loading, setLoading] = useState(true);

    const getResult = async () => {
        const result = await remark()
            .use(remarkRehype) // Markdown AST → HTML AST
            .use(rehypeSlug) // id 자동 생성.
            .use(rehypeStringify)
            .process(source);

        setAst(result.toString());
    };

    useEffect(() => {
        if (!ast) {
            getResult();
            return;
        }
        const headings: { level: number; text: string; id: string }[] = [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(ast, 'text/html');
        doc.querySelectorAll('h1, h2, h3').forEach((h) => {
            headings.push({ level: Number(h.tagName[1]), text: h.textContent!, id: h.id });
        });
        setToc(headings);
        setLoading(false);
    }, [ast]);

    return (
        <aside className={styles.toc_container}>
            {!loading && (
                <div className={styles.toc}>
                    {toc &&
                        toc.map((content: { level: number; text: string; id: string }, index: number) => (
                            <a key={index} href={`#${content.id}`} className={styles[`heading${content.level}`]}>
                                {content.text}
                            </a>
                        ))}
                </div>
            )}
            {loading && (
                <div className={styles.loading}>
                    <AiOutlineLoading3Quarters className={styles.loading_icon} fontSize={32} />
                </div>
            )}
        </aside>
    );
};

export default Toc;
