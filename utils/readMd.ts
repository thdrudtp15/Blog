import fs from 'fs';
import path from 'path';

const mdDir = path.join(process.cwd(), 'markdown');

/**
 *
 * @param filePath : 마크다운 파일의 경로를 삽입합니다.
 * @returns 문자열로 변환된 마크다운 파일의 콘텐츠츠
 */
export const readMd = (filePath: string): string => {
    const fullPath = path.join(mdDir, `${filePath}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    return fileContent;
};
