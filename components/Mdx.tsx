'use client';
import { MDXRemote } from 'next-mdx-remote';

import styles from './Mdx.module.scss';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const Mdx = ({ source }: { source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>> }) => {
    return (
        <div className={styles.markdown}>
            <MDXRemote {...source} />
        </div>
    );
};

export default Mdx;
