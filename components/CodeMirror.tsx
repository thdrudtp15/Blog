'use client';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';

import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';

import { keymap, lineNumbers } from '@codemirror/view';
import { EditorView } from '@codemirror/view';

import { indentWithTab } from '@codemirror/commands';

import WidthController from './WidthController';

import styles from './CodeMirror.module.scss';
import CodeMirrorToolBar from './CodeMirrorToolBar';

const CodeMirror = ({ onChange }: { onChange: (value: string) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const editorRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);
    const imageRef = useRef<HTMLInputElement | null>(null);

    const [editorContent, setEditorContent] = useState<string>('');

    useEffect(() => {
        const STO = setTimeout(() => {
            onChange(editorContent);
        }, 500);

        return () => {
            clearTimeout(STO);
        };
    }, [editorContent, onChange]);

    useEffect(() => {
        if (!editorRef.current) return;
        if (viewRef.current) return;
        const startState = EditorState.create({
            doc: '# Hello Markdown\n\n여기서 내용을 입력하세요 ✍️',
            extensions: [
                lineNumbers(),
                markdown(),
                keymap.of([indentWithTab]),
                EditorView.lineWrapping,
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        const text = update.state.doc.toString();
                        setEditorContent(text);
                    }
                }),
            ],
        });

        viewRef.current = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        return () => {
            viewRef.current?.destroy();
            viewRef.current = null;
        };
    }, []);

    return (
        <div className={styles.codemirror_wrap} ref={ref}>
            <CodeMirrorToolBar viewRef={viewRef} />
            <div ref={editorRef} className={styles.codemirror} />
            <WidthController ref={ref} />
            <input type="file" ref={imageRef} accept="*/image" style={{ display: 'none' }} />
        </div>
    );
};

export default React.memo(CodeMirror);
