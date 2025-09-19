'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import styles from './Mdx.module.scss';

const Mdx = ({ source }: { source: MDXRemoteSerializeResult }) => {
    return (
        <div className={styles.markdown}>
            <MDXRemote {...source} />
        </div>
    );
};

export default Mdx;
