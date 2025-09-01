import React from 'react';

import TagItem from './TagItem';
import SelectBox from './SelectBox';
import Input from './Input';

import { getTags } from '@/data/posts';

import styles from './SearchConsole.module.scss';

const SearchConsole = ({ selectedTag }: { selectedTag: string }) => {
    const tags = getTags();

    return (
        <div className={styles.search}>
            <div className={styles.input}>
                <Input />
            </div>
            <ul className={styles.tags}>
                <TagItem selected={!selectedTag} tag="all">
                    All
                </TagItem>
                {/* {tags.map((tag, index) => (
                    <React.Fragment key={index}>
                        <TagItem selected={selectedTag === tag} tag={tag}>
                            {tag}
                        </TagItem>
                    </React.Fragment>
                ))} */}
            </ul>
        </div>
    );
};

export default SearchConsole;
