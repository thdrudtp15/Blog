'use client';
import React from 'react';
import { RefObject, useEffect, useRef } from 'react';
import styles from './WidthController.module.scss';

const WidthController = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
    const controlRef = useRef<boolean>(false);

    const onMouseUp = () => {
        controlRef.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!controlRef.current || !ref.current) return;
        const { clientX } = e;

        if (clientX > 320 && clientX < 620) {
            ref.current.style.width = `${clientX}px`;
        }
    };

    useEffect(() => {
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <div className={styles.controller} onMouseDown={() => (controlRef.current = true)}></div>;
};

export default React.memo(WidthController);
