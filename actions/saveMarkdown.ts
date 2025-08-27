'use server';
import { writeFile } from 'fs/promises';
import path from 'path';
import slugify from 'slugify';

// 게시글 마크다운 생성
export const saveMarkdown = async (
    prevState: { title: string; content: string; server: string },
    formData: FormData
) => {
    const errors = prevState;

    const filename = formData.get('filename') as string;
    const content = formData.get('content') as string;

    if (!filename || filename.trim() === '') {
        errors.title = '파일명을 작성해주세요';
    }
    if (/^[A-Za-z0-9]+$/.test(filename)) {
        errors.title = '파일 명은 숫자 또는 영문이어야 합니다.';
    }
    if (Object.values(errors).find((error) => error)) {
        console.log(errors);
        return errors;
    }

    const saveFileName = slugify(filename, { lower: true, strict: true });
    const jsFileContent = `export const _${saveFileName} = \`${content.replaceAll('`', '`')}\``;

    const filePath = path.join(process.cwd(), 'markdown', `${saveFileName}.js`);

    try {
        await writeFile(filePath, jsFileContent, 'utf-8');
    } catch (e) {
        console.log(e);
    }

    return errors;
};
