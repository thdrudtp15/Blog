'use client';

import { useRouter } from 'next/navigation';
import styles from './Input.module.scss';

const Input = () => {
    const router = useRouter();

    return (
        <input
            className={styles.input_item}
            type="text"
            placeholder="검색 (제목/설명/태그)"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    const { value } = e.target as HTMLInputElement;
                    router.push(`/?search=${value}`);
                }
            }}
        />
    );
};

export default Input;
