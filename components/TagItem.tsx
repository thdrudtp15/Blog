import { ReactNode } from 'react';
import styles from './TagItem.module.scss';
import Link from 'next/link';

const TagItem = ({ children, selected }: { children: ReactNode; selected?: string }) => {
    return (
        <li style={{ listStyle: 'none' }}>
            <Link
                className={`${styles.tag_item} ${selected === children ? styles.selected : ''}`}
                href={`/?tag=${children}`}
            >
                #{children}
            </Link>
        </li>
    );
};

export default TagItem;
