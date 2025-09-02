'use client';
import useOnClickOutside from '@/hooks/useClickOutside';
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';
import { KeyboardEvent, useRef, useState } from 'react';

import styles from './Search.module.scss';

const Search = ({ search }: { search: string }) => {
    const [enable, setEnable] = useState<boolean>(false);
    const ref = useRef(null);
    const router = useRouter();

    useOnClickOutside({ ref, onClickOutside: () => setEnable(false) });

    const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        const params = new URLSearchParams(window.location.search);
        params.set('search', value);
        router.push(`/?${params}`, { scroll: false });
    };

    return (
        <div ref={ref} className={`${styles.search} ${enable ? styles.enable : ''}`}>
            <button onClick={() => setEnable(true)}>
                <BsSearch color="var(--foreground)" fontSize={'1.125rem'} />
            </button>
            <input
                onKeyDown={(e) => {
                    if (e.key === 'Enter') onSearch(e);
                }}
                type="text"
                placeholder="검색어를 입력해주세요"
                defaultValue={search}
            />
        </div>
    );
};

export default Search;
