'use client';

import { MouseEvent, ReactNode } from 'react';
import styles from './TagItem.module.scss';

import { useRouter } from 'next/navigation';

const TagItem = ({ children, selected, tag }: { children: ReactNode; selected?: boolean; tag?: string }) => {
    const href = tag && tag !== 'all' ? `/?tag=${tag}` : '/';
    const route = useRouter();

    const onRouting = (e: MouseEvent) => {
        if (tag) {
            e.preventDefault();
            route.push(href);
        }
    };

    return (
        <li style={{ listStyle: 'none' }}>
            <button
                type="button"
                onClick={(e) => onRouting(e)}
                className={`${styles.tag_item} ${selected ? styles.selected : ''} ${tag ? styles.is_hover : null}`}
            >
                #{children}
            </button>
        </li>
    );
};

export default TagItem;
