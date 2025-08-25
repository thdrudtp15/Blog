import styles from './PostGrid.module.scss';
import PostItem from './PostItem';

const PostGrid = () => {
    return (
        <div className={styles.grid}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
};

export default PostGrid;
