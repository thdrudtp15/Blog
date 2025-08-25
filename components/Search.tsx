import React from 'react';

import ContentWrap from './ContentWrap';
import styles from './Search.module.scss';
import TagItem from './TagItem';

const Search = () => {
    return (
        <ContentWrap>
            <div className={styles.input}>
                <input className={styles.input_item} type="text" placeholder="검색 (제목/설명/태그)" />
                <select
                    aria-label="정렬"
                    style={{
                        height: 40,
                        borderRadius: 12,
                        border: '1px solid var(--border)',
                        background: 'transparent',
                        color: 'var(--foreground)',
                        padding: '0 10px',
                    }}
                >
                    <option value="new">최신순</option>
                    <option value="old">오래된순</option>
                </select>
            </div>
            <ul className={styles.tags}>
                {['react', 'next', 'js'].map((item, index) => (
                    <React.Fragment key={index}>
                        <TagItem>#{item}</TagItem>
                    </React.Fragment>
                ))}
            </ul>
        </ContentWrap>
    );
};

export default Search;
