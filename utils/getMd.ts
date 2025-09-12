import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

export const getMd = async (content: string) => {
    const result = await remark()
        .use(remarkGfm) // GitHub 스타일 Markdown
        .use(remarkRehype) // Markdown AST → HTML AST
        .use(rehypeSlug) // id 자동 생성.
        .use(rehypeHighlight) // highlight.js 코드 하이라이팅
        .use(rehypeStringify) // HTML 문자열로 변환
        .process(content);

    return result.toString();
};
