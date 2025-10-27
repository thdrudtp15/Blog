import React from 'react';
import Link from 'next/link';

import Container from '@/components/Container';

import styles from './PostList.module.scss';

import PostItem from '@/components/PostItem';
import Search from '@/components/Search';

import { getPosts, getTags } from '@/utils/getPosts';

const PostList = ({ tag, search }: { tag: string; search: string }) => {
    const tags = getTags();
    const posts = getPosts({ tag, search });

    return (
        <Container>
            <Container.HeaderWrapper>
                <Container.Title title="모든 게시글" id="모든 게시글" />
            </Container.HeaderWrapper>
            <div className={styles.condition}>
                <ul className={styles.tags}>
                    <li>
                        <Link
                            className={`${styles.tag_item} ${
                                (!tag || tag === '') && styles.selected
                            }`}
                            href={'/'}
                            scroll={false}
                        >
                            All
                        </Link>
                    </li>
                    {tags.map((item: string) => (
                        <li key={item}>
                            <Link
                                className={`${styles.tag_item} ${
                                    tag === item && styles.selected
                                }`}
                                href={`/?tag=${item}`}
                                scroll={false}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Search search={search} />
            </div>
            {posts && posts.length > 0 && (
                <div className={styles.post_grid}>
                    {posts.map((post) => (
                        <React.Fragment key={post.slug}>
                            <PostItem slug={post.slug}>
                                <PostItem.Cover cover={post.cover} />
                                <PostItem.Date date={post.date} />
                                <PostItem.Title title={post.title} />
                                <PostItem.Description
                                    description={post.description}
                                />
                                <PostItem.Tags tags={post.tags} />
                            </PostItem>
                        </React.Fragment>
                    ))}
                </div>
            )}
            {!posts ||
                (posts.length === 0 && (
                    <div className={styles.no_content}>
                        게시글이 존재하지 않습니다.
                    </div>
                ))}
        </Container>
    );
};

export default PostList;
