import { ReactNode } from 'react';
import styles from './TagItem.module.scss';

const TagItem = ({ children }: { children: ReactNode }) => {
    return <li className={styles.tag_item}>{children}</li>;
};

export default TagItem;
