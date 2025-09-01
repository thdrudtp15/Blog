'use client';

import { useRouter } from 'next/navigation';

import styles from './SelectBox.module.scss';

const SelectBox = () => {
    const router = useRouter();

    return (
        <select className={styles.select} aria-label="정렬" onChange={(e) => router.push(`/?sort=${e.target.value}`)}>
            <option value="new">최신순</option>
            <option value="old">오래된순</option>
        </select>
    );
};

export default SelectBox;
