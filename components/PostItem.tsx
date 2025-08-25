import Link from 'next/link';
import styles from './PostItem.module.scss';
import ContentWrap from './ContentWrap';
import TagItem from './TagItem';
import React from 'react';

const PostItem = () => {
    return (
        <ContentWrap>
            <header className={styles.item_header}>
                <div className={styles.image}></div>
                <div className={styles.info}>
                    <h3 className={styles.title}>서버 퍼포먼스 캐싱 가이드</h3>
                    <time className={styles.create_at}>2024.01.01</time>
                </div>
            </header>
            <p className={styles.description}>CDN 조합으로 빠르게</p>
            <ul className={styles.tags}>
                {['react', 'next'].map((item, idx) => (
                    <React.Fragment key={idx}>
                        <TagItem>#{item}</TagItem>
                    </React.Fragment>
                ))}
            </ul>
            <div className={styles.read}>
                <p className={styles.read_time}>9 min read</p>
                <Link href="/3" aria-label="읽기" className={styles.read_btn}>
                    읽기
                </Link>
            </div>
        </ContentWrap>
    );
};

export default PostItem;
