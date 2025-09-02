import styles from './TagItem.module.scss';
const TagItem = ({ tag }: { tag: string }) => {
    return <div className={styles.item}>#{tag}</div>;
};

export default TagItem;
