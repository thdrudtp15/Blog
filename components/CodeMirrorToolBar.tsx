'use client';
import { RefObject, useRef } from 'react';
import { ChangeEvent } from 'react';
import { EditorView } from '@codemirror/view';
import styles from './CodeMirrorToolBar.module.scss';
import { saveImage } from '@/actions/saveImage';

const insert = (view: EditorView, content: string) => {
    const state = view.state;
    const selection = state.selection.main;
    const line = state.doc.lineAt(selection.from);
    const lineText = line.text;
    const insertText = lineText.trim() !== '' ? `\n${content}` : `${content}`;

    view.dispatch({
        changes: { from: line.from + lineText.length, to: line.to, insert: insertText },
        selection: { anchor: line.from + insertText.length },
    });
};

const modify = () => {};

const CodeMirrorToolBar = ({ viewRef }: { viewRef: RefObject<EditorView | null> }) => {
    const imageRef = useRef<HTMLInputElement | null>(null);

    const insertImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        const view = viewRef.current;
        if (!view || !files) return;
        const filepath = await saveImage(files[0]);
        insert(view, `![이미지](${filepath})`);
    };

    return (
        <div className={styles.wrapper}>
            <button onClick={() => imageRef.current?.click()}>버튼</button>
            <input type="file" ref={imageRef} onChange={(e) => insertImage(e)} />
        </div>
    );
};

export default CodeMirrorToolBar;
