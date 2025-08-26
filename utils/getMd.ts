import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrism from 'rehype-prism-plus';

export const getMd = async (content: string) => {
    const result = await remark()
        .use(remarkGfm) // GitHub 스타일 Markdown
        .use(remarkRehype) // Markdown AST → HTML AST
        .use(rehypePrism) // PrismJS 하이라이팅
        .use(rehypeStringify) // HTML 문자열로 변환
        .process(content);

    return result.toString();
};
